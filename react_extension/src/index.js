/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-29 07:42:07
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-29 11:30:28
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// 渲染app组件到页面
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// 3_hooks 销毁组件使用
// const container = document.getElementById('root');
// const root = createRoot(container);
// root.render(<BrowserRouter><App /></BrowserRouter>);
// export default root