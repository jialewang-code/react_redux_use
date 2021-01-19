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

/**
 * 1.mapStateToProps 函数返回的是一个对象
 * 2.返回的对象中的key就是作为传递给UI组件props的key,value就作为传递给UI组件的props的value
 * 3.mapStateToProps 用于传递状态
 */
const mapStateToProps = (state) => {
  return {count:state}
 }

 /**
 * 1.mapDispatchToProps 函数返回的是一个对象
 * 2.返回的对象中的key就是作为传递给UI组件props的key,value就作为传递给UI组件的props的value
 * 3.mapStateToProps 用于传递操作状态的方法
 */
const mapDispatchToProps = (dispatch) => {
  return {
    increment: data => dispatch(createIncrementAction(data)),
    decrement:data => dispatch(createDecrementAction(data)),
    incrementAsync:(data,time) => dispatch(createIncrementAsyncAction(data,time))
    
  }
}

//使用 connect()()创建并暴露一个 Count 的容器组件
export default connect(mapStateToProps,mapDispatchToProps)(CountUI)
