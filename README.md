# React-intl Internationaliztion API

### API应用环境
* React-intl的应用依赖于`Internationaliztion API`，这些APIs现代浏览器和NodeJS（>0.12）内涵；
* 对于老版浏览器需要[搭建一些环境](http://formatjs.io/guides/runtime-environments/)；

### [React-intl](http://formatjs.io/react/v1/)简要介绍
* React-intl是FormatJS的一部分，内置实现Date/Number/Time的国际格式化；
* 可以自定义映射关系，完成值对之间的替换（这是这篇文章的主要内容）；
* 通过获取浏览器的language来设置显示中文/英文（通过自定义映射，而非自动全文转换）；
* 常用于实现静态内容，如按钮文字，公司名称的转换；

### React框架结合国际化所需要的依赖包
    "babel-core": "^6.22.1",
    "babel-loader": "^6.2.10",
    "babel-preset-env": "^1.1.8",
    "babel-preset-es2015": "^6.22.0",
    "babel-preset-react": "^6.22.0",
    "copy-webpack-plugin": "^4.0.1",
    "html-webpack-plugin": "^2.26.0",
    "react": "^15.4.2",
    "react-dom": "^15.4.2",
    "react-intl": "^2.2.3",
    "webpack": "^2.2.0",
    "webpack-del-plugin": "0.0.1",
    "webpack-dev-server": "^1.16.2",
    "webpack-notifier": "^1.5.0"
	
### [React-intl格式化语法](http://formatjs.io/guides/message-syntax/)
~~该部分有详细的介绍，因此忽略~~

# [自定义国际型格式化](http://formatjs.io/react/v1/#formatted-message)
**重点部分：**[该项目demo单一功能（internationalization）](https://github.com/mihuartuanr/React-i18n)    **demo中每一部分都有详细的讲解**
* 不知道这个功能是很蹩脚，还是蹩脚，网上的例子几乎没有，[官网的例子](https://github.com/yahoo/react-intl/tree/master/examples/)……我已经无言了，建议不要看[官网](https://github.com/yahoo/react-intl/)了*


### 常见问题
1. [React Intl] Missing locale data for locale: "zh-CN". Using default locale: "en" as fallback.


* 要引入所设locale的语言库`import enLocaleData from 'react-intl/locale-data/zh'`该文件为react-intl包自动下载——还有一个好处：在我们引入另一个自定义的映射时，依旧可以使用react-intl原有的数字/时间等数据的国际格式化；
 * 添加指定语言库`addLocaleData(enLocaleData);`

2. 设置&获取浏览器的locale
  * chrome：
  ![chrome设置——高级设置——语言和输入设置](https://github.com/mihuartuanr/React-i18n/blob/master/app/src/images/Readme.gif)
  * js获取浏览器语言设置：

		let languages = navigator.languages;
		console.log("languages: ", languages);
		//=>languages:  ["zh-CN", "zh", "en-US", "en"]
    
    

### demo使用方法
* 安装有nodejs和webpack环境；
* 克隆或下载下来的文件夹进行`npm init -y`
* 安装依赖`pm install`
* 通过`npm run start`利用本地服务器查看
* 打开浏览器`localhost:3000`查看页面

### 使用效果预览
![自动映射浏览器语言设置](https://github.com/mihuartuanr/React-intl/blob/master/app/src/images/output.gif)

### 参考文档
1. [Format.JS](http://formatjs.io/)
2. [github/yahoo/react-intl](https://github.com/yahoo/react-intl/)
3. [NPM/react-intl](https://www.npmjs.com/package/react-intl)
4. [Internationalization in React](https://www.ogi-it.com/presentation/react_i18n.pdf)
5. [Segmentfault/webFunc](https://segmentfault.com/a/1190000005824920)
