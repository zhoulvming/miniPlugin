
# 基于mpvue搭建小程序项目框架 
## 项目结构
### 使用scss语法
`cnpm install node-sass sass-loader --save-dev`






## 用promise封装异步请求函数 

```
// 假设以下代码在 `/src/utils/requestMethod.js`
let serverPath = 'http://www.abc.com/api/'
export function post(url,body) {
    return new Promise((resolve,reject) => {
        wx.request({
              url: serverPath + url    // 拼接完整的url
              data: body
              method:'POST',
              header: {
                  'content-type': 'application/json'
              },
              success(res) {
                resolve(res.data)  // 把返回的数据传出去
              },
              fail(ret) {
                reject(ret)   // 把错误信息传出去
              }
            })
    })
}
```
