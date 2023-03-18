/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-03-18 08:56:17
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-03-18 15:51:56
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
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            React类式组件
          </p>
        </header>
      </div>
    );
  }
}

export default App;
