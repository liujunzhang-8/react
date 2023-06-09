/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-29 19:16:08
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-29 19:39:36
 */
import React, { Component } from 'react'

export default class Child extends Component {
  state = {
    users: [
      {id: '001', name: 'tom', age: 18},
      {id: '002', name: 'jack', age: 19},
      {id: '003', name: 'Alisa', age: 20},
    ]
    // users: 'abc'
  }
  render() {
    return (
      <div>
        <h2>我是Child组件</h2>
        {
          this.state.users.map((userObj) => {
            return <h4 key={userObj.id}>{userObj.name} --- {userObj.age}</h4>
          })
        }
      </div>
    )
  }
}
