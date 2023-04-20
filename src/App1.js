/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-03-18 08:56:17
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-19 23:19:32
 */
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

// 类式组件
class App extends React.Component {
  state = {count: 0}
  add = () => {
    // 获取原状态
    const {count} = this.state
    // 更新状态
    this.setState({count: count+1})
  }

  // 组件将要挂载的钩子
  componentWillMount() {
    console.log('Count---componentWillMount');
  }
  // 组件挂载完毕的钩子
  componentDidMount() {
    console.log('Count---componentDidMount');
  }
  // 组件将要卸载的钩子
  componentWillUnmount() {
    console.log('Count---componentWillUnmount');
  }
  // 控制组件更新的阀门
  shouldComponentUpdate() {
    console.log('Count---shouldComponentUpdate');
    return true
  }
  // 组件将要更新的钩子
  componentWillUpdate() {
    console.log('Count---componentWillUpdate');
  }
  // 组件更新完毕的钩子
  componentDidUpdate() {
    console.log('Count---componentDidUpdate');
  }
  render() {
    const {count} = this.state
    return (
      <div>
        <h2>当前求和为：{count}</h2>
        <button onClick={this.add}>点我+1</button>
      </div>
    );
  }
}

export default App;
