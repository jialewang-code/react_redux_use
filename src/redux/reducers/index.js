/**
 * 该文件用于汇总所有的reducer为一个总的reducer
 */

//引入combineReducers，用于合并所有的reducer
import { combineReducers } from 'redux'
//引入为Count组件服务的reducer
import count from './count'
//引入为Person组件服务的reducer
import persons from './person'

//合并所有的reducers,传入的对象参数就是redux保存的对象状态
export default combineReducers({
  count,
  persons
})
