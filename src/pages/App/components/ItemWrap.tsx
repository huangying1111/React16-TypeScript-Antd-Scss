import React, { PureComponent } from 'react'
import { ThemeContext } from '../CreateContext'
export default (TitleComponent: any) => {
    return (Component: any) => {
        return class ItemWrap extends PureComponent {
            render() {
                return (
                    <ThemeContext.Consumer>
                        {
                            ({theme}) => <div> 
                                <TitleComponent theme={theme} {...this.props} />
                                <Component theme={theme} {...this.props} />
                            </div>
                        }
                    </ThemeContext.Consumer>
                )
            }
        }
    }
}