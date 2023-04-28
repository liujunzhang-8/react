/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-26 21:42:29
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-28 16:15:57
 */
/**
 * 1. 该文件是用于创建一个为count组件服务的reducer，reducer的本质就是一个函数
 * 2. reducer函数会接收到两个参数，分别为：之前的状态（preState），动作对象（action）
 */

import {INCREMENT, DECREMENT} from '../constant'

const initState = 0  // 初始化状态
export default function countReducer(preState=initState, action) {
  // console.log(preState, action);
  // 从action对象中获取：type、data
  const {type, data} = action
  // 根据type决定如何加工数据
  switch (type) {
    case INCREMENT: // 如果是 +
      return preState + data
    case DECREMENT: // 如果是 -
      return preState - data

    default:
      return preState
  }
}