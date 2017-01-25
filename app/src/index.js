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
