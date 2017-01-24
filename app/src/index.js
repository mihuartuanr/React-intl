import React from 'react';
import ReactDOM from 'react-dom';
import {addLocaleData,IntlProvider,FormattedMessage} from 'react-intl';
import zh_CN from './locale/zh_CN';
import en_US from './locale/en_US';
import intl from 'intl';
import App from './components/app';

addLocaleData([en_US, zh_CN]);
addLocaleData({
    locale: 'en-UPPER',
    parentLocale: 'en',
});

function chooseLocale(){
    console.log(navigator.language);
    switch(navigator.language.split('_')[0]){
        case 'en':
            return en_US;
            break;
        case 'zh':
            return zh_CN;
            break;
        default:
            return en_US;
            break;
    }
}

const a =(
	<IntlProvider locale={navigator.language} messages={chooseLocale()}>
			<App />
		</IntlProvider>
)
ReactDOM.render(
	a,
	document.body
)