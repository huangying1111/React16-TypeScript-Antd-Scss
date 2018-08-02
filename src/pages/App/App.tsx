import React, { PureComponent } from 'react'
import './App.scss'
import { ThemeContext, themes, IThemes, ItemType, newInfo } from './CreateContext'
import TopAdd from './components/TopAdd'
import ItemList from './components/ItemList'
const initialState = {
    themes: themes.light,
    list: [newInfo]
}
interface IState {
    themes: IThemes,
    list: ItemType[]
}
export default class App extends PureComponent<{}, IState> {
    constructor(props: {}) {
        super(props)
        this.changeChecked = this.changeChecked.bind(this)
        this.add = this.add.bind(this)
    }
    readonly state: IState = initialState
    private changeChecked(checked: boolean): void {
        this.setState({
            themes: checked ? themes.light
                : themes.dark
        })
    }
    private add(item: ItemType): void {
        this.setState((prvState) => ({
            list: [...prvState.list, {...item, id: prvState.list.length }]
        }))
    }
    render() {
        const { changeChecked, add } = this
        const { themes, list } = this.state
        return (
            <ThemeContext.Provider value={{ theme: themes, list, add, changeChecked }}>
                <div className="container">
                    <TopAdd />
                    <ItemList />
                </div>
            </ThemeContext.Provider>
        )
    }
}
