import React, { PureComponent } from 'react'
import { Button } from 'antd'
const initialState = {
    number: 0
}
type PropsType = {}
type StateType = {
    number: number
}
export default class App extends PureComponent<PropsType, StateType> {
    constructor(props: PropsType) {
        super(props)
    }
    componentDidMount() {
        this.setState({ number: 1 })
    }
    readonly state: StateType = initialState
    render() {
        const { number } = this.state
        return (
            <React.Fragment>
                <div>{number}</div>
                <Button type="primary">Primary</Button>
            </React.Fragment>
        )
    }
}
