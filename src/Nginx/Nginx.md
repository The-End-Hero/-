## 概述

**什么是 Nginx?**

**Nginx (engine x)** 是一款轻量级的 Web 服务器 、反向代理服务器及电子邮件（IMAP/POP3）代理服务器。

[![img](./nginx.jpg)](./nginx.jpg)

**什么是反向代理？**

反向代理（Reverse Proxy）方式是指以代理服务器来接受 internet 上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给 internet 上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器。



## 使用

nginx 的使用比较简单，就是几条命令。

常用到的命令如下：

```
nginx -s stop       快速关闭Nginx，可能不保存相关信息，并迅速终止web服务。
nginx -s quit       平稳关闭Nginx，保存相关信息，有安排的结束web服务。
nginx -s reload     因改变了Nginx相关配置，需要重新加载配置而重载。
nginx -s reopen     重新打开日志文件。
nginx -c filename   为 Nginx 指定一个配置文件，来代替缺省的。
nginx -t            不运行，而仅仅测试配置文件。nginx 将检查配置文件的语法的正确性，并尝试打开配置文件中所引用到的文件。
nginx -v            显示 nginx 的版本。
nginx -V            显示 nginx 的版本，编译器版本和配置参数。
```





## nginx 配置

例如请求：`http://localhost:3000/test1/test2/test.php`

\$host: localhost

\$server_port：3000

\$request_uri: /test1/test2/test.php

\$document_uri: /test1/test2/test.php

\$document_root: /var/www/html

\$document_root: /var/www/html/test1/test2/test.php



### 反向代理

反向代理是一个Web服务器，它接受客户端的连接请求，然后将请求转发给上游服务器，并将从服务器得到的结果返回给连接的客户端。下面简单的反向代理的例子：

```powershell
server {  
  listen       80;                                                        
  server_name  localhost;                                              
  client_max_body_size 1024M;  # 允许客户端请求的最大单文件字节数
  location / {
    proxy_pass                         http://localhost:8080;
    proxy_set_header Host              $host:$server_port;
    proxy_set_header X-Forwarded-For   $remote_addr; # HTTP的请求端真实的IP
    proxy_set_header X-Forwarded-Proto $scheme;      # 为了正确地识别实际用户发出的协议是 http 还是 https
  }
}
```

代理到上游服务器的配置中，最重要的是proxy_pass指令。以下是代理模块中的一些常用指令：

| 指令                   | 说明                                                         |
| ---------------------- | ------------------------------------------------------------ |
| proxy_connect_timeout  | Nginx从接受请求至连接到上游服务器的最长等待时间              |
| proxy_send_timeout     | 后端服务器数据回传时间(代理发送超时)                         |
| proxy_read_timeout     | 连接成功后，后端服务器响应时间(代理接收超时)                 |
| proxy_cookie_domain    | 替代从上游服务器来的Set-Cookie头的domain属性                 |
| proxy_cookie_path      | 替代从上游服务器来的Set-Cookie头的path属性                   |
| proxy_buffer_size      | 设置代理服务器（nginx）保存用户头信息的缓冲区大小            |
| proxy_buffers          | proxy_buffers缓冲区，网页平均在多少k以下                     |
| proxy_set_header       | 重写发送到上游服务器头的内容，也可以通过将某个头部的值设置为空字符串，而不发送某个头部的方法实现 |
| proxy_ignore_headers   | 这个指令禁止处理来自代理服务器的应答。                       |
| proxy_intercept_errors | 使nginx阻止HTTP应答代码为400或者更高的应答。                 |

### 负载均衡

upstream指令启用一个新的配置区段，在该区段定义一组上游服务器。这些服务器可能被设置不同的权重，也可能出于对服务器进行维护，标记为down。

```powershell
upstream gitlab {
    ip_hash;
    # upstream的负载均衡，weight是权重，可以根据机器配置定义权重。weigth参数表示权值，权值越高被分配到的几率越大。
    server 192.168.122.11:8081 ;
    server 127.0.0.1:82 weight=3;
    server 127.0.0.1:83 weight=3 down;
    server 127.0.0.1:84 weight=3; max_fails=3  fail_timeout=20s;
    server 127.0.0.1:85 weight=4;;
    keepalive 32;
}
server {
    #侦听的80端口
    listen       80;
    server_name  git.example.cn;
    location / {
        proxy_pass   http://gitlab;    #在这里设置一个代理，和upstream的名字一样
        #以下是一些反向代理的配置可删除
        proxy_redirect             off;
        #后端的Web服务器可以通过X-Forwarded-For获取用户真实IP
        proxy_set_header           Host $host;
        proxy_set_header           X-Real-IP $remote_addr;
        proxy_set_header           X-Forwarded-For $proxy_add_x_forwarded_for;
        client_max_body_size       10m;  #允许客户端请求的最大单文件字节数
        client_body_buffer_size    128k; #缓冲区代理缓冲用户端请求的最大字节数
        proxy_connect_timeout      300;  #nginx跟后端服务器连接超时时间(代理连接超时)
        proxy_send_timeout         300;  #后端服务器数据回传时间(代理发送超时)
        proxy_read_timeout         300;  #连接成功后，后端服务器响应时间(代理接收超时)
        proxy_buffer_size          4k; #设置代理服务器（nginx）保存用户头信息的缓冲区大小
        proxy_buffers              4 32k;# 缓冲区，网页平均在32k以下的话，这样设置
        proxy_busy_buffers_size    64k; #高负荷下缓冲大小（proxy_buffers*2）
        proxy_temp_file_write_size 64k; #设定缓存文件夹大小，大于这个值，将从upstream服务器传
    }
}
```

