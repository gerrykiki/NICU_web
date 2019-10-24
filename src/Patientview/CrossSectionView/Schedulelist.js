import React, { Component } from 'react';
import editlogo from '../../Image/svg/Edit.svg'

class Schedulelist extends Component {
    state = {
        detailstate: "none",
        pressitemstate: "all",
        scheduleclick: 7
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
                    (info, index) =>
                        <div key={index} style={{ height: "50px", borderBottomWidth: "1px", borderBottomColor: "rgba(0,0,0,0.09)", borderBottomStyle: "solid", paddingLeft: "40px", paddingTop: "8px", paddingBottom: "8px", display: "flex", alignItems: "center" }}>
                            <div style={{ width: "50px", borderRadius: "4px", backgroundColor: "rgba(124,179,5,1)", fontSize: "16px", display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>{this.itemchange(info.item)}</div>
                            <div style={{ fontSize: "16px", marginLeft: "10px" }}>{this.timechange(info.time)}</div>
                            <div style={{ fontSize: "16px", marginLeft: "10px" }}>{info.result}</div>
                        </div>
                )
                break;
            case "schedule":
                Eventlist = eventdatalist.map(
                    (info, index) =>
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
                    (info, index) =>
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

    editcheck(){
        const { editstatus } = this.props
        if (editstatus) {
            return <img src={editlogo} style={{ height: '15px', width: '15px' }} alt="scheduleedit" />
        }
        else{
            return null
        }
    }
    render() {
        return (
            <div style={{ borderRadius: "4px" }}>
                <div style={{ height: "50px", width: "100%", backgroundColor: "rgba(238,238,238,1)", paddingLeft: "24px", paddingRight: "24px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: "16px" }}> 排程與事件</div>
                    {this.editcheck()}
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
        );
    }
}

export default Schedulelist


