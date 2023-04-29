/*
 * @Descripttion:
 * @Author: Gorgio.Liu
 * @version:
 * @Date: 2023-04-29 09:09:54
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-29 10:44:57
 */
import React from "react";
import root from "../../index";

// 类式组件
// class Demo extends React.Component {
//   state = {count: 0}

//   myRef = React.createRef()

//   add = () => {
//     this.setState(state => ({count: state.count + 1}))
//   }

//   componentDidMount() {
//     setInterval(() => {
//       this.setState(state => ({count: state.count + 1}))
//     }, 1000)
//   }

//   unMount  = () => {
//     root.unmount()
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer)
//   }

//   show = () => {
//     alert(this.myRef.current.value)
//   }

//   render() {
//     return (
//       <div>
//         <input type="text" ref={this.myRef} />
//         <h2>当前求和为{this.state.count}</h2>
//         <button onClick={this.add}>点我+1</button>
//         <button onClick={this.unMount}>卸载组件</button>
//         <button onClick={this.show}>点击提示数据</button>
//       </div>
//     )
//   }
// }

// 函数式组件
function Demo() {
  const [count, setCount] = React.useState(0)
  const myRef = React.useRef()

  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => {
      console.log('####');
      clearInterval(timer)
    }
  }, [])

  // 加的回调
  function add () {
    console.log('点击➕');
    // setCount(count + 1) // 第一种写法
    setCount(count => count + 1)
  }

  // 卸载组件的回调
  function unmount() {
    console.log('111');
    root.unmount()
  }

  // 提示输入的回调
  function show () {
    alert(myRef.current.value)
  }

  return (
    <div>
      <input type="text" ref={myRef} />
      <h2>当前求和为: {count}</h2>
      <button onClick={add}>点我+1</button>&nbsp;&nbsp;
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>点击提示数据</button>
    </div>
  );
}

export default Demo;
