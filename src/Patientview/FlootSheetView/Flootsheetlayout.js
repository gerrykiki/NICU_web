import React, { Component } from 'react';
import Flootsheetio from './Flootsheetio'
import Controlbar from '../Controlbar';
import Flowsheetvitalsign from './Flootsheetvitalsign'
import Vitalxaxis from '../../Module/Vitalxaxis'
import { DatePicker } from 'antd';
import moment from 'moment'

class Flowsheetlayout extends Component {
    state = {
        select_date: new Date().getTime()
    }
    simdata() {
        const Inputarray = []
        for (let index = 0; index < 24; index++) {
            const element = Math.floor(Math.random() * 100);
            Inputarray.push(element)
        }
        return Inputarray
    }

    render() {
        //Sim IO data
        const io_source = [
            {
                "item": "IV (ml) 1/2NS FOR DRUG",
                "data": this.simdata()
            },
            {
                "item": "IV (ml) D10W",
                "data": this.simdata()
            },
            {
                "item": "IV (ml) IVIG",
                "data": this.simdata()
            },
            {
                "item": "UAC (ml) 1/2NS+HEPARIN",
                "data": this.simdata()
            },
            {
                "item": "UAC (ml) NS+HEPARIN",
                "data": this.simdata()
            },
            {
                "item": "UAC (ml) 20%TPN",
                "data": this.simdata()
            },
            {
                "item": "UAC (ml) Albumin 4cc+D5W 2cc",
                "data": this.simdata()
            },
            {
                "item": "UVC (ml) D20W",
                "data": this.simdata()
            },
            {
                "item": "UVC (ml) Dopamin 21.6 mg in D5W",
                "data": this.simdata()
            },
            {
                "item": "UVC (ml)Dopamin 21.6 mg  in D5W",
                "data": this.simdata()
            },
            {
                "item": "FFP (ml)",
                "data": this.simdata()
            },
            {
                "item": "PRBC (ml)",
                "data": this.simdata()
            },
            {
                "item": "Plt.Ph (ml)",
                "data": this.simdata()
            },
            {
                "item": "PO (ml)",
                "data": this.simdata()
            },
            {
                "item": "NG/OG (ml)",
                "data": this.simdata()
            },
            {
                "item": "RV (ml)",
                "data": this.simdata()
            }
        ]
        function monthformat(month) {
            return month + 1
        }
        function timeformat(time) {
            return new Date(time).getFullYear() + "/" + monthformat(new Date(time).getMonth()) + "/" + new Date(time).getDate()
        }
        const dateFormat = 'YYYY/MM/DD';
        return (
            <div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 8fr" }}>
                    <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr" }}>
                        <div style={{ padding: "5px 10px" }}>
                            <DatePicker placeholder="請選擇時間" defaultValue={moment(timeformat(this.state.select_date), dateFormat)} />
                        </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr" }}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            特殊護理事件:<div style={{ width: "20px", height: "20px", borderRadius: "99em", background: "black", color: "white", textAlign: "center" }}>1</div>
                        </div>
                    </div>
                    <div style={{ padding: "5px 10px" }}>
                        <div style={{ border: "rgba(238,238,238,1) 1px solid", borderRadius: "4px", maxHeight: "100px", height: "100px", overflow: "auto" }}>
                            <div style={{ display: "flex", color: "rgba(59, 151, 225, 1)" }}>10 : 00 特殊護理事件</div>
                            <div style={{ display: "flex", color: "rgba(59, 151, 225, 1)" }}>11 : 00 特殊護理事件</div>
                            <div style={{ display: "flex", color: "rgba(59, 151, 225, 1)" }}>12 : 00 特殊護理事件</div>
                            <div style={{ display: "flex", color: "rgba(59, 151, 225, 1)" }}>11 : 00 特殊護理事件</div>
                            <div style={{ display: "flex", color: "rgba(59, 151, 225, 1)" }}>12 : 00 特殊護理事件</div>
                            <div style={{ display: "flex", color: "rgba(59, 151, 225, 1)" }}>11 : 00 特殊護理事件</div>
                            <div style={{ display: "flex", color: "rgba(59, 151, 225, 1)" }}>12 : 00 特殊護理事件</div>
                            <div style={{ display: "flex", color: "rgba(59, 151, 225, 1)" }}>11 : 00 特殊護理事件</div>
                            <div style={{ display: "flex", color: "rgba(59, 151, 225, 1)" }}>12 : 00 特殊護理事件</div>
                        </div>
                    </div>
                </div>
                <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "90px 1fr", height: "10px" }}>
                        <div></div>
                        <Vitalxaxis max={200} min={0} select_interval={0} select_date={this.state.select_date} id_key="xaxis_flootsheet" svg_id="xaxis_svg_flootsheet"></Vitalxaxis>
                    </div>
                </div>
                <div style={{ maxHeight: '600px', overflowY: 'auto', paddingLeft: "20px", paddingRight: "20px" }}>
                    <Flowsheetvitalsign select_date={this.state.select_date}></Flowsheetvitalsign>
                    <Flootsheetio IO_data={io_source}></Flootsheetio>
                </div>
                <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "90px 1fr", height: "10px" }}>
                        <div></div>
                        <Vitalxaxis max={200} min={0} select_interval={0} select_date={this.state.select_date} id_key="xaxis_flootsheet_bot" svg_id="xaxis_svg_flootsheet_bot"></Vitalxaxis>
                    </div>
                </div>
            </div>
        );
    }
}

export default Flowsheetlayout;