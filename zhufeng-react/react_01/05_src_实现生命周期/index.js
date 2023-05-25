/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-02 22:18:14
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-24 21:02:50
 */
import React from './react';
import ReactDOM from './react-dom';
// import {createRoot, render} from 'react-dom/client';

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
  getSnapshotBeforeUpdate() {
    return {
      prevScrollTop: this.wrapper.current.scrollTop, // 更新前向上卷去的高度
      prevScrollHeight: this.wrapper.current.scrollHeight // 更新内容的高度
    }
  }
  componentDidUpdate(prevProps, prevState, {prevScrollTop, prevScrollHeight}) {
    this.wrapper.current.scrollTop = prevScrollTop + (this.wrapper.current.scrollHeight - prevScrollHeight);
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
// let element = <ScrollList />
// const container = document.getElementById('root')
// const root = createRoot(container)
// root.render(element);
ReactDOM.render(<ScrollList />, document.getElementById('root'));
