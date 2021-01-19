//引入 CountUI组件
import CountUI from '../../components/Count'
//引入 connect 用于连接UI组件与redux
import { connect } from 'react-redux'
//引入CountAction
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/count_action'

//使用 connect()()创建并暴露一个 Count 的容器组件
export default connect(
  //mapStateToProps映射状态
  state => ({ count: state }),
  //mapDispatchToProps映射操作状态的方法,react-redux自动dispatch
  {
    increment:createIncrementAction,
    decrement:createDecrementAction,
    incrementAsync:createIncrementAsyncAction
  }
)(CountUI)
