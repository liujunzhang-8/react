/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-04 14:24:38
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-24 22:54:32
 */
import {addEvent} from './event.js'
import {REACT_TEXT, REACT_FORWARD_REF_TYPE } from "./constants.js";

/**
 * 把虚拟DOM转成真实DOM插入容器中
 * @param {*} vdom 虚拟DOM
 * @param {*} container 容器
 */
function render(vdom, container) {
  let newDOM = createDOM(vdom);
  container.appendChild(newDOM); // 插入容器中
  if(newDOM.componentDidMount) newDOM.componentDidMount() 
}

/**
 * 把虚拟DOM转成真实DOM
 * @param {*} vdom 
 */
function createDOM(vdom) {
  let {type, props, ref} = vdom;
  let dom;  // 先获取真实DOM元素
  if(type&&type.$$typeof === REACT_FORWARD_REF_TYPE) {
    return mountForwardComponent(vdom)
  } else if(type === REACT_TEXT) { // 如果是一个文本元素，就创建一个文本节点
    dom = document.createTextNode(props.content);
  } else if(typeof type === 'function') { // 说明这是一个react函数组件的react元素
    if(type.isReactComponent) { // 说明它是一个类组件
      return mountClassCop(vdom)
    } else {
      return mountFunCop(vdom)
    }
  } else if(typeof type === 'string') {
    dom = document.createElement(type); // 原生DOM类型
  } else {
    throw new Error(`无法处理的元素类型`, JSON.stringify(type, null, 2))
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
  vdom.dom = dom;
  if(ref) ref.current = dom; // ref.current属性指向真实DOM的实例
  return dom;
}

function mountForwardComponent(vdom) {
  let {type, props, ref} = vdom;
  let renderVdom = type.render(props, ref);
  vdom.oldRenderVdom = renderVdom;
  return createDOM(renderVdom)
}

function mountClassCop(vdom) {
  let {type, props, ref} = vdom;
  let defaultProps = type.defaultProps || {}
  let classInstance = new type({...defaultProps, ...props});
  if(type.contextType) {
    classInstance.context = type.contextType.Provider._value
  }
  console.log(vdom, '++++');
  vdom.classInstance = classInstance;
  if(classInstance.componentWillMount) {
    classInstance.componentWillMount();
  }
  let renderVdom = classInstance.render()
  classInstance.oldRenderVdom = vdom.oldRenderVdom = renderVdom; // 挂载的时候计算出虚拟DOM，然后把老的renderVdom挂载到类的实例上
  if(ref) ref.current = classInstance; // ref.current 指向类组件的实例
  let dom = createDOM(renderVdom)
  // 暂时把didMount挂载到dom上
  if(classInstance.componentDidMount) {
    dom.componentDidMount = classInstance.componentDidMount.bind(classInstance);
  }
  return dom;
}

function mountFunCop(vdom) {
  let {type, props} = vdom;
  let renderVdom = type(props);
  vdom.oldRenderVdom = renderVdom;
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
      // dom[key.toLocaleLowerCase()] = newProps[key]; // dom.onclick = handleClick
      addEvent(dom, key.toLocaleLowerCase(), newProps[key]);
    } else {
      dom[key]= newProps[key];
    }
  }
}

/**
 * 根据vdom返回真实DOM
 * @param {*} vdom 
 */
export function findDOM(vdom) {
  let {type} = vdom;
  let dom;
  if(typeof type === 'function') { // 虚拟DOM组件的类型的话
    // 找到他的oldRenderVdom的真实DOM元素
    dom = findDOM(vdom.oldRenderVdom)
  } else {
    dom = vdom.dom
  }
  return dom;
}

/**
 * 比较新旧的虚拟DOM，找出差异，更新到真实的DOM
 * 现在还没有实现dom-diff
 * @param {*} parentDOM 
 * @param {*} oldVdom 
 * @param {*} newVdom 
 */
