Http相关

跨域相关cors需要前后端配置，ie10才开始支持

formdata是HTML5标准，也是ie10

进度条也是ie10

postmessage从ie8开始

文件上传：

1. iframe隐藏，其实还是form提交，只是跳转的target转移在隐藏的iframe上
2. HTML5 formdata对象提交（ie10才开始支持）
3. flash（chrome等需要开flash）



### HTTP 状态码

2XX(Success 成功状态码)

200 OK

204 Not Content 没有内容可返回

206 Partial Content  响应了范围请求



3XX(Redirection 重定向状态码)

301 Moved Permanently  永久重定向

302 Found 临时性重定向

303 See Other

304 Not Modified



4XX(Client Error 客户端错误状态码)

4XX 的响应结果表明客户端是发生错误的原因所在

400 Bad Request

401 Unauthorized

403 Forbidden

404 Not Found

405 Method Not Allowed





5XX 的响应结果表明服务器本身发生错误

500 Internal Server Error  该状态码表明服务器端在执行请求时发生了错误。也有可能是 Web 应用存在的 bug 或某些临时的故障

502 Bad Gateway   该状态码表明扮演网关或代理角色的服务器，从上游服务器中接收到的响应是无效的

503 Service Unavailable   该状态码表明服务器暂时处于超负载或正在进行停机维护，现在无法处理请求。如果事先得知解除以上状况需要的时间，最好写入 RetryAfter 首部字段再返回 给客户端