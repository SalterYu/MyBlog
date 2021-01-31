---
title: websocket原理
date: 2019年12月25日
---

## 何谓websocket
简而言之就是实现了服务器和客户端全双工通信，服务器可以直接推送数据给客户端，而客户端也可以直接发送数据个服务器。
在http请求中，一个request 对应一个response，而且这个response是被动的，不能主动发起。而websocket则解决了这个问题。
具体其他的原理不赘述，可以查阅
<a href="https://juejin.im/post/5b1a7189e51d45068b496cf0">RFC6455 Websocket协议(翻译版)</a>

<a href="https://tools.ietf.org/html/rfc6455">RFC6455 Websocket协议(原版)</a>

## 从简单的tcp连接开始
先用node起一个简单的server端和client端，建立一个tcp连接

server代码
```vue
const net = require('net')

const server = net.createServer()

server.on('connection', sock => {

  sock.setEncoding('utf8');

  sock.on('error', function(err){
    console.log('socket error - ', err);
  });

  sock.on('data', data => {
    console.log('data', data)
  })
})


server.listen(8080, () => {
  console.log('start on 8080')
})

```

client代码
```vue
const net = require('net')

const client = net.connect({
  port: 8080
}, () => {
  console.log('server connected')
  client.setEncoding('utf8');
  client.write('Hello Echo Server\r\n');
})

```

net模块是一个node的网络通信小工具，包含了创建服务器/客户端的方法。connect成功后会发送hello Echo Server,
并且服务器会监听到事件（此处是**data**事件）。

## 升级为websocket

浏览器的WebSocket类已经做好的很多封装，如：握手功能，加密功能（根据 websocket protocol来制定的一套规则），等其他功能。下面具体讲一讲这两个功能。
因此new一个WebSocket类的时候就完成了握手功能。

### 模拟握手功能。

先上代码
```vue
function startHandShake(cb) {
  let str, i, key, headers
  // 创建一个16字节长度的空缓冲区
  key = Buffer.alloc(16)
  // 用一个随机数进行填满
  for (i = 0; i < 16; i++) {
    key[i] = Math.floor(Math.random() * 256)
  }
  // 用base64加密
  key = key.toString('base64')
  // 设置请求头
  headers = {
    Host: '127.0.0.1',
    Upgrade: 'websocket',
    Connection: 'Upgrade',
    'Sec-WebSocket-Key': key,
    'Sec-WebSocket-Version': '13'
  }

  headers['Sec-WebSocket-Protocol'] = 'chat'

  str = buildRequest('GET ' + '/' + ' HTTP/1.1', headers)
  console.log(str)
  // 开始握手
  client.write(str, cb)
}

// 创建request请求参数，把一个对象变成一行一个条件
function buildRequest(requestLine, headers) {
  let headerString = requestLine + '\r\n',
    headerName

  for (headerName in headers) {
    headerString += headerName + ': ' + headers[headerName] + '\r\n'
  }

  return headerString + '\r\n'
}

```
上述代码根据websocket协议制定了一套握手规则，主要是生成`Sec-Websocket-Key`,而这个Key是由一套规定的协议制成，
将16个随机字节的缓冲区转为base64生成的字符串作为这个参数的值。并设置`Upgrade``为websocket`, Connection为Upgrade
来告知服务器需要升级。而服务器根据Sec-Websocket-Key再结合一段规定的`GUID:'258EAFA5-E914-47DA-95CA-C5AB0DC85B11'`
进行`sha1`加密，返回给客户端，并告知客户端连接成功。且只需要一次握手，之后就可以通过on监听事件来做各种处理，通过send对
进行事件发送。

服务代码：
```vue
const GUID = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11'
const key = headers['sec-websocket-key']
const hash = crypto.createHash('sha1')
hash.update(`${key}${GUID}`)
const result = hash.digest('base64')
const header = `HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-Websocket-Accept: ${result}\r\n\r\n` // 生成供前端校验用的请求头
socket.write(header)
```

这个时候就可以进行对话了，但有一个问题，数据都是被加密的，需要做一些处理。

#### 数据的解密：

在解密之前先说一下websocket协议的基础帧，这也在<a href="https://juejin.im/post/5c32f906f265da6136229fac#heading-3">基础帧</a>有说。
说的挺详细。
而我们这只做了当Masking-key 被设置为1 的情况。想要看详细的解密，可以去看nodejs-websocket源码
传送门: https://github.com/sitegui/nodejs-websocket/blob/master/Connection.js, 第496行

