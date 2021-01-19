/**  
 * 该文件专门为Count组件生成action对象
 */
import { INCREMENT, DECREMENT } from './constant'


//同步action，就是直接返回一个对象
export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })

//异步action，就是指action的值是一个函数,异步action中一般会调用同步action
//异步action不是必需要用的，也可以直接在组件中使用异步函数实现
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    //这个函数是在store中执行的，所有不用引入store,直接传入dispatch
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, time)
  }
}
