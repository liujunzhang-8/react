/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-29 18:30:26
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-29 18:57:20
 */
import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {
  render() {
    return (
      <div className='parent'>
        <h3>我是Parent组件</h3>
        <A render={(name) => <B name={name} />} />
      </div>
    )
  }
}

class A extends PureComponent {
  state = {name: 'tom'}
  render() {
    console.log(this.props);
    const {name} = this.state
    return (
      <div className='a'>
        <h3>我是A组件</h3>
        {/* 类似Vue插槽 */}
        {this.props.render(name)}
        {/* <B /> */}
      </div>
    )
  }
}

class B extends PureComponent {
  render() {
    return (
      <div className='b'>
        <h3>我是B组件, {this.props.name}</h3>
      </div>
    )
  }
}
