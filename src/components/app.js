/*
import React, {Component} from 'react';
import {FormattedMessage,defineMessages} from 'react-intl';

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {      
         
       FormattedMessage组件中的信息parser后显示以<span>包裹的文本；
       可以通过tagName指定其它标签包裹；
       以id属性的值"hello"为索引——索引到自定义的映射表'./locale/zh_CN'中去；
       messages['hello']——messages为父组件IntlProvider的props的messages属性；
       若没有上述的返回值，则显示defaultMessage的值"React Intl Translations Example";
        
        
       FormattedMessage添加子元素或ReactElement；
         <FormattedMessage id="hello">
             {(formattedValue)=>(
                 <em>{formattedValue}</em>
             )}
         </FormattedMessage>
        
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
*/

//输出HTML块结构；
import React from 'react';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';

const ChildComponent = ({ intl }) => {
    //传入的{intl}名称不可更改；
    console.log(React.PropTypes)
    const getMessage = intl.messages;
    return(
        <section>
            {/*
                *通过intl.messages获取映射属性的方法；
                * 可以和任意内容（如：HTML标签）组合；
                * */}
            <a>{getMessage.hello}</a>
            {/*通过FormattedMessage格式化，可以传入参数{values}*/}
            <FormattedMessage
                tagName = 'p'
                id='superHello'
                defaultMessage="Locales:北京"
                values={{
                    someone:'zxdobest'
                }}
            />
            {/*
               *这种结构，类同于intl.messages.superHello可以和其它内容任意组合；
               *能且仅能获取superHello的映射；
               * 目前尚未找到如果在第一种方法中传入values；
            */}
            <FormattedMessage id="superHello" values={{
                someone:'mihuartuanr'
            }}>
                {(formattedValue)=>(
                    <p>{formattedValue}</p>
                )}
            </FormattedMessage>
        </section>
    );
}

ChildComponent.propTypes = {
    intl: intlShape.isRequired
}

export default injectIntl(ChildComponent);