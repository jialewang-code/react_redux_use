/**
 * 该文件专门用于创建一个为Count组件服务的reducer，reducer本质就是一个函数
 * reducer函数会接到两个参数，一个是之前的状态：preState,一个是动作对象：action
 */

export default function countReducer (preState = 0, action) {
  // console.log(preState, action);
  //从action对象中取值
  const { type, data } = action;
  //根据type类型决定怎么做
  switch (type) {
    case 'increment':
      return preState + data;
    case 'decrement':
      return preState - data;
    default:
      return preState;
  }
}