import React, { Component } from 'react';
import { Button, Select, Modal, Tabs, DatePicker, Input } from 'antd';
import Crosssectionvitalsignchart from './Crossectionvitalsignchart'
import Warningsetting from './Warningsettinglist'
import Addwarningsetting from './Addnewwaring'

class Vitalsign extends Component {

    state = {
        vital_days: false, //false:一天 true:三天
        source: false, //false:中央站 true:NIS
        visible: false,
        chackstate_one: 0,
        chackstate_three: 0
    }

    onVitalCheck() {
        var gridarray = []
        if (this.state.vital_days) {
            for (let index = 0; index < 18; index++) {
                const checknumber = index + 1
                if (checknumber === this.state.chackstate_three) {
                    gridarray.push(<div key={index} style={{ height: 330, width: "100%", border: "rgba(245, 166, 35, 1) 1px solid" }} onClick={() => this.onClickCheckgrid_three(checknumber)}></div>)
                }
                else gridarray.push(<div key={index} style={{ height: 330, width: "100%" }} onClick={() => this.onClickCheckgrid_three(checknumber)}></div>)
            }
        }
        else {
            for (let index = 0; index < 24; index++) {
                const checknumber = index + 1
                if (checknumber === this.state.chackstate_one) {
                    gridarray.push(<div key={index} style={{ height: 330, width: "100%", border: "rgba(245, 166, 35, 1) 1px solid" }} onClick={() => this.onClickCheckgrid_one(checknumber)}></div>)
                }
                else gridarray.push(<div key={index} style={{ height: 330, width: "100%" }} onClick={() => this.onClickCheckgrid_one(checknumber)}></div>)
            }
        }
        return gridarray;
    }

