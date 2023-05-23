/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-05-04 16:15:56
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-05-23 09:48:47
 */

class Updater {
  constructor(classInstance) {
    this.classInstance = classInstance;
    this.pendingStates = []; // 保存将要更新的队列
    this.callbacks = []; // 保存将要执行的回调函数
  }
  addState(partialState, callback) {
    this.pendingStates.push(partialState);
    if(typeof callback === 'function') {
      this.callbacks.push(callback)
    }
    this.emitUpdate(); // 触发更新逻辑
  }
  // 不管状态和属性的变化，都会让组件刷新，不管状态变化和属性变化，都会执行此方法
  emitUpdate() {
    // 后面会在此处加判断，判断批量更新的变量，如果是异步就先不更新，如果是同步则直接更新
    this.updateComponent(); // 让组件更新
  }
  updateComponent() {
    let {classInstance, pendingStates} = this;
    if(pendingStates.length > 0) { // 如果有等待的更新的话
      shouldUpdate(classInstance, this.getState());
    }
  }

  // 根据老状态和pendingStates这个更新队列，计算新状态
  getState() {
    let {classInstance, pendingStates} = this;
    let {state} = classInstance; // 先获取原始的组件的状态
    pendingStates.forEach(nextState => {
      if(typeof nextState === 'function') {
        nextState = nextState(state)
      }
      state = {...state, ...nextState}
    });
    pendingStates.length = 0;  // 清空等待更新的队列
    this.callbacks.forEach(callback => callback())
    this.callbacks.length = 0;
    return state; // 返回新状态
  }
}

function shouldUpdate(classInstance, nextState) {
  classInstance.state = nextState; // 真正修改实例的状态了
  classInstance.forceUpdate(); // 然后调用类组件实例的updateComponent进行更新
}

export class Component {
  static isReactComponent = true
  constructor(props) {
    this.props = props;
    this.state = {};
    // 每一个类组件的实例有一个updater更新器
    this.updater = new Updater(this)
  }
  setState(partialState, callback) {
    this.updater.addState(partialState, callback);
  }
  /**
   * 组件如何更新
   *  1. 获取老的虚拟DOM React元素
   *  2. 根据最新的属性和状态计算新的虚拟DOM
   *  3. 然后进行比较，查找差异，然后把这些差异同步到真实DOM上
   */
  forceUpdate() {
    console.log('updateComponent');
    let oldRenderVdom = this.oldRenderVdom; // 老的虚拟DOM
    let newRenderVdom = this.render(); // 计算新的虚拟DOM
    compareTwoVdom(oldRenderVdom, newRenderVdom); // 比较差异，把更新同步到真实DOM上
    this.oldRenderVdom = newRenderVdom;
  }
}

// Component.prototype.isReactComponent = {}
