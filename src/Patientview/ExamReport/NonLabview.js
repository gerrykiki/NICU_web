import React, { Component } from 'react';
import Nonlabviewtable from '../CrossSectionView/Nonlabviewtable'
import { DatePicker, Input, Button, Select } from 'antd';
import moment from 'moment';
import searchlogo from '../../Image/svg/Search.svg'


class Nonlabview extends Component {

    Inputvaluesearch(value) {
        console.log(value)
    }
    render() {


        var statetime = {
            "Starttime": (+new Date()),
            "Endtime": (+new Date())
        }
        const datearray = []
        const { RangePicker } = DatePicker;
        const dateFormat = 'YYYY/MM/DD';
        const { Option } = Select;
        function onChange(value, dateString) {
            statetime.Starttime = (+new Date(dateString[0]))
            statetime.Endtime = (+new Date(dateString[1]))
            datearray.push(statetime.Starttime)
            datearray.push(statetime.Endtime)
        }
        function Inputchange() {
            const value = {
                "date": datearray,
                "keyword": document.getElementById("keywordsearch").value
            }
            console.log(value)
        }
        return (
            <div>
                <div style={{ fontSize: "2rem" }}>報告清單</div>
                <div style={{ display: 'grid', gridTemplateColumns: "4fr 4fr 8fr 1fr", gridColumnGap: "5px", marginBottom: "10px" }}>
                    <Select placeholder="選擇檢驗類別" style={{ width: "100%" }} onChange={this.handleChange}>
                        <Option value={0}>飲食類別</Option>
                        <Option value={1}>呼吸類別</Option>
                        <Option value={2}>管路類別</Option>
                    </Select>
                    <Select placeholder="選擇項目狀態" style={{ width: "100%" }} onChange={this.handleChange}>
                        <Option value={0}>已開單</Option>
                        <Option value={1}>已簽收</Option>
                        <Option value={2}>已發報告</Option>
                        <Option value={3}>已取消</Option>
                    </Select>
                    <Input id="keywordsearch" placeholder="輸入關鍵字" />
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={searchlogo} alt="searchlogo" />
                    </div>
                </div>
                <Nonlabviewtable></Nonlabviewtable>
            </div>
        );
    }
}

export default Nonlabview