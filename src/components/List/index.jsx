/*
 * @Descripttion:
 * @Author: Gorgio.Liu
 * @version:
 * @Date: 2023-04-22 09:36:36
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-22 10:14:29
 */
import React, { Component } from "react";
import Item from "../Item";
import './index.css'


export default class List extends Component {
  render() {
    return (
      <ul className="todo-main">
        <Item />
        <Item />
        <Item />
      </ul>
    );
  }
}
