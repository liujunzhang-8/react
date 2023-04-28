/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-26 21:12:24
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-27 08:19:22
 */
import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
// import store from "./redux/store";

// 监测redux中状态的改变，若redux的状态发生了改变，那么重新渲染App组件
// store.subscribe(() => {
//   // 渲染app组件到页面
//   ReactDOM.createRoot(document.getElementById('root')).render(<App />)
// })

// 渲染app组件到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);