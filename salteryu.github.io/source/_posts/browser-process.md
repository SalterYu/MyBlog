浏览器运行机制
=========

了解浏览器运行机制才能写出更好的代码和更贴合用户体验。

### 进程和线程
在了解浏览器运行机制之前，先复习下线程和进程的概念。
进程：进程是计算机资源分配和调度的最小单位，可以申请和拥有计算机资源，进程是程序的基本执行实体。
线程：线程是操作系统能够运算调度的最小单位，一个进程可以并发多个线程，每个线程并行执行不同的任务。

进程间通信方式：
  1. 管道。（是一种半双工单向通信模式，用于父子之间进程通信）
  2. 命名管道。（也是一种半双工通信方式，但可以对非亲缘进程通信）
  3. 信号。用于通知接收进程某个事件已经发生。
  4. 信号量。可用来控制多个进程之间共享资源的访问，常用于锁机制。防止一个进程访问资源后，另一个进程也在访问。
  5. 套接字。又称socket，可以在不同设备之间的进程中进行通信
  6. 共享内存。映射一段能被其他进程访问的内存。
  7. 消息队列。

线程间通信方式：
  1. 锁机制。读写锁，互斥锁，条件变量。
     1). 读写锁：允许多个线程同时读共享数据，但对写操作是排斥。
     2). 互斥锁：已排他的方式阻止其他线程对数据结构进行修改的方法。
     3). 条件变量：以原子的方式阻塞当前进程，直到某个条件为真为止。始终与互斥锁一起使用。
  2. 信号量。
  3. 信号。
 

### 浏览器，以下以chrome为例。
chrome是基于开源的chromium, 而浏览器本身也是多进程模式。
浏览器分以下几个子进程：
  1. browser进程。（只有一个，浏览器工具栏那块）。负责用户界面，包括地址栏书签，以及负责和其他进程协调工作。
  2. 渲染器进程。（一个tab有可能页面一个渲染器进程, 后面会解释为什么一个页面一个进程）。用于显示tab标签页的所有内容。
  3. 插件进程。网站使用的插件，例如flash。（不是Chrome市场的扩展）
  4. GPU进程。负责浏览器界面渲染。
  5. 网络进程。发起接受网络请求。
  6. 缓存进程。
  .....
  
