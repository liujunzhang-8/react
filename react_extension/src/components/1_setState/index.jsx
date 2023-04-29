/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-29 07:57:20
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-29 08:18:46
 */
import React, { Component } from 'react'

export default class Demo extends Component {
  state = {count: 0}
  add = () => {
    // 对象式的setState
    // 1. 获取原来的count值
    // const {count} = this.state
    // // 2. 更新状态值
    // this.setState({count: count + 1}, () => {
    //   console.log(this.state.count, '更新了吗？？？');
    // })

    // 函数式的setState
    this.setState(state => ({count: state.count + 1}))
  }
  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <button onClick={this.add}>点击+1</button>
      </div>
    )
  }
}
