/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-29 07:42:07
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-29 10:24:38
 */
import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// 渲染app组件到页面
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<BrowserRouter><App /></BrowserRouter>);
export default root