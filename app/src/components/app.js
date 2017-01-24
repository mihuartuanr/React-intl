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
                    <div>
                        <FormattedMessage
                            id="hello"
                            defaultMessage="React Intl Translations Example"
                        />
                    </div>
                </h1>

                <h4>
                    <FormattedMessage
                        id="app.superHello"
                        defaultMessage="Locales:"
                    />
                </h4>
            </div>
        );
    }
}