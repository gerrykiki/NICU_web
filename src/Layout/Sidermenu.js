import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import wardviewlogo from '../Image/svg/Wardview.svg'
import historylogo from '../Image/svg/Historyview.svg'
import controllogo from '../Image/svg/Control.svg'


class Sidermenu extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    Selectkeynumber(key) {
        switch (key) {
            case '/Main/Bedview/Wardindex':
                return 0;
            case '/Main/Patientview':
                return 0;
            case '/Main/Bedview/Warduser':
                return 0;
            case '/Main/Systemcontrol':
                return 2;
            case '/Main/Historyview':
                return 1;
            case '/Main/Historypatientview':
                return 1;
            default:
                return '';
        }
    }

    defaultkey(value) {
        const { id } = this.props
        const keynumber = this.Selectkeynumber(id.pathname)
        if (keynumber === value) {
            return true
        }
        return false
    }
    render() {
        const linkstate = {
            backgroundColor: "rgba(59, 151, 225, 1)",
            display: 'flex',
            paddingLeft: '15px',
            paddingRight: '15px'
        }
        const dislinkstate = {
            backgroundColor: "rgba(0, 0, 0, 0)",
            display: 'flex',
            paddingLeft: '15px',
            paddingRight: '15px'
        }
        const linkfont = {
            fontsize: "16px",
            color: "rgba(255, 255, 255, 1)",
            marginLeft: "10px"

        }
        const dislinkfont = {
            fontsize: "16px",
            color: "rgba(46, 100, 164, 1)",
            marginLeft: "10px"
        }
        return (
            <div style={{ backgroundColor: "rgba(0, 0, 0, 0)", display: 'flex', alignItems: 'center', marginLeft: "20px", height: '100%' }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Link to="/Bedview/Wardindex" style={this.defaultkey(0) ? linkstate : dislinkstate}>
                        <img src={wardviewlogo} alt='wardviewlogo'></img>
                        <div style={this.defaultkey(0) ? linkfont : dislinkfont}>病床總覽</div>
                    </Link>
                    <Link to="/Historyview" style={this.defaultkey(1) ? linkstate : dislinkstate}>
                        <img src={historylogo} alt='historyviewlogo'></img>
                        <div style={this.defaultkey(1) ? linkfont : dislinkfont}>歷史病歷管理</div>
                    </Link>
                    <Link to='/Systemcontrol' style={this.defaultkey(2) ? linkstate : dislinkstate}>
                        <img src={controllogo} alt='systemviewlogo'></img>
                        <div style={this.defaultkey(2) ? linkfont : dislinkfont}>系統設定</div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Sidermenu