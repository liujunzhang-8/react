/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-02 22:18:14
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-25 19:12:43
 */
import React from 'react';
// import ReactDOM from './react-dom';
import {createRoot} from 'react-dom/client';

// 基于反向继承：拦截生命周期、state、渲染过程
// 假如说我们有一个第三方组件库
class AntDesignButton extends React.Component {
  state = {name: '张三'}
  componentDidMount() {
    console.log('AntDesignButton componentDidMount');
  }
  render() {
    console.log('AntDesignButton render');
    return <button name={this.state.name}>{this.props.title}</button>
  }
}

const wrapper = OldComponent => {
  return class extends OldComponent {
    constructor(props) {
      super(props) // super 指的是父类的构造函数
      this.state = {...this.state, number: 0}
    }
    state = {number: 0}
    componentDidMount() {
      console.log('wrapper componentDidMount');
    }
    handleClick = () => {
      this.setState({number: this.state.number+1})
    }
    render() {
      let renderElement = super.render()
      let newProps = {
        ...renderElement.props,
        onClick: this.handleClick
      }
      // renderElement.props.children = this.state.number;
      // renderElement.props.onClick = this.onClick
      let cloneElement = React.cloneElement(renderElement, newProps, this.state.number);
      return cloneElement
    }
  }
}

/**
 * React事件命名采用小驼峰式 camelCase onClick
 * 原生事件里传函数名字符串，在React传一个函数的引用地址，真实的函数定义
 */
let WrappedAntDesignButton = wrapper(AntDesignButton)
let element = <WrappedAntDesignButton title="这是标题" />
const container = document.getElementById('root')
const root = createRoot(container)
root.render(element);
// ReactDOM.render(<Page />, document.getElementById('root'));
