class Compiler {
  constructor(el, vm) {
    this.vm = vm
    vm.$el = document.querySelector(el)
    this.replace(vm.$el, vm)
  }

  replace(frag, vm) {
    const childNodesList = Array.from(frag.childNodes)
    const baseReg = /[{][{]((?:.|\n)+?)[}][}]/g
    const getVal = (keys, vm) => {
      debugger
      let val = vm
      keys.forEach(key => {
        val = val[key]
      })
      return val
    }
    const render = (template, vm) => {
      Object.keys(vm._data).forEach(key => {
        template = template.replace(new RegExp(`{{${key}}}`, 'g'), getVal(key.split('.'), vm))
      })
      return template
    }
    childNodesList.forEach(node => {
      let txt = node.textContent
      if (node.nodeType === 3 && baseReg.test(txt)) {
        node.textContent = render(node.textContent, vm)
      }
    })
  }
}

export default Compiler