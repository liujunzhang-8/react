/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-25 09:49:59
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-25 22:11:09
 */
import React, { Component } from 'react'
import {Link, Routes, Route} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messageArr: [
      {id: '01', title: '消息1'},
      {id: '02', title: '消息2'},
      {id: '03', title: '消息3'}
    ]
  }
  render() {
    const {messageArr} = this.state
    return (
      <div>
        <ul>
          {
            messageArr.map((msgObj) => {
              return (
                <li key={msgObj.id}>
                  {/* 向路由组件传递params参数 */}
                  {/* <Link to={`detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}

                  {/* 向路由组件传递search参数 */}
                  {/* <Link to={`detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

                  {/* 向路由组件传递state参数 */}
                  <Link to={'detail/'} state={{id: msgObj.id, title: msgObj.title}}>{msgObj.title}</Link>
                </li>
              )
            })
          }
        </ul>
        <hr />
        <Routes>
          {/* 声明接收params参数  */}
          {/* <Route path="detail/:id/:title" element={<Detail />} /> */}

          {/* 声明接收search参数 search参数无需声明接收，正常注册路由即可 */}
          {/* <Route path="/detail" element={<Detail />} /> */}

          {/* 声明接收state参数 state参数无需声明接收，正常注册路由即可 */}
          <Route path="detail/" element={<Detail />} />
        </Routes> 
      </div>
    )
  }
}
