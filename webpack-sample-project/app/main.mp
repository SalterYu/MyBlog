<template>
  <div>
    <span>
      Hello
    </span>
    <span>
      World
    </span>
  </div>
</template>
<style>

</style>
<script>
  // const show = function () {
  //   console.log('show')
  // }
  // module.exports = show
  const writeLine = function () {
    const el = document.createElement('div')
    el.textContent = 'Hello world'
    document.querySelector('#root').appendChild(el)
  }
  export default writeLine
</script>