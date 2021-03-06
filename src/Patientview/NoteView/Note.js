import React, { Component } from 'react';
import { DatePicker, Select, Button } from 'antd';
import Notelist from './Notelist'
import searchlogo from '../../Image/svg/Search.svg'
import { throwStatement } from '@babel/types';

class Noteview extends Component {
    state = {
        StartTime: null,
        EndTime: null,
        display_data: null,
        display_context:null
    }
    callbackFunction = (item_array) => {
        console.log(item_array)
        this.setState(
            {
                display_data: item_array.NoteTime,
                display_context: item_array.Content
            }
        )

    }
    handleChange = (value) => {

        console.log(`selected ${value}`);
        // this.setState({
        //     selectRangeDate: !this.state.previewmode,
        // });
    }
    onClickSearch() {
        console.log(document.querySelectorAll("input.ant-calendar-range-picker-input")[0].value);
        console.log(document.querySelectorAll("input.ant-calendar-range-picker-input")[1].value);
        if (document.querySelectorAll("input.ant-calendar-range-picker-input")[1].value !== " ") {
            this.setState(
                {
                    StartTime: document.querySelectorAll("input.ant-calendar-range-picker-input")[0].value,
                    EndTime: document.querySelectorAll("input.ant-calendar-range-picker-input")[1].value

                }
            )
        }

    }
    render() {
        const note_data = [{
            "NoteTime": 1566287810473,
            "Type": "Progress Note",
            "Content": "notenotenote",
        }, {
            "NoteTime": 1566374210000,
            "Type": "Progress Note",
            "Content": "QQQQQQQQQQQQQQQ",
        }]
        const { RangePicker } = DatePicker;
        const { Option } = Select;
        function onChange(date, dateString) {
            console.log(date, dateString);
        }

        function handleChange(value) {
            console.log(`selected ${value}`);
        }
        const select_data = [
            { item: "Progress Note" },
            { item: "Nursing Note" },
            { item: "急診紀錄" },
            { item: "會診紀錄" },
            { item: "手術記錄" },
            { item: "社工紀錄" },
            { item: "藥師紀錄" },
            { item: "物理治療師紀錄" },
            { item: "呼吸治療師紀錄" }
        ]
        const select_option = select_data.map((info, index) =>
            <Option key={index} value={index}>{info.item}</Option>
        )
        console.log(this.state.display_data)
        return (
            <div>
                <div style={{ display: "flex", marginBottom: "10px" }}>
                    <Select defaultValue={0} style={{ width: 200 }} onChange={handleChange}>
                        {select_option}
                    </Select>
                    <RangePicker id="note_Range" onChange={onChange} style={{ margin: "0px 10px" }} />
                    <div onClick={() => this.onClickSearch()} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img src={searchlogo} alt="searchlogo" />
                    </div>
                </div>
                <div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 7fr", gridGap: "10px" }}>
                        <div>
                            <div style={{ backgroundColor: "rgba(238,238,238, 1)", height: "50px", padding: '15px' }}>開立日期</div>
                            <div style={{ padding: "10px" }}>
                                <Notelist display_data={this.state.display_data} parentCallback={this.callbackFunction} note_data={note_data} start={this.state.StartTime} End={this.state.EndTime}></Notelist>
                            </div>
                        </div>
                        <div>
                            <div style={{ backgroundColor: "rgba(238,238,238, 1)", height: "50px", padding: '15px' }}>內容</div>
                            <div style={{ fontSize: "1.3rem" }}>{this.state.display_context}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Noteview;