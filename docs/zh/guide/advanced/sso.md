---
# This is the icon of the page
icon: group
# This control sidebar order
order: 9
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Advanced
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# 单点登录

### Single sign-on client id

客户端ID

### Single sign-on client secrets

秘钥ID



::: warning 注意事项

1. AList 后台参数也记得写好保存，写好保存后也要回到个人资料下方会有一个需要绑定的按钮进行绑定，否则无法使用

2. 四种单点登录暂时只能启用一种，如果你之前用的是别的单点登录方式然后换了新的单点登录方式 那么你回到个人资料绑定的时候需要先将之前的解绑（点击一下即可）然后再绑定现在你要使用的单点登录方式。
3. 如果使用  **`GitHub,微软,谷歌,钉钉`**，只需要填写客户端ID和秘钥，选项中选择对应的平台即可
   - 如果使用**`Casdoor`** 以下的参数都需要填写，照着教程填写即可

:::



::::tabs#sso

@tab GitHub

::: warning
若想使用GitHub登录，首选需要你搭建Alist的机器能连接访问GitHub才可以调用使用，不然连接不上无法使用
:::



打开 **https://github.com/settings/developers**  点击  **`New OAuth App`**

### Register OAuth 填写说明


- Application name
  - 随便写想叫什么叫什么
- ==**Homepage URL**== 
  - 主页网址地址
    - 可以使用http https都可以
- Application description
  - 随便写
- ==**Authorization callback URL**==
  - 回调URL地址
  - **https://你的域名/api/auth/sso_callback**
    - 可以使用http https都可以



填写完毕后记得获取一下 **Client secrets**，然后填写到Alist后台。




#### 完整填写参考示意图

![sso](/img/advanced/github.png)



### 视频教程

<ArtPlayer
  src="https://hub.onmicrosoft.cn/public/video/weibo?uid=7821998556&cursor=4872400300415846&raw=true" 
  poster="/img/advanced/github-login.png"
/>

**视频若失效可以前往观看: https://b23.tv/Fm8AkC5**

@tab 钉钉



首先打开 **https://open-dev.dingtalk.com/fe/app#/corp/app**

右上角先 `新建应用`，类型选择 `H5微应用` ,内容自己填写点击确认创建

点击新建好好的应用我们就会看到应用凭证选项，里面的 `AppKey` 就是客户端ID，`AppSecret` 是客户端秘钥

- 填写到Alist后台单点登录内对应的参数即可

来到左侧栏找到 `登录与分享`  ==填写回调参数 **`http://127.0.0.1:5234/api/auth/sso_callback`**== 

```回调参数示例
http://127.0.0.1:5244/api/auth/sso_callback
```

- 注：我这里回调参数是本地测试就使用了 http://127.x 大家使用的时候写 **http(s):\//自己域名/api/auth/sso_callback**

回调参数写好好我们来到左侧栏找到 `权限管理` 找到 **`通讯录个人信息读权限`** 然后点击进行授权

Alist 后台参数也记得写好保存，写好保存后也要回到个人资料下方会有一个需要绑定的按钮进行绑定，否则无法使用

#### 完整填写参考示意图

![sso](/img/advanced/dingding.png)



@tab 微软

首先打开 **https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade**

然后注册创建应用，我这里就不多说了可以看完整示意图

账户类型必须选择：**任何组织目录(任何 Azure AD 目录 - 多租户)中的帐户**

微软回调参数：必须以"HTTPS"或"http://localhost开头 （我这里是本地测试就用了localhost）

```回调参数示例
http://localhost:5244/api/auth/sso_callback?method=sso_get_token
http://localhost:5244/api/auth/sso_callback?method=get_sso_id
```
- 大家使用的时候写 **http(s):\//自己域名/api/auth/sso_callback?method=sso_get_token**
- 大家使用的时候写 **http(s):\//自己域名/api/auth/sso_callback?method=get_sso_id**
- 注：在新建应用时添加重定向URL的时候只能添加一条，第二条等应用好注册好后点击应用看到 重定向 URI 后面的选项

填写好后我们点击左侧栏的 `证书和密码` 新建一个 `客户端密码`即可获得我们的客户端秘钥

