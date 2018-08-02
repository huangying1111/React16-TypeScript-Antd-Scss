import React, { PureComponent, ReactChild } from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'antd'
import { IThemes } from '../CreateContext'
export interface IPropsModal {
    theme: IThemes,
    onCancel(): void,
    onOk(): void,
    children: ReactChild
}
export default class Modal extends PureComponent<IPropsModal, {}> {
    private root = document.getElementById('root') as HTMLElement
    private el = document.createElement('div')
    componentDidMount() {
        this.root.appendChild(this.el)
        this.el.setAttribute('class', 'modalShow')
    }
    componentWillUnmount() {
        this.root.removeChild(this.el)
    }
    render() {
        const { theme, onCancel, onOk, children } = this.props
        return ReactDOM.createPortal(
            <React.Fragment>
                {children}
                <Button type={theme.type === 'light' ? "primary" : "default"} onClick={onOk}>确定</Button>
                <Button className="ml-10" onClick={onCancel}>取消</Button>
            </React.Fragment>,
            this.el,
        )
    }
}