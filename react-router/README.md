<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-29 20:05:03
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-02 21:39:12
-->
## React Router 6

## <Routes /> 与 <Route />

1. v6版本中移除了先前的<Switch>, 引入了新的替代者：<Routes>。
2. <Routes> 和 <Route> 要配合使用，且必须要用<Routes> 包裹 <Route>。
3. <Route> 相当于一个if语句，如果其路径与当前URL匹配，则呈现其对应的组件。
4. <Route caseSensitive> 属性用于指定：匹配时是否区分大小写(默认为false)。
5. 当URL发生变化时，<Routes>都会查看其所有子<Route>元素以找到最佳匹配并呈现组件。
6. <Route>也可以嵌套使用，且可配合`useRoutes()`配置"路由表"，但需要通过`<Outlet>`组件来渲染其子路由。
7. 示例代码：
```javascript
<Routes>
  {/* path属性用于定义路径，element属性用于定义当前路径所对应的组件 */}
  <Route path="/login" element={<Login />}></Route>

  {/* 用于定义嵌套路由，home是一级路由，对应的路径/home */}
  <Route path="home" element={<Home />}>
    {/* test1 和 test2 是二级路由，对应的路径是/home/test1 或 /home/test2 */}
    <Route path="test1" element={<Test />}>
    <Route path="test2" element={<Test2 />}>
  </Route>

  {/* Route也可以不写element属性，这时就是用于展示嵌套的路由，所对应的路径是/users/xxx */}
  <Route path="users">
    <Route path="xxx" element={<Demo />} />
  </Route>
</Routes>
```

## <Link>

1. 作用：修改URL，且不发送网络请求(路由链接)。
2. 注意：外侧需要用<BrowserRouter>或<HashRouter>包裹。
3. 示例代码：
```javascript
import {Link} from "react-router-dom";

function Test() {
  return (
    <div>
      <Link to="路径">按钮</Link>
    </div>
  )
}
```

## <NavLink>

1. 作用：与<Link>组件类似，且可实现导航的 "高亮" 效果。
2. 示例代码：

```javascript
  // 注意：NavLink默认类名是active，下面是指定自定义的class

  // 自定义样式
  <NavLink
    to="login"
    className={({isActive}) => {
      console.log('home', isActive)
      return isActive ? 'base one' : 'base'
    }}
  >Login</NavLink>

  // 默认情况下，当Home的子组件匹配成功，Home的导航也会高亮，当NavLink上添加了end属性后，若Home的子组件匹配成功，则Home的导航没有高亮效果。
  <NavLink to="home" end>home</NavLink>
```

## <Navigate>

1. 作用：只要 <Navigate> 组件被渲染，就会修改路径，切换视图。
2. replace属性用于控制跳转模式(push 或 replace，默认是push)。
3. 示例代码：

```javascript
import React, {useState} from 'react'
import {Navigate} from 'react-router-dom'

export default function Home() {
  const [sum, setSum] = useState()
  return (
    <div>
      <h3>我是Home的内容</h3>
      {/* 根据sum的值决定是否切换视图 */}
      {sum === 1 ? <h4>sum的值为{sum}</h4> : <Navigate to="/about" replace={true} />}
      <button onClick={() => setSum(2)}>点我将sum变为2</button>
    </div>
  )
}
```

## <Outlet>

1. 当<Route>产生嵌套时，渲染其对应的后续子路由。
2. 示例代码：

```javascript
// 根据路由表生成对应的路由规则
export element = useRoutes([
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: 'news',
        element: <News />
      },
      {
        path: 'message',
        element: <Message />,
        children: [
          {
            // path: 'detail/:id/:title/:content', params传参

            // search传参与state传参
            path: 'detail',
            element: <Detail />
          }
        ]
      },
    ]
  }
])

// Home.js
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h3>我是Home的内容</h3>
      <hr />
      <div>
        <ul className="nav nav-tabs">
          <li className="list-group">
            <NavLink className='list-group-item' to="news">News</NavLink>
          </li>
          <li className="list-group">
            <NavLink className='list-group-item' to="message">Message</NavLink>
          </li>
        </ul>
        {/* 指定路由组件呈现的位置 */}
        <Outlet />
      </div>
    </div>
  )
}
```
