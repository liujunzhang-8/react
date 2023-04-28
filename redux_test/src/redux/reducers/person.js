/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-28 14:08:14
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-28 16:16:02
 */
import { ADD_PERSON } from "../constant"

// 初始化人的列表
const initState = [{id: '001', name: 'tom', age: 18}]
export default function personReducer (preState=initState, action) {
  const {type, data} = action
  switch (type) {
    case ADD_PERSON: // 若是添加一个人
      return [data, ...preState]
    
    default:
      return preState
  }
}