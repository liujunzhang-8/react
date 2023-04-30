/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-29 20:07:51
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-29 20:21:02
 */
import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App'

// 渲染app组件到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);