# vue-cli-plugin-vux

vue-cli 3.0 vux 插件，快速安装 vux 到你的项目中

## 开始

```
$ vue add vux
$ vue invoke vux
```

## 生成了什么？

```
✔  Successfully invoked generator for plugin: vue-cli-plugin-vux
   The following files have been updated / added:

     vue.config.js
     package.json
     src/App.vue
     yarn.lock
```

## [vux-loader Issues: [Feature Request] 是否支持新的vue/cli@3.0](https://github.com/airyland/vux-loader/issues/66)

vux-loader 会和 vue-loader@15.x.x 冲突，会出现下面的 Error，需要降级 vue-loader 方可使用，本插件已做处理✅

```
ERROR  Failed to compile with 1 errors                                                                                                                                      14:39:47

 error  in ./src/views/Home.vue

Module parse failed: Unexpected token (3:0)
You may need an appropriate loader to handle this file type.
| import { render, staticRenderFns } from "./Home.vue?vue&type=template&id=fae5bece&"
| import script from "./Home.vue?vue&type=script&lang=js&"
> ../../node_modules/vux-loader/src/script-loader.js!export * from "./Home.vue?vue&type=script&lang=js&"
|
|

 @ ./src/router.js 3:0-36 11:15-19
 @ ./src/main.js
 @ multi (webpack)-dev-server/client?http://localhost:8080/sockjs-node (webpack)/hot/dev-server.js ./src/main.js
```