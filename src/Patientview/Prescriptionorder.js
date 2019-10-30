import React, { Component } from 'react';
import Prescriptionordertable from './Prescriptionordertable'
import { DatePicker, Select, Input, Button } from 'antd';

class Prescriptionorderlayout extends Component {
    render() {
        const { RangePicker } = DatePicker;
        const { Option } = Select;
        const { searchbar } = this.props
        function onChange(date, dateString) {
            console.log(date, dateString);
        }

        function handleChange(value) {
            console.log(`selected ${value}`);
        }

        return (
            <div style={{ width: "100%", marginBottom: "20px" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px', paddingLeft: "5px", paddingRight: "5px", background: "rgba(238,238,238,1)" }}>
                    <div style={{ fontSize: "2rem" }}>
                        Prescription Order
                    </div>
                </div>
                {/* <div style={{ display: searchbar }}>
                    <RangePicker onChange={onChange} style={{ marginBottom: "10px" }} />
                    <div style={{ marginLeft: "10px" }}>
                        <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                    </div>
                    <Input placeholder="Basic usage" style={{ width: "30%", marginLeft: "10px" }} />
                    <Button style={{ marginLeft: "10px" }}>搜尋</Button>
                </div> */}
                <Prescriptionordertable></Prescriptionordertable>
            </div>
        );
    }
}

export default Prescriptionorderlayout