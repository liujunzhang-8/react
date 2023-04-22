/*
 * @Descripttion:
 * @Author: Gorgio.Liu
 * @version:
 * @Date: 2023-04-22 09:35:55
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-22 11:21:44
 */
import React, { Component } from "react";
import './index.css'

export default class Footer extends Component {
  render() {
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" />
        </label>
        <span>
          <span>已完成0</span> / 全部2
        </span>
        <button className="btn btn-danger">清除已完成任务</button>
      </div>
    );
  }
}
