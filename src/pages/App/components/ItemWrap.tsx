import React, { PureComponent, ComponentType } from 'react'
import { ThemeContext, IThemes } from '../CreateContext'
interface IProps extends Object {
    theme: IThemes
}
export default (TitleComponent: ComponentType<IProps>) => {
    return (Component: ComponentType<IProps>) => {
        return class ItemWrap extends PureComponent {
            render() {
                return (
                    <ThemeContext.Consumer>
                        {
                            ({ theme }) => <div>
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