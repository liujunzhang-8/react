/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-04 14:43:21
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-04 15:01:12
 */
import {REACT_TEXT} from "./constants";

/**
 * 不管原来是什么元素，都转成对象的形式，方便后续的DOM-DIFF
 * @param {*} element 
 * @returns 
 */
export function wrapToVdom(element) {
  if(typeof element === 'string' || typeof element === 'number') {
    // 返回的也是React元素，也是虚拟DOM
    return {type: REACT_TEXT, props: {content: element}}; // 虚拟DOM.props.content 
  } else {
    return element;
  }
}