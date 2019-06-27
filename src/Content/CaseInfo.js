import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

class classinformation extends Component {
    render() {
        return (
            <div>
                <div style={{ background: '#fff', height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Breadcrumb>
                        <Breadcrumb.Item>首頁</Breadcrumb.Item>
                        <Breadcrumb.Item>個案資訊管理</Breadcrumb.Item>
                        <Breadcrumb.Item>個案資訊</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>
        );
    }
}

export default classinformation;