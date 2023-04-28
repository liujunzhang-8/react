/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-26 21:33:32
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-28 15:56:40
 */
/**
 * 该文件专门用于暴露一个store对象，整个应用只有一个store对象
 */

// 引入createStore， 专门用于创建redux中最为核心的store对象
import {createStore, applyMiddleware, combineReducers} from 'redux'
// 引入为Count组件服务的reducer
import  countReducer from './reducers/count'
// 引入为Person组件服务的reducer
import  personReducer from './reducers/person'
// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'

const allReducer = combineReducers({
  he: countReducer,
  rens: personReducer
})

// 暴露store
export default  createStore(allReducer, applyMiddleware(thunk))