import React, { Component } from 'react'
import Chronicrttable from './Chronic_rttable'

class Chronic_vital extends Component {

    render() {
        const { userdata } = this.props
        const title_list = [{ item: "HR" }, { item: "ABP" }, { item: "NBP" }, { item: "SpO2" }, { item: "BT" }, { item: "RR" }]
        const vital_style = {
            title_style: { fontSize: "1rem", display: "flex", justifyContent: "center" }
        }
        const vital_title = title_list.map((info, index) =>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div>
                    <div style={{ fontSize: "1rem", display: "flex", justifyContent: "center" ,color:title_color(info.item)}}>{info.item}</div>
                    <div style={{ fontSize: "2rem", display: "flex", justifyContent: "center" ,color:title_color(info.item)}}>123</div>
                </div>
            </div>
        )
        function title_color(key) {
            switch (key) {
                case "HR":
                    return "rgba(126, 211, 33, 1)"
                case "ABP":
                    return "rgba(222, 150, 159, 1)"
                case "NBP":
                    return "rgba(222, 150, 159, 1)"
                case "SpO2":
                    return "rgba(59, 151, 225, 1)"
                case "BT":
                    return "rgba(144, 19, 254, 1)"
                case "RR":
                    return "rgba(245, 166, 35, 1)"
                default:
                    break;
            }
        }
        return (
            <div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ fontSize: "2rem" }}>Vital</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "90px 50px 1fr" }}>
                    <div style={{ display: "grid", gridTemplateRows: "repeat(6,65px)" }}>
                        {vital_title}
                    </div>
                </div>
            </div>
        );
    }
}

export default Chronic_vital