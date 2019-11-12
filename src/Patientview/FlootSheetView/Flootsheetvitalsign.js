import React, { Component } from 'react';
import { Select } from 'antd';
import Chronicvitalchart from '../ChronicleView/Chronic_vital_chart'

const width = window.screen.width * 0.9, height = width * 0.08, margin = (window.screen.width * 0.9 - 90) / 46, max = 150, min = 50
const axisstyle = -0.5
console.log(height)

class Flowsheetvitalsign extends Component {
    state = {
        check_state_one: 0,
    }

    Interval_grid_box() {
        var gridarray = []
        for (let index = 0; index < 24; index++) {
            const number = index + 1
            if (number === this.state.check_state_one) {
                gridarray.push(<div style={{ width: "100%", height: 590, border: "rgba(245, 166, 35, 1) 1px solid" }} onClick={() => this.onClickCheckgrid_one(number)}></div>)
            }
            else gridarray.push(<div style={{ width: "100%", height: 590 }} onClick={() => this.onClickCheckgrid_one(number)}></div>)
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
    constructor() {
        super()
        this.state = {
            displMode: 0
        }
    }

    render() {
        const { Option } = Select;
        const { select_date } = this.props
        const viewwidth = window.screen.availWidth - 228
        return (
            <div style={{ marginBottom: "20px" }}>
                <div style={{ display: 'flex', alignItems: 'center', height: '40px' }}>
                    <div style={{ fontSize: "2rem" }}>VitalSign</div>
                    <div style={{ marginLeft: '10px' }}>
                        <Select defaultValue={this.state.displMode} style={{ width: 200 }}>
                            <Option value={0}>Center Monitor</Option>
                            <Option value={1}>NIS</Option>
                        </Select>
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "90px 1fr" }}>
                    <div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px" }}>
                            <div>
                                <div style={{ fontSize: "1rem", color: "#779F50", textAlign: "center" }}>HR</div>
                                <div style={{ fontSize: "2rem", color: "#779F50", textAlign: "center" }}>123</div>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px" }}>
                            <div>
                                <div style={{ fontSize: "1rem", color: "#C12528", textAlign: "center" }}>NBP</div>
                                <div style={{ fontSize: "2rem", color: "#C12528", textAlign: "center" }}>100/40</div>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px" }}>
                            <div>
                                <div style={{ fontSize: "1rem", color: "#C12528", textAlign: "center" }}>ABP</div>
                                <div style={{ fontSize: "2rem", color: "#C12528", textAlign: "center" }}>123/50</div>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px" }}>
                            <div>
                                <div style={{ fontSize: "1rem", color: "#7F3DB5", textAlign: "center" }}>BT</div>
                                <div style={{ fontSize: "2rem", color: "#7F3DB5", textAlign: "center" }}>24</div>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px" }}>
                            <div>
                                <div style={{ fontSize: "1rem", color: "#7F3DB5", textAlign: "center" }}>BT</div>
                                <div style={{ fontSize: "2rem", color: "#7F3DB5", textAlign: "center" }}>24</div>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px" }}>
                            <div>
                                <div style={{ fontSize: "1rem", color: "#DE7531", textAlign: "center" }}>RR</div>
                                <div style={{ fontSize: "2rem", color: "#DE7531", textAlign: "center" }}>24</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateRows: "repeat(6,100px)", position: "relative" }}>
                        <div style={{ position: "absolute", top: 5, left: 50, height: 590, width: viewwidth }}>
                            <div style={{ display: "grid", gridTemplateColumns: "repeat(24,1fr)" }}>
                                {this.Interval_grid_box()}
                            </div>
                        </div>
                        <Chronicvitalchart max={200} min={0} select_interval={0} select_date={select_date} id_key="hr_id_flootsheet" svg_id="hr_svg_flootsheet"></Chronicvitalchart>
                        <Chronicvitalchart max={200} min={0} select_interval={0} select_date={select_date} id_key="nbp_id_flootsheet" svg_id="nbp_svg_flootsheet"></Chronicvitalchart>
                        <Chronicvitalchart max={200} min={0} select_interval={0} select_date={select_date} id_key="abp_id_flootsheet" svg_id="abp_svg_flootsheet"></Chronicvitalchart>
                        <Chronicvitalchart max={200} min={0} select_interval={0} select_date={select_date} id_key="spo2_id_flootsheet" svg_id="spo2_svg_flootsheet"></Chronicvitalchart>
                        <Chronicvitalchart max={200} min={0} select_interval={0} select_date={select_date} id_key="bt_id_flootsheet" svg_id="bt_svg_flootsheet"></Chronicvitalchart>
                        <Chronicvitalchart max={200} min={0} select_interval={0} select_date={select_date} id_key="rr_id_flootsheet" svg_id="rr_svg_flootsheet"></Chronicvitalchart>
                    </div>
                    {/* <div style={this.state.needFixed ? scrollstyle : stablestyle}><Chroniclescale patid='flootsheetscale'></Chroniclescale></div> */}
                </div>
            </div>
        );
    }
}
export default Flowsheetvitalsign