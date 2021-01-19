/**
 * 该文件专门用于创建一个为Count组件服务的reducer，reducer本质就是一个函数
 * reducer函数会接到两个参数，一个是之前的状态：preState,一个是动作对象：action
 */
import { INCREMENT, DECREMENT } from '../constant'

export default function countReducer (preState = 0, action) {
  // console.log('countReducer');
  //从action对象中取值
  const { type, data } = action;
  //根据type类型决定怎么做
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default:
      return preState;
  }
}