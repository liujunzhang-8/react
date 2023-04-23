/*
 * @Descripttion:
 * @Author: Gorgio.Liu
 * @version:
 * @Date: 2023-04-23 11:09:21
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-23 11:13:04
 */
import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" />
          &nbsp;<button>Search</button>
        </div>
      </section>
    );
  }
}
