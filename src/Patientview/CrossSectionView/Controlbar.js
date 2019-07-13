import React, { Component } from 'react';
import { Button, Icon, DatePicker } from 'antd';
import Basicinformation from './Basicinformation';
import Vitalsign from './Vitalsign';
import IOpage from './iopage'


class Controlbar extends Component {
    render() {
        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#ddd' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Button style={{ margin: '5px' }}>
                            <Icon type="step-backward" />
                        </Button>
                        <Button style={{ margin: '5px' }}>
                            <Icon type="caret-left" />
                        </Button>
                        <DatePicker style={{ margin: '5px' }} placeholder="選擇轉出時間" />
                        <Button style={{ margin: '5px' }}>
                            <Icon type="caret-right" />
                        </Button>
                        <Button style={{ margin: '5px' }}>
                            <Icon type="step-forward" />
                        </Button>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span>項目切換：</span>
                        <Button style={{ margin: '5px' }}>
                            Basic information
                    </Button>
                        <Button style={{ margin: '5px' }}>
                            Vital Sign
                    </Button>
                        <Button style={{ margin: '5px' }}>
                            I/O
                    </Button>
                        <Button style={{ margin: '5px' }}>
                            Lab
                    </Button>
                        <Button style={{ margin: '5px' }}>
                            RT
                    </Button>
                        <Button style={{ margin: '5px' }}>
                            Prescription Order
                    </Button>
                        <Button style={{ margin: '5px' }}>
                            Schedule
                    </Button>
                        <Button style={{ margin: '5px' }}>
                            To Do List
                    </Button>
                        <Button type="primary" shape="circle" style={{ margin: '5px' }}>
                            <Icon type="setting" />
                        </Button>
                    </div>
                </div>
                <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
                <Basicinformation></Basicinformation>
                <Vitalsign></Vitalsign>
                <IOpage></IOpage>
                </div>
            </div>

        );
    }
}

export default Controlbar;