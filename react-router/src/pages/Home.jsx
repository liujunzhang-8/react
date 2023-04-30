/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-29 20:13:57
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-30 10:26:42
 */
import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h3>我是Home的内容</h3>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <NavLink></NavLink>
          </li>
          <li>
            <NavLink></NavLink>
          </li>
        </ul>
        <h4>????</h4>
      </div>
    </div>
  )
}
