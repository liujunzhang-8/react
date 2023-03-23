/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-03-18 08:56:17
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-03-22 14:57:32
 */
import logo from './logo.svg';
import './App.css';
import React from 'react';

// 函数式组件
// function App() {
//   console.log(this); // 此处的this是undefined，因为babel编译后开启了严格模式
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           React函数式组件
//         </p>
//       </header>
//     </div>
//   );
// }

// 类式组件
class App extends React.Component {
  // render是放在哪里的？——类的原型对象上，供实例使用
  // render中的this是谁？——类的实例对象 <=> 类组件实例对象

  // 构造器调用几次？—— 1次
  // constructor(props) {
  //   super(props)
  //   // this.state = {isHot: false, wind: '微风'}
  //   // 解决changeWeather中this的指向问题
  //   // this.changeWeather = this.changeWeather.bind(this)
  // }
  // 初始化状态
  state = {name: 'tom', age: 18, sex: '女'}

  //  对标签属性进行类型，必要性的限制
  // static propTypes = {
  //   name: PropTypes.string.isRequired, // 限制name必传，且为字符串
  //   sex: PropsTypes.string, // 限制sex为字符串
  //   age: PropsTypes.number, // 限制age为数值
  // }

  // 指定默认标签属性值
  static defaultProps = {
    sex: '男',
    age: 18
  }

  // render 调用几次？—— 1+n次，1是初始化的那次，n是状态更新的次数
  render() {
    // 读取状态
    const {isHot, wind} = this.state
    return (
      <ul>
        <li>姓名：{this.state.name}</li>
        <li>性别：{this.state.sex}</li>
        <li>年龄：{this.state.age}</li>
      </ul>
    );
  }
  // 自定义方法 —— 要用赋值语句的形式 + 箭头函数
  changeWeather = () => {
    // changeWeather放在哪里？—— Weather的原型对象上，供实例使用
    // 由于changeWeather是作为onClick的回调，所以不是通过实例调用的，是直接调用
    // 类中的方法默认开启了局部严格模式，所以changeWeather中的this为undefined
    console.log(this);

    // 获取原来的isHot值
    const isHot = this.state.isHot
    // ⚠️：状态必须通过setState进行更新，且更新是一种合并，不是替换
    this.setState({isHot: !isHot})

    // ⚠️严重注意：状态(state)不可直接更改，下面这行就是直接更改！！！
    // this.state.isHot = !isHot // 错误的写法
    console.log(this.state.isHot);
  }
}

export default App;
