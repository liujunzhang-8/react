/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-25 09:49:59
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-25 23:00:22
 */
import React, { Component } from 'react'
import {Link, Routes, Route, useNavigate} from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    messageArr: [
      {id: '01', title: '消息1'},
      {id: '02', title: '消息2'},
      {id: '03', title: '消息3'}
    ]
  }
  replaceShow = (id, title) => {
    const navigate = useNavigate()
    // replace跳转 + 携带params参数
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)
    
    // replace跳转 + 携带search参数
    navigate(`/home/message/detail?id=${id}&title=${title}`, {replace: true})
  }
  pushShow = (id, title) => {
    const navigate = useNavigate()
    // push跳转 + 携带params参数
    // this.props.history.push(`/home/message/detail/${id}/${title}`)

    // push跳转 + 携带search参数
    navigate(`/home/message/detail?id=${id}&title=${title}`)
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
                  <Link to={`detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link>

                  {/* 向路由组件传递state参数 */}
                  {/* <Link to={'detail/'} state={{id: msgObj.id, title: msgObj.title}}>{msgObj.title}</Link> */}
                  &nbsp;&nbsp;<button onClick={() => {this.pushShow(msgObj.id, msgObj.title)}}>push查看</button>&nbsp;&nbsp;
                  <button onClick={() => {this.replaceShow(msgObj.id, msgObj.title)}}>replace查看</button>
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
          <Route path="/detail" element={<Detail />} />

          {/* 声明接收state参数 state参数无需声明接收，正常注册路由即可 */}
          <Route path="detail/" element={<Detail />} />
        </Routes> 
      </div>
    )
  }
}
