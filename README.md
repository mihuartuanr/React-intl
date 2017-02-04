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

**index.js**
```
import React from 'react';
import ReactDOM from 'react-dom';
// 从'react-intl'中引入addLocaleData,IntlProvider,FormattedMessage三个格式化组件；
import {addLocaleData,IntlProvider,FormattedMessage} from 'react-intl';
/*
*引入与navigator.languages[0]所对应的语言；
*如果没有引入对应的语言，会使用默认的“en”；
*导致FormattedMessage的映射不会成功；
*/
import enLocaleData from 'react-intl/locale-data/zh';
/*
*引入自定义的映射表；
*通过与FormattedMessage的id值来当索引映射返回值；
*/
import zh_CN from './locale/zh_CN';
import en_US from './locale/en_US';
import App from './components/app';
/*
*messages是render()时IntlProvider组件所传的props，属性名固定：messages；
*messages返回值为映射表，比如：'react-intl/locale-data/zh'&&'./locale/zh_CN'；
*/
let messages = {};
messages["en-US"] = en_US;
messages["zh-CN"] = zh_CN;
/*
*获取浏览器设置的语言；
*按我demo中的设置，返回["zh-CN", "zh", "en-US", "en"]，排序与语言设置顺序一直；
*/
const languages = navigator.languages;
const currentLang = languages[0];
console.log("languages: ", languages);
console.log("language: ", currentLang);
// 载入语言数据；
addLocaleData(enLocaleData);

ReactDOM.render(
    // IntlProvider为'react-intl'指定的包裹组件名；
    <IntlProvider locale={currentLang} messages={messages[currentLang]}>
        <App />
    </IntlProvider>,
    document.body
)

/*
浏览器languages大全：
"af", "sq", "ar-SA", "ar-IQ", "ar-EG", "ar-LY", "ar-DZ", "ar-MA", "ar-TN", "ar-OM",
    "ar-YE", "ar-SY", "ar-JO", "ar-LB", "ar-KW", "ar-AE", "ar-BH", "ar-QA", "eu", "bg",
    "be", "ca", "zh-TW", "zh-CN", "zh-HK", "zh-SG", "hr", "cs", "da", "nl", "nl-BE", "en",
    "en-US", "en-EG", "en-AU", "en-GB", "en-CA", "en-NZ", "en-IE", "en-ZA", "en-JM",
    "en-BZ", "en-TT", "et", "fo", "fa", "fi", "fr", "fr-BE", "fr-CA", "fr-CH", "fr-LU",
    "gd", "gd-IE", "de", "de-CH", "de-AT", "de-LU", "de-LI", "el", "he", "hi", "hu",
    "is", "id", "it", "it-CH", "ja", "ko", "lv", "lt", "mk", "mt", "no", "pl",
    "pt-BR", "pt", "rm", "ro", "ro-MO", "ru", "ru-MI", "sz", "sr", "sk", "sl", "sb",
    "es", "es-AR", "es-GT", "es-CR", "es-PA", "es-DO", "es-MX", "es-VE", "es-CO",
    "es-PE", "es-EC", "es-CL", "es-UY", "es-PY", "es-BO", "es-SV", "es-HN", "es-NI",
"es-PR", "sx", "sv", "sv-FI", "th", "ts", "tn", "tr", "uk", "ur", "ve", "vi", "xh",
"ji", "zu"];*/
```

**app.js**
```
import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        /* 
        *FormattedMessage组件中的信息parser后显示以<span>包裹的文本；
        *可以通过tagName指定其它标签包裹；
        *以id属性的值"hello"为索引——索引到自定义的映射表'./locale/zh_CN'中去；
        *messages['hello']——messages为父组件IntlProvider的props的messages属性；
        *若没有上述的返回值，则显示defaultMessage的值"React Intl Translations Example";
        */
        /*
        *FormattedMessage添加子元素或ReactElement；
        *  <FormattedMessage id="hello">
        *      {(formattedValue)=>(
        *          <em>{formattedValue}</em>
        *      )}
        *  </FormattedMessage>
        */
        return (
            <div>
                <h1>
                    <div>
                        <FormattedMessage
                            id="hello"
                            defaultMessage="React Intl Translations Example"
                        />
                    </div>
                </h1>

                <h4>
                    <FormattedMessage
                        tagName = 'p'
                        id='superHello'
                        defaultMessage="Locales:北京"
                        values={{
                            someone:'zxdobest'
                        }}
                    />
                </h4>
                <h2>
                    <FormattedMessage id="hello">
                        {(formattedValue)=>(
                            <em>{formattedValue}</em>
                        )}
                    </FormattedMessage>
                </h2>
            </div>
        );
    }
}

export default App;
```

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
* 安装依赖`npm install`
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
