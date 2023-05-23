/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-02 22:18:14
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-23 11:43:23
 */
import React from './react';
import ReactDOM from './react-dom';
// import {createRoot, render} from 'react-dom/client';

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
  state = {number: 0}
  // 组件挂载完成
  // componentDidMount() {
  //   this.timer = setInterval(() => this.tick(), 1000)
  // }

  // 类的属性 这样的写法函数里的this永远指向组件的实例
  handleClick = (event) => {
    // 回调是在更新的时候执行,partialState和callback没有一对一的关系
    this.setState({number: this.state.number + 1}, () => {
      console.log('callback1', this.state.number);
    })
  }

  // 组件将要卸载
  // componentWillUnmount() {
  //   clearInterval(this.timer)
  // }
  render() {
    console.log('render');
    return (
      <div>
        <h1>number：{this.state.number}</h1>
        <button onClick={this.handleClick}>+</button>
      </div>
    )
  }
}
/**
 * React事件命名采用小驼峰式 camelCase onClick
 * 原生事件里传函数名字符串，在React传一个函数的引用地址，真实的函数定义
 */
// let element = <Counter />
// const container = document.getElementById('root')
// const root = createRoot(container)
// root.render(element);
ReactDOM.render(<Counter />, document.getElementById('root'));
