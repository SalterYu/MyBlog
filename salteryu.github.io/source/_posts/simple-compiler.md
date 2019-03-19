---
title: AST入门
date: 2019年03月18日
---


前言
===

<a href="https://astexplorer.net/">AST Explore，可视化工具</a>

现如今，许多各式各样的框架诞生，特别是多端生成的解决方案，例如：taro，Chameleon（卡梅隆），小程序框架: mpvue，wepy。
又或者在其他场景，如：
1. eslint对代码错误或风格的检查，发现一些潜在的错误
2. IDE的错误提示、格式化、高亮、自动补全等.
3. UglifyJS压缩代码.
4. 代码打包工具webpack。

万变不离其宗，都是站在AST这个巨人的肩膀上。
且对于体力型的，或者重复性的工作，能用工具化，流程化解决就用他们解决。

在了解编译器之前，了解一下babel的编译过程。<a href="https://yq.aliyun.com/articles/62671">(来源)</a>

![来源](https://user-gold-cdn.xitu.io/2018/12/24/167dfa8949b0401a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
<!--more-->


## 什么是编译器

编译器：能够把一种语言等价得转换为另一种目标语言。从现代高级编译器的角度讲，源语言是高级程序设计语言，
容易阅读与编写，而目标语言是机器语言，即二进制代码，能够被计算机直接识别。
语言系统的处理角度来看，由源程序生成可执行程序的整体工作流程如下所示。

源程序 -> 预处理器 -> 编译器 -> 目标程序 -> .... -> 可执行程序

编译器又分为前端后后端。前端包括词法分析、语法分析、语义分析、中间代码生成，具有机器无关性，比较有代表性的工具是 Flex、Bison。
后端包括中间代码优化、目标代码生成，具有机器相关性，比较有代表性的工具是 LLVM。

具体编译原理，查看这篇文章 <a href="https://zhuanlan.zhihu.com/p/31096468">前端为什么要学习编译原理</a>

## 编译器的编译过程

### 1.词法分析

获取原始代码，称为文法，scan，进行分析，转换为词法单元。token是一个不可再分割的最小单元，每个不可分割的最小单元
都有能被唯一识别的类型和其他附加属性，并通过一个标记器将其拆分为这些命名标记的东西。最终生成一个tokens。
对于token的验证，可以用正则表达式，一个一个进行扫描匹配，指针不断往后移直至不满足匹配规则或达到末尾。
这个过程会过滤换行符和空格等等
例如：
```vue
   const input = '(add 2 (subtract 4 "abc"))'
// 转换为
   const tokens = [ { type: 'paren', value: '(' },
     { type: 'name', value: 'add' },
     { type: 'number', value: '2' },
     { type: 'paren', value: '(' },
     { type: 'name', value: 'subtract' },
     { type: 'number', value: '4' },
     { type: 'number', value: '2' },
     { type: 'paren', value: ')' },
     { type: 'paren', value: ')' } ]
```

### 2.语法分析
根据token的标记，逐个读入token，使用深度优先遍历并将其重新格式化为描述语法各个部分及其相互关系的表示形式，称为AST。
遇到起始符号，如"<", "(", "{" 等，嵌套递归，直到遇到终结符号，退出遍历。
这是一个深度嵌套的对象，以一种即方便使用又能提供大量信息的方式来表示的代码。
例如:
```vue
const ast = {
  type: 'Program',
  body: [{
    type: 'CallExpression',
    name: 'add',
    params: [{
      type: 'NumberLiteral',
      value: '2'
    }, {
      type: 'CallExpression',
      name: 'subtract',
      params: [{
        type: 'NumberLiteral',
        value: '4'
      }, {
        type: 'NumberLiteral',
        value: '2'
      }]
    }]
  }]
}
```

### 3.语义分析（转换）
这个阶段是编译器对上一个AST进行转换，它可以用一种语言操作AST, 也可以翻译成全新的语言。在这个过程中，
我们可以通过 添加/删除/替换属性来操作节点。并基于它创造一个新的AST。例如可以把wx全转为swan等等，或者
在原先的代码基础上添加目标结果的一些特性。
完成上述功能，必须通过递归进行遍历每一层。由于仅仅只需要访问每一个节点就足够了，因此利用visitor就可以解决这个问题。
当遇到匹配类型的节点时，我们只需要调用对应visitor中的方法就可以解决问题。
visitor的方法可能如下：
```vue
var visitor = {
  NumberLiteral(node, parent) {},
  CallExpression(node, parent) {},
  ...
};
```
但如果需要在离开当前节点的时候做一些操作呢？
我们可以更新下visitor方法，如下所示:
```vue
const visitor = {
    NumberLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: 'NumberLiteral',
          value: node.value
        })
      },
      exit(node, parent) {
         // do something
      }
    },
    StringLiteral: {
      enter(node, parent) {
        parent._context.push({
          type: 'StringLiteral',
          value: node.value
        })
      }
    },
    ...
  }
```

有了visitor对象，就可以在traverseNode（转换节点）的过程中, 对特定的节点进行转换操作，并做一些其他事情。
具体流程如下：

- → Program (enter)
  - → CallExpression (enter)
     - → NumberLiteral (enter)
     - ← NumberLiteral (exit)
     - → CallExpression (enter)
       - → NumberLiteral (enter)
       - ← NumberLiteral (exit)
       - → NumberLiteral (enter)
       - ← NumberLiteral (exit)
     - ← CallExpression (exit)
  - ← CallExpression (exit)
- ← Program (exit)

### 4. 代码生成

代码生成器应当知道如何打印AST的所有不同类型的节点，并且递归调用来打印嵌套节点，直到生成最终代码。

## 制作一个babel插件

由于小程序开发比较多，有接触百度小程序和微信小程序等等，肯定会面临一个转换的问题，如 wx => swan 等。
这里就尝试做一个类似的插件。

### 1. 创建基础结构（插件的基础）
```vue
const babel = require('babel-core');

// 输入的文法
const input = `
function test() {
  wx.showModal({
    title: "modal",
    content: 'content'
  })
}
`

// 需要做的插件功能
const plugin = ({types: t}) => {
  return {
    visitor: {
    }
  }
}

// 利用插件
const res = babel.transform(input, {
  plugins: [plugin]
})

console.log(res.code)
```

### 2. 使用https://astexplorer.net/ 进行AST分析。
如图所示：
![](https://img4.tuhu.org/PeccancyCheXingYi/Fi-8bDBlO2XddekCkb9NTbL1eXv3_w649_h800.jpeg@100Q.jpg)

由于需要做的是 wx => swan, 因此要找到wx这个文法对应的表达式，这里找到的是 "callee： MemberExpression"， 然后修改plugin代码
```vue
const plugin = ({types: t}) => {
  return {
    visitor: {
      MemberExpression: {
        enter(path, state) {
          const node = path.node
          const object = node.object
          if (t.isMemberExpression(node) && t.isIdentifier(object, {name: 'wx'})) {
            // 下方的写法可能有问题，也许有官方的接口。
            object.name = 'swan'
          }
        }
      }
    }
  }
}
```

### 3.执行插件

结果为: 
```vue
function test() {
  swan.showModal({
    title: "modal",
    content: 'content'
  });
}
```

### 结尾
分享几篇文章：
- <a href="https://juejin.im/post/5c21b584e51d4548ac6f6c99">Babel的深入了解</a> 
- <a href="https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md#toc-writing-your-first-babel-plugin">Babel插件手册</a> 
