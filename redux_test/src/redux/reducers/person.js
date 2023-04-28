/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-28 14:08:14
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-28 16:40:01
 */
import { ADD_PERSON } from "../constant"

// 初始化人的列表
const initState = [{id: '001', name: 'tom', age: 18}]
export default function personReducer (preState=initState, action) {
  const {type, data} = action
  switch (type) {
    case ADD_PERSON: // 若是添加一个人
      // preState.unshift(data) //此处不可以这样写，这样会导致preState被改写。personReducer就不是一个纯函数了。
      return [data, ...preState]
    
    default:
      return preState
  }
}