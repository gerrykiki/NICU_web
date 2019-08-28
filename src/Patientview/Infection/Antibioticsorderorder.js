import React, { Component } from 'react'
import { DatePicker, Input, Button } from 'antd'

class Antibioticsorder extends Component {
    render() {
        const {Title} = this.props
        const { RangePicker } = DatePicker;
        function onChange(date, dateString) {
            console.log(date, dateString);
        }
        return (
            <div style={{ width: "100%" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px' }}>
                    <div style={{ fontSize: "22px", fontFamily: "PingFangTC-Medium" }}>{Title}</div>
                </div>
                <div style={{ display: 'flex' }}>
                    <RangePicker onChange={onChange} />
                    <Input placeholder="Basic usage" style={{ width: "30%", marginLeft: "10px" }} />
                    <Button style={{ marginLeft: "10px" }}>搜尋</Button>
                </div>
                <div style={{ marginTop: "10px" }}>
                    <div style={{ backgroundColor: "rgba(255, 249, 237, 1)", display: 'grid', gridTemplateColumns: "1fr 2fr 2fr 1.5fr 1.5fr 1.5fr", height: '50px' }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>開立時間</div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>學名</div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>商品名稱</div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>劑量/單位/途徑/頻次/</div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>開始時間</div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>結束時間</div>
                    </div>
                    <div style={{ maxHeight: "70vh", overflowY: "auto" }}>
                        <div style={{ display: 'grid', gridTemplateColumns: "1fr 8.5fr", height: '80px' }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                                <div>
                                    <div>06/24</div>
                                    <div>16:00</div>
                                </div>
                            </div>
                            <div style={{ display: "grid", gridTemplateRows: '1fr 1fr' }}>
                                <div style={{ display: "grid", gridTemplateColumns: ' 2fr 2fr 1.5fr 1.5fr 1.5fr' }}>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>123</div>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>123</div>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>123</div>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>123</div>
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>123</div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", width: "100%", paddingLeft: "10px" }}>123</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Antibioticsorder