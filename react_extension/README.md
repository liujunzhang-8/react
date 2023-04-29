<!--
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-29 07:38:05
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-29 08:23:56
-->
## 1. setState

### setState更新状态的2种写法

```javascript
  (1). setState(stateChange, [callback]) --- 对象式的setState  
    1. stateChange 为状态改变对象(该对象可以体现出状态的更改)  
    2. callback 是可选的回调函数，它在状态更新完毕、界面也更新后(render调用后)才被调用  
  (2). setState(updater, [callback]) --- 函数式的setState  
    1. updater 为返回stateChange 对象的函数。   
    2. updarer 可以接收到state和props。  
    3. callback 是可选的回调函数，它在状态更新、界面也更新后(render调用后)才被调用。  

  总结：  
    1. 对象式的setState是函数式的setState的简写方式(语法糖)  
    2. 使用原则：  
      (1). 如果新状态不依赖于原状态 ===> 使用对象方式  
      (2). 如果新状态依赖于原状态 ===> 使用函数方式  
      (3). 如果需要在setState()执行后获取最新的状态数据，要在第二个callback函数中读取。
```

## LazyLoad

### 路由组件的lazyLoad

```javascript
  // 1. 通过React的lazy函数配合import()函数动态加载路由组件 ===> 路由组件代码会被分开打包
  const Login = lazy(() => import('@/pages/Login'))

  // 2. 通过<Suspense></Suspense>指定在加载得到路由打包文件前显示一个自定义loading界面
  <Suspense fallback={<h1>loading...</h1>}>
    <Switch>
      <Route path="/xxx" component={Xxxx} />
      <Redirect to='/login' />
    </Switch>
  </Suspense>
```

## Hooks

### 1. React Hook/Hooks 是什么？

### 2. 三个常用的Hook