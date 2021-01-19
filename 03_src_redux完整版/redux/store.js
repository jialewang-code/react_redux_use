/**
 * 该文件专门用于暴露一个 store 对象，整个应用只有一个 store 对象
 */

//引入 createStore ，用于创建 redux 中最为核心的 store对象
import { createStore } from 'redux'
//引入为Count组件服务的reducer
import countReducer from './count_reducer'
//暴露 store
export default createStore(countReducer)