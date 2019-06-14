import { Menu } from 'antd';
import React, { Component } from 'react';

class Sidermenu extends Component {
    render() {
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <span className="nav-text">病床總覽</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <span className="nav-text">個案資訊管理</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <span className="nav-text">歷史病歷管理</span>
                </Menu.Item>
                <Menu.Item key="4">
                    <span className="nav-text">系統設定</span>
                </Menu.Item>
            </Menu>

        );
    }
}

export default Sidermenu