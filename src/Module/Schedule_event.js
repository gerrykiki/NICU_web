import React, { Component } from 'react';
import detaillogo from '../Image/svg/details.svg'
import { Tooltip } from 'antd';
//資料
import { eventdata } from '../jsonResponse'

class Schedule_event_list extends Component {
    state = {
        detailstate: "none",
        pressitemstate: "all",
        scheduleclick: 7,
        test_items_interval: 0
    }
    timechange(timestamp) {
        const changetime = new Date(timestamp).getHours() + ":" + new Date(timestamp).getMinutes()
        return changetime

    }

    btnstatestyle(btnitem) {
        const stylestate = this.state.pressitemstate
        var style
        if (stylestate === btnitem) {
            style = { height: "100%", color: "white", backgroundColor: "rgba(59, 151, 225, 1)", borderRadius: "4px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.5rem", cursor: "pointer" };
        }
        else {
            style = { height: "100%", borderColor: "rgba(59, 151, 225, 1)", borderStyle: "solid", borderWidth: "1px", borderRadius: "4px", fontSize: "1.5rem", display: "flex", justifyContent: "center", alignItems: "center", color: "rgba(59, 151, 225, 1)", cursor: "pointer" };
        }
        return style;
    }

    pressbtn(pressitem) {
        this.setState(
            {
                pressitemstate: pressitem
            }
        );
    }
    listevent(eventarray, eventstate) {
        // var eventdatalist = eventdata

        function itemchange(changeitem) {
            switch (changeitem) {
                case "event":
                    return "事"
                case "schedule":
                    return "排"
                default:
                    return ""
            }
        }

        function checkbackground(string) {
            switch (string) {
                case "schedule":
                    return "rgba(124,179,5,1)"
                case "event":
                    return "rgba(46,100,164,1)"
                default:
                    return "rgba(124,179,5,1)"
            }
        }
        var listarray = []
        for (let index = 0; index < eventarray.length; index++) {
            const info = eventarray[index];
            const text = <div>{info.writter}醫師於 {new Date(info.time).getFullYear()}-{new Date(info.time).getMonth() + 1}-{new Date(info.time).getDate()} {new Date(info.time).getHours()}:{new Date(info.time).getMinutes()}更新</div>
            if (eventstate === "all") {
                listarray.push(
                    <div key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: "20px", paddingRight: "20px" }}>
                        <div key={index} style={{ height: "50px", borderBottomWidth: "1px", borderBottomColor: "rgba(0,0,0,0.09)", borderBottomStyle: "solid", paddingTop: "8px", paddingBottom: "8px", display: "flex", alignItems: "center" }}>
                            <div style={{ width: "30px", borderRadius: "4px", backgroundColor: checkbackground(info.item), fontSize: "1.5rem", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>{itemchange(info.item)}</div>
                            <div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>床{info.bednumber}/{info.name}</div>
                            <div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>{this.timechange(info.time)}</div>
                            <div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>{info.result}</div>
                        </div>
                        <Tooltip placement="right" title={text}>
                            <div>
                                <img src={detaillogo} alt='detaillogo'></img>
                            </div>
                        </Tooltip>
                    </div>
                )
            }
            else {
                if (eventstate === info.item) {
                    listarray.push(
                        <div key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: "20px", paddingRight: "20px" }}>
                            <div key={index} style={{ height: "50px", borderBottomWidth: "1px", borderBottomColor: "rgba(0,0,0,0.09)", borderBottomStyle: "solid", paddingTop: "8px", paddingBottom: "8px", display: "flex", alignItems: "center" }}>
                                <div style={{ width: "30px", borderRadius: "4px", backgroundColor: checkbackground(info.item), fontSize: "1.5rem", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>{itemchange(info.item)}</div>
                                <div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>床{info.bednumber}/{info.name}</div>
                                <div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>{this.timechange(info.time)}</div>
                                <div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>{info.result}</div>
                            </div>
                            <Tooltip placement="right" title={text}>
                                <div>
                                    <img src={detaillogo} alt='detaillogo'></img>
                                </div>
                            </Tooltip>
                        </div>
                    )
                }
            }
        }
        return listarray
    }

    eventdata() {

        var eventdatalist = eventdata
        var Eventstate = this.state.pressitemstate

        return this.listevent(eventdatalist, Eventstate)
    }

    //測驗項目功能_區間按鈕樣式
    SwitchTestItemInterval(testiteminterval) {
        const stylestate = this.state.pressitemstate
        const time_selectbtn_style = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "40px",
            paddingRight: "20px",
            paddingLeft: "20px",
            borderRadius: "16px",
            backgroundColor: "rgba(245,166,35,1)",
            color: "white",
            fontSize: "1rem",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "rgba(245,166,35,1)",
            cursor: "pointer"
        }
        const time_unselectbtn_style = {
            display: "flex", justifyContent: "center",
            alignItems: "center", height: "40px",
            paddingRight: "20px", paddingLeft: "20px",
            borderRadius: "16px", backgroundColor: "white",
            color: "rgba(245,166,35,1)", fontSize: "1rem",
            borderWidth: "1px", borderStyle: "solid",
            borderColor: "rgba(245,166,35,1)",
            cursor: "pointer"
        }
        if (testiteminterval === stylestate) {
            return time_selectbtn_style
        }
        else return time_unselectbtn_style
    }
    //測驗項目功能_區間按鈕選擇
    Onchangetimeinterval(changestate) {
        this.setState(
            {
                test_items_interval: changestate
            }
        )
    }
    render() {
        const { title } = this.props
        return (
            <div style={{ marginTop: "10px", borderRadius: "4px" }}>
                <div style={{ height: "50px", width: "100%", backgroundColor: "rgba(238,238,238,1)", paddingLeft: "24px", paddingRight: "24px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: "1.5rem" }}>{title}</div>
                </div>
                <div style={{ height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridColumnGap: "5px" }}>
                        <div style={this.SwitchTestItemInterval("all")} onClick={() => this.pressbtn("all")}>全部</div>
                        <div style={this.SwitchTestItemInterval("schedule")} onClick={() => this.pressbtn("schedule")}>排程</div>
                        <div style={this.SwitchTestItemInterval("event")} onClick={() => this.pressbtn("event")}>事件</div>
                    </div>
                </div>
                <div style={{ maxHeight: "250px", overflow: "auto" }}>
                    {this.eventdata()}
                </div>
            </div>

        );
    }
}

export default Schedule_event_list