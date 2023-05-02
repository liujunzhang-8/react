/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-30 12:13:45
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-02 20:03:01
 */
import React from 'react'
import { useParams, useSearchParams, useLocation, useMatch } from 'react-router-dom'

export default function Detail() {
  // 路由的params参数
  // const {id, title, content} = useParams()
  // const x = useMatch('/home/message/detail/:id/:title/:content')
  // console.log(x);

  // 路由的search传参
  const [search, setSearch] = useSearchParams()
  const id = search.get('id')
  const title = search.get('title')
  const content = search.get('content')

  return (
    <ul>
      <li>
        <button onClick={() => setSearch('id=008&title=哈哈&content=嘻嘻')}>点我更新一下收到的值</button>
      </li>
      <li>消息编号：{id}</li>
      <li>消息标题：{title}</li>
      <li>消息内容：{content}</li>
    </ul>
  )
}
