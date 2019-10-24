import React, { Component } from 'react';
import editlogo from '../Image/svg/Edit.svg'
import { eventdata } from '../jsonResponse'
import detaillogo from '../Image/svg/details.svg'
import { Tooltip } from 'antd';

class Wardschedule extends Component {
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
            style = { height: "100%", color: "white", backgroundColor: "rgba(59, 151, 225, 1)", borderRadius: "4px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "16px", cursor: "pointer" };
        }
        else {
            style = { height: "100%", borderColor: "rgba(59, 151, 225, 1)", borderStyle: "solid", borderWidth: "1px", borderRadius: "4px", fontSize: "16px", display: "flex", justifyContent: "center", alignItems: "center", color: "rgba(59, 151, 225, 1)", cursor: "pointer" };
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
        var eventdatalist = eventdata

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
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: "20px", paddingRight: "20px" }}>
                        <div key={index} style={{ height: "50px", borderBottomWidth: "1px", borderBottomColor: "rgba(0,0,0,0.09)", borderBottomStyle: "solid", paddingTop: "8px", paddingBottom: "8px", display: "flex", alignItems: "center" }}>
                            <div style={{ width: "30px", borderRadius: "4px", backgroundColor: checkbackground(info.item), fontSize: "16px", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>{itemchange(info.item)}</div>
                            <div style={{ fontSize: "16px", marginLeft: "10px" }}>床{info.bednumber}/{info.name}</div>
                            <div style={{ fontSize: "16px", marginLeft: "10px" }}>{this.timechange(info.time)}</div>
                            <div style={{ fontSize: "16px", marginLeft: "10px" }}>{info.result}</div>
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
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingLeft: "20px", paddingRight: "20px" }}>
                            <div key={index} style={{ height: "50px", borderBottomWidth: "1px", borderBottomColor: "rgba(0,0,0,0.09)", borderBottomStyle: "solid", paddingTop: "8px", paddingBottom: "8px", display: "flex", alignItems: "center" }}>
                                <div style={{ width: "30px", borderRadius: "4px", backgroundColor: checkbackground(info.item), fontSize: "16px", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>{itemchange(info.item)}</div>
                                <div style={{ fontSize: "16px", marginLeft: "10px" }}>床{info.bednumber}/{info.name}</div>
                                <div style={{ fontSize: "16px", marginLeft: "10px" }}>{this.timechange(info.time)}</div>
                                <div style={{ fontSize: "16px", marginLeft: "10px" }}>{info.result}</div>
                            </div>
                            <div>
                                <img src={detaillogo} alt='detaillogo'></img>
                            </div>
                        </div>
                    )
                }
            }
        }
        return listarray
    }

    eventdata() {

        var eventdatalist = eventdata

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

        var Eventstate = this.state.pressitemstate

        return this.listevent(eventdatalist, Eventstate)
    }

    editcheck() {
        const { editstatus } = this.props
        if (editstatus) {
            return <img src={editlogo} style={{ height: '15px', width: '15px' }} alt="scheduleedit" />
        }
        else {
            return null
        }
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
        return (
            <div style={{ marginTop: "10px", borderRadius: "4px" }}>
                <div style={{ height: "50px", width: "100%", backgroundColor: "rgba(238,238,238,1)", paddingLeft: "24px", paddingRight: "24px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: "16px" }}>今日排程</div>
                </div>
                <div style={{ height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridColumnGap: "5px" }}>
                        <div style={this.SwitchTestItemInterval("all")} onClick={() => this.pressbtn("all")}>全部</div>
                        <div style={this.SwitchTestItemInterval("schedule")} onClick={() => this.pressbtn("schedule")}>排程</div>
                        <div style={this.SwitchTestItemInterval("event")} onClick={() => this.pressbtn("event")}>事件</div>
                    </div>
                </div>
                <div style={{ height: "250px", width: "100%", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(238,238,238,1)" }}>
                    <div style={{ maxHeight: "300px", overflow: "auto" }}>
                        {this.eventdata()}
                    </div>
                </div>
            </div>
        );
    }
}


export default Wardschedule