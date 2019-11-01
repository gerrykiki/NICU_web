import React, { Component } from 'react';
import Prescriptionordertable from './Prescriptionordertable'
import { DatePicker, Select, Input, Button } from 'antd';
import searchlogo from '../Image/svg/Search.svg'

class Prescriptionorderlayout extends Component {

    Search_bar() {
        const { searchbar } = this.props
        const { RangePicker } = DatePicker;
        const { Option } = Select;
        function onChange(date, dateString) {
            console.log(date, dateString);
        }

        function handleChange(value) {
            console.log(`selected ${value}`);
        }
        if (searchbar) {
            return (
                <div style={{ display: "grid", gridTemplateColumns: "2fr 200px 2fr 1fr", gridColumnGap: "10px" ,marginBottom:"5px"}}>
                    <RangePicker placeholder={["請輸入日期","請輸入日期"]} onChange={onChange} />
                    <Select defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
                        <Option value={0}>生效中</Option>
                        <Option value={1}>失效/以結束/取消</Option>
                    </Select>
                    <Input placeholder="輸入藥囑關鍵字" />
                    <img src={searchlogo} alt="searchlogo"/>
                </div>
            );
        }
        else return null
    }
    render() {

        const { searchbar } = this.props

        const style = {
            crossection_style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px', paddingLeft: "5px", paddingRight: "5px", background: "rgba(238,238,238,1)" },
            order_style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px', paddingLeft: "5px", paddingRight: "5px" }
        }
        return (
            <div>
                <div style={searchbar ? style.order_style : style.crossection_style}>
                    <div style={{ fontSize: "2rem" }}>Prescription Order</div>
                </div>
                {this.Search_bar()}
                <Prescriptionordertable></Prescriptionordertable>
            </div>
        );
    }
}

export default Prescriptionorderlayout