借用了官方的模型
```vue
      0                   1                   2                   3
      0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
     +-+-+-+-+-------+-+-------------+-------------------------------+
     |F|R|R|R| opcode|M| Payload len |    Extended payload length    |
     |I|S|S|S|  (4)  |A|     (7)     |             (16/64)           |
     |N|V|V|V|       |S|             |   (if payload len==126/127)   |
     | |1|2|3|       |K|             |                               |
     +-+-+-+-+-------+-+-------------+ - - - - - - - - - - - - - - - +
     |     Extended payload length continued, if payload len == 127  |
     + - - - - - - - - - - - - - - - +-------------------------------+
     |                               |Masking-key, if MASK set to 1  |
     +-------------------------------+-------------------------------+
     | Masking-key (continued)       |          Payload Data         |
     +-------------------------------- - - - - - - - - - - - - - - - +
     :                     Payload Data continued ...                :
     + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
     |                     Payload Data continued ...                |
     +---------------------------------------------------------------+

```
因此解密的时候需要根据这个模型来进行操作。

按照之前的代码，服务器会接受一串buffer。
例如我浏览器send了一个字符：1
服务器接收后打印为

```<Buffer 81 81 95 78 24 f1 a4>```

光拿出这个实在很难看懂，当然官方文档在后面的描述中也有详细介绍，看完后再回头来看图表才能看明白。这里就说我自己的理解。  
现在再看左上角上面的图标，左上角的四个小列，也就是4位，第一位是FIN，后面三位是RSV1到3。官方文档上说RSV是预留的空间，正常为0，
这就意味着，正常情况下他们可以当做0填充，那么前4位只有第一位的FIN需要设置，FIN表示帧结束，由于这篇中它不重要就不特别介绍了。
接着后面的四位是储存opcode的值，这个opcode是标识数据类型的。这样数据的第一个字节我们就能理解它的含义了，看上面16进制的数据的第一个字节81换成二进制是1000001，
第一个1是FIN的值，最后一个1是opcode的值, 表示一个文本帧（具体帧类型可以看文档）。  
接着是第二个字节的数据，它由1位的MASK和7位的PayloadLen组成，MASK标识这个数据帧的数据是否使用掩码，PayloadLen表示数据部分的长度。但是PayloadLen只有7位，
换成无符号整型的话只有0到127的取值，这么小的数值当然无法描述较大的数据，因此规定当数据长度小于或等于125时候它才作为数据长度的描述，如果这个值为126，
则时候后面的两个字节来储存储存数据长度，如果为127则用后面四个字节来储存数据长度。所以上面的图片第一行的最右侧那块和第二行看起来有些颓然。从我们的示例数据来看，
第二个字节中81(十六进制)变为二进制`10000001`, 最前面的是1，这意味着MASK为1，后面的1表示这个数据部分有1个字节
再接着是上面图表中的MaskingKey，它占四个字节，储存掩码的实体部分。但是只有在前面的MASK被设置为1时候才存在这个数据，否则不使用掩码也就没有这个数据了。
看我们的示例数据，由于前面的MASK为1，所以3到6字节的“95 78 24 f1”是数据的掩码实体。  
最后是数据部分，如果掩码存在，那么所有数据都需要与掩码做一次异或运算，四个字节的掩码与所有数据字节轮流进行位运算或者逻辑运算。如果不存在掩码，那么后面的数据就可以直接使用。

* FIN：1 bit
表示这是不是消息的最后一帧。第一帧也有可能是最后一帧。 %x0： 还有后续帧 %x1：最后一帧

* RSV1、RSV2、RSV3：1 bit
扩展字段，除非一个扩展经过协商赋予了非零值的某种含义，否则必须为0

* opcode：4 bit
解释 payload data 的类型，如果收到识别不了的opcode，直接断开。分类值如下： %x0：连续的帧 %x1：text帧 %x2：binary帧 %x3 - 7：为非控制帧而预留的 %x8：关闭握手帧 %x9：ping帧 %xA：pong帧 %xB - F：为非控制帧而预留的

* MASK：1 bit
标识 Payload data 是否经过掩码处理，如果是 1，Masking-key域的数据即为掩码密钥，用于解码Payload data。协议规定客户端数据需要进行掩码处理，所以此位为1

* Payload len：7 bit | 7+16 bit | 7+64 bit
表示了 “有效负荷数据 Payload data”，以字节为单位： - 如果是 0~125，那么就直接表示了 payload 长度 - 如果是 126，那么 先存储 0x7E（=126）接下来的两个字节表示的 16位无符号整型数的值就是 payload 长度 - 如果是 127，那么 先存储 0x7E（=126）接下来的八个字节表示的 64位无符号整型数的值就是 payload 长度

