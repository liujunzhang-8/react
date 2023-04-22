/*
 * @Descripttion:
 * @Author: Gorgio.Liu
 * @version:
 * @Date: 2023-04-22 09:36:24
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-22 10:20:04
 */
import React, { Component } from "react";
import './index.css'

export default class Item extends Component {
  render() {
    return (
      <li>
        <label>
          <input type="checkbox" />
          <span>xxxxx</span>
        </label>
        <button className="btn btn-danger" style={{ display: "none" }}>
          删除
        </button>
      </li>
    );
  }
}
