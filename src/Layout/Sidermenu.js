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
            case '/nicu':
                return 0;
            case '/nicu/history':
                return 1;
            case '/nicu/system':
                return 2;
            case '/nicu/patient':
                return 0;
            default:
                return '';
        }
    }

    select_hover(value) {
        const { path } = this.props
        const keynumber = this.Selectkeynumber(path)
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
        const linkfont = { fontSize: "1.5rem", color: "rgba(255, 255, 255, 1)", marginLeft: "10px" }
        const dislinkfont = { fontSize: "1.5rem", color: "rgba(46, 100, 164, 1)", marginLeft: "10px" }
        return (
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: "20px", height: '100%' }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Link to="/nicu" style={this.select_hover(0) ? linkstate : dislinkstate}>
                        <img src={wardviewlogo} alt='wardviewlogo'></img>
                        <div style={this.select_hover(0) ? linkfont : dislinkfont}>住院中病人資訊</div>
                    </Link>
                    <Link to="/nicu/history" style={this.select_hover(1) ? linkstate : dislinkstate}>
                        <img src={historylogo} alt='historyviewlogo'></img>
                        <div style={this.select_hover(1) ? linkfont : dislinkfont}>歷史病歷管理</div>
                    </Link>
                    <Link to='/nicu/system' style={this.select_hover(2) ? linkstate : dislinkstate}>
                        <img src={controllogo} alt='systemviewlogo'></img>
                        <div style={this.select_hover(2) ? linkfont : dislinkfont}>系統設定</div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Sidermenu