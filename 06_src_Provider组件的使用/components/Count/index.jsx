import React, { Component } from 'react'

export default class Count extends Component {

  state = { car: '宝马732' };

  //加法
  increment = () => {
    const { value } = this.selectNumber
    this.props.increment(value*1)
  }
  //减法
  decrement = () => {
    const { value } = this.selectNumber
    this.props.decrement(value*1)
  }
  //奇数再加
  incrementOfOdd = () => {
    const { value } = this.selectNumber
    if (this.props.count % 2 !== 0) {
      this.props.increment(value*1)
    }
  }
  //异步加
  asyncIncrement = () => {
    const { value } = this.selectNumber
    this.props.incrementAsync(value*1,500)
  }

  render () {
    // console.log('CountUI',this.props);
    return (
      <div>
        <h2>当前求和的结果为：{this.props.count }</h2>
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
