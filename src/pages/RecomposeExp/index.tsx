import React, { PureComponent } from 'react'
import ModuleBase, {
  OnlyUpdateForKeysComponent,
  PureBaseComponent,
  ShouldUpdateComponent,
  WithStateComponent,
  WithStateHandlersComponent
} from './ModuleBase'
import ModuleCompose from './ModuleCompose'
const initialState = {
  name: 'huangying',
  title: 'title',
  content: 'content',
  other: ''
}
interface IState {
  name: string
  title: string
  content: string
  other: string
}
export default class App extends PureComponent<{}, IState> {
  public readonly state: IState = initialState
  public render() {
    const { name, title, content } = this.state
    return (
      <div>
        <div>
          <span style={{ color: 'red' }}>compose:</span>
          {ModuleCompose(ModuleBase)}
        </div>
        <div>
          <span style={{ color: 'red' }}>Pure:</span>
          <PureBaseComponent name={name} title={title} content={content} />
          <span style={{ color: 'red' }}>OnlyUpdateForKeys:</span>
          <OnlyUpdateForKeysComponent
            name={name}
            title={title}
            content={content}
          />
           <button onClick={this.changeTitle.bind(this, { title: '改变title' })}>
            改变title
          </button>
          <button onClick={this.changeTitle.bind(this, { name: '改变name' })}>
            改变name
          </button>
          <button onClick={this.changeTitle.bind(this, { other: '改变其他' })}>
            改变其他
          </button>

          <p style={{ color: 'red' }}>shouldUpdate:</p>

          <ShouldUpdateComponent name={name} title="渲染" content={content} />
          <ShouldUpdateComponent name={name} title={title} content={content} />
          <button onClick={this.changeTitle.bind(this, { name: '改变name2' })}>
            改变name
          </button>
        </div>

        <div>
          <p style={{ color: 'red' }}>withState:</p>
          <WithStateComponent />
          <WithStateHandlersComponent/>
        </div>
      </div>
    )
  }
  private changeTitle = (state: any) => {
    this.setState(state)
  }
}
