/*
 * @Descripttion:
 * @Author: Gorgio.Liu
 * @version:
 * @Date: 2023-04-22 09:36:36
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-22 12:47:49
 */
import React, { Component } from "react";
import Item from "../Item";
import './index.css'

export default class List extends Component {
  render() {
    const {todos, updateTodo} = this.props
    return (
      <ul className="todo-main">
        {
          todos.map(todo => {
            // return <Item key={todo.id} id={todo.id} name={todo.name} done={todo.done} />
            return <Item key={todo.id} {...todo} updateTodo={updateTodo} />
          })
        }
      </ul>
    );
  }
}
