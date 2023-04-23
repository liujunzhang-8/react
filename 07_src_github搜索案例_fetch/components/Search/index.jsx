/*
 * @Descripttion:
 * @Author: Gorgio.Liu
 * @version:
 * @Date: 2023-04-23 11:09:21
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-23 16:28:10
 */
// import axios from "axios";
import React, { Component } from "react";
import PubSub from 'pubsub-js'
import './index.css'

export default class Search extends Component {
  search = async () => {
    console.log('Search发布消息了');
    // 获取用户输入(连续解构赋值 + 重命名)
    const {keyWordElement: {value: keyWord}} = this
    // 发送请求前通知List更新状态
    // this.props.updateAppState({isFirst: false, isLoading: true})
    PubSub.publish('atguigu', {isFirst: false, isLoading: true})
    // 发送网络请求 --- 使用axios发送
    /* axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      response => {
        // 请求成功后通知List更新状态
        // this.props.updateAppState({isLoading: false, users: response.data.items})
        PubSub.publish('atguigu', {isLoading: false, users: response.data.items})
      },
      error => {
        // 请求失败后通知App更新状态
        // this.props.updateAppState({isLoading: false, err: error.message})
        PubSub.publish('atguigu', {isLoading: false, err: error.message})
      }
    ) */

    // 发送网络请求 --- 使用fetch发送（未优化）
    /* fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
      response => {
        console.log('联系服务器成功了')
        return response.json()
      },
      // error => {
      //   console.log('联系服务器失败了', error);
      //   return new Promise(() => {})
      // }
    ).then(
      response => {console.log('获取数据成功了', response);},
      // error => {console.log('获取数据失败了', error);}
    ).catch(
      error => {console.log('请求出错', error);}
    ) */

    // 发送网络请求 --- 使用fetch发送（优化）
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${keyWord}`)
      const data = await response.json()
      console.log(data);
    } catch (error) {
      console.log('请求出错', error);
    }
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
