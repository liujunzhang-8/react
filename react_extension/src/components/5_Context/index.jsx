/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-29 11:27:08
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-29 11:57:35
 */
import React, { Component } from 'react'
import './index.css'

// 创建Context对象
const MyContext = React.createContext()
const {Provider, Consumer} = MyContext
export default class A extends Component {
  state = {username: 'tom', age: 18}
  render() {
    const {username, age} = this.state
    return (
      <div className='parent'>
        <h3>这是A组件</h3>
        <h5>A的用户名是： {username}</h5>
        <Provider value={{username, age}}>
          <B />
        </Provider>
      </div>
    )
  }
}

class B extends Component {
  render() {
    return (
      <div className='child'>
        <h3>这是B组件</h3>
        <h5>从A接收到的用户名是： {this.props.username}</h5>
        <C username={this.props.username} />
      </div>
    )
  }
}

// class C extends Component {
//   // 声明接收context
//   static contextType = MyContext
//   render() {
//     console.log(this);
//     const {username, age} = this.context
//     return (
//       <div className='grand'>
//         <h3>这是C组件</h3>
//         <h5>从A接收到的用户名是：{username}，年龄是：{age}</h5>
//       </div>
//     )
//   }
// }


function C () {
  return (
    <div className='grand'>
      <h3>这是C组件</h3>
     <h5>从A接收到的用户名是：
      <Consumer>
        {
          value => {
            return `${value.username}，年龄是：${value.age}`
          }
        }
      </Consumer>
     </h5>
    </div>
  )
}