import React, { PureComponent } from 'react'
import './TopAdd.scss'
import { ThemeContext } from '../CreateContext'
import { Switch, Button } from 'antd'
import Modal from './Modal'

const initialState = {
    visible: false,
    number: 0
}
interface IState {
    number: number,
    visible: boolean
}
export default class TopAdd extends PureComponent<{}, IState> {
    constructor(props: {}) {
        super(props)
        this.addHandle = this.addHandle.bind(this)
        this.onCancel = this.onCancel.bind(this)
        this.onOk = this.onOk.bind(this)
        this.addError = this.addError.bind(this)
    }
    readonly state: IState = initialState
    private addHandle(): void {
        this.setState({ visible: true })
    }
    private onCancel(): void {
        this.setState({ visible: false })
    }
    private onOk(callback: Function): void {
        callback({
            id: 0,
            type: 0,
            content: '',
            title: ''
        })
        this.setState({ visible: false })
    }
    private addError(): void {
        this.setState({ number: 1 })
    }
    render() {
        const { addHandle, onCancel, addError } = this
        const { visible, number } = this.state
        if (number === 1) return new Error()
        return (
            <ThemeContext.Consumer>
                {
                    ({ theme, list, add, changeChecked }) => (
                        <div className="topAdd"
                            style={{ backgroundColor: theme.background }}>
                            <div>
                                <Button
                                    onClick={addHandle}
                                    type={theme.type === 'light' ? "primary" : "default"}
                                    icon="plus" />
                                <Button
                                    className="ml-10"
                                    onClick={addError}
                                    type={theme.type === 'light' ? "primary" : "default"}
                                >Error Boundaries</Button>
                            </div>
                            <Switch defaultChecked={true} onChange={changeChecked} />
                            {visible && <Modal theme={theme}
                                onCancel={onCancel}
                                onOk={this.onOk.bind(this, add)}>
                                <React.Fragment>
                                    <p>新增todo</p>
                                    <div>1111</div>
                                </React.Fragment>
                            </Modal>}
                        </div>
                    )
                }
            </ThemeContext.Consumer>
        )
    }
}