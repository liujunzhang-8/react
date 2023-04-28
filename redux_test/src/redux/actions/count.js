/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-26 22:52:20
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-28 23:26:02
 */
/**
 * 该文件专门为Count组件生成action对象
 */

import {INCREMENT, DECREMENT} from '../constant'

// 同步action，就是指action的值为Object类型的一般对象
export const increment = data => ({type: INCREMENT, data})
export const decrement = data => ({type: DECREMENT, data})

// 异步action，就是指action的值为函数，异步action中一般都会调用同步action
export const incrementAsync = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(increment(data))
    }, time)
  }
}
