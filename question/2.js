let arr = [
  [
    ['1-7', '2-6'],
    '4-6',
    [
      ['2-0', '1-4'],
      ['3-9'],
      '4-5',
    ],
  ]
]

// Q1: 完成数组 flat 函数
function flat(arr) {
  // code
  arr = [].concat(...arr.map(item => Array.isArray(item) ? flat(item) : item))
  return arr
}

function calc(arr) {
  arr = arr.map(item => {
    const temp = item.split('-')
    return temp[0] * temp[1]
  })
  return arr
}

function sortAndReduce(arr) {
  return Array.from(new Set(arr.sort((a, b) => a - b)))
}

console.log(sortAndReduce(calc(flat(arr))))