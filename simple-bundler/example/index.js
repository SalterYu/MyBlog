import message from 'a.js'
console.log(message + ' world')
async function test() {
  const res =  await promise()
  console.log(res)
}

function promise() {
  return new Promise((res, rej) => {
    res(1)
  })
}

test()