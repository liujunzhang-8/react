/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-26 21:13:34
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-27 08:19:35
 */
import React, { Component } from 'react'
import Count from './containers/Count'
import store from './redux/store'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 给容器组件传递store */}
        <Count store={store} />
      </div>
    )
  }
}
