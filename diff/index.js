let data = {
  a: {
    b: 1,
    arr: [{ a: 1 }, { b: 2 }]
  }
}

let newData = {
  a: {
    b: 2,
    arr: [{ a: 1 }, { b: 3 }, [4, 5]],
    arr2: [{ c: 1 }]
  }
}

function isArray(data) {
  return data instanceof Array
}

function isObject(data) {
  return (data instanceof Object) && !(data instanceof Array)
}

function isArrayOrObject(data) {
  return isObject(data) || isArray(data)
}

function getVal(data, path) {
  let pathItems = path.replace(/\[/g, '.').replace(/\]/g, '').split('.')
  let res = data
  pathItems.forEach((item) => {
    if (res === null || res === undefined) return res
    res = res[item]
  })
  return res
}

function isDiff(oldVal, newVal, path) {
  return getVal(oldVal, path) !== getVal(newVal, path)
}

function diff(oldData, newData) {
  let diffData = {}

  function nextCompare(data, keyRoot = '', index) {
    if (isObject(data)) {
      compare(data, keyRoot + '.')
    } else if (isArray(data)) {
      compare(data, keyRoot)
    }
  }

  function compare(data, keyRoot = '') {
    if (isObject(data)) {
      Object.keys(data).map((key, index) => {
        const currentKey = keyRoot + key
        const currentVal = data[key]
        if (isArrayOrObject(currentVal)) {
          nextCompare(currentVal, currentKey, index)
        } else {
          if (isDiff(oldData, newData, currentKey)) diffData[currentKey] = currentVal
        }
      })
    } else if (isArray(data)) {
      data.forEach((item, index) => {
        const currentKey = `${keyRoot}[${index}]`
        const currentVal = item
        if (isArrayOrObject(currentVal)) {
          nextCompare(currentVal, currentKey, index)
        } else {
          if (isDiff(oldData, newData, currentKey)) diffData[currentKey] = currentVal
        }
      })
    } else {
      console.log(data)
    }
  }

  compare(newData)
  return diffData
}
const res = diff(data, newData)
console.log(res)

