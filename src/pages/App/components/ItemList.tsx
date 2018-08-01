import React, { PureComponent } from 'react'
import { ThemeContext, ItemType } from '../CreateContext'
import Item from './Item'
import './ItemList.scss'
const initialState = {
}
interface IState {
}
interface IProps {
}
export default class ItemList extends PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props)
    }
    readonly state: IState = initialState
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    ({ theme, list }) => (
                        <div className="itemList"
                            style={{ backgroundColor: theme.background }} >
                            {
                                list.map((item: ItemType) => <Item key={item.id} {...item}/>)
                            }
                        </div>
                    )
                }
            </ThemeContext.Consumer>
        )
    }
}
