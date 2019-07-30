import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import './Sidermenu.css';


class Sidermenu extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    Selectkeynumber(key) {
        switch (key) {
            case '/Main/Bedview/Wardindex':
                return ['1'];
            case '/Main/Caseview':
                return ['2'];
            case '/Main/Crosssectionlayout':
                return ['2'];
            case '/Main/Historyview':
                return ['3'];
            default:
                return '';
        }
    }

    render() {

        const { data } = this.props;
        console.log(data);

        return (
            <div style={{ backgroundColor: "rgba(0, 0, 0, 0)", display: 'flex', alignItems: 'center' }}>
                <div className="logo"></div>
                <div style={{width:"400px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    <Link to="/Main/Bedview/Wardindex" style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
                        <Icon type="dashboard" style={{ fontSize: '16px', color: 'rgba(46, 100, 164, 1)' }} />
                        <span className="linkfont">病床總覽</span>
                    </Link>
                    <Link to="/Main/Historyview" style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
                        <span className="linkfont">歷史病歷管理</span>
                    </Link>
                    <Link style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}>
                        <Icon type="setting" style={{ fontSize: '16px', color: 'rgba(46, 100, 164, 1)' }} />
                        <span className="linkfont">系統設定</span>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Sidermenu