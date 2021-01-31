# 使用react-hook

### useState的原理
```js
let memoizedStates = []	
let index = 0	
function useState (initialState) {	
  memoizedStates[index] = memoizedStates[index] || initialState	
  let currentIndex = index	
  function setState (newState) {	
    memoizedStates[currentIndex] = newState	
    render()	
  }	
  return [memoizedStates[index++], setState]	
}
```
因此，useState是通过一个数组保存对应index的数据状态，一旦更新这个值就触发setState方法。这就是为什么react-hook的useState可以保存状态数据的原因