# Webpack4.8.1

最新版本Webpack4.8.1,当我在使用webpack3.6.0时，发现以前的配置方法完全没有用 运行webpack命令会出现报错，于是我查阅了大量资料自己配置全新的webpack。

### 具体步骤

- 全局安装Webpack4.8.1
``` npm
    npm install -g webpack
```
- 创建项目文件夹Webpack-tutorial
```cmd
    mkdir Webpack-tutorial & cd Webpack-tutorial
```
- 初始化项目得到package.js
```npm
    npm init -y
```
- 在Webpack-tutorial目录下新建Webpack-tutorial/src/index.js文件，作为默认入口文件
    <div align="space-between">
        <img src="https://github.com/Jack-PrettySunshine/Webpack-tutorial/blob/webpack4.81/img/01.png" width="375"/>
    </div>

- 修改package.js如下
```json
    {
      "name": "webpack4.8.1",
      "version": "1.0.0",
      "description": "webpack高版本配置",
      "main": "index.js",
      "scripts": {
        "start": "webpack-dev-server --mode development --output-public-path dist --open",
        "dev": "webpack --mode development --watch ",
        "build": "webpack --mode production"
      },
      "dependencies": {
        "jquery": "^3.2.1"
      },
       "babel":{
        "presets": ["env"]
      },
      "author": "homer",
      "license": "MIT",
      "devDependencies": {
        "babel-core": "^6.26.0",
        "babel-loader": "^7.1.4",
        "babel-preset-env": "^1.6.1",
        "clean-webpack-plugin": "^0.1.19",
        "css-loader": "^0.28.11",
        "html-webpack-plugin": "^3.2.0",
        "style-loader": "^0.20.3",
        "webpack": "^4.8.1",
        "webpack-cli": "^2.1.3"
    }
   }
```

- 本地安装(当前项目)安装webpack
```npm
    cnpm install webpack --save-dev
```

