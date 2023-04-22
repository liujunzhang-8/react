/*
 * @Descripttion: 
 * @Author: Gorgio.Liu
 * @version: 
 * @Date: 2023-04-21 21:52:41
 * @LastEditors: Gorgio.Liu
 * @LastEditTime: 2023-04-22 10:02:06
 */
import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header />
          <List />
          <Footer />
        </div>
      </div>
    )
  }
}
