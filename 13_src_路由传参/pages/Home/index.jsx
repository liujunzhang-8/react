/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-24 21:51:13
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-25 12:27:55
 */
import React, { Component } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import News from './News'
import Message from './Message'
import MyNavLink from '../../components/MyNavLink'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <div>
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item"><MyNavLink to="/home/news">News</MyNavLink></li>
            <li className="nav-item"><MyNavLink to="/home/message">Message</MyNavLink></li>
          </ul>
          {/* 注册路由 */}
          <Routes>
            <Route path="/news" element={<News />} />
            <Route path="/message/*" element={<Message />} />
            <Route path="*" element={<Navigate to="/home/news" replace  />} />
          </Routes>
        </div>
      </div>
    )
  }
}
