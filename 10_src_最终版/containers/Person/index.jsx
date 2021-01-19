import React, { Component } from 'react'
import { nanoid } from 'nanoid'
//引入 connect 用于连接UI组件与redux
import { connect } from 'react-redux'
import {addPerson} from '../../redux/actions/person'

class Person extends Component {

  addPerson=() => {
    const name=this.nameNode.value
    const age = this.ageNode.value
    const personObj={id:nanoid(),name,age}
    this.props.addPersons(personObj)
  }
  render () {
    // console.log(this.props);
    return (
      <div>
        <h2>我是Person组件</h2>
        <h4>当前求和结果为：{this.props.count }</h4>
        <input ref={c=>this.nameNode=c} type="text" placeholder='请输入名字'/>
        <input ref={c=>this.ageNode=c} type="text" placeholder='请输入年龄' />
        <button onClick={this.addPerson}>添加</button>
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

export default connect(
  state => ({ persons: state.persons,count:state.count }),
  {addPersons:addPerson}
)(Person)
