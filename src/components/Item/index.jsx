/*
 * @Descripttion:
 * @Author: Gorgio.Liu
 * @version:
 * @Date: 2023-04-22 09:36:24
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-22 22:43:45
 */
import React, { Component } from "react";
import './index.css'

export default class Item extends Component {
  state = {mouse: false} // 标识鼠标移入移出
  // 鼠标移入、移出的回调
  handleMouse =(flag) => {
    return () => {
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

  // 删除一个todo的回调
  handleDelete = (id) => {
    console.log('通知app删除', id);
    if(window.confirm('确定删除嘛？')) {
      this.props.deleteTodo(id)
    }
  }
  render() {
    const {id, name, done} = this.props
    const {mouse} = this.state
    return (
      <li style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
        <label>
          <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
          <span>{name}</span>
        </label>
        <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : "none" }}>
          删除
        </button>
      </li>
    );
  }
}
