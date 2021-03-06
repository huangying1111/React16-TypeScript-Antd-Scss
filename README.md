#### 就绪
> 使用到的16新特性
> 1. Error Boundaries
> 2. Context
> 3. Fragments
> 4. Portals

#### 初始化
> [使用antd官方命令创建创建项目](http://ant-design.gitee.io/docs/react/use-in-typescript-cn),
确保电脑上已经安装了最新版的 yarn 或者 npm（以yarn作为例子）

```
 yarn create react-app antd-demo-ts --scripts-version=react-scripts-ts
```
> 引入 antd , react-app-rewired, ts-import-plugin 并修改 package.json 里的启动配置


```
 yarn add antd
 yarn add ts-import-plugin react-app-rewired --dev
```

```
/* package.json */
"scripts": {
-   "start": "react-scripts-ts start",
+   "start": "react-app-rewired start --scripts-version react-scripts-ts",
-   "build": "react-scripts-ts build",
+   "build": "react-app-rewired build --scripts-version react-scripts-ts",
-   "test": "react-scripts-ts test --env=jsdom",
+   "test": "react-app-rewired test --env=jsdom --scripts-version react-scripts-ts",
}
```

> ts-import-plugin 是一个用于按需加载组件代码和样式的 TypeScript 插件（原理），现在我们尝试安装它并修改 config-overrides.js 文件。

```
/* config-overrides.js */
const tsImportPluginFactory = require('ts-import-plugin')
const { getLoader } = require("react-app-rewired");

module.exports = function override(config, env) {
  const tsLoader = getLoader(
    config.module.rules,
    rule =>
      rule.loader &&
      typeof rule.loader === 'string' &&
      rule.loader.includes('ts-loader')
  );

  tsLoader.options = {
    getCustomTransformers: () => ({
      before: [ tsImportPluginFactory({
        libraryDirectory: 'es',
        libraryName: 'antd',
        style: 'css',
      }) ]
    })
  };

  return config;
}
```

> 配置sass

```
 yarn add sass-loader node-sass --dev
```

> 在node_modules/react-scripts/config下找到 webpack.config.dev.js 文件，在 exclude 中添加 /.scss$/。 webpack.config.prod.js同理

![image](http://pcrr0f5mj.bkt.clouddn.com/sass%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6.png)

#### 问题
1. 本地提交到git报错“HttpRequestException encountered”，解决方案：
[Github 禁用了TLS(安全传输层协议（TLS）用于在两个通信应用程序之间提供保密性和数据完整性) v1.0 and v1.1，必须更新Windows的git凭证管理器](https://github.com/Microsoft/Git-Credential-Manager-for-Windows/releases/)