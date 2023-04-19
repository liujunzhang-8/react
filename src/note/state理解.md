<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-03-20 08:42:53
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-19 15:37:57
-->
### state —— 组件三大核心属性1

1. 理解
  > state 是组件对象最重要的属性，值是对象（可以包含多个 key-value 的组合）
  > 组件被称为 “状态机”，通过更新组件的 state 来更新对应的页面显示（重新渲染组件）
  
2. 强烈注意：
  > 组件中 render 方法中的 this 为组件实例对象
  > 组件自定义的方法中 this 为 undefined， 如何解决？
    a. 强制绑定this：通过函数对象的bind()
    b. 箭头函数
  > 状态数据，不能直接修改或更新

##### react中的事件绑定

##### setState 的使用

### props —— 组件三大核心属性2

1. 理解
  > 每个组件对象都会有 props（properties 的简写）属性
  > 组件标签的所有属性都保存在 props 中

2. 作用
  > 通过标签属性从组件外向组件内传递变化的数据
  > 注意：组件内部不要修改 props 数据

### refs —— 组件三大核心属性3

1. 理解
  > 组件内的标签可以