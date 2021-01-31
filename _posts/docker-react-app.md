---
title: 用docker来构建一个react项目镜像（一）
date: 2019年05月14日
---

<br/>

前言
====
最近在捣鼓自己的一个小站点，但是每次更新项目都要发布后总是ssh，然后重启nginx，属实麻烦，就尝试使用Jenkins来部署自动化，但在这之前要了解一下docker。
就尝试用docker来构建一个react项目。

<!--more-->

####创建一个react-app项目

这里就直接使用create-react-app 脚手架了。

安装脚手架
```npm
   npm install -g create-react-app
```

完事后执行以下指令，创建一个目录
```vue
   create-react-app docker-demo
```

在创建后的根目录下面新建一个Dockerfile文件
并键入以下代码：
```vue
# 使用node版本11.12.0
FROM node:11.12.0

# 代表生产环境
ENV PROJECT_ENV production
# 许多 package 会根据此环境变量，做出不同的行为
# 另外，在 webpack 中打包也会根据此环境变量做出优化，但是 create-react-app 在打包时会写死该环境变量
ENV NODE_ENV production
# 进入code文件夹，如果没有则会生成，并进入文件夹
WORKDIR /code
# 将当前内容 放入code文件夹
ADD . /code

# 执行指令
RUN yarn install && yarn build && npm install -g http-server

# 暴露容器端口 8080
EXPOSE 8080

# 当执行docker run的时候会执行以下shell 脚本。
CMD http-server ./build -p 8080
```

一切准备就绪后，开始创建镜像。
假设已经安装了docker环境。

在当前项目目录下执行build指令
```vue
    // -t 给这个镜像打tag
    docker build -t=reactapp . 
```

build完成后可以查看镜像列表
```vue
    docker image list
```

然后启动镜像变为容器
```vue
   // 表示将本地4040端口代理映射容器暴露的8080端口
    docker run -p 4040:8080 reactapp
```

之后会出现
```vue
Starting up http-server, serving ./build
Available on:
  http://127.0.0.1:8080
  http://172.17.0.2:8080
Hit CTRL-C to stop the server
```

然后输入链接可以访问，如果以上操作是服务器端的话，可以用外网进行打开，但是端口要变成4040，因为8080是容器内部服务的端口。