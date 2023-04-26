/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-26 21:12:24
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-26 22:49:48
 */
import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
// import store from "./redux/store";

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