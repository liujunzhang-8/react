/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-02 22:18:14
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-22 12:54:09
 */
import React from 'react';
import {createRoot, render} from 'react-dom/client';

/**
 * 类组件的数据来源有两个地方，父组件传过来的属性，自己内部的状态
 * 属性和状态发生变化后组件都会更新，视图都会渲染
 * state的更新可能是异步的
 * 出于性能考虑React可能会把多个setState合并成同一个调用
 * 如何判读是同步还是异步，是不是批量
 * 一个原则凡是React能管控的地方，批量的，异步的 事件处理函数 生命周期函数
 * 不能管控的地方就是同步，非批量的
 */
class Counter extends React.Component{
  constructor(props) {
    super(props);
    this.state = {number: 0}; // 唯一可以给状态直接赋值的地方就是构造函数
  }
  // 组件挂载完成
  // componentDidMount() {
  //   this.timer = setInterval(() => this.tick(), 1000)
  // }

  // 类的属性 这样的写法函数里的this永远指向组件的实例
  handleClick = (event) => {
    // setState 可以修改状态
    this.setState({number: this.state.number + 1})
  }

  // 组件将要卸载
  // componentWillUnmount() {
  //   clearInterval(this.timer)
  // }
  render() {
    return (
      <div>
        <h1>{this.state.number}</h1>
        <button onClick={this.handleClick}>点击+</button>
      </div>
    )
  }
}
/**
 * React事件命名采用小驼峰式 camelCase onClick
 * 原生事件里传函数名字符串，在React传一个函数的引用地址，真实的函数定义
 */
let element = <Counter />
const container = document.getElementById('root')
const root = createRoot(container)
root.render(element);
