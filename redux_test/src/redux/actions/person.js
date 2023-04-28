/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-28 14:05:24
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-28 23:32:23
 */
import {ADD_PERSON} from '../constant'

// 创建增加一个人的action对象
export const addPerson = personObj => ({type: ADD_PERSON, data: personObj})