/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-28 23:17:51
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-28 23:24:08
 */
/**
 * 该文件用于汇总所有的reducer为一个总的reducer
 */
import {combineReducers} from 'redux'
// 引入为Count组件服务的reducer
import  count from './count'
// 引入为Person组件服务的reducer
import  persons from './person'

// 汇总所有的reducer变为一个总的reducer
export default combineReducers({
  count,
  persons
})
