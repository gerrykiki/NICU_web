import { Layout, Icon } from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './Layout.css';
import Sidermenu from './Sidermenu';
import Bedview from '../Content/Bedview'
import Caseview from '../Content/Caseview'
import { Route} from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

class Layoutframe extends Component {
    state = {
        value: 1,
        collapsed: false,
        mode: 'inline',
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
            case 0:
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
                    <Header style={{ background: '#000', padding: 0, display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#fff', paddingLeft: '2%', fontSize: '1.4em' }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                                style={{ cursor: 'pointer' }}
                            />
                        </span>
                        <span style={{ color: '#fff', fontSize: '1.4em' }}>病房總覽</span>
                        <span style={{ color: '#fff', marginRight: 10 }}>Hi,陳國榮醫師 {new Date().toLocaleDateString()} {this.renderSwitch(new Date().getDay())}</span>
                    </Header>
                    <Content style={{ margin: '10px 16px' }}>
                        < div style={{ background: '#fff', minHeight: '1000px'}}>
                            <Route path="/Main/Bedview" component={Bedview} />
                            <Route path="/Main/Caseview" component={Caseview} />
                        </div >
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