<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-03-18 08:56:17
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-25 09:23:46
-->
## 一、todoList案例相关知识点
  1. 拆分组件、实现静态组件，注意：className、style的写法   
  2. 动态初始化列表，如何确定将数据放在哪个组件的state中？  

    ——某个组件使用：放在其自身的state中   

    ——某些组件使用：放在他们共同的父组件state中(官方称此操作为：状态提升)  

  3. 关于父子之间通信：  

    1.【父组件】给【子组件】传递数据：通过props传递   
 
    2.【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数  

  4. 注意defaultChecked 和 checked的区别，类似的还有：defaultValue 和 value  
  5. 状态在哪里，操作状态的方法就在哪里  


## 二、github搜索案例相关知识点
  1. 设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败了怎么办。
  2. ES6小知识点：解构赋值 + 重命名   

    ```javascript
      let obj = {a: {b:1}}
      const {a} = obj; // 传统解构赋值
      const {a: {b}} = obj; // 连续解构赋值
      const {a: {b: value}} = obj; // 连续解构赋值 + 重命名
    ```  

  3. 消息订阅与发布机制  

    > 1. 先订阅，再发布（理解：有一种隔空对话的感觉）  

    > 2. 适用于任意组件间通信  

    > 3. 要在组件的componentWillUnmount中取消订阅  

  4. fetch发送请求（关注分离的设计思想）  
  
    ```javascript
      try {
        const response = await fetch(`https://api.github.com/search/users?q=${keyWord}`)
        const data = await response.json()
        console.log(data);
      } catch {
        console.log('请求出错', error)
      }
    ```

## 三、路由的基本使用

  1. 明确好界面中的导航区、展示区
  2. 导航区的a标签改为Link标签  

    ```javascript
      <Link className="list-group-item" to="/about">
        About
      </Link>
    ```
  3. 展示区写Route标签进行路由的匹配
  4. <App>的最外侧包裹一个<BrowerRouter>或<HashRouter>  

    ```javascript
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    ```  

## 四、路由组件与一般组件
  1. 写法不同：   

    一般组件：<demo />  

    路由组件：<Route path="/home" element={<Home />} />  

  2. 存放位置不同：   

    一般组件：components   
    路由组件：pages   

  3. 接收到的props不同：   

    一般组件：写组件标签时传递了什么，就能收到什么   
    路由组件：接收到三个固定属性   
      > history: go、goback、goforword  
      > location:   
      > match:  

## 五、NavLink与封装NavLink

  1. NavLink 可以实现路由链接的高亮，通过activeClassName指定样式名   
  2. 标签体内容是一个特殊的标签属性   
  3. 通过this.props.children可以获取标签体内容   

## 六、Switch (react router 从第6版开始已经没有 Switch 组件了，改用 Routes 组件)
  1. 通常情况下，path和component是一一对应的关系   
  2. Switch可以提高路由匹配效率(单一匹配)  

## 七、解决多级路径刷新页面样式丢失的问题

  1. public/index.html 中 引入样式时不写 ./，写 / （常用）   
  2. public/index.html 中 引入样式时不写 ./，写 %PUBLIC_URL% （常用）  
  3. 使用HashRouter  

## 八、路由的严格匹配与模糊匹配

#### V6之前
  1. 默认使用的是模糊匹配（简单记：【输入的路径】必须包含要【匹配的路径】，且顺序要一致）  
  2. 开启严格匹配：<Route exact={true} path="/home" element={<Home />} />  
  3. 严格匹配不要随便开启，需要再开，有些时候开启会导致无法继续匹配二级路由

### V6中，exact属性不再需要
  v6 内部算法改变，不再需要加exact实现精确匹配路由，默认就是匹配完整路径。  

  如果需要旧的行为(模糊匹配)，路径后加/*  
  ```javascript
    <Route path="/products/*" element={<Products />} />

    <Route path="/products/:productId" element={<ProductDetail />} />
  ```
    

  测试： /prodcuts 显示  

    /products/4 显示  

    /products/haha 显示  

    /products/haha/hehe 显示  

  若：path属性取值为*时，可以匹配任何（非空）路径，同时该匹配拥有最低的优先级。可以用于设置404页面。  
  v6 中，Route 先后顺序不再重要，React Router 能够自动找出最优匹配路径
