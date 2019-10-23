import { Layout } from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './Layout.css';
import Sidermenu from './Sidermenu';
import { renderRoutes } from 'react-router-config'
import Routes from './Routes'

const { Header, Content } = Layout;

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

    Localtimeformat() {
        return new Date().getFullYear() + "-" + this.Monthformat(new Date().getMonth()) + "-" + new Date().getDate()
    }


    Monthformat(month) {
        switch (month) {
            case 0:
                return "01";
            case 1:
                return "02";
            case 2:
                return "03";
            case 3:
                return "04";
            case 4:
                return "05";
            case 5:
                return "06";
            case 6:
                return "07";
            case 7:
                return "08";
            case 8:
                return "09";
            case 9:
                return "10";
            case 10:
                return "11";
            case 11:
                return "12";
            default:
                return null;
        }
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
        const url_path = this.props.location.pathname
        console.log(url_path)
        return (
            <Layout>
                <Layout style={{ background: '#fff' }}>
                    <Header className="header">
                        {/*eslint-disable-next-line*/}
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{ fontSize: "22px" }}>NICU</div>
                            <Sidermenu path={url_path} routes={this.props.route}></Sidermenu>
                        </div>
                        <div style={{ fontSize: "16px", color: 'rgba(255, 255, 255, 1)' }}>陳國榮醫師 {this.Localtimeformat()} {this.renderSwitch(new Date().getDay())}</div>
                    </Header>
                    <Content>
                        <Routes></Routes>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Layoutframe;