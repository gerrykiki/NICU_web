import React, { Component } from 'react';
import { Select,DatePicker } from 'antd';
import Systemlogtable from './Systemlogtable'


class Systemlog extends Component {
    render() {
        const { Option } = Select;

        const { RangePicker } = DatePicker;        
        function onChange(date, dateString) {
            console.log(date, dateString);
        }
        function handleChange(value) {
            console.log(`selected ${value}`);
        }
        return (
            <div>
                <div style={{ fontSize: '22px' }}>系統空間使用狀況</div>
                <div style={{ backgroundColor: 'gray', borderRadius: '99em', width: "100%", height: '10px', marginTop: "10px" }}></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: "10px" }}>
                    <div>
                        <div>已使用空間/總空間</div>
                        <div>3GB(18%)/20GB</div>
                    </div>
                    <div>
                        <div>收案中的個案資料0.9GB(10.5%)</div>
                        <div>0.9GB(10.5%)</div>
                    </div>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <div style={{ fontSize: '22px' }}>Event Log</div>
                    <div style={{ marginTop: "10px" }}>
                        <Select placeholder='選擇角色' style={{ width: 200 }} onChange={handleChange}>
                            <Option value={0}>主要管理者</Option>
                            <Option value={1}>一般管理者</Option>
                            <Option value={2}>唯獨使用者</Option>
                        </Select>
                        <RangePicker onChange={onChange} style={{ marginLeft: "10px",width: 400 }} />
                    </div>
                    <div style={{marginTop:'10px'}}>
                        <Systemlogtable/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Systemlog