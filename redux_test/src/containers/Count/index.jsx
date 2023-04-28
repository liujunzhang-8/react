/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-27 07:57:30
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-28 16:13:52
 */
// 引入Count的UI组件
// import CountUI from '../../components/Count'

import React, { Component } from 'react'
// 引入store，用于获取redux中的状态
// import store from '../../redux/store'
// 引入actionCreator，专门用于创建action对象
// import { 
//   createIncrementAction, 
//   createDecrementAction, 
//   createIncrementAsyncAction 
// } from '../../redux/count_action'
import { 
  createIncrementAction, 
  createDecrementAction, 
  createIncrementAsyncAction 
} from '../../redux/actions/count'
// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

// 1、mapStateToProps函数返回的是一个对象
// 2、返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件的props的value
// 3、mapStateToProps用于传递状态
// 映射状态
// const mapStateToProps =  state => ({count: state})

// 1、mapDispatchToProps函数返回的是一个对象
// 2、返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件的props的value 
// 3、mapDispatchToProps用于传递操作状态的方法
// 映射操作状态的方法
// const mapDispatchToProps = dispatch => (
//   {
//     jia: number => dispatch(createIncrementAction(number)), // 通知redux执行加法
//     jian: number => dispatch(createDecrementAction(number)),
//     jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
//   }
// )

// 定义UI组件
class Count extends Component {
  state = {carName: '奔驰c63'}

  // componentDidMount() {
  //   // 监测redux中状态的变化，只要变化，就调用render
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }

  // 加法
  increment = () => {
    const {value} = this.selectNumber
    // 通知redux加value
    // store.dispatch(createIncrementAction(value*1))
    this.props.jia(value*1)
  }
  // 减法
  decrement = () => {
    const {value} = this.selectNumber
    // 通知redux加value
    // store.dispatch(createDecrementAction(value*1))
    this.props.jian(value*1)
  }
  // 奇数再加
  incrementIfOdd = () => {
    const {value} = this.selectNumber
    // const count = store.getState()
    if(this.props.count % 2 !== 0) {
      this.props.jia(value*1)
    }
  }
  // 异步加
  incrementAsync = () => {
    const {value} = this.selectNumber
    // setTimeout(() => {
      // store.dispatch(createIncrementAsyncAction(value*1, 500))
    // }, 500)
    this.props.jiaAsync(value*1,)
  }
  render() {
    // console.log(this.props, ' UI组件接收到的状态');
    return (
      <div>
        <h2>我是Count组件, 下方组件总人数为: {this.props.renshu}</h2>
        <h4>当前求和为：{this.props.count}</h4>
        <select ref={c => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;&nbsp;
      </div>
    )
  }
}

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(
  state => ({count: state.he, renshu: state.rens.length}), 
  // mapDispatchToProps 的一般写法
  // dispatch => ({
  //   jia: number => dispatch(createIncrementAction(number)), // 通知redux执行加法
  //   jian: number => dispatch(createDecrementAction(number)),
  //   jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
  // })

  // mapDispatchToProps 的简写
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createIncrementAsyncAction
  }
)(Count)
