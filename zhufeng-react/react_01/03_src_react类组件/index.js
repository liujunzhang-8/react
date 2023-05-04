/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-02 22:18:14
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-04 16:42:24
 */
import React from './react';
import ReactDOM from './react-dom';

/**
 * 组件分为内置原生组件和自定义组件
 * 内置组件p h1 span type字符串
 * 自定义组件 类型是一个 函数，类组件的父类Component的原型上有一个属性isReactComponent={}
 * 自定义组件的名称必须是大写字母开头
 * 自定义组件的返回值有且只能有一个根元素
 */
class ClassComponent extends React.Component{
  render() {
    return React.createElement('h1', null, 'Hello ', this.props.name);
  }
}

ReactDOM.render(<ClassComponent name="Gorgio" />, document.getElementById('root'));