- 客户端密码创建好后 **`值`** 参数是我们的`客户端秘钥`，记得保存，出现一次就不会在出现了，如果没有及时保存新建一个客户端密码即可

客户端ID在左侧栏顶部的 `概述`，找到 应用程序(客户端)ID 就是我们需要填写到Alist里面的客户端ID

- 客户端ID和秘钥我们都拿到了填写到AList单点登录配置里面去即可


Alist 后台参数也记得写好保存，写好保存后也要回到个人资料下方会有一个需要绑定的按钮进行绑定，否则无法使用



#### 完整填写参考示意图

![sso](/img/advanced/weiruan.png)



@tab 谷歌

::: warning
若想使用Google登录，首选需要你搭建Alist的机器能连接访问Google才可以调用使用，不然连接不上无法使用
:::

1. 首先打开 **https://console.cloud.google.com/projectselector2/apis/dashboard?hl=zh-cn**

2. 如果是第一次使用需要先新建一个项目（随便写就行，如果已创建跳过）

3. 然后配置[同意屏幕](#同意屏幕配置)（如何配置文档中有单独说明，如果已经配置好跳过）

4. 配置好统一屏幕后我们点左侧的凭据，创建凭据，选择OAuth 客户端ID

- 应用类型 选择 Web 应用，名称随便写
- 然后在 已获授权的重定向 URI 添加我们的两个回调参数
```回调参数示例
http://127.0.0.1:5244/api/auth/sso_callback?method=get_sso_id
http://127.0.0.1:5244/api/auth/sso_callback?method=sso_get_token
```
- 大家使用的时候写 **http(s):\//自己域名/api/auth/sso_callback?method=get_sso_id**
- 大家使用的时候写 **http(s):\//自己域名/api/auth/sso_callback?method=sso_get_token**

填写好后，点击创建就能拿到  OAuth的客户端ID和秘钥

- （在这里如果你不小心关闭了也没关系，点击我们创建的应用名称进去在右上的位置就能看到）

客户端ID和秘钥我们都拿到了填写到AList单点登录配置里面去即可

Alist 后台参数也记得写好保存，写好保存后也要回到个人资料下方会有一个需要绑定的按钮进行绑定，否则无法使用

#### 同意屏幕配置

如已配置好 忽略本图即可(如果看不清楚可以放大)

![Google](/img/drivers/google/Google-6.png)

#### 完整填写参考示意图

![sso](/img/advanced/google.png)



@tab Casdoor

`Cadoor` 是什么？ 是可以使用其他 OAuth 应用程序登录，[**自行部署**](https://casdoor.org/zh/docs/basic/server-installation)开源免费，使用他们官方托管是需要付费的。

现在，Casdoor 支持许多OAuth 应用程序提供者，多达几十种，你见过的没见过的都有

**GitHub开源链接：https://github.com/casdoor/casdoor**

-----

我们进入`Casdoor`后，首先分别新建一下 **组织**^1^，**令牌**^2^，**应用**^3^，**用户**^4^

然后依次填写到`AList`后台单点登录选项内，用户的参数暂时不用管，是在个人资料绑定单点登录的时候填写的

![sso](/img/advanced/casdoor.png)

以上参数填写好后，我们来到个人资料这里点击`绑定点单登录平台`，进行绑定

然后弹出`Casdoor`窗口，我们输入我们注册的用户名即可

![sso](/img/advanced/casdoor-user.png)

----

#### 在Casdoor接入一些其他的厂商

除了现在`AList`已经接入的 `GitHub 钉钉 谷歌 微软 `这四个除外还接入`QQ 百度 飞书 微信/企业微信  抖音 哔哩哔哩`等等等个，全部的[**点击这里查看全部可以接入的厂商**](https://casdoor.org/zh/docs/provider/oauth/overview)，当然了`AList`已经接入的四个也是可以添加到`Casdoor`

**查看详细接入其它提供商教程：[点击查看](https://anwen-anyi.github.io/index/09-ssologin.html)**

::: details 直接 iframe 查看
<iframe src="https://anwen-anyi.github.io/index/09-ssologin.html#%E6%8E%A5%E5%85%A5" name="iframe_a" scrolling="ok" frameborder="0" width="100%" height="1000" style="scrolling: no;1px solid #ccc; border-radius: 16px;"></iframe>
:::

::::
