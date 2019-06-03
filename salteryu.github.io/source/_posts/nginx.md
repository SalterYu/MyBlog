---
title: 使用nginx做反代理以及添加SSL。
date: 2019年06月3日
---
<br/>

# 前言

本篇适合入门nginx或需要对自己的网站做ssl的情况。
自己为了要做小程序需要ssl，就整理了一些流程，自己之后也可以回顾。

<!--more-->

<!-- toc -->

## 安装nginx

```bash
sudo yum install -y nginx
```

# 使用nginx

```bash
/usr/local/nginx/sbin/nginx // 启动
/usr/local/nginx/sbin/nginx -s stop // 停止
/usr/local/nginx/sbin/nginx -s restart // 重启
```

## 添加环境变量

打开bash_profile文件

```bash
vim ~/.bash_profile
```
在PATH那一行添加nginx的指令路径，我这边是/usr/local/nginx/sbin，注意用 : 来分割

```bash
PATH=$PATH:$HOME/bin:/usr/local/nginx/sbin
```

## 配置nginx

假设测试域名 www.*****.cn

```conf
server
    {
        #监听端口
        listen 80;

        #域名可以有多个，用空格隔开
        server_name www.*****.cn;
        index index.html index.htm index.php;
        root /data/www/myproject; #你的项目目录

        #对******进行负载均衡
        location ~ .*.(php|php5)?$
        {
            fastcgi_pass 127.0.0.1:9000;
            fastcgi_index index.php;
            include fastcgi.conf;
        }
         
        #图片缓存时间设置
        location ~ .*.(gif|jpg|jpeg|png|bmp|swf)$
        {
            expires 10d;
        }
         
        #JS和CSS缓存时间设置
        location ~ .*.(js|css)?$
        {
            expires 1h;
        }
         
        #日志格式设定
        #$remote_addr与$http_x_forwarded_for用以记录客户端的ip地址；
        #$remote_user：用来记录客户端用户名称；
        #$time_local： 用来记录访问时间与时区；
        #$request： 用来记录请求的url与http协议；
        #$status： 用来记录请求状态；成功是200，
        #$body_bytes_sent ：记录发送给客户端文件主体内容大小；
        #$http_referer：用来记录从那个页面链接访问过来的；
        #$http_user_agent：记录客户浏览器的相关信息；
        #通常web服务器放在反向代理的后面，这样就不能获取到客户的IP地址了，通过$remote_add拿到的IP地址是反向代理服务器的iP地址。反向代理服务器在转发请求的http头信息中，可以增加x_forwarded_for信息，用以记录原有客户端的IP地址和原来客户端的请求的服务器地址。
        log_format access '$remote_addr - $remote_user [$time_local] "$request" '
        '$status $body_bytes_sent "$http_referer" '
        '"$http_user_agent" $http_x_forwarded_for';
         
        #定义本虚拟主机的访问日志
        access_log  /usr/local/nginx/logs/host.access.log  main;
        access_log  /usr/local/nginx/logs/host.access.404.log  log404;
         
        #对 "/" 启用反向代理
        location / {
            proxy_pass http://127.0.0.1:88;
            proxy_redirect off;
            proxy_set_header X-Real-IP $remote_addr;
             
            #后端的Web服务器可以通过X-Forwarded-For获取用户真实IP
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
             
            #以下是一些反向代理的配置，可选。
            proxy_set_header Host $host;

            #允许客户端请求的最大单文件字节数
            client_max_body_size 10m;

            #缓冲区代理缓冲用户端请求的最大字节数，
            #如果把它设置为比较大的数值，例如256k，那么，无论使用firefox还是IE浏览器，来提交任意小于256k的图片，都很正常。如果注释该指令，使用默认的client_body_buffer_size设置，也就是操作系统页面大小的两倍，8k或者16k，问题就出现了。
            #无论使用firefox4.0还是IE8.0，提交一个比较大，200k左右的图片，都返回500 Internal Server Error错误
            client_body_buffer_size 128k;

            #表示使nginx阻止HTTP应答代码为400或者更高的应答。
            proxy_intercept_errors on;

            #后端服务器连接的超时时间_发起握手等候响应超时时间
            #nginx跟后端服务器连接超时时间(代理连接超时)
            proxy_connect_timeout 90;

            #后端服务器数据回传时间(代理发送超时)
            #后端服务器数据回传时间_就是在规定时间之内后端服务器必须传完所有的数据
            proxy_send_timeout 90;

            #连接成功后，后端服务器响应时间(代理接收超时)
            #连接成功后_等候后端服务器响应时间_其实已经进入后端的排队之中等候处理（也可以说是后端服务器处理请求的时间）
            proxy_read_timeout 90;

            #设置代理服务器（nginx）保存用户头信息的缓冲区大小
            #设置从被代理服务器读取的第一部分应答的缓冲区大小，通常情况下这部分应答中包含一个小的应答头，默认情况下这个值的大小为指令proxy_buffers中指定的一个缓冲区的大小，不过可以将其设置为更小
            proxy_buffer_size 4k;

            #proxy_buffers缓冲区，网页平均在32k以下的设置
            #设置用于读取应答（来自被代理服务器）的缓冲区数目和大小，默认情况也为分页大小，根据操作系统的不同可能是4k或者8k
            proxy_buffers 4 32k;

            #高负荷下缓冲大小（proxy_buffers*2）
            proxy_busy_buffers_size 64k;

            #设置在写入proxy_temp_path时数据的大小，预防一个工作进程在传递文件时阻塞太长
            #设定缓存文件夹大小，大于这个值，将从upstream服务器传
            proxy_temp_file_write_size 64k;
        }
         
         
        #设定查看Nginx状态的地址
        location /NginxStatus {
            stub_status on;
            access_log on;
            auth_basic "NginxStatus";
            auth_basic_user_file confpasswd;
            #htpasswd文件的内容可以用apache提供的htpasswd工具来产生。
        }
         
        #本地动静分离反向代理配置
        #所有jsp的页面均交由tomcat或resin处理
        location ~ .(jsp|jspx|do)?$ {
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_pass http://127.0.0.1:8080;
        }
         
        #所有静态文件由nginx直接读取不经过tomcat或resin
        location ~ .*.(htm|html|gif|jpg|jpeg|png|bmp|swf|ioc|rar|zip|txt|flv|mid|doc|ppt|
        pdf|xls|mp3|wma)$
        {
            expires 15d; 
        }
         
        location ~ .*.(js|css)?$
        {
            expires 1h;
        }
    }
```

