import React, { Component } from 'react'
import Chronicrttable from './Chronic_rttable'
import Chronicvitalchart from './Chronic_vital_chart'

class Chronic_vital extends Component {
    state = {
        check_state_one: 0,
        check_state_three: 0,
        check_state_oneweek: 0,
        check_state_twoweek: 0
    }
    Interval_grid_box() {
        const { select_interval } = this.props
        var gridarray = []
        if (select_interval === 0) {
            for (let index = 0; index < 24; index++) {
                const number = index + 1
                if (number === this.state.check_state_one) {
                    gridarray.push(<div style={{ width: "100%", height: 590, border: "rgba(245, 166, 35, 1) 1px solid" }} onClick={() => this.onClickCheckgrid_one(number)}></div>)
                }
                else gridarray.push(<div style={{ width: "100%", height: 590 }} onClick={() => this.onClickCheckgrid_one(number)}></div>)
            }
        }
        if (select_interval === 1) {
            for (let index = 0; index < 18; index++) {
                const number = index + 1
                if (number === this.state.check_state_three) {
                    gridarray.push(<div style={{ width: "100%", height: 590, border: "rgba(245, 166, 35, 1) 1px solid" }} onClick={() => this.onClickCheckgrid_three(number)}></div>)
                }
                else gridarray.push(<div style={{ width: "100%", height: 590 }} onClick={() => this.onClickCheckgrid_three(number)}></div>)
            }
        }
        if (select_interval === 2) {
            for (let index = 0; index < 21; index++) {
                const number = index + 1
                if (number === this.state.check_state_oneweek) {
                    gridarray.push(<div style={{ width: "100%", height: 590, border: "rgba(245, 166, 35, 1) 1px solid" }} onClick={() => this.onClickCheckgrid_oneweek(number)}></div>)
                }
                else gridarray.push(<div style={{ width: "100%", height: 590 }} onClick={() => this.onClickCheckgrid_oneweek(number)}></div>)
            }
        }
        if (select_interval === 3) {
            for (let index = 0; index < 14; index++) {
                const number = index + 1
                if (number === this.state.check_state_twoweek) {
                    gridarray.push(<div style={{ width: "100%", height: 590, border: "rgba(245, 166, 35, 1) 1px solid" }} onClick={() => this.onClickCheckgrid_twoweek(number)}></div>)
                }
                else gridarray.push(<div style={{ width: "100%", height: 590 }} onClick={() => this.onClickCheckgrid_twoweek(number)}></div>)
            }
        }
        return gridarray
    }

    onClickCheckgrid_one(number) {
        // //1:7 2:8 3:9 ........
        // const { defaultdate } = this.props
        // const starttime = (defaultdate - (24 * 60 * 60 * 1000) + (7 * 60 * 60 * 1000)) + ((number - 1) * (60 * 60 * 1000))
        // const endtime = (defaultdate - (24 * 60 * 60 * 1000) + (7 * 60 * 60 * 1000)) + ((number) * (60 * 60 * 1000))
        // console.log(starttime, endtime)
        console.log(number)
        this.setState(
            {
                check_state_one: number

            }
        )
    }
    onClickCheckgrid_three(number) {
        // const { defaultdate } = this.props
        // const starttime = (defaultdate - (24 * 60 * 60 * 1000) + (7 * 60 * 60 * 1000)) + ((number - 1) * (4 * 60 * 60 * 1000))
        // const endtime = (defaultdate - (24 * 60 * 60 * 1000) + (7 * 60 * 60 * 1000)) + ((number) * (4 * 60 * 60 * 1000))
        // console.log(starttime, endtime)
        this.setState(
            {
                check_state_three: number
            }
        )
    }

    onClickCheckgrid_oneweek(number) {
        //1:7 2:8 3:9 ........
        // const { defaultdate } = this.props
        // const starttime = (defaultdate - (24 * 60 * 60 * 1000) + (7 * 60 * 60 * 1000)) + ((number - 1) * (60 * 60 * 1000))
        // const endtime = (defaultdate - (24 * 60 * 60 * 1000) + (7 * 60 * 60 * 1000)) + ((number) * (60 * 60 * 1000))
        // console.log(starttime, endtime)
        this.setState(
            {
                check_state_oneweek: number

            }
        )
    }
    onClickCheckgrid_twoweek(number) {
        // const { defaultdate } = this.props
        // const starttime = (defaultdate - (24 * 60 * 60 * 1000) + (7 * 60 * 60 * 1000)) + ((number - 1) * (4 * 60 * 60 * 1000))
        // const endtime = (defaultdate - (24 * 60 * 60 * 1000) + (7 * 60 * 60 * 1000)) + ((number) * (4 * 60 * 60 * 1000))
        // console.log(starttime, endtime)
        this.setState(
            {
                check_state_twoweek: number
            }
        )
    }
    render() {
        const { userdata, select_interval, select_date } = this.props
        const title_list = [{ item: "HR" }, { item: "ABP" }, { item: "NBP" }, { item: "SpO2" }, { item: "BT" }, { item: "RR" }]
        const vital_style = { title_style: { fontSize: "1rem", display: "flex", justifyContent: "center" } }
        const vital_title = title_list.map((info, index) =>
            <div key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div>
                    <div style={{ fontSize: "1rem", display: "flex", justifyContent: "center", color: title_color(info.item) }}>{info.item}</div>
                    <div style={{ fontSize: "2rem", display: "flex", justifyContent: "center", color: title_color(info.item) }}>123</div>
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
        const viewwidth = window.screen.availWidth - 228
        console.log(select_interval)
        function Interval_grid(number) {
            switch (number) {
                case 0:
                    return 24
                case 1:
                    return 18
                case 2:
                    return 21
                case 3:
                    return 14
                default:
                    return null
            }
        }
        return (
            <div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div style={{ fontSize: "2rem" }}>生命徵象</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "90px 1fr" }}>
                    <div style={{ display: "grid", gridTemplateRows: "repeat(6,100px)" }}>
                        {vital_title}
                    </div>
                    <div style={{ display: "grid", gridTemplateRows: "repeat(6,100px)", position: "relative" }}>
                        <div style={{ position: "absolute", top: 5, left: 50, height: 590, width: viewwidth }}>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(" + Interval_grid(select_interval) + ",1fr)" }}>
                                {this.Interval_grid_box()}
                            </div>
                        </div>
                        <Chronicvitalchart max={200} min={0} select_interval={select_interval} select_date={select_date} id_key="hr_id_chronic" svg_id="hr_svg_chronic"></Chronicvitalchart>
                        <Chronicvitalchart max={200} min={0} select_interval={select_interval} select_date={select_date} id_key="abp_id_chronic" svg_id="abp_svg_chronic"></Chronicvitalchart>
                        <Chronicvitalchart max={200} min={0} select_interval={select_interval} select_date={select_date} id_key="nbp_id_chronic" svg_id="nbp_svg_chronic"></Chronicvitalchart>
                        <Chronicvitalchart max={200} min={0} select_interval={select_interval} select_date={select_date} id_key="spo2_id_chronic" svg_id="spo2_svg_chronic"></Chronicvitalchart>
                        <Chronicvitalchart max={200} min={0} select_interval={select_interval} select_date={select_date} id_key="bt_id_chronic" svg_id="bt_svg_chronic"></Chronicvitalchart>
                        <Chronicvitalchart max={200} min={0} select_interval={select_interval} select_date={select_date} id_key="rr_id_chronic" svg_id="rr_svg_chronic"></Chronicvitalchart>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chronic_vital