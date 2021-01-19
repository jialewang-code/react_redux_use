import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  //给项目的所有容器组件传递store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)