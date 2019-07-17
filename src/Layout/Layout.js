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
                <Layout style={{ background: '#fff' }}>
                    <Header style={{display:'flex',alignItems:'center',justifyContent:'space-between',height:'50px'}}>
                        {/*eslint-disable-next-line*/}
                        <Sidermenu></Sidermenu>
                        })*/}
                        <div style={{ color: '#fff', marginRight:10,width:'auto' }}>Hi,陳國榮醫師 {new Date().toLocaleDateString()} {this.renderSwitch(new Date().getDay())}</div>
                    </Header>
                    <Content>
                        < div style={{ background: '#fff'}}>
                            {renderRoutes(this.props.route.routes)}
                        </div >
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Layoutframe;