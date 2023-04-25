/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-24 21:51:13
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-25 10:17:51
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
          <ul className="nav nav-tabs">
            <li><MyNavLink to="/home/news" className="">News</MyNavLink></li>
            <li><MyNavLink to="/home/message" className="">Message</MyNavLink></li>
          </ul>
          {/* 注册路由 */}
          <Routes>
            <Route path="/News" element={<News />} />
            <Route path="/Message" element={<Message />} />
            <Route path="*" element={<Navigate to="/home/news" replace  />} />
          </Routes>
          {/* <News />
          <Message /> */}
        </div>
      </div>
    )
  }
}