* Masking-key：0 | 4 bytes 掩码密钥，所有从客户端发送到服务端的帧都包含一个 32bits 的掩码（如果mask被设置成1），否则为0。一旦掩码被设置，所有接收到的 payload data 都必须与该值以一种算法做异或运算来获取真实值。
ws协议中，数据掩码的作用是增强协议的安全性。但数据掩码并不是为了保护数据本身，因为算法本身是公开的，运算也不复杂。除了加密通道本身，似乎没有太多有效的保护通信安全的办法，那么为什么还要引入掩码计算呢，除了增加计算机器的运算量外似乎并没有太多的收益（这也是不少同学疑惑的点）
答案还是两个字：安全。但并不是为了防止数据泄密，而是为了防止早期版本的协议中存在的代理缓存污染攻击（proxy cache poisoning attacks）等问题

* Payload data：(x+y) bytes
它是 Extension data 和 Application data 数据的总和，但是一般扩展数据为空。

* Extension data：x bytes
除非扩展被定义，否则就是0

* Application data：y bytes
占据 Extension data 后面的所有空间

一个简易的解密方法
```vue
function decodeDataFrame2(buffer) {
  const frame = {};
  let start = 0;
  frame.FIN = buffer[ start ] >> 7;
  frame.Qpcode = buffer[ start++ ] & 0b1111; // opcode占四个二进制，进行与运算来获取opcode的值
  frame.Mask = buffer[ start ] >> 7;
  frame.PayloadLength = buffer[ start++ ] & 0b1111111; // 获取payload len，由于payload len的存储占7个二进制

  if (!frame.FIN) {
    // 表示为终结
    return false
  }

  let s = undefined;

  if (frame.PayloadLength == 126) {
    // 表示后面的两个字节来储存储存数据长度
    // frame.PayloadLength = buffer.readUInt16BE(2);
    frame.PayloadLength = (buffer[ start++ ] << 8) + buffer[ start++ ];
  } else if (frame.PayloadLength == 127) {
    // 则用后面四个字节来储存数据长度
    // frame.PayloadLength = buffer.readUInt16BE(4);
    frame.PayloadLength = (buffer[ start++ ] << (8 * 3)) + (buffer[ start++ ] << (8 * 2)) + (buffer[ start++ ] << 8) + buffer[ start++ ]
  }

  if (frame.Mask) {
    frame.MaskingKey = [buffer[ start++ ], buffer[ start++ ], buffer[ start++ ], buffer[ start++ ]];
    s = []
    for (let i = 0; i < frame.PayloadLength; i++) {
      s.push( buffer[start + i] ^= frame.MaskingKey[i % 4]);
    }
  } else {
    s = buffer.slice(start, frame.PayloadLength)
  }
  s = Buffer.from(s)
  frame.PayloadData = s
  return frame
}
```

### 报文发送的加密方法（使用的nodejs-websocket）
```vue
function createTextFrame (data, masked) {
	var payload, meta

	payload = Buffer.from(data)
	meta = generateMetaData(true, 1, masked === undefined ? false : masked, payload)

	return Buffer.concat([meta, payload], meta.length + payload.length)
}

function generateMetaData(fin, opcode, masked, payload) {
	var len, meta, start, mask, i

	len = payload.length

	// Creates the buffer for meta-data
	meta = Buffer.alloc(2 + (len < 126 ? 0 : (len < 65536 ? 2 : 8)) + (masked ? 4 : 0))

	// Sets fin and opcode
	meta[0] = (fin ? 128 : 0) + opcode

	// Sets the mask and length
	meta[1] = masked ? 128 : 0
	start = 2
	if (len < 126) {
		meta[1] += len
	} else if (len < 65536) {
		meta[1] += 126
		meta.writeUInt16BE(len, 2)
		start += 2
	} else {
		// Warning: JS doesn't support integers greater than 2^53
		meta[1] += 127
		meta.writeUInt32BE(Math.floor(len / Math.pow(2, 32)), 2)
		meta.writeUInt32BE(len % Math.pow(2, 32), 6)
		start += 8
	}

	// Set the mask-key
	if (masked) {
		mask = Buffer.alloc(4)
		for (i = 0; i < 4; i++) {
			meta[start + i] = mask[i] = Math.floor(Math.random() * 256)
		}
		for (i = 0; i < payload.length; i++) {
			payload[i] ^= mask[i % 4]
		}
		start += 4
	}

	return meta
}
```






