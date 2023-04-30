/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-29 20:56:15
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-30 10:25:08
 */

import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from '../pages/about';
import Message from "../pages/Message";
import News from "../pages/News";
export default [
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: 'news',
        element: <News />
      },
      {
        path: 'message',
        element: <Message />
      },
    ]
  },
  {
    path: '/',
    element: <Navigate to="/about" />
  }
]