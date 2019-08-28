import React, { Component } from 'react';
import { DatePicker, Select, Button } from 'antd';
import Notelist from './Notelist'

class Noteview extends Component {
    render() {

        const { RangePicker } = DatePicker;
        const { Option } = Select;
        function onChange(date, dateString) {
            console.log(date, dateString);
        }

        function handleChange(value) {
            console.log(`selected ${value}`);
        }
        return (
            <div>
                <div style={{ display: "flex", marginBottom: "10px" }}>
                    <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                    <RangePicker onChange={onChange} style={{ marginLeft: "10px" }} />
                    <Button style={{ marginLeft: "10px" }}>搜尋</Button>
                </div>
                <div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 7fr", gridGap: "10px" }}>
                        <div>
                            <div style={{ backgroundColor: "rgba(255, 249, 237, 1)", height: "50px", padding: '15px' }}>開立日期</div>
                            <div style={{ maxHeight: '70vh', overflowY: 'auto' ,padding:"10px"}}>
                            <Notelist></Notelist>
                            </div>
                        </div>
                            <div style={{ backgroundColor: "rgba(255, 249, 237, 1)", height: "50px", padding: '15px' }}>內容</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Noteview;