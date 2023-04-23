/*
 * @Descripttion:
 * @Author: Gorgio.Liu
 * @version:
 * @Date: 2023-04-23 11:09:21
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-23 11:43:51
 */
import React, { Component } from "react";

export default class Search extends Component {
  search = () => {
    // 获取用户输入(连续解构赋值 + 重命名)
    const {keyWordElement: {value: keyWord}} = this
    console.log(keyWord);
    // 发送网络请求
    
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索github用户</h3>
        <div>
          <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索" />
          &nbsp;<button onClick={this.search}>搜索</button>
        </div>
      </section>
    );
  }
}
