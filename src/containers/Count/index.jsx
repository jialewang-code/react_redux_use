import React, { Component } from 'react'
//引入 connect 用于连接UI组件与redux
import { connect } from 'react-redux'
//引入CountAction
import {
  increment,
  decrement,
  incrementAsync
} from '../../redux/actions/count'

//定义UI组件
class Count extends Component {

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
        <h2>我是Count组件</h2>
        <h4>当前求和的结果为：{this.props.count }</h4>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementOfOdd}>当前求和结果为奇数时加</button>&nbsp;
        <button onClick={this.asyncIncrement}>异步加</button>
        <ul>
          {
            this.props.persons.map(personObj => {
              return <li key={personObj.id}>{`姓名：${personObj.name}，年龄：${personObj.age}` }</li>
            })
          }
        </ul>
      </div>
    )
  }
}

//使用 connect()()创建并暴露一个 Count 的容器组件
export default connect(
  //mapStateToProps映射状态
  state => ({
    count: state.count,
    persons: state.persons
  }),
  //mapDispatchToProps映射操作状态的方法,react-redux自动dispatch
  {
    increment,
    decrement,
    incrementAsync
  }
)(Count)
