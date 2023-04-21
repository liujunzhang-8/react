/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-03-18 08:56:17
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-21 10:43:46
 */
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

// 类式组件
class App extends React.Component {
  state = {newsArr: []}
  // add = () => {
  //   // 获取原状态
  //   const {count} = this.state
  //   // 更新状态
  //   this.setState({count: count+1})
  // }

  // 组件将要挂载的钩子
  // componentWillMount() {
  //   console.log('Count---componentWillMount');
  // }
  // 组件挂载完毕的钩子
  componentDidMount() {
    setInterval(() => {
      // 获取原状态
      const {newsArr} = this.state
      // 模拟一条新闻
      const news = '新闻' + (newsArr.length+1)
      // 更新状态
      this.setState({newsArr: [news, ...newsArr]})
    }, 1000)
  }

  getSnapshotBeforeUpdate() {
    return this.refs.list.scrollHeight
  }
  // 组件将要卸载的钩子
  // componentWillUnmount() {
  //   console.log('Count---componentWillUnmount');
  // }
  // // 控制组件更新的阀门
  // shouldComponentUpdate() {
  //   console.log('Count---shouldComponentUpdate');
  //   return true
  // }
  // 组件将要更新的钩子
  // componentWillUpdate() {
  //   console.log('Count---componentWillUpdate');
  // }
  // 组件更新完毕的钩子
  componentDidUpdate(preProps, preState, height) {
    console.log('Count---componentDidUpdate');
    this.refs.list.scrollTop += this.refs.list.scrollHeight - height
  }
  render() {
    const list = {width: '200px', height: '150px', backgroundColor: 'skyblue', overflow: 'auto'}
    return (
      <div style={list} ref='list'>
        {
          this.state.newsArr.map((n,index) => {
            return <div key={index} style={{height: '30px'}}>{n}</div>
          })
        }
      </div>
    )
  }
}



export default App;
