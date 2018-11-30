let app = new Wue({
  el: '#app',
  data: {
    msg: 'hello Wue',
    deep: {
      a: 1,
      b: 2
    },
  },
  mounted () {
    console.log('mounted')
  }
})




window.vm = app