    onClickCheckgrid_one(number) {
        //1:7 2:8 3:9 ........
        const { defaultdate } = this.props
        const starttime = (defaultdate - (24 * 60 * 60 * 1000) + (7 * 60 * 60 * 1000)) + ((number - 1) * (60 * 60 * 1000))
        const endtime = (defaultdate - (24 * 60 * 60 * 1000) + (7 * 60 * 60 * 1000)) + ((number) * (60 * 60 * 1000))
        console.log(starttime, endtime)
        this.setState(
            {
                chackstate_one: number

            }
        )
    }
    onClickCheckgrid_three(number) {
        const { defaultdate } = this.props
        const starttime = (defaultdate - (24 * 60 * 60 * 1000) + (7 * 60 * 60 * 1000)) + ((number - 1) * (4 * 60 * 60 * 1000))
        const endtime = (defaultdate - (24 * 60 * 60 * 1000) + (7 * 60 * 60 * 1000)) + ((number) * (4 * 60 * 60 * 1000))
        console.log(starttime, endtime)
        this.setState(
            {
                chackstate_three: number
            }
        )
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    sourcehandleChange = (value) => {
        console.log(`selected ${value}`);
        var state;
        switch (value) {
            case 0:
                this.switch_source(false)
                break;
            case 1:
                this.switch_source(true)
                break;
            default:
                state = null
                break;
        }

    }


    intervalhandleChange = (value) => {
        console.log(`selected ${value}`);
        var state;
        switch (value) {
            case 0:
                this.switch_vitalsign_days(false)
                break;
            case 1:
                this.switch_vitalsign_days(true)
                break;
            default:
                state = null
                break;
        }

    }

    switch_vitalsign_days(bool) {
        this.setState({
            vital_days: bool,
            chackstate_one: 0,
            chackstate_three: 0
        })
    }

    switch_source(bool) {
        this.setState(
            {
                source: bool
            });
    }

    render() {
        // const days_btn_style = {
        //     select_style: {
        //         select_border: { border: "1px orange solid", borderRadius: "16px", fontSize: "1.5rem", cursor: 'pointer' },
        //         select_title: { display: "flex", justifyContent: 'center', alignItems: "center", color: "orange" }
        //     },
        //     Unselect_style: {
        //         Unselect_border: { border: "1px orange solid", borderRadius: "16px", fontSize: "1.5rem", backgroundColor: "orange", cursor: 'pointer' },
        //         Unselect_title: { display: "flex", justifyContent: 'center', alignItems: "center", color: "white" }
        //     }
        // }
        // const source_btn_style = {
        //     select_style: {
        //         select_border: { border: "1px blue solid", borderRadius: "16px", fontSize: "1.5rem", cursor: 'pointer' },
        //         select_title: { display: "flex", justifyContent: 'center', alignItems: "center", color: "blue" }
        //     },
        //     Unselect_style: {
        //         Unselect_border: { border: "1px blue solid", borderRadius: "16px", fontSize: "1.5rem", backgroundColor: "blue", cursor: 'pointer' },
        //         Unselect_title: { display: "flex", justifyContent: 'center', alignItems: "center", color: "white" }
        //     }
        // }

        const data = true

        const { defaultdate } = this.props
        const { userdata } = this.props
        const { Option } = Select;
        const { TabPane } = Tabs;
        const width = window.screen.availWidth * 0.25
        return (
            <div style={{ marginBottom: "20px" }}>
                <Modal
                    title="生命徵象警示範圍設定"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={1000}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="新增警示設定" key="1">
                            <Addwarningsetting></Addwarningsetting>
                        </TabPane>
                        <TabPane tab="警示設定清單" key="2">
                            <Warningsetting></Warningsetting>
                        </TabPane>
                    </Tabs>
                </Modal>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: "40px", backgroundColor: "rgba(238, 238, 238, 1)", paddingLeft: "5px", paddingRight: "5px" }}>
                    <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ fontSize: "2rem" }}>Vital Sign</div>
                        <Select defaultValue={0} style={{ width: 200, marginLeft: "50px" }} onChange={this.sourcehandleChange}>
                            <Option value={0}>Center Monitor</Option>
                            <Option value={1}>NIS</Option>
                        </Select>
                        <Select defaultValue={0} style={{ width: 150, marginLeft: "20px" }} onChange={this.intervalhandleChange}>
                            <Option value={0}>一天</Option>
                            <Option value={1}>三天</Option>
                        </Select>
                    </div>
                    <Button type="primary" onClick={this.showModal}>閾值調整</Button>
                </div>
                <div style={{ borderWidth: "1px", borderColor: "rgba(238,238,238,1)", borderStyle: "solid", borderRadius: "4px", position: 'relative' }}>
                    <div style={{ display: "grid", gridTemplateColumns: "70px 1fr 70px 1fr" }}>
                        <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr" }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div>
                                    <div style={{ fontSize: "1rem", color: "#779F50", display: "flex", justifyContent: "center" }}>HR</div>
                                    <div style={{ fontSize: "2rem", color: "#779F50", display: "flex", justifyContent: "center" }}>123</div>
                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div>
                                    <div style={{ fontSize: "1rem", color: "#C12528", display: "flex", justifyContent: "center" }}>NBP</div>
                                    <div style={{ fontSize: "1rem", color: "#C12528", display: "flex", justifyContent: "center" }}>100/40</div>
                                    <div style={{ fontSize: "1rem", color: "#C12528", display: "flex", justifyContent: "center" }}>(60)</div>
                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div>
                                    <div style={{ fontSize: "1rem", color: "#C12528", display: "flex", justifyContent: "center" }}>ABP</div>
                                    <div style={{ fontSize: "1rem", color: "#C12528", display: "flex", justifyContent: "center" }}>100/40</div>
                                    <div style={{ fontSize: "1rem", color: "#C12528", display: "flex", justifyContent: "center" }}>60</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ position: "relative" }}>
                            <div style={{ position: "absolute", top: 20, left: 40, width: width - 50, height: 330 }}>
                                <div style={{ display: "grid", gridTemplateColumns: this.state.vital_days ? "repeat(18, 1fr)" : "repeat(24,1fr)" }}>
                                    {this.onVitalCheck()}
                                </div>
                            </div>
                            <Crosssectionvitalsignchart
                                svg_id={"HR_svg"}
                                id_key={"HR_div"}
                                datasource={data}
                                axisBot={false}
                                axisTop={true}
                                circlrcolor="#779F50"
                                colorshadow={"rgba(126, 211, 33, 0.5)"}
                                min={0}
                                max={200}
                                defaultdate={defaultdate}
                                source={this.state.source}
                                vitaldays={this.state.vital_days}>
                            </Crosssectionvitalsignchart>
                            <Crosssectionvitalsignchart
                                svg_id={"NBP_svg"}
                                id_key={"NBP_div"}
                                datasource={data}
                                axisBot={false}
                                axisTop={false}
                                circlrcolor={"#C12528"}
                                colorshadow={"rgba(126, 211, 33, 0.5)"}
                                min={0}
                                max={200}
                                defaultdate={defaultdate}
                                source={this.state.source}
                                vitaldays={this.state.vital_days}>
                            </Crosssectionvitalsignchart>
                            <Crosssectionvitalsignchart
                                svg_id={"ABP_svg"}
                                id_key={"ABP_div"}
                                datasource={data}
                                axisBot={true}
                                axisTop={false}
                                circlrcolor={"#C12528"}
                                colorshadow={"rgba(126, 211, 33, 0.5)"}
                                min={0}
                                max={200}
                                defaultdate={defaultdate}
                                source={this.state.source}
                                vitaldays={this.state.vital_days}>
                            </Crosssectionvitalsignchart>
                        </div>
                        <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr" }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div>
                                    <div style={{ fontSize: "1rem", color: "#4773B8", width: "100px", display: "flex", justifyContent: "center" }}>
                                        SpO<sub style={{ bottom: "-1em" }}>2</sub>
                                    </div>
                                    <div style={{ fontSize: "2rem", color: "#4773B8", width: "100px", display: "flex", justifyContent: "center" }}>45%</div>
                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div>
                                    <div style={{ fontSize: "1rem", color: "#7F3DB5", width: "100px", display: "flex", justifyContent: "center" }}>BT</div>
                                    <div style={{ fontSize: "2rem", color: "#7F3DB5", width: "100px", display: "flex", justifyContent: "center" }}>24&deg;C</div>
                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <div>
                                    <div style={{ fontSize: "1rem", color: "#DE7531", width: "100px", display: "flex", justifyContent: "center" }}>RR</div>
                                    <div style={{ fontSize: "2rem", color: "#DE7531", width: "100px", display: "flex", justifyContent: "center" }}>24</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ position: "relative" }}>
                            <div style={{ position: "absolute", top: 20, left: 40, width: width - 50, height: 330 }}>
                                <div style={{ display: "grid", gridTemplateColumns: this.state.vital_days ? "repeat(18, 1fr)" : "repeat(24,1fr)" }}>
                                    {this.onVitalCheck()}
                                </div>
                            </div>
                            <Crosssectionvitalsignchart
                                svg_id={"SpO2_svg"}
                                id_key={"SpO2_div"}
                                datasource={data}
                                axisBot={false}
                                axisTop={true}
                                circlrcolor={"#4773B8"}
                                colorshadow={"#4773B8"}
                                min={0}
                                max={200}
                                defaultdate={defaultdate}
                                source={this.state.source}
                                vitaldays={this.state.vital_days}>
                            </Crosssectionvitalsignchart>
                            <Crosssectionvitalsignchart
                                svg_id={"BT_svg"}
                                id_key={"BT_div"}
                                datasource={data}
                                axisBot={false}
                                axisTop={false}
                                circlrcolor={"#7F3DB5"}
                                colorshadow={"rgba(126, 211, 33, 0.5)"}
                                min={0}
                                max={200}
                                defaultdate={defaultdate}
                                source={this.state.source}
                                vitaldays={this.state.vital_days}>
                            </Crosssectionvitalsignchart>
                            <Crosssectionvitalsignchart
                                svg_id={"RR_svg"}
                                id_key={"RR_div"}
                                datasource={data}
                                axisBot={true}
                                axisTop={false}
                                circlrcolor={"#DE7531"}
                                colorshadow={"rgba(126, 211, 33, 0.5)"}
                                min={0}
                                max={200}
                                defaultdate={defaultdate}
                                source={this.state.source}
                                vitaldays={this.state.vital_days}>
                            </Crosssectionvitalsignchart>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Vitalsign;