import React, { Component } from 'react'
//引入store，用于获取redux中保存状态
import store from '../../redux/store'
//引入actionCreator，专门用于创建action对象
import { createIncrementAction, createDecrementAction } from '../../redux/count_action'

export default class Count extends Component {

  state = { car: '宝马732' };

  // componentDidMount () {
  //   //检测redux中的状态的变化，只要状态变化，就调用回调函数
  //   store.subscribe(() => {
  //     //更新状态，调用render
  //     this.setState({})
  //   })
  // }

  //加法
  increment = () => {
    const { value } = this.selectNumber
    store.dispatch(createIncrementAction(value * 1))
  }
  //减法
  decrement = () => {
    const { value } = this.selectNumber
    store.dispatch(createDecrementAction(value * 1))
  }
  //奇数再加
  incrementOfOdd = () => {
    const { value } = this.selectNumber
    const count = store.getState()
    if (count % 2 !== 0) {
      store.dispatch(createIncrementAction(value * 1))
    }
  }
  //异步加
  asyncIncrement = () => {
    const { value } = this.selectNumber
    setTimeout(() => {
      store.dispatch(createIncrementAction(value * 1))
    }, 500);
  }

  render () {
    return (
      <div>
        <h2>当前求和的结果为：{store.getState()}</h2>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementOfOdd}>当前求和结果为奇数时加</button>&nbsp;
        <button onClick={this.asyncIncrement}>异步加</button>
      </div>
    )
  }
}
