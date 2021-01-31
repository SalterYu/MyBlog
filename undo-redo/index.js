const createUndoableCounter = () => {
  let history = [null];
  let position = 0;

  return {

    value() {
      return history[position];
    },

    setValue(value) {
      if (position < history.length - 1) {
        history = history.slice(0, position + 1);
      }
      history.push(value);
      position += 1;
    },

    undo() {
      if (position > 0) {
        position -= 1;
      }
    },

    redo() {
      if (position < history.length - 1) {
        position += 1;
      }
    },

    // toString function to aid in illustrating
    toString() {
      return `Value: ${this.value()}, History: [${history}], Position: ${position}`;
    }
  }
}

const counter = createUndoableCounter()
let obj = {a: 1}
counter.setValue(obj)
console.log(counter.value())

obj.a = 2
counter.setValue(obj)
console.log(counter.value())

counter.undo()
console.log(counter.value())

counter.redo()
console.log(counter.value())

obj.a = 3
console.log(counter.value())

counter.undo()
console.log(counter.value())

let arr = [{a: 1}, {a: 2}, {a: 3}]

function enumerable(value, writable) {
  return {
    value: value.a + value.a,
    enumerable: false,
    configurable: true,
    writable: !!writable
  }
}


arr.forEach(item => {
  Object.defineProperties(item, {
    __origin__: enumerable(item)
  })
})

arr.forEach(item => {
  console.log(item.__origin__)
})
