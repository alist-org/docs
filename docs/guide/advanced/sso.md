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

# Third-party single sign-on
### **Single sign-on client id**

client ID

### **Single sign-on client secrets**

secrets ID



::: warning matters needing attention

1. Remember to write and save the background parameters of AList. After writing and saving, you have to go back to the bottom of the personal data and there will be a button that needs to be bound, otherwise it cannot be used

2. Only one of the four types of single sign-on can be enabled temporarily. If you used other single sign-on methods before and then changed to a new single Unbind (just one click) and then bind the single sign-on method you want to use now.

3. If you use **`GitHub,Microsoft,Google,DingTalk`**, you only need to fill in the client ID and secret key, and select the corresponding platform in the options.

   - If you use **`Casdoor`** the following parameters need to be filled in, just follow the tutorial to fill in


:::



::::tabs#sso

@tab GitHub

::: warning
If you want to use GitHub to log in, you first need the machine you built Alist to be able to connect to GitHub before you can call and use it, otherwise you cannot use it if the link is not connected
:::

Open **https://github.com/settings/developers** Click **`New OAuth App`**



### **Register OAuth Instructions**

- Application name
     - Write whatever you want to call it
-  ==**Homepage URL**== 
   - home URL address
     - Both **http** and **https** can be used
- Application description
   - write whatever you want
-  ==**Authorization callback URL**== 
   - Callback URL address
   - **https://your_domain/api/auth/sso_callback**
     - Both **http** and **https** can be used



Remember to get **Client secrets** after filling it out, and then fill it in the Alist background.

Remember to write and save the background parameters of AList. After writing and saving, you have to go back to the bottom of the personal data and there will be a button that needs to be bound, otherwise it cannot be used

### **Completely fill in the reference schematic**

![sso](/img/advanced/github.png)



### **GitHub login Video Tutorials**

<ArtPlayer
  src="https://hub.onmicrosoft.cn/public/video/weibo?uid=7821998556&cursor=4872400300415846&raw=true" 
  poster="/img/advanced/github-login.png"
/>

**If the video fails, you can watch it here: https://b23.tv/Fm8AkC5**

@tab Dingtalk



First open **https://open-dev.dingtalk.com/fe/app#/corp/app**

In the upper right corner, first select `New Application`, select `H5 Micro Application` as the type, fill in the content by yourself and click Confirm to create

Click on the new application and we will see the application credentials option, where `AppKey` is the client ID, and `AppSecret` is the client secret key

- Just fill in the corresponding parameters in the Alist background single sign-on

Go to the left column and find `Login and Share` == Fill in the callback parameters **`http://127.0.0.1:5234/api/auth/sso_callback`**==

```Callback parameter example
http://127.0.0.1:5244/api/auth/sso_callback
```

- Note: I used the callback parameter here for local testing. http://127.x When you use it, Write **http(s):\//your own domain name/api/auth/sso_callback** when filling in and using it by yourself

Write the callback parameters well. Let’s go to the left column and find `Privilege Management`, find **`Personal Information Read Permission of Address Book`** and click to authorize



Remember to write and save the background parameters of AList. After writing and saving, you have to go back to the bottom of the personal data and there will be a button that needs to be bound, otherwise it cannot be used

### **Completely fill in the reference schematic**

![sso](/img/advanced/dingding.png)



@tab Microsoft



First open **https://portal.azure.com/#view/Microsoft_AAD_RegisteredApps/ApplicationsListBlade**

Then register to create an application, I won't say much here, you can see the complete schematic diagram

Account type must be selected: **Account in any organizational directory (any Azure AD directory - multi-tenant)**

Microsoft callback parameters: must start with "HTTPS" or "http://localhost (I used localhost here for local testing)

```Callback parameter example
http://localhost:5244/api/auth/sso_callback?method=sso_get_token
http://localhost:5244/api/auth/sso_callback?method=get_sso_id
```

- Write **http(s):\//your own domain name/api/auth/sso_callback?method=sso_get_token** when filling in and using it by yourself
- Write **http(s):\//your own domain name/api/auth/sso_callback?method=get_sso_id** when filling in and using it by yourself
- Note: When adding a redirect URL to a new application, only one can be added. After the application is registered and registered, click on the application to see the options behind the redirect URI

