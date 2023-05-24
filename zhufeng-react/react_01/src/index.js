/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-02 22:18:14
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-24 20:48:31
 */
import React from 'react';
// import ReactDOM from './react-dom';
import {createRoot, render} from 'react-dom/client';

class ScrollList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {messages: []};
    this.wrapper = React.createRef();
  }
  addMessage = () => {
    this.setState(state => ({
      messages: [`${state.messages.length}`, ...state.messages]
    }));
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.addMessage();
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render () {
    let style = {
      height: '100px',
      width: '200px',
      border: '1px solid red',
      overflow: 'auto'
    }
    return (
      <div style={style} ref={this.wrapper}>
        {
          this.state.messages.map((message, index) => {
            return <div key={index}>{message}</div>
          })
        }
      </div>
    )
  }
}

/**
 * React事件命名采用小驼峰式 camelCase onClick
 * 原生事件里传函数名字符串，在React传一个函数的引用地址，真实的函数定义
 */
let element = <ScrollList />
const container = document.getElementById('root')
const root = createRoot(container)
root.render(element);
// ReactDOM.render(<Counter />, document.getElementById('root'));
