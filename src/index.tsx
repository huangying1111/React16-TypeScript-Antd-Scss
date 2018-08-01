import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App/App'
import ErrorBoundary from './components/ErrorBoundary'
import registerServiceWorker from './registerServiceWorker'
ReactDOM.render(
  <ErrorBoundary><App /></ErrorBoundary>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