每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器down掉，能自动剔除。

**负载均衡：**

upstream模块能够使用3种负载均衡算法：轮询、IP哈希、最少连接数。

**轮询：** 默认情况下使用轮询算法，不需要配置指令来激活它，它是基于在队列中谁是下一个的原理确保访问均匀地分布到每个上游服务器；

**IP哈希：** 通过ip_hash指令来激活，Nginx通过IPv4地址的前3个字节或者整个IPv6地址作为哈希键来实现，同一个IP地址总是能被映射到同一个上游服务器；

**最少连接数：** 通过least_conn指令来激活，该算法通过选择一个活跃数最少的上游服务器进行连接。如果上游服务器处理能力不同，可以通过给server配置weight权重来说明，该算法将考虑到不同服务器的加权最少连接数。

**keepalive指令：**

Nginx服务器将会为每一个worker进行保持同上游服务器的连接。



### 屏蔽ip

在nginx的配置文件`nginx.conf`中加入如下配置，可以放到http, server, location, limit_except语句块，需要注意相对路径，本例当中`nginx.conf`，`blocksip.conf`在同一个目录中。

```powershell
include blockip.conf;
```

在blockip.conf里面输入内容，如：

```powershell
deny 165.91.122.67;

deny IP;   # 屏蔽单个ip访问
allow IP;  # 允许单个ip访问
deny all;  # 屏蔽所有ip访问
allow all; # 允许所有ip访问
deny 123.0.0.0/8   # 屏蔽整个段即从123.0.0.1到123.255.255.254访问的命令
deny 124.45.0.0/16 # 屏蔽IP段即从123.45.0.1到123.45.255.254访问的命令
deny 123.45.6.0/24 # 屏蔽IP段即从123.45.6.1到123.45.6.254访问的命令

# 如果你想实现这样的应用，除了几个IP外，其他全部拒绝
allow 1.1.1.1; 
allow 1.1.1.2;
deny all; 
```

## 重定向

- `permanent` 永久性重定向。请求日志中的状态码为301
- `redirect` 临时重定向。请求日志中的状态码为302

### 重定向整个网站

```powershell
server {
    server_name old-site.com
    return 301 $scheme://new-site.com$request_uri;
}
```

### 重定向单页

```powershell
server {
    location = /oldpage.html {
        return 301 http://example.org/newpage.html;
    }
}
```

### 重定向整个子路径

```powershell
location /old-site {
    rewrite ^/old-site/(.*) http://example.org/new-site/$1 permanent;
}
```



### 内容缓存

允许浏览器基本上永久地缓存静态内容。 Nginx将为您设置Expires和Cache-Control头信息。

```
location /static {
    root /data;
    expires max;
}
```

如果要求浏览器永远不会缓存响应（例如用于跟踪请求），请使用-1。

```
location = /empty.gif {
    empty_gif;
    expires -1;
}
```



### Gzip压缩

```powershell
gzip  on;
gzip_buffers 16 8k;
gzip_comp_level 6;
gzip_http_version 1.1;
gzip_min_length 256;
gzip_proxied any;
gzip_vary on;
# 匹配MIME类型进行压缩，（无论是否指定）"text/html"类型总是会被压缩的。
gzip_types 
    text/xml application/xml application/atom+xml application/rss+xml application/xhtml+xml image/svg+xml
    text/javascript application/javascript application/x-javascript
    text/x-json application/json application/x-web-app-manifest+json
    text/css text/plain text/x-component
    font/opentype application/x-font-ttf application/vnd.ms-fontobject
    image/x-icon;
gzip_disable  "msie6";
```

### 

### 强制将http重定向到https

```powershell
server {
    listen       80;
    server_name  example.com;
    rewrite ^ https://$http_host$request_uri? permanent;    # 强制将http重定向到https
    # 在错误页面和“服务器”响应头字段中启用或禁用发射 nginx版本 。 防止黑客利用版本漏洞攻击
    server_tokens off;
}
```

### 

### 爬虫过滤

根据 `User-Agent` 过滤请求，通过一个简单的正则表达式，就可以过滤不符合要求的爬虫请求(初级爬虫)。

> `~*` 表示不区分大小写的正则匹配

```powershell
location / {
    if ($http_user_agent ~* "python|curl|java|wget|httpclient|okhttp") {
        return 503;
    }
    # 正常处理
    # ...
}
```



### 防盗链

```powershell
location ~* \.(gif|jpg|png|swf|flv)$ {
   root html
   valid_referers none blocked *.nginxcn.com;
   if ($invalid_referer) {
     rewrite ^/ www.nginx.cn
     #return 404;
   }
}
```



### 虚拟目录配置

alias指定的目录是准确的，root是指定目录的上级目录，并且该上级目录要含有location指定名称的同名目录。

```powershell
location /img/ {
    alias /var/www/image/;
}
# 访问/img/目录里面的文件时，ningx会自动去/var/www/image/目录找文件
location /img/ {
    root /var/www/image;
}
# 访问/img/目录下的文件时，nginx会去/var/www/image/img/目录下找文件。]
```



### 防盗图配置

```powershell
location ~ \/public\/(css|js|img)\/.*\.(js|css|gif|jpg|jpeg|png|bmp|swf) {
    valid_referers none blocked *.jslite.io;
    if ($invalid_referer) {
        rewrite ^/  http://wangchujiang.com/piratesp.png;
    }
}
```



### 屏蔽.git等文件

```powershell
location ~ (.git|.gitattributes|.gitignore|.svn) {
    deny all;
}
```



