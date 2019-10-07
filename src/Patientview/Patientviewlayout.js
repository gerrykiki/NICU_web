import React, { Component } from 'react';
import { Select } from 'antd';
import Patientviewtapbar from './Patientviewtapbar'

class Patientviewlayout extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        const { Option } = Select;

        return (
            <div>
                <div style={{ background: 'rgba(238, 238, 238, 1)', display: 'flex', justifyContent: "space-between", alignItems: 'center', height: "50px", paddingLeft: "25px", paddingRight: "25px" }}>
                    <div style={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', width: "80%" }}>
                        <div style={{ fontSize: "1rem" }}>病床01/程子倩/3週歲</div>
                        <div style={{ fontSize: "1rem" }}>病歷號碼:0123456789</div>
                        <div style={{ fontSize: "1rem" }}>身分證字號:A123456789</div>
                        <div style={{ fontSize: "1rem" }}>主治醫師:陳ＯＯ醫師</div>
                        <div style={{ fontSize: "1rem" }}>備註:備註內容最多20字</div>
                        <div><span style={{ fontSize: "1rem" }}>查看詳細內容</span></div>
                    </div>
                    <Select defaultValue="lucy" style={{ width: 120 }}>
                        <Option value="lucy">病床</Option>
                    </Select>
                </div>
                <Patientviewtapbar></Patientviewtapbar>
            </div>
        );
    }
}

export default Patientviewlayout;