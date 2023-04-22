/*
 * @Descripttion:
 * @Author: Gorgio.Liu
 * @version:
 * @Date: 2023-04-22 09:36:24
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-22 12:48:57
 */
import React, { Component } from "react";
import './index.css'

export default class Item extends Component {
  state = {mouse: false} // 标识鼠标移入移出
  // 鼠标移入、移出的回调
  handleMouse =(flag) => {
    return () => {
      console.log(flag);
      this.setState({mouse: flag})
    }
  }
  // 勾选、取消勾选某一个todo的回调
  handleCheck = (id) => {
    return (event) => {
      console.log(id, event.target.value);
      this.props.updateTodo(id, event.target.checked)
    }
  }
  render() {
    const {id, name, done} = this.props
    const {mouse} = this.state
    return (
      <li style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
        <label>
          <input type="checkbox" defaultChecked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button className="btn btn-danger" style={{ display: mouse ? 'block' : "none" }}>
          删除
        </button>
      </li>
    );
  }
}
