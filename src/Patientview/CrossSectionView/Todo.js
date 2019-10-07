import React, { Component } from 'react';
import { Button, Input, TimePicker, DatePicker } from 'antd'
import moment from 'moment';
import editlogo from '../../Image/svg/Edit.svg'

class Todolayout extends Component {
    state = {
        Editstate: "none"
    }

    Editclick(editchange) {
        console.log(editchange)
        this.setState(
            {
                Editstate: editchange
            }
        );
    }

    render() {
        const format = 'HH:mm';
        return (
            <div style={{ width: "100%", marginBottom: "20px", borderRadius: "4px" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px' }}>
                    <div style={{ fontSize: "22px", fontFamily: "PingFangTC-Medium" }}>
                        待辦事項
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", height: "50px", backgroundColor: "rgba(255,249,237,1)", paddingRight: "20px" }}>
                    <img src={editlogo} alt='todoedit' style={{width:'15px',height:'15px',cursor:'pointer'}} onMouseUp={() => this.Editclick("block")} ></img>
                </div>
                <div style={{ maxHeight: "180px", display: "flex", justifyContent: "space-between", flexWrap: 'wrap', height: "100px" }}>
                    {/*To do list */}
                </div>
                <div style={{display:this.state.Editstate}}>
                    <div style={{ display: "grid", gridTemplateRows: "50px 50px", paddingRight: "16px", paddingLeft: "16px", backgroundColor: "rgba(238,238,238,1)" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <div style={{ marginRight: "10px" }}>待辦時間:</div>
                                <DatePicker placeholder="Select month" style={{ marginRight: "10px" }} />
                                <TimePicker defaultValue={moment('12:08', format)} format={format} />
                            </div>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <div style={{ marginRight: "10px" }}>結束時間:</div>
                                <DatePicker placeholder="Select month" style={{ marginRight: "10px" }} />
                                <TimePicker defaultValue={moment('12:08', format)} format={format} />
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "11fr 1fr" }}>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><Input placeholder="待辦內容" /></div>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Button type="primary" style={{width:"70%"}}>新增</Button>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", padding: "9px" }}>
                        <Button style={{ height: "35px", width: "100px", borderRadius: "4px" }} onClick={() => this.Editclick("none")}>取消</Button>
                        <div style={{ width: "20px" }}></div>
                        <Button type="primary" style={{ height: "35px", width: "100px", borderRadius: "4px" }}>儲存</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Todolayout