async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
  return 'async return';
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function() {
  console.log("setTimeout");
}, 0);

async1().then(function (message) { console.log(message) });

new Promise(function(resolve) {
  console.log("promise1");
  resolve();
}).then(function() {
  console.log("promise2");
});

console.log("script end");

// 'script start'
// 'async1 start'
// 'async2'
// 'promise1'
// 'script end'
// 'async1 end'
// 'async return'
// 'promise2'
// setTimeout
