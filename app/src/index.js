import React from 'react';
import ReactDOM from 'react-dom';
import {addLocaleData,IntlProvider,FormattedMessage} from 'react-intl';
import enLocaleData from 'react-intl/locale-data/zh';
import zh_CN from './locale/zh_CN';
import en_US from './locale/en_US';
import App from './components/app';

let messages = {};
messages["en-US"] = en_US;
messages["zh-CN"] = zh_CN;
const languages = navigator.languages;
const currentLang = languages[0];
console.log("languages: ", languages);
console.log("language: ", currentLang);
addLocaleData(enLocaleData);

ReactDOM.render(
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
