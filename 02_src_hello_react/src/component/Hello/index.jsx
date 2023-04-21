/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-21 21:14:02
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-21 21:40:23
 */
import React, {Component} from "react";
import hello from './index.module.css'

export default class Hello extends Component {
  render() {
    return <h2 className={hello.title}>Hello, React!</h2>
  }
}