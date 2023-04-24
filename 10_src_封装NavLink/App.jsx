import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Home 是路由组件
import About from "./pages/About"; // About 是路由组件
import Header from "./components/Header";  // Header是一般组件
import MyNavLink from "./components/MyNavLink";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <Header />
          </div>
        </div>
          <div className="row">
            <div className="col-xs-offset-2 col-xs-2">
              <div className="list-group">
                {/* 原生html中，靠<a>跳转不同的页面 */}
                {/* <a href="./about" className="list-group-item">About</a>
                <a href="" className="list-group-item">Home</a> */}
                {/* 在React中靠路由链接实现切换组件 --- 编写路由链接 */}
                {/* <NavLink activeclassname='active' className="list-group-item" to="/about">
                  About
                </NavLink>
                <NavLink activeclassname='active' className="list-group-item" to="/home">
                  Home
                </NavLink> */}
                <MyNavLink to="/about">About</MyNavLink>
                <MyNavLink to="/home">Home</MyNavLink>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* 注册路由 */}
                  <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/home" element={<Home />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
