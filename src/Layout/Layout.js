import { Layout, Icon } from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './Layout.css'
import Sidermenu from './Sidermenu'

const { Header, Content, Footer, Sider } = Layout;



class Layoutframe extends Component {
    state = {

        collapsed: false,
        mode: 'inline',
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }



    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    <Sidermenu />
                </Sider>
                <Layout>
                    <Header style={{ background: '#000', padding: 0 }}>
                        <span style={{ color: '#fff', paddingLeft: '2%', fontSize: '1.4em' }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                                style={{ cursor: 'pointer' }}
                            />
                        </span>
                        <span style={{ color: '#fff', position: 'absolute', left: '50%', marginLeft: '100px', fontSize: '1.4em' }}>病房總覽</span>
                        <span style={{ color: '#fff', float: 'right', paddingRight: '2%' }}>Hi,陳國榮醫師 {new Date().toLocaleDateString()}</span>
                    </Header>
                    <Content style={{ margin: '10px 16px' }}>
                        <div style={{ background: '#333', height: '50px' }}>
                            <span style={{ color: '#fff', position: 'absolute', left: '50%', marginLeft: '100px', fontSize: '1.4em' }}>病房總覽</span>
                            <span style={{ color: '#fff', float: 'right', paddingRight: '1%' }}>Hi,陳國榮醫師 {new Date().toLocaleDateString()}</span>
                        </div>
                        <div style={{ marginTop: 20, padding: 24, background: '#fff', minHeight: '1000px' }}>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2016 Created by Ant UED
        </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Layoutframe;