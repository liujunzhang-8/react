/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-25 10:34:20
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-25 22:49:52
 */
import React from 'react'
import {useParams, useSearchParams, useLocation} from 'react-router-dom'

const DetailData = [
  {id: '01', content: '你好，中国'},
  {id: '02', content: '你好，尚硅谷'},
  {id: '03', content: '你好，未来的自己'},
]
// useParams / useSearchParams / useLocation是React Hooks的实现，只能在函数组件中使用
export default function Detail () {
  // 接收parsms参数
  // let params = useParams()
  // const {id, title} = params

  // 接收search参数
  let [params] = useSearchParams()
  const id = params.get('id')
  const title = params.get('title')

  // 接收state参数
  // const params = useLocation()
  // console.log(params);
  // const {id, title} = params.state
  
  const findResult = DetailData.find((detailObj) => {
    return detailObj.id === id
  })
  return (
    <ul>
      <li>ID: {id}</li>
      <li>TITLE: {title}</li>
      <li>CONTENT: {findResult.content}</li>
    </ul>
  )
}
