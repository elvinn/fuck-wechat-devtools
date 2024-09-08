# 微信开发者工具杀手

还在忍受使用微信开发者工具后的卡顿吗？
还在经历使用微信开发者工具后，卡到需要手动重启的痛苦吗？

通过 `npx kill-wechat-devtools` 一键删除微信开发者工具全部进程吧！

## 例子

命令行执行：

``` bash
npx kill-wechat-devtools
```

也可以在 Node.js 代码中使用：

``` javascript
const killWechatDev = require('kill-wechat-devtools');

killWechatDev().then(() => {
  console.log('人生苦短');
});
```
