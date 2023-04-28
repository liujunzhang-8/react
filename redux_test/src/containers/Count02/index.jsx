/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-28 11:51:17
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-28 23:10:51
 */
import React, { Component } from 'react'
import {connect} from 'react-redux'
import { createIncrementAction } from '../../redux/actions/count'

class Count extends Component {
  add = () => {
    // 通知redux加1
    this.props.jiafa(1)
  }
  render() {
    return (
      <div>
        <h2>当前求和为：{this.props.sum}</h2>
        <button onClick={this.add}>点我+1</button>
      </div>
    )
  }
}

export default connect(
  state => ({sum: state}), // 映射状态
  {jiafa: createIncrementAction} // 映射操作状态的方法
)(Count)
