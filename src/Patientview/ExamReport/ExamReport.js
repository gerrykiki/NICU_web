import React, { Component } from 'react';
import Labview from './Labview'
import Nonlabview from './NonLabview'
import { DatePicker } from 'antd';
import searchlogo from '../../Image/svg/Search.svg'
import Examchart from './Examchart'
import Examaxis from './Examaxis'

class Examreport extends Component {
    state = {
        Rangestate: null,
        selectdata:0
    }

    callbackDateFunction = (value) => {
        console.log(value)
        this.setState(
            {
                selectdata: value
            }
        )
    }

    onChange = (date, dateString) => {
        console.log(date, dateString);
        this.setState({ Rangestate: dateString })
    }

    charttableview() {
        if (this.state.Rangestate === null) {
            return null
        }
        const lab_item_list = [
            { item: "CBC檢驗:WBC、Hb、PLT" },
            { item: "電解質與腎功能檢驗:Na、K、Ca(Free,Total)、Mg、P、BUN、Cr" },
            { item: "肝功能檢驗:AST、ALT、rGGT、Alkp、Alb" },
            { item: "心臟功能檢驗:ck、ck-MB、BNP、Troponin I" },
            { item: "凝血功能檢驗:PT、APiT、INR" },
            { item: "GAS檢驗:PH、pCO2、pO2、HCO3、BE、O2、TCO2、SaCO2" },
            { item: "Glucose檢驗:糖化血色素、空腹血糖" },
        ]

        const row_title = [
            { item: 0, title: ["WBC", "Hb", "PLT"] },
            { item: 1, title: ["Na", "K", "Ca(Free,Total)", "Mg", "P", "BUN", "Cr"] },
            { item: 2, title: ["AST", "ALT", "rGGT", "Alkp", "Alb"] },
            { item: 3, title: ["ck", "ck-MB", "BNP", "Troponin I"] },
            { item: 4, title: ["PT", "APiT", "INR"], string: ["PT", "APiT", "INR"] },
            { item: 5, title: ["PH", "pCO2", "pO2", "HCO3", "BE", "O2", "TCO2", "SaCO2"] },
            { item: 6, title: ["糖化血色素", "空腹血糖"] }
        ]
        const chart = row_title[this.state.selectdata].title.map(
            (info, index) =>
                <div key={index} style={{ display: "grid", gridTemplateColumns: "140px 1fr" }}>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{info}</div>
                    <div>
                        <Examchart Time={this.state.Rangestate} max={200} min={0} id_key={"id" + index} svg_id={"svg" + index}></Examchart>
                    </div>
                </div>
        )
        return (
            <div style={{ margin: "20px 0px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "140px 1fr" }}>
                    <div></div>
                    <div>
                        <Examaxis axisTop={true} Time={this.state.Rangestate} axisBot={false} max={200} min={0} id_key={"id_axis_top_exam"} svg_id={"svg_axis_top_exam"}></Examaxis>
                    </div>
                </div>
                {chart}
                <div style={{ display: "grid", gridTemplateColumns: "140px 1fr" }}>
                    <div></div>
                    <div>
                        <Examaxis axisTop={false} Time={this.state.Rangestate} axisBot={true} max={200} min={0} id_key={"id_axis_bot_exam"} svg_id={"svg_axis_bot_exam"}></Examaxis>
                    </div>
                </div>
            </div>
        );
    }
    render() {
        const { RangePicker } = DatePicker;
        const lab_item_list = [
            { item: "CBC檢驗:WBC、Hb、PLT" },
            { item: "電解質與腎功能檢驗:Na、K、Ca(Free,Total)、Mg、P、BUN、Cr" },
            { item: "肝功能檢驗:AST、ALT、rGGT、Alkp、Alb" },
            { item: "心臟功能檢驗:ck、ck-MB、BNP、Troponin I" },
            { item: "凝血功能檢驗:PT、APiT、INR" },
            { item: "GAS檢驗:PH、pCO2、pO2、HCO3、BE、O2、TCO2、SaCO2" },
            { item: "Glucose檢驗:糖化血色素、空腹血糖" },
        ]

        const row_title = [
            { item: 0, title: ["WBC", "Hb", "PLT"] },
            { item: 1, title: ["Na", "K", "Ca(Free,Total)", "Mg", "P", "BUN", "Cr"] },
            { item: 2, title: ["AST", "ALT", "rGGT", "Alkp", "Alb"] },
            { item: 3, title: ["ck", "ck-MB", "BNP", "Troponin I"] },
            { item: 4, title: ["PT", "APiT", "INR"], string: ["PT", "APiT", "INR"] },
            { item: 5, title: ["PH", "pCO2", "pO2", "HCO3", "BE", "O2", "TCO2", "SaCO2"] },
            { item: 6, title: ["糖化血色素", "空腹血糖"] }
        ]
        return (
            <div>
                <div style={{ display: "grid", gridTemplateColumns: "120px 300px 30px", gridColumnGap: "10px" }}>
                    <div style={{ fontSize: "2rem", display: "flex", alignItems: "center" }}>檢驗時間:</div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <RangePicker placeholder={["請輸入日期", "請輸入日期"]} onChange={this.onChange} />
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img src={searchlogo} alt="searchlogo" />
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "10px" }}>
                    <Labview selectvalue={this.state.selectdata} parentDateCallback={this.callbackDateFunction} lab_item_list={lab_item_list} row_title={row_title}></Labview>
                    <Nonlabview></Nonlabview>
                </div>
                {this.charttableview()}
            </div>
        );
    }
}

export default Examreport;