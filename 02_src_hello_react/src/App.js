/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-03-18 08:56:17
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-21 21:44:49
 */
import React, {Component} from 'react';
import Hello from './component/Hello';
import Welcome from './component/Welcome';


// 创建并暴露App组件 类式组件 创建“外壳”组件App
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome />
      </div>
    );
  }
}


