<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-03-20 08:42:53
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-03-22 11:32:32
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