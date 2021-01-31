function foo(arr1, arr2) {
  const map = new Map()
  for(let i = 0;i < arr1.length ;i ++) {
    map.set(arr1[i], 1)
  }

  for(let i = 0;i<arr2.length;i++) {
    map.set(arr2[i], (map.get(arr2[i]) || 0) + 1)
  }

  const res = Array.from(map).filter(item => item[1] === 1)
  if (res) {
    return res.map(item => item[0])
  }
  return []
}

console.log(foo([1, 2, 3], [1, 2, 3]))

