/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-29 20:13:57
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-30 12:05:25
 */
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h3>我是Home的内容</h3>
      <hr />
      <div>
        <ul className="nav nav-tabs">
          <li className="list-group">
            <NavLink className='list-group-item' to="news">News</NavLink>
          </li>
          <li className="list-group">
            <NavLink className='list-group-item' to="message">Message</NavLink>
          </li>
        </ul>
        {/* 指定路由组件呈现的位置 */}
        <Outlet />
      </div>
    </div>
  )
}
