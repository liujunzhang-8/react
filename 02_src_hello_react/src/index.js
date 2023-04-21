/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-03-18 08:56:17
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-21 21:22:44
 */
// 引入react核心库
import React from 'react';
// 引入react-dom
import ReactDOM from 'react-dom/client';
// 引入app组件
import App from './App';

// 渲染app组件到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