## 启动nginx

```BASH
nginx
```
或者
```bash
nginx -c /usr/local/nginx/conf/nginx.conf
```

# 添加ssl

这里选择用centosrhel7-nginx来实现ssl，以下有教程也可以选择看官网
<a href="https://certbot.eff.org/lets-encrypt/centosrhel7-nginx">centosrhel7-nginx</a>

## 安装

```bash
yum install certbot python2-certbot-nginx
```

## 重新编译生成nginx并覆盖旧的

### nginx开启ssl模块

切换到源码包，这边是用的是nginx-1.6.2
```bash
cd /usr/local/nginx/nginx-1.6.2 
./configure --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module // 重新配置参数
```
等配置完成后运行命令

```bash
make
```

编译完成后会在objs目录下生成一个新的nginx执行模块，将这个模块复制到/usr/local/nginx/sbin/ 目录下， 记得先备份
输入 nginx -V 看是否有新增的参数

```bash
cp /usr/local/nginx/sbin/nginx /usr/local/nginx/sbin/nginx.bak // 备份
cp ./objs/nginx /usr/local/nginx/sbin // 更新
nginx -V 
// 输出 configure arguments: --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_ssl_module
```

## 启动certbot

```bash
certbot --nginx
```

## 设置定时脚本

由于certbot的证书是90天就过期，因此建议做个定时脚本定时renew
```bash
crontab -e
```
在vim编辑器中输入
```bash
0 0,12 * * * python -c 'import random; import time; time.sleep(random.random() * 3600)' && certbot renew
// 这段指令表示 12点0分0秒 执行 python 脚本，延迟结束后执行certbot renew，重新续订证书
```

完