import React, { Component } from 'react';
import { WardInfo } from '../jsonResponse';
import Bedinformation from './Bedinfo'
import { DatePicker } from 'antd';
import moment from 'moment';

class Wardbedinformation extends Component {
    state = {
        selectid: null,
        selectDate: new Date().getTime()
    }
    onChangeDate = (date, datestring) => {
        this.setState(
            {
                selectDate: new Date(datestring).getTime()
            }
        )
    }
    callbackFunction = (idnumber) => {
        console.log(idnumber)
        this.setState({ selectid: idnumber })
    }
    infoitem() {

        const info = WardInfo;
        if (this.state.selectid === null) {
            return null
        }
        else return (
            <div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ height: 0, width: 0, borderStyle: "solid", borderWidth: "17.3px 10px 0 10px", borderColor: "rgba(59,151,225,1) transparent transparent transparent" }}></div>
                </div>
                <div style={{border:"rgba(59,151,225,1) 2px solid",paddingBottom:"20px"}}>
                    <div style={{ backgroundColor: "rgba(238,238,238,1)", height: "50px", padding: "15px", fontSize: "16px" }}></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
                        <div style={{ backgroundColor: "rgba(110,166,232,1)", borderRadius: '4px', height: '40px', textAlign: "center", lineHeight: "30px", margin: '5px', paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", color: "white", fontSize: "14px" }}>
                            傾入呼吸器人數：{info.NPO}
                        </div>
                        <div style={{ backgroundColor: "rgba(110,166,232,1)", borderRadius: '4px', height: '40px', textAlign: "center", lineHeight: "30px", margin: '5px', paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", color: "white", fontSize: "14px" }}>
                            非傾入式呼吸器：{info.Ventilator}
                        </div>
                        <div style={{ backgroundColor: "rgba(110,166,232,1)", borderRadius: '4px', height: '40px', textAlign: "center", lineHeight: "30px", margin: '5px', paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", color: "white", fontSize: "14px" }}>
                            TPN人數：{info.TPN}
                        </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridColumnGap: "5px" }}>
                        <div>
                            <div style={{ backgroundColor: "rgba(238,238,238,1)", height: "50px", paddingLeft: "10px", lineHeight: "50px", fontSize: "16px" }}>轉入病人清單</div>
                            <div style={{ overflow: "auto", maxHeight: "200px" }}>
                                <div style={{ height: "50px", display: "grid", gridTemplateColumns: "1fr 3fr" }}>
                                    <div style={{ paddingLeft: "10px", display: "flex", alignItems: "center", borderStyle: "solid", borderWidth: "1px", borderColor: "rgba(238,238,238,1)" }}>病歷號碼</div>
                                    <div style={{ paddingLeft: "10px", display: "flex", alignItems: "center", borderStyle: "solid", borderWidth: "1px", borderColor: "rgba(238,238,238,1)" }}>姓名</div>
                                </div>
                                <div style={{ height: "50px", display: "grid", gridTemplateColumns: "1fr 3fr" }}>
                                    <div style={{ paddingLeft: "10px", display: "flex", alignItems: "center", borderStyle: "solid", borderWidth: "1px", borderColor: "rgba(238,238,238,1)" }}>XXXX-XXXX</div>
                                    <div style={{ paddingLeft: "10px", display: "flex", alignItems: "center", borderStyle: "solid", borderWidth: "1px", borderColor: "rgba(238,238,238,1)" }}>王小明</div>
                                </div>
                                <div style={{ height: "50px", display: "grid", gridTemplateColumns: "1fr 3fr" }}>
                                    <div style={{ paddingLeft: "10px", display: "flex", alignItems: "center", borderStyle: "solid", borderWidth: "1px", borderColor: "rgba(238,238,238,1)" }}>XXXX-XXXX</div>
                                    <div style={{ paddingLeft: "10px", display: "flex", alignItems: "center", borderStyle: "solid", borderWidth: "1px", borderColor: "rgba(238,238,238,1)" }}>王小明</div>
                                </div>
                                <div style={{ height: "50px", display: "grid", gridTemplateColumns: "1fr 3fr" }}>
                                    <div style={{ paddingLeft: "10px", display: "flex", alignItems: "center", borderStyle: "solid", borderWidth: "1px", borderColor: "rgba(238,238,238,1)" }}>XXXX-XXXX</div>
                                    <div style={{ paddingLeft: "10px", display: "flex", alignItems: "center", borderStyle: "solid", borderWidth: "1px", borderColor: "rgba(238,238,238,1)" }}>王小明</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{ backgroundColor: "rgba(238,238,238,1)", height: "50px", paddingLeft: "10px", lineHeight: "50px", fontSize: "16px" }}>轉出病人清單</div>
                            <div style={{ overflow: "auto", maxHeight: "200px" }}>
                                <div style={{ height: "50px", display: "grid", gridTemplateColumns: "1fr 3fr" }}>
                                    <div style={{ paddingLeft: "10px", display: "flex", alignItems: "center", borderStyle: "solid", borderWidth: "1px", borderColor: "rgba(238,238,238,1)" }}>病歷號碼</div>
                                    <div style={{ paddingLeft: "10px", display: "flex", alignItems: "center", borderStyle: "solid", borderWidth: "1px", borderColor: "rgba(238,238,238,1)" }}>姓名</div>
                                </div>
                                <div style={{ height: "50px", display: "grid", gridTemplateColumns: "1fr 3fr" }}>
                                    <div style={{ paddingLeft: "10px", display: "flex", alignItems: "center", borderStyle: "solid", borderWidth: "1px", borderColor: "rgba(238,238,238,1)" }}>XXXX-XXXX</div>
                                    <div style={{ paddingLeft: "10px", display: "flex", alignItems: "center", borderStyle: "solid", borderWidth: "1px", borderColor: "rgba(238,238,238,1)" }}>王小明</div>
                                </div>
                                <div style={{ height: "50px", display: "grid", gridTemplateColumns: "1fr 3fr" }}>
                                    <div style={{ paddingLeft: "10px", display: "flex", alignItems: "center", borderStyle: "solid", borderWidth: "1px", borderColor: "rgba(238,238,238,1)" }}>XXXX-XXXX</div>
                                    <div style={{ paddingLeft: "10px", display: "flex", alignItems: "center", borderStyle: "solid", borderWidth: "1px", borderColor: "rgba(238,238,238,1)" }}>王小明</div>
                                </div>
                                <div style={{ height: "50px", display: "grid", gridTemplateColumns: "1fr 3fr" }}>
                                    <div style={{ paddingLeft: "10px", display: "flex", alignItems: "center", borderStyle: "solid", borderWidth: "1px", borderColor: "rgba(238,238,238,1)" }}>XXXX-XXXX</div>
                                    <div style={{ paddingLeft: "10px", display: "flex", alignItems: "center", borderStyle: "solid", borderWidth: "1px", borderColor: "rgba(238,238,238,1)" }}>王小明</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    render() {
        function monthformat(month) {
            return month + 1
        }
        function timeformat(time) {
            return new Date(time).getFullYear() + "/" + monthformat(new Date(time).getMonth()) + "/" + new Date(time).getDate()
        }

        const weekbedinfo = []
        for (let i = 0; i < 7; i++) {
            const dateTime = this.state.selectDate
            const localtime = dateTime - (i * 24 * 60 * 60 * 1000);
            weekbedinfo.push(
                <Bedinformation key={i} localtime={localtime} selectkey={this.state.selectid} idkey={i} parentCallback={this.callbackFunction}></Bedinformation>
            )
        }
        weekbedinfo.reverse()
        const dateFormat = 'YYYY/MM/DD';
        return (
            <div style={{ marginTop: "10px" }}>
                <div style={{ backgroundColor: "rgba(238,238,238,1)", height: "50px", padding: "0px 15px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ fontSize: "16px", display: "flex", alignItems: "center", justifyContent: "center" }}>床位資訊</div>
                    <DatePicker defaultValue={moment(timeformat(this.state.selectDate), dateFormat)} format={dateFormat} onChange={this.onChangeDate} />
                </div>
                <div style={{ width: "100%" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)" }}>
                        {/* <div>
                            <div style={tablestyle}>天數</div>
                            <div style={tablestyle}>佔床數</div>
                            <div style={tablestyle}>數出人數</div>
                            <div style={tablestyle}>數入人數</div>
                        </div> */}
                        {/* <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr" }}>
                            {weekbedinfo}
                        </div> */}
                        {weekbedinfo}
                    </div>
                </div>
                <div style={{ height: "30px" }}></div>
                {this.infoitem()}
            </div>
        );
    }
}

export default Wardbedinformation;