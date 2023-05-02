/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-29 20:56:15
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-02 20:22:21
 */

import { Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from '../pages/about';
import Message from "../pages/Message";
import News from "../pages/News";
import Detail from "../pages/Detail";
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
        element: <Message />,
        children: [
          {
            // path: 'detail/:id/:title/:content', params传参

            // search传参与state传参
            path: 'detail',
            element: <Detail />
          }
        ]
      },
    ]
  },
  {
    path: '/',
    element: <Navigate to="/about" />
  }
]