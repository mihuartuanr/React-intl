import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

class App extends Component {
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
                        tagName = 'p'
                        id='superHello'
                        defaultMessage="Locales:北京"
                        values={{
                            someone:'zxdobest'
                        }}
                    />
                </h4>
            </div>
        );
    }
}

export default App;