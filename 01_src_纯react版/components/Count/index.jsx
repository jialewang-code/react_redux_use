import React, { Component } from 'react'

export default class Count extends Component {

  state = { count: 0 };

  //加法
  increment = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    this.setState({ count: count + Number(value) });
  }
  //减法
  decrement = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    this.setState({ count: count - Number(value) });
  }
  //奇数再加
  incrementOfOdd = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    if (count % 2 !== 0) {
      this.setState({ count: count + Number(value) });
    }
  }
  //异步加
  asyncIncrement = () => {
    const { value } = this.selectNumber
    const { count } = this.state
    setTimeout(() => {
      this.setState({ count: count + Number(value) });
    }, 500);
  }

  render () {
    const { count } = this.state;

    return (
      <div>
        <h2>当前求和的结果为：{count}</h2>
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
