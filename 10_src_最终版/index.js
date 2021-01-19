import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  //Provider包裹App,给App组件下所有的容器组件传递store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)