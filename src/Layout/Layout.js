import { Layout } from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './Layout.css';
import Sidermenu from './Sidermenu';
import Bedview from '../Wardview/Bedview'
import Historyview from '../Content/Historyview'
import Patientviewlayout from '../Patientview/Patientviewlayout'
import Systemcontrol from '../Content/Systemcontrol'
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';



class Layoutframe extends Component {
    //設置預設字體大小
    componentDidMount() {
        document.documentElement.style.fontSize = '12px'
    }
    Localtimeformat() {
        function Monthformat(month) {
            const formatmonth = month + 1
            if (formatmonth < 10) {
                return "0" + formatmonth
            }
            else return formatmonth
        }
        return new Date().getFullYear() + "-" + Monthformat(new Date().getMonth()) + "-" + new Date().getDate()
    }

    onClickLogout() {
        sessionStorage.clear();
    }
    render() {
        const { Header, Content } = Layout;
        function renderSwitch(param) {
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
        const url_path = this.props.location.pathname
        return (
            <Layout>
                <Header className="header">
                    {/*eslint-disable-next-line*/}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ fontSize: "2rem" }}>NICU</div>
                        <Sidermenu path={url_path} routes={this.props.route}></Sidermenu>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "auto auto", gridColumnGap: "10px" }}>
                        <div style={{ fontSize: "1.5rem", color: 'rgba(255, 255, 255, 1)' }}>陳國榮醫師 {this.Localtimeformat()} {renderSwitch(new Date().getDay())}</div>
                        <Link to="/Login" onClick={() => this.onClickLogout()} style={{ color: "white", fontSize: "1.5rem" }}>登出</Link>
                    </div>
                </Header>
                <Content style={{marginTop: 64,background:"white",overflow:"hidden"}}>
                    <Switch>
                        <Route exact path={`${this.props.match.path}`} component={Bedview} />
                        <Route path={`${this.props.match.path}/history`} component={Historyview} />
                        <Route path={`${this.props.match.path}/system`} component={Systemcontrol} />
                        <Route path={`${this.props.match.path}/patient`} component={Patientviewlayout} />
                    </Switch>
                </Content>
            </Layout>
        );
    }
}

export default Layoutframe;