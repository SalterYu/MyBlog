Webpack
===

为什么要使用WebPack
---
现今的很多网页其实可以看做是功能丰富的应用，它们拥有着复杂的JavaScript代码和一大堆依赖包。为了简化开发的复杂度，前端社区涌现出了很多好的实践方法

模块化，让我们可以把复杂的程序细化为小的文件;
类似于TypeScript这种在JavaScript基础上拓展的开发语言：使我们能够实现目前版本的JavaScript不能直接使用的特性，并且之后还能转换为JavaScript文件使浏览器可以识别；
Scss，less等CSS预处理器
...
这些改进确实大大的提高了我们的开发效率，但是利用它们开发的文件往往需要进行额外的处理才能让浏览器识别,而手动处理又是非常繁琐的，这就为WebPack类的工具的出现提供了需求。

什么是Webpack
---
webpack可以看做是模块打包机：分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其转换和打包为合适的格式供浏览器使用

Webpack的工作方式
---
Webpack的工作方式是：把你的项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包为一个（或多个）浏览器可识别的JavaScript文件。

开始使用Webpack
===

```
// 全局安装
npm install -g webpack
npm install -g webpack-cli
npm install -g webpack-dev-server
```

正式使用webpack
===

####通过命令行使用
```
// entry file 表示入口文件
// output file 表示出口文件的路径和文件名
webpack {entry file} {output file} 
在最新版本的使用方法
// -o 参数表示指定之后的内容为输入文件
webpack {entry file} -o {output file}
```

####通过配置文件使用

生成一个webpack.config.js文件，输入以下简单配置
```
module.exports = {
  devtool: "source-map", // 打包方式，后续会提及
  entry: __dirname + "/app/main.js", // 入口文件
  output: {  // 出口文件
    path: __dirname + "/public/",  // 出口文件路径
    filename: 'bundle.js' // 出口文件名
  }
}
```

>__dirname 表示当前执行脚本的所在路径，为node环境的全局变量

WebPack强大功能
===
####使用Source Maps（使调试更容易）

| devtool选项 | 配置结果 |
| :---------: | ----- |
| source-map | 在一个单独的文件中产生一个完整且功能完全的文件。这个文件具有最好的source map，但是它会减慢打包速度；|
| cheap-module-source-map | 在一个单独的文件中生成一个不带列映射的map，不带列映射提高了打包速度，但是也使得浏览器开发者工具只能对应到具体的行，不能对应到具体的列（符号），会对调试造成不便； |
| eval-source-map | 使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。这个选项可以在不影响构建速度的前提下生成完整的sourcemap，但是对打包后输出的JS文件的执行具有性能和安全的隐患。在开发阶段这是一个非常好的选项，在生产阶段则一定不要启用这个选项；|
| cheap-module-eval-source-map | 这是在打包文件时最快的生成source map的方法，生成的Source Map 会和打包后的JavaScript文件同行显示，没有列映射，和eval-source-map选项具有相似的缺点； |

####使用Webpack构建本地服务器

```vue
module.exports = {
  devtool: "eval-source-map", //
  entry: __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public/",
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './public', // 本地服务器所加载的页面所载目录
    historyApiFallback: true, // 是否跳转
    inline: true // 实时刷新
  }
```

| devserver的配置 | 功能描述 |
| :------------: | ----- |
| contentBase | 默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到“public"目录）|
| port | 设置默认监听端口，如果省略，默认为”8080“ |
| inline | 设置为true，当源文件改变时会自动刷新页面 |
| historyApiFallback | 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html |
####Loaders
通过使用不同的loader，webpack有能力调用外部的脚本或工具，实现对不同格式的文件的处理，比如说分析转换scss为css，或者把下一代的JS文件（ES6，ES7)转换为现代浏览器兼容的JS文件，对React的开发而言，合适的Loaders可以把React的中用到的JSX文件转换为JS文件。
对于Vue而言，使用Vue-loader进行解析各种Vue文件翻译成浏览器可编译的代码。

webpack官方推荐提供了两个utils
```
loader-utils // 提供很多有用的工具，其中最普遍使用的是获取options。
schema-utils // 能够校验传来的options是否合法
```

#####Loader特性
1. loader 支持链式传递。能够对资源使用流水线(pipeline)。一组链式的 loader 将按照先后顺序进行编译。loader 链中的第一个 loader 返回值给下一个 loader。在最后一个 loader，返回 webpack 所预期的 JavaScript。
2. loader 可以是同步的，也可以是异步的。
3. loader 运行在 Node.js 中，并且能够执行任何可能的操作。
4. loader 接收查询参数。用于对 loader 传递配置。
5. loader 也能够使用 options 对象进行配置。
6. 除了使用 package.json 常见的 main 属性，还可以将普通的 npm 模块导出为 loader，做法是在 package.json 里定义一个 loader 字段。
7. 插件(plugin)可以为 loader 带来更多特性。
8. loader 能够产生额外的任意文件。


