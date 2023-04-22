/*
 * @Descripttion:
 * @Author: Gorgio.Liu
 * @version:
 * @Date: 2023-04-22 09:36:14
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-22 10:11:46
 */
import React, { Component } from "react";
import './index.css'

export default class Header extends Component {
  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车健确认" />
      </div>
    );
  }
}
