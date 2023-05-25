/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-02 22:18:14
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-25 17:52:54
 */
import React from 'react';
// import ReactDOM from './react-dom';
import {createRoot, render} from 'react-dom/client';

let ThemeContext = React.createContext()
let {Provider, Consumer} = ThemeContext // Consumer 一般用在函数组件中
function Header() {
  return (
    <ThemeContext.Consumer>
      {
        value => (
          <div style={{margin: '10px', border: `5px solid ${value.color}`, padding: '5px'}}>
            头部
            <Title />
          </div>
        )
      }
    </ThemeContext.Consumer>
  )
}

class Title extends React.Component {
  static contextType = ThemeContext
  render() {
    return (
      <div style={{margin: '10px', border: `5px solid ${this.context.color}`, padding: '5px'}}>
        头部
      </div>
    )
  }
}

class Main extends React.Component {
  static contextType = ThemeContext
  render() {
    return (
      <div style={{margin: '10px', border: `5px solid ${this.context.color}`, padding: '5px'}}>
        主体
        <Content />
      </div>
    )
  }
}

class Content extends React.Component {
  static contextType = ThemeContext
  render() {
    return (
      <div style={{margin: '10px', border: `5px solid ${this.context.color}`, padding: '5px'}}>
        内容
        <button onClick={() => this.context.changeColor('red')}>变红</button>
        <button onClick={() => this.context.changeColor('yellow')}>变黄</button>
      </div>
    )
  }
}

class Page extends React.Component {
  constructor(props) {
    super(props)
    this.state = {color: 'red'}
  }
  changeColor = (color) => {
    this.setState({color})
  }
  render() {
    let value = {color: this.state.color, changeColor: this.changeColor};
    return (
      <Provider value={value}>
        <div style={{margin: '10px', border: `5px solid ${this.state.color}`, padding: '5px', width: '200px'}}>
          主页
          <Header />
          <Main />
        </div>
      </Provider>
    )
  }
}

/**
 * React事件命名采用小驼峰式 camelCase onClick
 * 原生事件里传函数名字符串，在React传一个函数的引用地址，真实的函数定义
 */
let element = <Page />
const container = document.getElementById('root')
const root = createRoot(container)
root.render(element);
// ReactDOM.render(<Page />, document.getElementById('root'));
