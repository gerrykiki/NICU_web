import React, { Component } from 'react';
import Prescriptionordertable from './Prescriptionordertable'
import { DatePicker, Select, Input, Button } from 'antd';
import searchlogo from '../Image/svg/Search.svg'

var DateRange, SelectData
class Prescriptionorderlayout extends Component {
    state = {
        selectMode: 0,
        inputmode:null,
        DateRangeMode:null
    }
    handleChange = (value) => {
        console.log(`selected ${value}`);
        SelectData = value
        // this.setState(
        //     {
        //         selectMode: value
        //     }
        // )
    }
    onDateRangeChange = (date, dateString) => {
        console.log(date, dateString);
        DateRange = dateString
    }
    onClickSearch(){
        const inputdata = document.getElementById("prescriptionorderinput").value
        if (DateRange === undefined || SelectData === undefined || inputdata === undefined) {
            console.log("data undefined")
        }
    }
    Search_bar() {
        const { searchbar } = this.props
        const { RangePicker } = DatePicker;
        const { Option } = Select;

        if (searchbar) {
            return (
                <div style={{ display: "grid", gridTemplateColumns: "4fr 150px 2fr 50px", gridColumnGap: "10px", marginBottom: "5px" }}>
                    <RangePicker placeholder={["請輸入日期", "請輸入日期"]} onChange={this.onDateRangeChange} />
                    <Select defaultValue={this.state.selectMode} style={{ width: 150 }} onChange={this.handleChange}>
                        <Option value={0}>生效中</Option>
                        <Option value={1}>失效/已結束/取消</Option>
                    </Select>
                    <Input id="prescriptionorderinput" placeholder="輸入藥囑關鍵字" />
                    <div onClick={()=>this.onClickSearch()} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={searchlogo} alt="searchlogo" />
                    </div>
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