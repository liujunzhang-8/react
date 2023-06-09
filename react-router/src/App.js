/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-29 20:08:04
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-02 20:37:21
 */
import React from 'react'
import { NavLink, useRoutes } from "react-router-dom";
import routes from './routes';
import Header from './components/Header'


export default function App() {
  // 根据路由表生成对应的路由规则
  const element = useRoutes(routes)
  return (
    <div>
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <div className="col-xs-offset-2 col-2">
          <div className="list-group">
            <NavLink className="list-group-item" to="/about">
              About
            </NavLink>
            <NavLink className="list-group-item" to="/home">
              Home
            </NavLink>
          </div>
        </div>
        <div className="col-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              {/* <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Navigate to="/about" />} />
              </Routes> */}
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

