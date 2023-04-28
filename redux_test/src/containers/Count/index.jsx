/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-27 07:57:30
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-27 09:06:43
 */
// 引入Count的UI组件
import CountUI from '../../components/Count'
import { 
  createIncrementAction, 
  createDecrementAction, 
  createIncrementAsyncAction 
} from '../../redux/count_action'
// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'

// 1、mapStateToProps函数返回的是一个对象
// 2、返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件的props的value
// 3、mapStateToProps用于传递状态
function mapStateToProps(state) {
  return {count: state}
}

// 1、mapDispatchToProps函数返回的是一个对象
// 2、返回的对象中的key就作为传递给UI组件props的key，value就作为传递给UI组件的props的value 
// 3、mapDispatchToProps用于传递操作状态的方法
function mapDispatchToProps(dispatch) {
  return {
    jia: number => dispatch(createIncrementAction(number)), // 通知redux执行加法
    jian: number => dispatch(createDecrementAction(number)),
    jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),
  }
}

// 使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
