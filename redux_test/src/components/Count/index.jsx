/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-26 21:17:37
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-26 21:28:45
 */
import React, { Component } from 'react'

export default class Count extends Component {
  state = {count: 0}

  // 加法
  increment = () => {
    const {value} = this.selectNumber
    const {count} = this.state
    this.setState({count: count + value*1})
  }
  // 减法
  decrement = () => {
    const {value} = this.selectNumber
    const {count} = this.state
    this.setState({count: count - value*1})
  }
  // 奇数再加
  incrementIfOdd = () => {
    const {value} = this.selectNumber
    const {count} = this.state
    if(count % 2 !== 0) {
      this.setState({count: count + value*1})
    }
  }

  incrementAsync = () => {
    const {value} = this.selectNumber
    const {count} = this.state
    setTimeout(() => {
      this.setState({count: count + value*1})
    }, 1000)
  }
  render() {
    return (
      <div>
        <h1>当前求和为：{this.state.count}</h1>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;&nbsp;
      </div>
    )
  }
}
