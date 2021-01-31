let target = [1,2,3]

let proxy = new Proxy(target, {
  set(target, key, value, receiver){
    console.log('检测到了set的key为 -> ' + key, receiver, target);
    return Reflect.set(target, key, value, receiver);
  }
})

proxy[0] = '1'; // 检测到了set的key为 -> 0
proxy.push('2') // 检测到了set的key为 -> 3  检测到了set的key为 -> length
proxy.pop();    // 检
