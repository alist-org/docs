---
# This is the icon of the page
icon: state
# This control sidebar order
order: 30
# A page can have multiple categories
category:
  - Guide
# A page can have multiple tags
tag:
  - Storage
  - Guide
# this page is sticky in article list
sticky: true
# this page will appear in starred articles
star: true
---

# Thunder Cloud Disk

:::tip
Please use Thunder directly instead of ThunderExpert if you are not good at it.

ThunderExpert mainly provides more free settings and realizes more login methods
:::
## Thunder

### username
That is, the mobile phone number, email, and username used for login (there is a probability that you cannot log in, you need to try)

### password
password for login

### CaptchaToken
Need verify: {url} may appear when logging in or uploading, please visit the link in the error to complete the verification and get CaptchaToken


## ThunderExpert

:::tip
If Thunder needs to download, you must specify UserAgent (same as DownUserAgent below)
Or use the proxy function in this program to transfer.
:::

### Login Type
When selecting User, you only need to fill in the username and password

When selecting RefreshToken, just fill in RefreshToken

### Signature Type
When selecting Algorithms, just fill in the Algorithms (it is difficult to obtain and needs to be reversed)

When selecting CaptchaSign just fill in CaptchaSign and Timestamp


````
//signature algorithm
str = ClientID + ClientVersion + PackageName + DeviceID + Timestamp
for (Algorithm in Algorithms) {
    str = md5(str + Algorithm)
}
CaptchaSign = "1." + str
````

### DeviceID
The value calculated by md5 is used to determine the logged in device

### ClientID, ClientSecret, ClientVersion, PackageName

It is related to the signature, fill in according to the actual situation

### UserAgent
UserAgent used by API requests, may be inaccessible or speed limited if the setting is incorrect

### DownUserAgent
The UserAgent used for downloading, if the setting is wrong, it will not be downloaded (it will be used when the agent is turned on)

## Key data acquisition process
Obtain Thunder request data through network analysis tools

Open Thunder and log in to your account

Included in the request https://xluser-ssl.xunlei.com/v1/shield/captcha/init
CaptchaSign, Timestamp, DeviceID, ClientID, ClientVersion, PackageName

Restarting Thunder will refresh the token

The request https://xluser-ssl.xunlei.com/v1/auth/token contains RefreshToken (please use the returned value), ClientSecret (does not exist on the web side)