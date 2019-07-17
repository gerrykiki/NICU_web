import React, { Component } from 'react';
import { Card, Button, Checkbox } from 'antd';
import Wardinfouser from './Wardinfouser';
import Wardinfoindex from './Wardinfoindex';

class Wardinfo extends Component {
    render() {
        return (
            <div>
                <div style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#333', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    個案資訊摘要
                </div>
                <div style={{ borderTopWidth: '0px', borderBottomWidth: '1px', borderLeftWidth: '1px', borderRightWidth: '1px', borderStyle: 'solid', borderColor: '#333' }}>
                    <Wardinfoindex/>
                </div>
            </div>
        );
    }
}

export default Wardinfo;