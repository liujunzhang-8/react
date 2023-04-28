/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-26 21:13:34
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-28 23:10:26
 */
import React, { Component } from 'react'
import Count from './containers/Count' // 引入的是Count的容器组件
import Person from './containers/Person' // 引入的是Person的容器组件

export default class App extends Component {
  render() {
    return (
      <div>
        <Count />
        <hr />
        <Person />
      </div>
    )
  }
}
