import React, { Component } from 'react';
import Labview from './Labview'
import Nonlabview from './NonLabview'
import { DatePicker } from 'antd';
import searchlogo from '../../Image/svg/Search.svg'

class Examreport extends Component {

    render() {
        const { RangePicker } = DatePicker;
        function onChange(date, dateString) {
            console.log(date, dateString);
        }
        return (
            <div>
                <div style={{ display: "grid", gridTemplateColumns: "100px 300px 30px", gridColumnGap: "10px" }}>
                    <div style={{ fontSize: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>檢驗時間:</div>
                    <div style={{ fontSize: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <RangePicker placeholder={["請輸入日期", "請輸入日期"]} onChange={onChange} />
                    </div>
                    <div style={{ fontSize: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img src={searchlogo} alt="searchlogo" />
                    </div>
                </div>
                <div style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "10px" }}>
                        <Labview></Labview>
                        <Nonlabview></Nonlabview>
                    </div>
                    <div>圖</div>
                </div>
            </div>
        );
    }
}

export default Examreport;