####Babel
Babel其实是一个编译JavaScript的平台，它可以编译代码帮你达到以下目的：

让你能使用最新的JavaScript代码（ES6，ES7...），而不用管新标准是否被当前使用的浏览器完全支持；
让你能使用基于JavaScript进行了拓展的语言，比如React的JSX；

#####Babel的安装和配置
Babel其实是几个模块化的包，其核心功能位于称为babel-core的npm包中，对于每一个单独需要的功能的扩展，需要安装单独的包（常用的有解析Es6的babel-env-preset包）

安装：
>webpack 4.x | babel-loader 8.x | babel 7.x
```vue
npm install -D babel-loader @babel/core @babel/preset-env webpack
```
>.babelrc文件配置
```vue
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false
      }
    ]
  ]
}
```
>webpack 4.x | babel-loader 7.x | babel 6.x
```vue
npm install -D babel-loader@7 babel-core babel-preset-env webpack
```
>.babelrc文件配置
```vue
{
  "presets": [
    [
      "env",
      {
        "modules": false
      }
    ]
  ]
}
```

####Plugins
常用的插件

| 插件名 | 说明 | 链接 |
| :---: | ---- | ---- |
| HtmlWebpackPlugin | 依据一个html模板，生成一个新的html文件，可做模板的替换，插入js | https://www.npmjs.com/package/html-webpack-plugin |
| CleanWebpackPlugin | 在打包之前指定删除文件或文件夹 | https://www.npmjs.com/package/clean-webpack-plugin |
| mini-css-extract-plugin | 将指定的内容从打包的文件分离，webpack4废除了extract-text-webpack-plugin这个插件 | https://www.npmjs.com/package/mini-css-extract-plugin |

#####Webpack内置插件
不做叙述https://www.webpackjs.com/plugins/

#####编写一个Webpack插件
Webpack插件由以下组成：
>1. 一个JavaScript命名函数
>2. 在插件函数的prototype上顶一个一个apply方法
>3. 制定一个绑定webpack自身的事件钩子。
>4. 处理webpack内部实例的特定数据。
>5. 功能完成后调用webpack回调

例：
```vue
// 一个 JavaScript 命名函数。
const pluginName = 'MyWebPackPlugin'

class FileListPlugin {
  apply (compiler) {
    compiler.hooks.run.tap(pluginName, (compilation) => {
      console.log('Webpack开始构建中')
    })
  }
}
```

其中有两个重要的回调：
- compiler 对象代表了完整的 webpack 环境配置。这个对象在启动 webpack 时被一次性建立，并配置好所有可操作的设置，包括 options，loader 和 plugin。当在 webpack 环境中应用一个插件时，插件将收到此 compiler 对象的引用。可以使用它来访问 webpack 的主环境。
   - 使用方法
   ```vue
     compiler.hooks.someHook.tap(/* ... */);
   ```
   - someHook列表：https://webpack.js.org/api/compiler-hooks/
  
- compilation 对象代表了一次资源版本构建。当运行 webpack 开发环境中间件时，每当检测到一个文件变化，就会创建一个新的 compilation，从而生成一组新的编译资源。一个 compilation 对象表现了当前的模块资源、编译生成资源、变化的文件、以及被跟踪依赖的状态信息。compilation 对象也提供了很多关键时机的回调，以供插件做自定义处理时选择使用。
   - 使用方法
   ```vue
     compilation.hooks.someHook.tap(/* ... */);
   ```
   - someHook列表：https://webpack.js.org/api/compilation-hooks/

tap方法表：

| 方法名 | 功能描述 |
| :---: | ----- |
| tap | 同步方法，自动执行webpack的流程 |
| tapAsync | 异步方法，必须在执行结束后调用webpack自己的callback()方法 |
| tapPromise | 返回一个Promise方法，当异步任务完成后需要在添加resolve(）方法 |


参考文档：
- Webpack内部运行机制：https://fengmiaosen.github.io/2017/03/21/webpack-core-code/，
- Webpack4.0逐个击破：https://www.cnblogs.com/dashnowords/category/1284284.html
- Webpack官网：https://webpack.js.org/ 【建议】


### Webpack核心：tapable类

```tapable```是```webpack```的核心框架（4.0以上版本的API已经发生了变化），是一个基于事件流的框架，或者叫做发布订阅模式，或观察者模式，```webpack```的整个生命周期及其开放的自定义插件系统都离不开```tapable```的支持，研究其运行原理是阅读```webpack```源代码的第一步。官方仓库master分支的代码是经过ES6重构的，模块化拆分非常细，且加入了很多非核心逻辑，阅读难度较大。建议先从官方仓库中0.2版本的分支开始学习，整个源码只有400行，相对容易理解。
- 0.2版本链接：https://github.com/webpack/tapable/tree/tapable-0.2


### 代码地址
https://github.com/SalterYu/MyBlog/tree/master/webpack-sample-project
