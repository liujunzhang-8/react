/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-03-18 08:56:17
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-03-22 11:44:02
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App1';
import reportWebVitals from './reportWebVitals';

// 渲染组件到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 * 执行了root.render之后发生了什么？
 *  1. React解析组件标签，找到了App组件。
 *  2.发现组件是使用类定义的，随后new出来该类的实例，并通过该实例调用到原型上的render方法。
 *  3.将render返回的虚拟DOM转为真实DOM，随后呈现在页面中。
 */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
