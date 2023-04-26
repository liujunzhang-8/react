import React, { Component } from 'react'
import { Button, DatePicker } from 'antd';
import {
  WechatOutlined,
  WeiboOutlined,
  SearchOutlined
} from '@ant-design/icons';

export default class App extends Component {
  render() {
    const onChange = (date, dateString) => {
      console.log(date, dateString);
    };
    return (
      <div>
        <Button type="primary">按钮1</Button>
        <Button type="link">按钮2</Button>
        <WechatOutlined />
        <WeiboOutlined />
        <Button type="primary" icon={<SearchOutlined />}>
          Search
        </Button>
        <DatePicker onChange={onChange} />
      </div>
    )
  }
}

