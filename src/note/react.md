<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-03-18 09:06:01
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-03-18 10:13:21
-->
### 前置知识
1、判断this的指向
2、class(类)
3、ES6语法规范
4、npm包管理器
5、原型、原型链
6、数组常用方法
7、模块化

#### `虚拟DOM的两种创建方式`
1、使用jsx创建\
```js
const VDOM = <h1>Hello React</h1>
```
2、使用js创建\
```js
const VDOM = React.createElement(标签名, 属性值, 内容)
```

#### `虚拟DOM与真实DOM`
关于虚拟DOM:\
  `1、本质是Object类型的对象(一般对象)`\
  `2、虚拟DOM比较'轻', 真实DOM比较'重'，因为虚拟DOM是React内部在用，无需真实DOM上那么多属性`\
  `3、虚拟DOM最终会被React转换为真实DOM，呈现在页面上。`\

#### `jsx语法规则`
XML早期用于存储和传输数据\

jsx语法规则：\
  1.定义虚拟DOM时，不要写引号。
  2.标签中混入js表达式时要用{}。
  3.样式的类名指定不要用class，要用className。`
  4.内联样式，要用style={{key: value}} 的形式去写。
  5.只有一个根标签。
  6.标签必须闭合。
  7.标签首字母
    (1).若小写字母开头，则将该标签转换为html中同名元素，若html中无该标签对应的同名元素，则报错。
    (2).若大写字母开头，react就去渲染对应的组件，若组件没有定义，则报错。
