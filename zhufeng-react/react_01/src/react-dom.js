/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-04 14:24:38
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-23 09:46:38
 */
import {REACT_TEXT} from "./constants";

/**
 * 把虚拟DOM转成真实DOM插入容器中
 * @param {*} vdom 虚拟DOM
 * @param {*} container 容器
 */
function render(vdom, container) {
  let newDOM = createDOM(vdom);
  container.appendChild(newDOM);
}

/**
 * 把虚拟DOM转成真实DOM
 * @param {*} vdom 
 */
function createDOM(vdom) {
  if(typeof vdom === 'string' || typeof vdom === 'number') {
    return document.createTextNode(vdom);
  }
  let {type, props} = vdom;
  let dom;  // 先获取真实DOM元素
  if(type === REACT_TEXT) { // 如果是一个文本元素，就创建一个文本节点
    dom = document.createTextNode(props.content);
  } else if(typeof type === 'function') { // 说明这是一个react函数组件的react元素
    if(type.isReactComponent) { // 说明它是一个类组件
      return mountClassCop(vdom)
    } else {
      return mountFunCop(vdom)
    }
  } else {
    dom = document.createElement(type); // 原生DOM类型
  }

  if(props) {
    updateProps(dom, {}, props);  // 根据虚拟DOM中的属性更新真实DOM属性
    if(typeof props.children == 'object' && props.children.type) { // 它是个对象，只有一个儿子
      render(props.children, dom)
    } else if(Array.isArray(props.children)) { // 如果是一个数组
      reconcileChildren(props.children, dom)
    }
  }
  // 让虚拟DOM的dom属性指向它的真实DOM
  // vdom.dom = dom;
  return dom;
}

function mountClassCop(vdom) {
  let {type, props} = vdom;
  let classInstance = new type(props)
  let renderVdom = classInstance.render()
  classInstance.oldRenderVdom = renderVdom; // 挂载的时候计算出虚拟DOM，然后把老的renderVdom挂载到类的实例上
  return createDOM(renderVdom)
}

function mountFunCop(vdom) {
  let {type, props} = vdom;
  let renderVdom = type(props);
  return createDOM(renderVdom);
}

function reconcileChildren (childrenVdom, parentDOM) {
  for(let i=0; i<childrenVdom.length; i++) {
    let childVdom = childrenVdom[i];
    render(childVdom, parentDOM);
  }
}

function updateProps(dom, oldProps, newProps) {
  for(let key in newProps) {
    if(key === 'children'){continue;}   // 后面会单独处理children属性，所以此处跳过去
    if(key === 'style') {
      let styleObj = newProps[key];
      for(let attr in styleObj) {
        dom.style[attr] = styleObj[attr];
      } 
    } else if(key.startsWith('on')) {
      dom[key.toLocaleLowerCase()] = newProps[key]; // dom.onclick = handleClick
    } else {
      dom[key]= newProps[key];
    }
  }
}

const ReactDOM = {
  render
}

export default ReactDOM;
