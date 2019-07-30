import React, { Component } from 'react';
import { Button, Icon, DatePicker } from 'antd';
import Vitalsign from './Vitalsign';
import IOpage from './iopage'
import Labviewlayout from './Labview'
import Nonlabviewlayout from './Nonlabview'
import RTviewlayout from './RTview'
import Prescriptionorderlayout from './Prescriptionorder'
import Treatmentorderlayout from './Treatmentorder'
import Schedulelayout from './Schedule'
import Todolayout from './Todo'
import Basicinformation from './Basicinformation';


class Controlbar extends Component {
    render() {
        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#ddd' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <DatePicker style={{ margin: '5px' }} placeholder="選擇轉出時間" />
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
                <div>
                    <div style={{ maxHeight: '500px', overflow: 'auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <Basicinformation></Basicinformation>
                        <Vitalsign></Vitalsign>
                        <IOpage></IOpage>
                        <Labviewlayout></Labviewlayout>
                        <Nonlabviewlayout></Nonlabviewlayout>
                        <RTviewlayout></RTviewlayout>
                        <Prescriptionorderlayout></Prescriptionorderlayout>
                        <Treatmentorderlayout></Treatmentorderlayout>
                        <Schedulelayout></Schedulelayout>
                        <Todolayout></Todolayout>
                    </div>
                </div>
            </div>

        );
    }
}

export default Controlbar;