import { Menu } from 'antd';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Sidermenu extends Component{
    render(){
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <span className="nav-text">病床總覽</span>
                    <Link to="/Main/Bedview"></Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <span className="nav-text">個案資訊管理</span>
                    <Link to="/Main/Caseview"></Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <span className="nav-text">歷史病歷管理</span>
                    <Link to="/Main/Historyview"></Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <span className="nav-text">系統設定</span>
                </Menu.Item>
            </Menu>

        );

    }
}

export default Sidermenu