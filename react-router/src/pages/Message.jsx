/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-30 10:23:12
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-02 19:51:43
 */
import React, {useState} from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Message() {
  const [messages] = useState([
    {id: '001', title: '消息1', content: '锄禾日当午'},
    {id: '002', title: '消息2', content: '汗滴禾下土'},
    {id: '003', title: '消息3', content: '谁知盘中餐'},
    {id: '004', title: '消息4', content: '锄禾日当午'},
  ])
  return (
    <div>
      <ul>
        {
          messages.map((m) => {
            return (
              <li key={m.id}>
                {/* 路由链接, params传参 */}
                {/* <Link to={`detail/${m.id}/${m.title}/${m.content}`}>{m.title}</Link> */}
                {/* 路由链接，search传参 */}
                <Link to={`detail?id=${m.id}&title=${m.title}&content=${m.content}`}>{m.title}</Link>
              </li>
            )
          })
        }
      </ul>
      <hr />
      {/* 指定路由组件的展示位置 */}
      <Outlet />
    </div>
  )
}
