import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>
                    <FormattedMessage
                        id="zh_CN.hello"
                        defaultMessage="React Intl Translations Example"
                    />
                </h1>

                <h4>
                    <FormattedMessage
                        id="app.locales_menu_heading"
                        defaultMessage="Locales:"
                    />
                </h4>
            </div>
        );
    }
}