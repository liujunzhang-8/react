/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-24 23:33:52
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-25 00:01:43
 */
import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

export default class MyNavLink extends Component {
  render() {
    // console.log(this.props);
    return (
      <NavLink activeclassname='active' className="list-group-item" {...this.props} />
    )
  }
}
