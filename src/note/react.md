<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-03-18 09:06:01
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-03-18 09:55:29
-->
### `前置知识`
1、判断this的指向
2、class(类)
3、ES6语法规范
4、npm包管理器
5、原型、原型链
6、数组常用方法
7、模块化

#### `虚拟DOM的两种创建方式`
1、使用jsx创建
`const VDOM = <h1>Hello React</h1>`
2、使用js创建
`const VDOM = React.createElement(标签名, 属性值, 内容)`

#### `虚拟DOM与真实DOM`
关于虚拟DOM:
  `1、本质是Object类型的对象(一般对象)`
  `2、虚拟DOM比较'轻', 真实DOM比较'重'，因为虚拟DOM是React内部在用，无需真实DOM上那么多属性`
  `3、虚拟DOM最终会被React转换为真实DOM，呈现在页面上。`

#### `jsx语法规则`
XML早期用于存储和传输数据

jsx语法规则：
  1、定义虚拟DOM时，不要写引号。
  2、标签中混入js表达式时要用{}。
  