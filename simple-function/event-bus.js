class EventEmitter{
  constructor() {
    this.events = new Map()
  }

  $on(key, fn) {
    if (!this.events.get(key)) {
      this.events.set(key, fn)
    }
  }

  $emit(key) {
    const fn = this.events.get(key)
    fn && fn.apply(this, [...arguments].slice(1))
  }
}


const bus = new EventEmitter()
bus.$on('show', (val) => {
  console.log('show', val)
})
bus.$emit('show', {val: 1})