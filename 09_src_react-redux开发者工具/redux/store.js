/**
 * 该文件专门用于暴露一个 store 对象，整个应用只有一个 store 对象
 */

//引入 createStore ，用于创建 redux 中最为核心的 store对象
import { createStore, applyMiddleware, combineReducers } from 'redux'
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
//引入为Count组件服务的reducer
import countReducer from './reducers/count'
//引入为Person组件服务的reducer
import personReducer from './reducers/person'
//引入redux-devtools-extension,react-redux开发者工具
import { composeWithDevTools } from 'redux-devtools-extension'

//合并所有的reducers,传入的对象参数就是redux保存的对象状态
const allReducer = combineReducers({
  count: countReducer,
  persons: personReducer
})
//暴露 store
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))