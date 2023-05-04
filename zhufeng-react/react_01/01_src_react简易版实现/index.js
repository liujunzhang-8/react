/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-02 22:18:14
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-04 15:20:17
 */
import React from './react';
import ReactDOM from './react-dom';

/**
 * 老得版本中我们只要用到CSS，就需要在顶部引入react变量，但是在新的版本中，不需要再引入React变量了。
 * JSX：javascript + xml html
 * JSX其实只是react提供的一个语法糖
 * React元素是构建React应用的最小单位，也就是所谓的虚拟DOM
 * 虚拟DOM
 * 1. JSX表达式 表达式就是变量 常量 操作符 混合在一起的组合
 * 表达式是可以计算的，而且 肯定会有一个返回值
 * jsx更像JS
 */

// 实现React.createElement方法，返回一个React元素
let element = React.createElement('div', {
  className: 'title',
  style: {
    color: 'red',
    fontSize: '24px',
    fontWeight: 'bold'
  }
}, React.createElement("span", null, "Hello "), "World");
console.log(JSON.stringify(element, null, 2));
// jsx 在执行的时候其实是一个函数调用，它是一个创建元素的工厂函数
// const root = ReactDOM.createRoot(document.getElementById('root'));
// 实现render方法，把React元素变成真实的DOM元素插入页面root里x
ReactDOM.render(element, document.getElementById('root'));