After filling it out, we click `Certificate and Password` on the left column to create a new `Client Password` to get our client secret key

- After the client password is created, the **`value`** parameter is our `client key`, remember to save it, it will not appear again if it appears once, if you don’t save it in time, just create a new client password

The client ID is in `Overview` at the top of the left column, find the application (client) ID, which is the client ID we need to fill in the Alist

- We have got the client ID and secret key and fill them in the AList single sign-on configuration.



Remember to write and save the background parameters of AList. After writing and saving, you have to go back to the bottom of the personal data and there will be a button that needs to be bound, otherwise it cannot be used

### **Completely fill in the reference schematic**

![sso](/img/advanced/weiruan.png)



@tab Google

::: warning
If you want to use Google to log in, you first need the machine you built Alist to be able to connect to Google before you can call and use it, otherwise you cannot use it if the link is not connected
:::

1. First open **https://console.cloud.google.com/projectselector2/apis/dashboard?hl=zh-cn**

2. If you are using it for the first time, you need to create a new project first (just write whatever you want, skip it if it has already been created)

3. Then configure the [consent screen](#agree-to-screen-configuration) (there is a separate instruction on how to configure the document, if it is already configured, skip it)

4. After configuring the unified screen, we click the credentials on the left, create credentials, and select OAuth client ID

- Application Type Select Web Application, and write the name as you like
- Then add our two callback parameters in the authorized redirect URI

```Callback parameter example
http://127.0.0.1:5244/api/auth/sso_callback?method=get_sso_id
http://127.0.0.1:5244/api/auth/sso_callback?method=sso_get_token
```

- Write **http(s):\//your own domain name/api/auth/sso_callback?method=get_sso_id** when filling in and using it by yourself
- Write **http(s):\//your own domain name/api/auth/sso_callback?method=sso_get_token** when filling in and using it by yourself

After filling it out, click Create to get the OAuth client ID and secret key

- (It doesn't matter if you accidentally close it here, just click on the name of the application we created and enter it in the upper right position to see it)

We have got the client ID and secret key and fill them in the AList single sign-on configuration.



Remember to write and save the background parameters of AList. After writing and saving, you have to go back to the bottom of the personal data and there will be a button that needs to be bound, otherwise it cannot be used

#### **Agree to screen configuration**

If it has been configured, just ignore this picture (you can zoom in if you can’t see it clearly)

![Google](/img/drivers/google/Google-6.png)

### **Completely fill in the reference schematic**

![sso](/img/advanced/google.png)



@tab Casdoor

What is `Cadoor`? Yes, you can use other OAuth applications to log in. [**Self-deployment**](https://casdoor.org/docs/basic/server-installation) is open source and free, and official hosting requires payment.

Now, Casdoor supports many OAuth application providers, as many as dozens of kinds, you have seen and not seen

**GitHub open source link: https://github.com/casdoor/casdoor**

-----

After we enter `Casdoor`, we first create **Organization**^1^, **Token**^2^, **Application**^3^, **User**^4^

Do not use the default organization (**app-built-in**) directly, because all users in this organization are global administrator accounts

Then fill in the `AList` backstage single sign-on option one by one. The user’s parameters are ignored for the time being. They are filled in when the personal data is bound to the single sign-on.

![sso](/img/advanced/casdoor.png)

After filling in the above parameters, we come to the personal data and click `Bind point single sign-on platform` to bind

Then the `Casdoor` window will pop up, we can enter our registered user name

![sso](/img/advanced/casdoor-user.png)


----

#### **Access some other vendors on Casdoor**

In addition to the four that `AList` has already connected to `GitHub Dingding Google Microsoft`, it is also connected to `QQ Baidu Feishu WeChat/Enterprise WeChat Douyin Bilibili` and so on, all [**click Check out all the manufacturers that can be accessed here**](https://casdoor.org/docs/provider/oauth/overview), of course, the four that `AList` has already accessed can also be added to `Casdoor`

**View detailed tutorials on accessing other providers: [click to view](https://anwen-anyi.github.io/index/09-ssologin.html)**

::: details Direct iframe viewing
<iframe src="https://anwen-anyi.github.io/index/09-ssologin.html#%E6%8E%A5%E5%85%A5" name="iframe_a" scrolling="ok" frameborder="0" width="100%" height="1000" style="scrolling: no;1px solid #ccc; border-radius: 16px;"></iframe>
:::

::::

## **SSO automatically registers as an AList account**

::::tabs#sso

@tab GitHub

None, currently only supports `Casdoor`

@tab Dingtalk

None, currently only supports `Casdoor`

@tab Microsoft

None, currently only supports `Casdoor`

@tab Google

None, currently only supports `Casdoor`

@tab Casdoor

Before using single sign-on to register as an AList account, we need to bind the single sign-on of AList first, the binding method is explained above

- Do not use the default organization (**app-built-in**) directly, because all users in this organization are global administrator accounts

At present, it only supports automatic registration as an AList account using `Casdoor`



### **<i class="fa-solid fa-circle-0" style="color: #409eff;"></i>.SSO Full Fill Demo**

Please refer to the detailed description below for how to fill in, the schematic diagram is just a reference for filling in and not suitable for everyone’s user habits

![](/img/advanced/sso-add.png)



### **<i class="fa-solid fa-circle-1" style="color: #409eff;"></i>.SSO auto register**

If we want SSO single sign-on to be registered as an AList account, we need to enable this option before it can be used



### **<i class="fa-solid fa-circle-2" style="color: #409eff;"></i>.SSO default dir**

That is to say, the default path used by the registered account is equivalent to the `Base path` in the AList user settings.

It can be the root directory `/`, or the path `/path/test/Demo` specified by the user

![](/img/advanced/sso-dir.png)



### **<i class="fa-solid fa-circle-3" style="color: #409eff;"></i>.SSO default permission**

It is equivalent to which permissions are enabled by default for registered users, as shown below

![](/img/advanced/sso-permission.png)

The default is 0, no permission is enabled

If we need to enable some permissions during registration, we only need the sum of the numbers of different permissions

For example：

1. We need to open the user's `WebDav reading` and `WebDav manage ` by default, that is 256+512=768, we just fill in `768` in the options
2. If we need to open the three permissions of `Make dir or upload`, `Rename` and `Delete` by default when registering, then it is 8+16+128=152, we can fill in `152` in the background

I won’t say much about the examples, just add the permissions you need



### **<i class="fa-solid fa-circle-4" style="color: #409eff;"></i>.SSO user group**

Fill in the parameters can be empty or not, or fill in the name of the `Casdoor` Group

-----

**Let's talk about the advantages and disadvantages of being empty and not being empty:**

| Fill in the parameters | advantage                                               | shortcoming                                               |
| :--------------------: | :------------------------------------------------------ | :-------------------------------------------------------- |
|          null          | Easy to register as an AList account                    | Anyone can register at will, not safe                     |
|        not null        | Can prevent users from maliciously registering accounts | You need to manually add groups for users, but it is safe |

The default is empty, nothing needs to be filled

-----

If it is not empty, you need to create a new group in `Casdoor`, and then assign the group to the specified person

1. Create a new Group and bind the organization
2. Enter the user to find the user who added the Group
3. Enter the user settings, pull down to find the group and assign the Group to the user

![](/img/advanced/sso-group.png)



#### **<i class="fa-solid fa-circle-5" style="color: #409eff;"></i>.Precautions and instructions**

**5.1-There is already this user in the AList user database**

```json{3}
{
  "code": 400,
  "message": "UNIQUE constraint failed: x_users.username",
  "data": null
}
```
**5.2-No group has been added to the user, or the added group is inconsistent with the group filled in the AList background**

```json{3}
{
  "code": 400,
  "message": "user group not allow to register",
  "data": null
}
```

**5.3-After the old version was upgraded, no group option was found, and there was no group option in the user information**

If the version above **v1.365.0** is used for the first installation, this problem will not occur. It is recommended to use the latest version of **Releases** for the first installation.

1. There is no group option at the top of `Casdoor` because the configuration file is not configured after the upgrade of the old version
    - Add **`initDataFile = "./init_data.json"`** to the last line of configuration file `/conf/app.conf`

2. The group configuration is not found in the user information, which is caused by the upgrade of the lower version. The solution is as follows
    - Because the database is not cleared (no need to clear it), you need to modify the `Group` attribute first, change `immutable` to `admin`, and modify it in the organization configuration:

![](/img/advanced/sso-org-config.png)

::::