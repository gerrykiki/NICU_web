import React, { Component } from 'react';
import { Button,Card,Icon } from 'antd';


class IOpage extends Component {
    render() {
        return (
            <div style={{ width: '45%', margin: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center',height:'40px' }}>
                    <div style={{ fontWeight: 'bold' }}>
                        I/O
                    </div>
                </div>
                <hr></hr>
                <Card title="Default size card" extra={<Icon type="edit" />} style={{marginTop:'5px'}}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card title="Default size card" extra={<Icon type="edit" />} style={{marginTop:'5px'}}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card title="Default size card" extra={<Icon type="edit" />} style={{marginTop:'5px'}}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
        );
    }

}

export default IOpage;