const handler = {
  get(obj, prop) {
    return obj[prop]
  },
  set(obj, prop, value) {
    console.log('做Vue的全局数据更新')
    console.log(arguments)
    obj[prop] = value
  }
}

function Store() {
  const data = new Proxy({}, handler)
  const set = function (k, v) {
    data[k] = v
  }
  const get = function (k) {
    return data[k]
  }
  return {
    set,
    get,
    data
  }
}

const store = new Store()
store.set('a', 1)
console.log(store.data)

const a = new Proxy([], handler)
a.length = 3
