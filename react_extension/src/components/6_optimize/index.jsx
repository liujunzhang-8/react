/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-29 15:39:09
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-29 16:24:06
 */
import React, { PureComponent } from 'react'
import './index.css'

export default class Parent extends PureComponent {
  state = {carName: '奔驰c36'}

  changeCar = () => {
    // this.setState({carName: '迈巴赫'})
    const obj = this.state
    obj.carName = '迈巴赫'
    this.setState(obj)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log(this.props, this.state); // 目前的props和state
  //   // console.log(nextProps, nextState); // 接下来要变化的目标props， 目标state
  //   return !this.state.carName === nextState.carName
  // }

  render() {
    console.log('parent-render');
    const {carName} = this.state
    return (
      <div className='parent'>
        <h3>我是Parent组件</h3>
        <span>我的车名字是：{carName}</span><br />
        <button onClick={this.changeCar}>点我换车</button>
        <Child carName='奥迪' />
      </div>
    )
  }
}

class Child extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(this.props, this.state); // 目前的props和state
  //   console.log(nextProps, nextState); // 接下来要变化的目标props， 目标state
  //   return !this.props.carName === nextProps.carName
  // }
  render() {
    console.log('child-render');
    return (
      <div className='child'>
        <h3>我是Child组件</h3>
        <span>我接到的车是：{this.props.carName}</span>
      </div>
    )
  }
}
