---
# This is the title of the article
title: 怎么做
# This is the icon of the page
icon: iconfont icon-study
# This control sidebar order
order: 1
# A page can have multiple categories
category:
  - FAQ
# A page can have multiple tags
tag:
  - FAQ
  - Question
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

### **如何为文件/文件夹添加密码？**

添加[元信息](../guide/advanced/meta.md)

### **如何对子目录进行反向代理？**

使用 nginx 反向代理到 https://nn.ci/alist 的示例：

- 正常安装
- 将 [site_url](../config/configuration.md#site_url) 设置为 `https://nn.ci/alist` 或者仅`/alist`, 然后重启alist
- 在 nginx 中添加反向代理配置

```nginx
location /alist/ {
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header Range $http_range;
	  proxy_set_header If-Range $http_if_range;
    proxy_redirect off;
    proxy_pass http://127.0.0.1:5244/alist/;
    # the max size of file to upload
    client_max_body_size 20000m;
}
```

### **忘记密码怎么办？**

如果您是站点的所有者，您可以通过在终端中运行 `./alist admin` 来获取管理员账号信息。

否则，您可以要求站点所有者重置密码。

:::tip
如果你使用v3.9.0及以上版本，你需要先停止alist服务因为这个pr: https://github.com/alist-org/alist/pull/3074
:::

#### **低于v3.25.0版本**

```bash
./alist admin
```


#### **高于v3.25.0版本**

3.25.0以上版本将密码改成加密方式存储的hash值，无法直接反算出密码，如果忘记了密码只能通过重新 **`随机生成`** 或者 **`手动设置`**

```bash
# 随机生成一个密码
./alist admin random
# 手动设置一个密码,`NEW_PASSWORD`是指你需要设置的密码
./alist admin set NEW_PASSWORD
```

### **如何修改监听端口 ​**

参考[config](../config/configuration.md#port)

### **如何更新**

除了 changelog 中标注的不兼容版本，通常可以直接替换二进制文件进行更新。

对于 docker 用户，只需删除旧的容器并拉取新的docker image，然后运行它即可。

### **如何允许访客上传文件**

添加[元信息](../guide/advanced/meta.md)，并启用"写入"

### **如何去掉底部的"由 AList 驱动"？​**

根据我们的开源许可:
此最强copyleft许可的权限以在同一许可下提供许可作品和修改的完整源代码为条件，其中包括使用许可作品的较大作品。**版权和许可声明必须保留** 贡献者明确授予专利权。当使用修改后的版本通过网络提供服务时，必须提供修改后版本的完整源代码。

### **添加 189 云存储时：设备 ID 不存在，需要二次设备验证 ​**

可能是触发了风控。更改密码后，再次添加即可。

### **添加 天翼云盘客户端 存储时：提示 need img validate code: 验证码**

- 点击编辑，把刚刚看到的验证码写进配置里面点击保存
- 点击编辑，把不使用OCR 按钮打开 ^(荐)^
- 或者自己进行搭建[**Ocr接口**](../config/global.md#ocr-api)
- **天翼云盘**驱动因Web端登录已更换为滑动验证码，**不再支持ocr与手动输入**，若需要验证码请使用添加`Cookie进行登录`或使用`天翼云盘客户端`驱动(^注意看是天翼云盘驱动不是天翼云盘客户端^)

### **TLS handshake timeout? / read: connection reset by peer? / dns lookup failed? / connect: connection refused / Client.Timeout exceeded while awaiting headers?  / no such host?**

诸如此类的网络问题，请自行排查解决。不要为此提出任何的issue


### **怎么添加epub阅读**

后台 ——>设置——>预览——>Iframe 预览，写在PDF后面

```html{2-5}
/*下面的这个逗号也是哦，这个注释就不要复制了，从第二行开始复制*/
,
  "epub": {
    "EPUB.js":"/static/epub.js/viewer.html?url=$e_url"
  }
```

3.7.x 版本及更高的版本已经支持  ".epub" 阅读
但是需要自己手动添加(因为已经创建过数据库了 不好给你覆盖会出错)
如果是第一次安装启动（3.7.x版本及更高的版本）不用手动添加
如果设置了二级目录反代，请在[site_url](../config/configuration.md#site-url)中自行添加相应前缀，然后重启AList才会生效

### **如何快速定位Bug**

如果发现Bug，但是`log.log`的日志不详细，可以尝试在 启动时候添加 `--debug` 参数启动

建议在使用`--debug` 参数启动之前将 **AList目录下的日志文件`/log/log.log` 清空**，这样方便开发者们后续快速定位问题

::: danger
使用`--debug`参数启动时，会有一些敏感数据 例如 **`账号密码，刷新令牌`** 等，所以如果在你发给别人之前需要先处理一下脱敏
:::


- **Windows**：`alist.exe server --debug`
- **Linux**：`./alist server --debug`
- **Mac**：暂时未知，可能也是可以加 `--debug` 参数启动
- **Docker**：`docker exec -it alist ./alist server --debug`

启动后拿到相关日志，如何停止?  `Ctrl+c` 可以使程序停止运行（或者简单粗暴直接关闭程序）
