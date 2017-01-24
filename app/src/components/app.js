import React, {Component,PropTypes} from 'react';
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
                        id='hello'
                        defaultMessage="Locales:{name}"
                        values={{
                            name:'张超'
                        }}
                    />
                </h4>
            </div>
        );
    }
}

export default App;