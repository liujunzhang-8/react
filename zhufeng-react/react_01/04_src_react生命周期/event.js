/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-23 11:20:50
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-23 11:43:04
 */

import {updateQueue} from './Component'
/**
 * 实现事件委托，把所有的事件都绑定到document上
 * @param {*} dom 
 * @param {*} eventType 
 * @param {*} handler 
 */
export function addEvent(dom, eventType, handler) {
  let store; // 这是一个对象，里面存放着此DOM上对应的事件处理函数
  if(dom.store) {
    store = dom.store;
  } else {
    dom.store = {}
    store = dom.store;
  }
  // store.onclick = handler
  store[eventType] = handler
  if(!document[eventType]) { // 如果有很多个元素都绑定了 click 事件，往document上挂的时候只挂一次
    document[eventType] = dispatchEvent;
  }
}

function dispatchEvent(event) {
  let {target, type} = event;
  let eventType = `on${type}`; // onClick
  updateQueue.isBatchingUpdate = true; // 切换为批量更新模式
  let syntheticEvent = createSyntheticEvent(event)
  // 模拟事件冒泡过程
  while(target) {
    let {store} = target;
    let handler = store && store[eventType];
    handler&&handler.call(target, syntheticEvent);
  }
  updateQueue.isBatchingUpdate = false;
  updateQueue.batchUpdate()
}

// 在源码里此处做了一些浏览器兼容性的适配
function createSyntheticEvent(event) {
  let syntheticEvent = {};
  for(let key in event) {
    syntheticEvent[key] = event;
  }
  return syntheticEvent;
}