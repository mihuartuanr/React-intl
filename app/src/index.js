import React from 'react';
import ReactDOM from 'react-dom';
import {IntlProvider,FormattedMessage} from 'react-intl';
import en from './locale/en';
import en_US from './locale/en_US';
import intl from 'intl';
import App from './components/app';

function chooseLocale(){
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