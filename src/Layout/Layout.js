import { Layout, Icon } from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './Layout.css';
import Sidermenu  from './Sidermenu';
import { renderRoutes, matchRoutes } from 'react-router-config'
import routes from './Routes'

const { Header, Content, Footer, Sider } = Layout;

class Layoutframe extends Component {


    constructor(props) {
        super(props);
        console.log(props);
    }

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

        const matchedRoutes = matchRoutes(routes, this.props.location.pathname);

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
                        <span style={{ color: '#fff', paddingLeft: '2%', fontSize: '1.4em',width:210 }}>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                                style={{ cursor: 'pointer' }}
                            />
                        </span>
                        {/*eslint-disable-next-line*/}
                        {matchedRoutes.map((matchRoute, i) => {
                            const { path, breadcrumbName } = matchRoute.route;
                            const isActive = path === this.props.location.pathname;
                            if (isActive) {
                                return (
                                    <span key={breadcrumbName.toString()} style={{ color: '#fff', fontSize: '1.4em' }}>
                                        {breadcrumbName}
                                    </span>
                                );
                            }
                        })}
                        <span style={{ color: '#fff', marginRight: 10,width:210 }}>Hi,陳國榮醫師 {new Date().toLocaleDateString()} {this.renderSwitch(new Date().getDay())}</span>
                    </Header>
                    <Content style={{ margin: '10px 16px' }}>
                        < div style={{ background: '#fff', minHeight: '1000px' }}>
                            {renderRoutes(this.props.route.routes)}
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