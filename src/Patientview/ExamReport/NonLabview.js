import React, { Component } from 'react';
import Nonlabviewtable from '../CrossSectionView/Nonlabviewtable'
import { DatePicker, Input, Button, Select } from 'antd';
import moment from 'moment';
import searchlogo from '../../Image/svg/Search.svg'

var mode_class, mode_state;
class Nonlabview extends Component {
    state = {
        ClassMode: 0,
        StateMode: 0,
        InputMode: null
    }
    Inputvaluesearch() {
        console.log(document.getElementById("keywordsearch").value)
        const inputvalue = document.getElementById("keywordsearch").value
        if (inputvalue === null || mode_class === null || mode_state === null) {
            console.log("No null")
            return null
        }
        if (inputvalue === undefined || mode_class === undefined || mode_state === undefined){
            console.log("value undefine")
            return null
        }
        this.setState(
            {
                ClassMode: mode_class,
                StateMode: mode_state,
                InputMode: inputvalue

            }
        )
    }

    onChangeState = (value) => {
        mode_state = value
    }

    onChangeClass = (value) => {
        mode_class = value
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
                <div style={{ fontSize: "2rem",backgroundColor:"rgba(238,238,238,1)" ,margin: "10px 0px" }}>報告清單</div>
                <div style={{ display: 'grid', gridTemplateColumns: "4fr 4fr 8fr 1fr", gridColumnGap: "5px"}}>
                    <Select defaultValue={this.state.ClassMode} placeholder="選擇檢驗類別" style={{ width: "100%" }} onChange={this.onChangeClass}>
                        <Option value={0}>飲食類別</Option>
                        <Option value={1}>呼吸類別</Option>
                        <Option value={2}>管路類別</Option>
                    </Select>
                    <Select defaultValue={this.state.StateMode} placeholder="選擇項目狀態" style={{ width: "100%" }} onChange={this.onChangeState}>
                        <Option value={0}>已開單</Option>
                        <Option value={1}>已簽收</Option>
                        <Option value={2}>已發報告</Option>
                        <Option value={3}>已取消</Option>
                    </Select>
                    <Input id="keywordsearch" placeholder="輸入關鍵字" />
                    <div onClick={() => this.Inputvaluesearch()} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={searchlogo} alt="searchlogo" />
                    </div>
                </div>
                <Nonlabviewtable></Nonlabviewtable>
            </div>
        );
    }
}

export default Nonlabview