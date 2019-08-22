import React, { Component } from 'react';
import { Date } from 'core-js';

class Schedulelayout extends Component {
    state = {
        detailstate: "none",
        pressitemstate: "all"
    }

    ScheduleDatelist() {
        var nowdate = (+new Date());
        var datelist = [];
        var days = "01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31".split(",");
        var months = "01,02,03,04,05,06,07,08,09,10,11,12".split(",");
        var weekdays = "(日),(一),(二),(三),(四),(五),(六)".split(",");
        for (let index = 0; index < 7; index++) {
            const element = nowdate + (86400000 * (index - 3))
            const elementdate = new Date(element);
            var elementdays
            if (index === 3) {
                elementdays = months[elementdate.getMonth()] + "-" + days[elementdate.getDate()] + weekdays[elementdate.getDay()] + "(當日)"
            }
            else {
                elementdays = months[elementdate.getMonth()] + "-" + days[elementdate.getDate()] + weekdays[elementdate.getDay()]
            }
            datelist.push(elementdays)
        }
        return datelist
    }


    detailchange() {
        this.setState(
            {
                detailstate: "block"
            }
        );
    }

    pressbtn(pressitem) {
        this.setState(
            {
                pressitemstate: pressitem
            }
        );
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

    timechange(timestamp) {
        const changetime = new Date(timestamp).getHours() + ":" + new Date(timestamp).getMinutes()
        return changetime

    }

    itemchange(changeitem) {
        switch (changeitem) {
            case "event":
                return "事件"
            case "schedule":
                return "排程"
            default:
                return ""
        }
    }

    eventdata() {

        var eventdatalist = [
            {
                "item": "schedule",
                "time": 1565748000,
                "result": "術前檢查"
            },
            {
                "item": "event",
                "time": 1565748000,
                "result": "術前檢查"
            }
        ]

        var Eventstate = this.state.pressitemstate
        var Eventlist
        switch (Eventstate) {
            case "all":
                Eventlist = eventdatalist.map(
                    (info,index) =>
                        <div key={index} style={{ height: "50px", borderBottomWidth: "1px", borderBottomColor: "rgba(0,0,0,0.09)", borderBottomStyle: "solid", paddingLeft: "40px", paddingTop: "8px", paddingBottom: "8px", display: "flex", alignItems: "center" }}>
                            <div style={{ width: "50px", borderRadius: "4px", backgroundColor: "rgba(124,179,5,1)", fontSize: "16px", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>{this.itemchange(info.item)}</div>
                            <div style={{ fontSize: "16px", marginLeft: "10px" }}>{this.timechange(info.time)}</div>
                            <div style={{ fontSize: "16px", marginLeft: "10px" }}>{info.result}</div>
                        </div>
                )
                break;
            case "schedule":
                Eventlist = eventdatalist.map(
                    (info,index) =>
                        info.item === "schedule" ?
                            <div key={index} style={{ height: "50px", borderBottomWidth: "1px", borderBottomColor: "rgba(0,0,0,0.09)", borderBottomStyle: "solid", paddingLeft: "40px", paddingTop: "8px", paddingBottom: "8px", display: "flex", alignItems: "center" }}>
                                <div style={{ width: "50px", borderRadius: "4px", backgroundColor: "rgba(124,179,5,1)", fontSize: "16px", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>{this.itemchange(info.item)}</div>
                                <div style={{ fontSize: "16px", marginLeft: "10px" }}>{this.timechange(info.time)}</div>
                                <div style={{ fontSize: "16px", marginLeft: "10px" }}>{info.result}</div>
                            </div>
                            : null
                )
                break;
            case "event":
                Eventlist = eventdatalist.map(
                    (info,index) =>
                        info.item === "event" ?
                            <div key={index} style={{ height: "50px", borderBottomWidth: "1px", borderBottomColor: "rgba(0,0,0,0.09)", borderBottomStyle: "solid", paddingLeft: "40px", paddingTop: "8px", paddingBottom: "8px", display: "flex", alignItems: "center" }}>
                                <div style={{ width: "50px", borderRadius: "4px", backgroundColor: "rgba(124,179,5,1)", fontSize: "16px", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>{this.itemchange(info.item)}</div>
                                <div style={{ fontSize: "16px", marginLeft: "10px" }}>{this.timechange(info.time)}</div>
                                <div style={{ fontSize: "16px", marginLeft: "10px" }}>{info.result}</div>
                            </div>
                            : null
                )
                break;
            default:
                break;
        }
        return Eventlist
    }


    render() {
        const nowdate = this.ScheduleDatelist();
        console.log(nowdate)
        let scheduledate = nowdate.map(
            (item,index) =>
                <div key={index} style={{ lineHeight: "50px", textAlign: "center", fontSize: "16px", cursor: "pointer" }} onMouseUp={() => this.detailchange()}>{item}</div>
        )
        return (
            <div style={{ width: "100%", marginBottom: "20px" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px' }}>
                    <div style={{ fontSize: "22px", fontFamily: "PingFangTC-Medium" }}>
                        排程
                    </div>
                </div>
                <div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr", backgroundColor: "rgba(255, 249, 237, 1)", height: "50px" }}>
                        {scheduledate}
                    </div>
                </div>
                <div style={{ display: this.state.detailstate, marginTop: "20px" }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '50px', backgroundColor: "rgba(255, 249, 237, 1)", width: "100%", paddingLeft: "24px" }}>
                        <div style={{ fontSize: "22px", fontFamily: "PingFangTC-Medium" }}>詳細內容</div>
                    </div>
                    <div style={{ height: "400px", display: "grid", gridTemplateColumns: "1fr 1fr", gridColumnGap: "10px", padding: "24px", borderWidth: "1px", borderColor: "rgba(238,238,238,1)", borderStyle: "solid" }}>
                        <div style={{ borderRadius: "4px" }}>
                            <div style={{ height: "50px", width: "100%", backgroundColor: "rgba(238,238,238,1)", paddingLeft: "24px", fontSize: "16px", lineHeight: "50px" }}>
                                排程與事件
                            </div>
                            <div style={{ height: "300px", width: "100%", display: "grid", gridTemplateColumns: "1fr 4fr", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(238,238,238,1)" }}>
                                <div style={{ paddingTop: "10px", paddingBottom: "10px", paddingRight: "15px", paddingLeft: "15px", display: "grid", gridTemplateRows: "1fr 1fr 1fr", gridRowGap: "10px" }}>
                                    <div style={this.btnstatestyle("all")} onMouseUp={() => this.pressbtn("all")}>全部</div>
                                    <div style={this.btnstatestyle("schedule")} onMouseUp={() => this.pressbtn("schedule")}>排程</div>
                                    <div style={this.btnstatestyle("event")} onMouseUp={() => this.pressbtn("event")}>事件</div>
                                </div>
                                <div style={{ maxHeight: "300px", overflow: "auto" }}>
                                    {this.eventdata()}
                                </div>
                            </div>
                        </div>
                        <div style={{ borderRadius: "4px" }}>
                            <div style={{ height: "50px", width: "100%", backgroundColor: "rgba(238,238,238,1)", paddingLeft: "24px", fontSize: "16px", lineHeight: "50px" }}>
                                評論
                            </div>
                            <div style={{ height: "300px", width: "100%", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(238,238,238,1)" }}>
                                <div style={{ maxHeight: "300px", overflow: "auto" }}>
                                    {this.eventdata()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Schedulelayout