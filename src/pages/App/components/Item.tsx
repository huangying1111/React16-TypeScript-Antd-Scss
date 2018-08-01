import React, { PureComponent } from 'react'
import { ItemType, IThemes } from '../CreateContext'
import ItemWrap from './ItemWrap'
import './Item.scss'
const initialState = {}
interface IState { }
interface IProps extends ItemType {
    theme: IThemes
}
class Item extends PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props)
    }
    readonly state: IState = initialState
    render() {
        const { content, theme } = this.props
        return (
            <div
                className="todoContent"
                style={{ backgroundColor: theme.titleBackground, color: theme.color }}
            >
                {content ? content : 'content'}
            </div>
        )
    }
}
class Title extends PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props)
    }
    readonly state: IState = initialState
    render() {
        const { title, theme } = this.props
        return (
            <div
                className="todoTitle"
                style={{ backgroundColor: theme.itemBackground }}
            >
                {title ? title : 'title'}
            </div>
        )
    }
}
export default ItemWrap(Title)(Item)
