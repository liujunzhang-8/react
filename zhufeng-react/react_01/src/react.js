/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-04 14:24:15
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-23 18:04:09
 */

import { wrapToVdom } from "./utils";
import { Component } from "./Component";

/**
 * 
 * @param {*} type 类型
 * @param {*} config 配置对象
 * @param {*} children 第一个儿子
 * 多个儿子就是数组
 * 一个儿子就是对象或者null
 * 没有儿子就是undefined
 * 后面会讲dom-diff
 * @returns 
 */
function createElement (type, config, children) {
  let ref; // 是用来获取虚拟DOM实例的
  let key; // 用来区分同一个父亲的不同儿子的
  if(config) {
    delete config.__source;
    delete config.__self;
    ref = config.ref;
    delete config.ref
    key = config.ref
    delete config.key
  }
  let props = {...config};
  if(arguments.length > 3) { // 如果参数大于3个，说明有多个儿子
    // 核心就是把字符串或者说数字类型的节点转换成对象的形式
    props.children = Array.prototype.slice.call(arguments, 2).map(wrapToVdom); // 只能处理类数组
  } else {
    // children 可能是hi一个字符串，也可能是一个数字，也可能是个null undefined，也可能是一个数组
    props.children = wrapToVdom(children);
  }
  return {
    type,
    props,
    ref,
    key
  }
}

function createRef() {
  return {current: null}
}

function forwardRef() {
  
}

const React = {
  createElement,
  Component,
  createRef
}

export default React;
