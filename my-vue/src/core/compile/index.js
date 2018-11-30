class Compiler {
  constructor(el, vm) {
    this.vm = vm
    vm.$el = document.querySelector(el)
    this.replace(vm.$el, vm)
  }

  replace(frag, vm) {
    const childNodesList = Array.from(frag.childNodes)
    const baseReg = /[{][{]((?:.|\n)+?)[}][}]/g
    const keyReg = (key) => {
      return new RegExp(`[{][{](?:(${key})+?)[}][}]`, 'g')
    }
    const getVal = (keys, vm) => {
      let val = vm
      keys.forEach(key => {
        val = val[key]
      })
      return val
    }
    childNodesList.forEach(node => {
      let resultTxt = node.textContent
      // 如果是文本节点
      if (node.nodeType === 3) {
        while (baseReg.exec(node.textContent)) {
          let matchVal = RegExp.$1
          let keys = RegExp.$1.split('.')
          let val = getVal(keys, vm)
          resultTxt = resultTxt.replace(keyReg(matchVal), val).trim()
          vm.$watch(RegExp.$1, (newValue, oldValue) => {
            resultTxt = resultTxt.replace(oldValue, newValue).trim()
            node.textContent = resultTxt
          })
        }
        node.textContent = resultTxt
      }
      // 如果是元素节点
      if (node.nodeType === 1) {
        Array.from(node.attributes).forEach(attr => {
          const { name, value: exp } = attr
          if (name.includes('w-')) {
            if (name.includes('w-model')) {
              node.value = vm[exp]
              vm.$watch(exp, (newValue, oldValue) => {
                node.value = newValue
              })
              node.addEventListener('input', (e) => {
                vm[exp] = e.target.value
              })
            }
          }
        })
      }

      // 若还有子节点则递归
      if (node.childNodes && node.childNodes.length > 0) {
        this.replace(node, vm)
      }
    })
  }
}

export default Compiler