![image 浏览器架构](https://raw.githubusercontent.com/SalterYu/images/master/browser/browser-framwork.png)


### 浏览器的基本功能
1. 用户界面。
2. 浏览器引擎。负责数据存储持久层，帮助存储
3. 渲染器引擎。负责网络，js解析器，不同浏览器的内核引擎不同

### 为什么浏览器是多进程结构
如果浏览器不是多进程，那么当开启多个tab页面后会出现性能上的影响。
1. 不稳定。一个线程卡死会导致进程出问题。即一个tab也线程卡死可能会导致浏览器无法正常运行。
2. 不安全。由于线程之间是可以直接共享数据，那么js就可以随意访问浏览器进程内的数据。
3. 不流畅。一个进程要处理太多东西会导致运行效率的问题。

基于以上三点，浏览器采用多进程结构。根据进程不同来拆解浏览器。

### 从浏览器输入一个内容发生了什么。
1. 浏览器进程的ui线程会捕捉输入内容，如果访问的是网址，则UI线程会启动一个网络线程来请求DNS进行域名解析，开始获取数据。如果不是地址，则会通过配置的默认搜索引擎进行查询。
2. 当网络线程获取到数据后，会通过safe browsing来检查站点是否是恶意站点。这里会利用google的api对页面数据进行检测，并查看站点是否在黑名单中。当返回数据准备完毕并且安全校验通过后，网络线程会通知UI线程唤醒渲染。
3. UI线程会创建一个渲染器进程来渲染页面，浏览器进程将数据通过IPC管道传给渲染器进程正式进入渲染流程。
4. 渲染就进程接收到的html数据，它的核心任务就是把html,css,js,image等资源渲染成用户可以交互的web页面。渲染器进程的主线程将html进行解析，构造dom树结构。
5. html首先经过tokeniser标记化，通过词法分析将输入的html内容解析成多个标记，创建DOM树。在创建的过程中，创建document对象，然后以document为根节点的DOM树不断进行修改，向其添加各种元素。这个过程称之为html树解析。
6. html解析过程中会遇到图片，css，js资源。图片和css会通过缓存或者网络下载，<font color=#A52A2A size=4 >这些资源不会阻塞html解析</font>。但script标签会<font color=#A52A2A size=4 >停止html解析流程</font>，反而去加载script脚本。因为浏览器不知道执行js会不会改变当前html结构，如果js代码有修改html的过程，那么之前解析就没有任何意义。因此要把script标签放在合适的位置，或者用defer、async。(遇到async标签的脚本，会异步下载脚本，下载完毕后立即执行，意味着执行过程中可能会暂停html解析，且乱序加载。遇到defer的标签的脚本，异步下载，异步执行，只有当dom解析完成后才会执行js脚本。)

<img src="https://raw.githubusercontent.com/SalterYu/images/master/browser/html-resolve1.png" width = "80%" height = "80%" div align=center />

7. 在html解析完成后，会获得一个DOM tree。但还不知道每个dom树的节点长什么样子，因此主线程需要解析css，这个过程和解析html是并行的。因此<font color=#A52A2A size=4 >css的加载不会阻塞浏览器解析，但是会阻塞浏览器渲染</font>。因为需要知道css是咋样的，才可以执行渲染（layout）。
8. 在知道DOM结构和每个节点的样式后，接下来需要知道每个节点要放在页面哪个位置，也就是节点的坐标以及占用多大区域。这个阶段称之为layout布局。
9. 主线程通过遍历dom和计算好的样式，会生成一个layout tree。这棵树上每个节点都记录了x，y坐标和边框尺寸。DOM树和Layout树不是一一对应的。因为有display:none 和伪元素的存在。display为none的元素不会出现在layout树，content的元素不会出现在DOM树中。这是因为dom树是根据html解析获得，并不关心样式，而layout树是根据DOM树加计算好的样式生成。
10. 但知道了layout树还不够，我们需要知道怎么样的顺序来绘制节点。例如z-index会影响节点绘制的层级关系。

```html
<style>
.A {
  width: 100px;
  height: 100px;
  background-color: burlywood;
  position: absolute;
  z-index: 10;
}

.B {
  width: 50px;
  height: 50px;
  background-color: cadetblue;
  position: absolute;
  top: 0;
  z-index: 5;
}

body {
  position: relative;
}
</style>
<body>
<body>
  <div class="A"></div>
  <div class="B"></div>
</body>
</body>
```
这段html，在没有绘制顺序的情况下，应该是B盖在A上面，但受z-index影响，改变了他们的绘制顺序，因此A盖在了B的上面。
11. 因此为了保证屏幕上显示正确的层级，主线程遍历layout tree创建一个绘制记录表（Paint Record）,代表记录了绘制的顺序，这个阶段就称之为<font color=#A52A2A size=4 >绘制（paint）</font>
12. 现在知道了文档的绘制顺序，那就要这些信息转化为像素点了展示在屏幕上的时候了。（栅格化流程）
13. 现在的栅格化流程是一种复杂的栅格化，称之为合成。将页面各个部分分成多个图层，分别对其进行栅格化，并在合成器线程单独进行页面合成。即页面所有的元素，按照某种规则进行分图层，然后只需要将可视区域的内容组合成一帧展示。

### 如何进行合成
1. 主线程遍历layout tree生成layer tree（图层树），当layer tree生成完毕和绘制顺序后，主线程将这些信息传达给<font color=#A52A2A size=4 >合成器线程</font>，并将每个图层栅格化，并将其切分成许多图块，然后将每个图块发送给<font color=#A52A2A size=4 >栅格化线程</font>，栅格化线程栅格化图块后，并存储在GPU内存中，当图块栅格化完毕后，合成器线程会收集称为“draw quads”的图块信息，这些信息记录了图块在内存中的位置和在页面的哪个位置绘制图块信息，根据这些信息合成词线程生成一个合成器帧，再通过IPC传给浏览器进程，然后浏览器将其传给GPU，然后GPU渲染到屏幕上。每次页面滚动，或者发生变化，都会合成一个新的合成器帧，重复上述流程。

### 总结
浏览器进程：浏览器进程的网络线程获取到html内容 => 通过IPC将数据传给渲染器进程的主线程
渲染器进程的主线程：将html解析构造DOM树，并计算样式 => 生成layout tree（Layer）=> 通过遍历layout tree生成绘制顺序表（paint）=> 生成 layer tree => 将绘制顺序表和layer tree传给合成器线程
合成器线程：按规则进行分图层 => 分成更小的图块传给栅格线程进行栅格化 => 合成器线程获得栅格线程传来的draw quads图块信息 => 
根据图块信息生成合成器帧frame => 通过IPC传回给浏览器进程 => 传给GPU进行渲染。

![image 渲染流程](https://raw.githubusercontent.com/SalterYu/images/master/browser/render-process.png)
当改变元素尺寸位置属性时，会在主线程重新进行样式计算，layout，paint之后的所有流程，这种行为称之为<font color=#A52A2A size=4 >重排</font>
当改变某个元素的颜色属性时，不会重新触发layout，但还是会触发样式计算和绘制，这称之为<font color=#A52A2A size=4 >重绘</font>

重排和重绘都会占用主线程，而且js也会占用主线程。当页面以每秒60帧刷新率是才不会让用户觉得卡顿，这个时候如果有靠重排和重绘来运行动画的（例如改变绝对定位的top、left、right、bottom值），且又有大量的js计算，这个时候会出现掉帧的情况。
![image 动画和js](https://raw.githubusercontent.com/SalterYu/images/master/browser/animation1.png)

![image 动画和js](https://raw.githubusercontent.com/SalterYu/images/master/browser/animation2.png)
（上图就是js占用了三帧，导致在下一帧绘制动画的时候没有按时渲染，就会出现页面动画卡顿，掉帧的情况。）

优化手段：
1. requestAnimationFrame()方法会在每一帧之间调用，及时让js归还主线程。
2. 利用transform：栅格化的整个流程不会占用主线程，直接在合成器线程和栅格线程中运行。


### 参考文献
[《Inside look at modern web browser1-4》](https://developers.google.com/web/updates/2018/09/inside-browser-part1)
[彻底搞懂浏览器运行机制](https://segmentfault.com/a/1190000019706953)
