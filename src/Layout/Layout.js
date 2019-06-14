import { Layout, Icon } from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './Layout.css';
import Sidermenu from './Sidermenu';
import { Radio } from 'antd';

const { Header, Content, Footer, Sider } = Layout;



class Layoutframe extends Component {
    state = {
        value: 1,
        collapsed: false,
        mode: 'inline',
    };

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    renderSwitch(param) {
        switch (param) {
            case 1:
                return '星期一';
            case 2:
                return '星期二';
            case 3:
                return '星期三';
            case 4:
                return '星期四';
            case 5:
                return '星期五';
            case 6:
                return '星期六';
            case 7:
                return '星期日';
            default:
                return param;
        }
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
                <Layout style={{ background: '#fff' }}>
                    <Header style={{ background: '#000', padding: 0, display: 'flex' }}>
                        <span style={{ color: '#fff', paddingLeft: '2%', fontSize: '1.4em' }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                                style={{ cursor: 'pointer' }}
                            />
                        </span>
                        <span style={{ color: '#fff', fontSize: '1.4em', margin: 'auto' }}>病房總覽</span>
                        <span style={{ color: '#fff', float: 'right', paddingRight: '2%' }}>Hi,陳國榮醫師 {new Date().toLocaleDateString()} {this.renderSwitch(new Date().getDay())}</span>
                    </Header>
                    <Content style={{ margin: '10px 16px' }}>
                        <div style={{ background: '#fff', height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Radio.Group style={{ marginLeft: 20 }} onChange={this.onChange} value={this.state.value}>
                                <Radio style={{ color: '#000' }} value={1}>簡易顯示</Radio>
                                <Radio style={{ color: '#000' }} value={2}>詳細顯示</Radio>
                            </Radio.Group>
                            <span style={{ color: '#000', width: 'auto', marginRight: 20 }}>資料更新時間 {new Date().toLocaleDateString()}</span>
                        </div>
                        <div style={{ padding: 1, background: '#fff', minHeight: '1000px',display:'flex' }}>
                            <div style={{ background: '#333', height: '1000', margin: '10px',flexGrow:1}}>
                            </div>
                            <div style={{ background: '#333', height: '1000px', margin: '10px',flexGrow:2}}>
                            </div>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        SWPC MRT300 Create by NICU group
        </Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Layoutframe;