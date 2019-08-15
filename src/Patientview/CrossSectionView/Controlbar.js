import React, { Component } from 'react';
import { Button, Icon, DatePicker } from 'antd';


class Controlbar extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(255, 249, 237, 1)', padding: "8px" }}>
                <div>
                    <DatePicker placeholder="選擇轉出時間" />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div>項目切換：</div>
                    <Button style={{ margin: '5px' }}>Basic information</Button>
                    <Button style={{ margin: '5px' }}>Vital Sign</Button>
                    <Button style={{ margin: '5px' }}>I/O</Button>
                    <Button style={{ margin: '5px' }}>Lab</Button>
                    <Button style={{ margin: '5px' }}>RT</Button>
                    <Button style={{ margin: '5px' }}>Prescription Order</Button>
                    <Button style={{ margin: '5px' }}>Schedule</Button>
                    <Button style={{ margin: '5px' }}>To Do List</Button>
                    <Button type="primary" shape="circle" style={{ margin: '5px' }}><Icon type="setting" /></Button>
                </div>
            </div>

        );
    }
}

export default Controlbar;