export function compareTwoVdom(parentDOM, oldVdom, newVdom, nextDOM) {
  if(!oldVdom && !newVdom) { // 如果老的虚拟DOM是null，新的虚拟DOM也是null

  } else if(oldVdom && (!newVdom)) { // 老的不为null，新的为null，销毁老组件
    let currentDOM = findDOM(oldVdom);
    currentDOM.parentNode.removeChild(currentDOM); // 把老的真实DOM删除
    if(oldVdom.classInstance && oldVdom.classInstance.componentWillUnmount) {
      oldVdom.classInstance.componentWillUnmount() // 执行组件卸载方法
    }
  } else if(!oldVdom && newVdom) { // 如果老的没有，新的有，就根据新的组件创建新的DOM并且添加到父组件
    let newDOM = createDOM(newVdom);
    if(nextDOM) {
      parentDOM.insertBefore(newDOM, nextDOM)
    } else {
      parentDOM.appendChild(newDOM);
    }
    if(newDOM.componentDidMount) newDOM.componentDidMount();
  } else if (oldVdom && newVdom && (oldVdom.type !== newVdom.type)) {
    let oldDOM = findDOM(oldVdom); // 先获取老的真实DOM
    let newDOM = createDOM(newVdom) // 创建新的真实DOM
    oldDOM.parentNode.replaceChild(newDOM, oldDOM);
    if(oldVdom.classInstance && oldVdom.classInstance.componentWillUnmount) {
      oldVdom.classInstance.componentWillUnmount(); // 执行组件卸载方法
    }
    if(newDOM.componentDidMount) newDOM.componentDidMount()
  } else { // 老的有，新的也有，类型也一样，需要服用老节点，进行深度的递归dom diff了
    updateElement(oldVdom, newVdom)
  }
  let oldDOM = findDOM(oldVdom); // findDOM
  let newDOM = createDOM(newVdom);
  parentDOM.replaceChild(newDOM, oldDOM);
}

function updateElement(oldVdom, newVdom) {
  // 文本节点的更新
  if(oldVdom.type === REACT_TEXT && newVdom.type === REACT_TEXT) {
    let currentDOM = newVdom.dom = findDOM(oldVdom);
    if(oldVdom.props.content !== newVdom.props.content) {
      currentDOM.textContent = newVdom.props.content;
    }
  }else if(typeof oldVdom.type === 'string') { // 说明是原生组件 div
    // 让新的虚拟DOM的真实DOM属性等于老的虚拟DOM对应的那个真实DOM
    let currentDOM = newVdom.dom = findDOM(oldVdom);
    // 用新的属性更新DOM的老属性
    updateProps(currentDOM, oldVdom.props, newVdom.props)
    updateChildren(currentDOM, oldVdom.props.children, newVdom.props.children);
  }else if(typeof oldVdom.type === 'function') {
    if(oldVdom.type.isReactComponent) { // 说明是一个类组件
      updateClassComponent(oldVdom, newVdom)
    } else {
      updateFunctionComponent(oldVdom, newVdom)
    }
  }
}

function updateFunctionComponent(oldVdom, newVdom) {
  let parentDOM = findDOM(oldVdom).parentNode;
  let {type, props} = newVdom;
  let renderVdom = type(props);
  newVdom.oldRenderVdom = renderVdom;
  compareTwoVdom(parentDOM, oldVdom.oldRenderVdom, renderVdom)
}

function updateClassComponent(oldVdom, newVdom) {
  let classInstance = newVdom.classInstance = oldVdom.classInstance;
  newVdom.oldRenderVdom = oldVdom.oldRenderVdom
  // 因为此更新是由父组件更新引起的，父组件在重新渲染的时候，给子组件传递新的属性
  if(classInstance.componentWillReceiveProps) {
    classInstance.componentWillReceiveProps();
  }
  classInstance.updater.emitUpdate(newVdom.props)
}

function updateChildren(parentDOM, oldVChildren, newVChildren) {
  oldVChildren = Array.isArray(oldVChildren) ? oldVChildren : [oldVChildren];
  newVChildren = Array.isArray(newVChildren) ? newVChildren : [newVChildren];
  let maxLength = Math.max(oldVChildren.length, newVChildren.length)
  for(let i=0; i<maxLength; i++) {
    let nextVNode = oldVChildren.find((item, index) => index > i && item && findDOM(item))
    compareTwoVdom(parentDOM, oldVChildren[i], newVChildren[i], nextVNode&&findDOM(nextVNode));
  }
}

const ReactDOM = {
  render
}

export default ReactDOM;
