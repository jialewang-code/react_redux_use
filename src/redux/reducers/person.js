import { ADD_PERSON } from '../constant'

//初始化人的列表
const initState = [{ id: '001', name: 'tom', age: 18 }]

export default function personReducer (preState = initState, action) {
  // console.log('personReducer');
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON://添加一个人
      // preState.unshift(data);这里不能这样写，personReducer是一个纯函数
      return [data, ...preState]
    default:
      return preState;
  }
}