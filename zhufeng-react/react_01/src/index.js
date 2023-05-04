/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-02 22:18:14
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-04 15:37:36
 */
import React from './react';
import ReactDOM from './react-dom';

/**
 * 函数组件其实就是一个函数，接收props，返回一个React元素
 */
function FunComp(props) {
  // return <h1>Hello, {props.name}</h1>
  return React.createElement('h1', null, 'Hello ', props.name);
}

// let element = <Welcome name='React' />
let element = React.createElement(FunComp, {name: 'React'});
console.log(element);

ReactDOM.render(element, document.getElementById('root'));
