import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'

//检测redux中的状态的变化，只要状态变化，就调用回调函数
//渲染整个App,有diff算法，不会大量重绘重排

store.subscribe(() => {
  ReactDOM.render(<App />, document.getElementById('root'))
})

ReactDOM.render(<App />, document.getElementById('root'))