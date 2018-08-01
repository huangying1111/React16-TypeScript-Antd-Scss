import React, { PureComponent } from 'react'
const initialState = {
    hasError: false
}
type StateType = {
    hasError: boolean
}
type PropsType = {
    children: any
}
export default class ErrorBoundary extends PureComponent<PropsType, StateType> {
    componentDidCatch() {
        this.setState({ hasError: true })
    }
    readonly state: StateType = initialState
    render() {
        const { hasError } = this.state
        const { children } = this.props
        if (hasError) {
            return <h1>Something went wrong.</h1>
        }
        return children
    }
}
