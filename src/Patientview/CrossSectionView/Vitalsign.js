import React, { Component } from 'react';
import { Button, Select, Modal, Tabs, DatePicker, Input } from 'antd';
import Crosssectionvitalsignchart from './Crossectionvitalsignchart'
import displaylogo from '../../Image/svg/Display.svg'
import Vitalsigncheck from './Vitalsigncheck'


const width = (window.screen.width - 58) * 0.425, height = 100
const margin = (width - 90) / 46, max = 150, min = 50
console.log(height)
class Vitalsign extends Component {

    state = {
        vital_days: false, //false:一天 true:三天
        source: false, //false:中央站 true:NIS
        visible: false
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
        this.setState(
            {
                vital_days: bool
            }
        )
    }

    switch_source(bool) {
        this.setState(
            {
                source: bool
            }
        )
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
        return (
            <div style={{ marginBottom: "20px" }}>
                <Modal
                    title="生命徵象警示範圍設定"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={1000}
                >
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="新增警示設定" key="1">
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridColumnGap: "10px" }}>
                                <div style={{ display: "grid", gridTemplateRows: "100px 150px 150px" }}>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 5fr",border:"1px rgba(238,238,238,1) solid" }}>
                                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" ,border:"1px rgba(238,238,238,1) solid"}}>HR</div>
                                        <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr" }}>
                                            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr" }}>
                                                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                                                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>圖表範圍:</div>
                                                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                                        <Input style={{ width: "100px" }} defaultValue={3} /> ~ <Input style={{ width: "100px" }} min={1} max={10} defaultValue={3} />
                                                    </div>
                                                </div>
                                                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                                                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>圖表範圍:</div>
                                                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                                        <Input style={{ width: "100px" }} defaultValue={3} /> ~ <Input style={{ width: "100px" }} min={1} max={10} defaultValue={3} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <Button type="primary">預設值</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 5fr" ,border:"1px rgba(238,238,238,1) solid"}}>
                                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center",border:"1px rgba(238,238,238,1) solid" }}>ABP</div>
                                        <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr" }}>
                                            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr" }}>
                                                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                                                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>圖表範圍:</div>
                                                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                                        <Input style={{ width: "100px" }} defaultValue={3} /> ~ <Input style={{ width: "100px" }} min={1} max={10} defaultValue={3} />
                                                    </div>
                                                </div>
                                                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                                                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>SBP圖表範圍:</div>
                                                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                                        <Input style={{ width: "100px" }} defaultValue={3} /> ~ <Input style={{ width: "100px" }} min={1} max={10} defaultValue={3} />
                                                    </div>
                                                </div>
                                                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                                                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>DBP圖表範圍:</div>
                                                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                                        <Input style={{ width: "100px" }} defaultValue={3} /> ~ <Input style={{ width: "100px" }} min={1} max={10} defaultValue={3} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <Button type="primary">預設值</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 5fr" ,border:"1px rgba(238,238,238,1) solid"}}>
                                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center",border:"1px rgba(238,238,238,1) solid" }}>NBP</div>
                                        <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr" }}>
                                            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr" }}>
                                                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                                                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>圖表範圍:</div>
                                                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                                        <Input style={{ width: "100px" }} defaultValue={3} /> ~ <Input style={{ width: "100px" }} min={1} max={10} defaultValue={3} />
                                                    </div>
                                                </div>
                                                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                                                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>圖表範圍:</div>
                                                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                                        <Input style={{ width: "100px" }} defaultValue={3} /> ~ <Input style={{ width: "100px" }} min={1} max={10} defaultValue={3} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <Button type="primary">預設值</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "grid", gridTemplateRows: "100px 150px 150px" }}>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 5fr" ,border:"1px rgba(238,238,238,1) solid"}}>
                                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" ,border:"1px rgba(238,238,238,1) solid"}}>SPO2</div>
                                        <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr" }}>
                                            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr" }}>
                                                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                                                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>圖表範圍:</div>
                                                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                                        <Input style={{ width: "100px" }} defaultValue={3} /> ~ <Input style={{ width: "100px" }} min={1} max={10} defaultValue={3} />
                                                    </div>
                                                </div>
                                                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                                                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>圖表範圍:</div>
                                                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                                        <Input style={{ width: "100px" }} defaultValue={3} /> ~ <Input style={{ width: "100px" }} min={1} max={10} defaultValue={3} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <Button type="primary">預設值</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 5fr" ,border:"1px rgba(238,238,238,1) solid"}}>
                                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" ,border:"1px rgba(238,238,238,1) solid"}}>BT</div>
                                        <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr" }}>
                                            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr" }}>
                                                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                                                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>圖表範圍:</div>
                                                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                                        <Input style={{ width: "100px" }} defaultValue={3} /> ~ <Input style={{ width: "100px" }} min={1} max={10} defaultValue={3} />
                                                    </div>
                                                </div>
                                                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                                                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>圖表範圍:</div>
                                                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                                        <Input style={{ width: "100px" }} defaultValue={3} /> ~ <Input style={{ width: "100px" }} min={1} max={10} defaultValue={3} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <Button type="primary">預設值</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ display: "grid", gridTemplateColumns: "1fr 5fr" ,border:"1px rgba(238,238,238,1) solid"}}>
                                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center",border:"1px rgba(238,238,238,1) solid" }}>RR</div>
                                        <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr" }}>
                                            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr" }}>
                                                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                                                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>圖表範圍:</div>
                                                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                                        <Input style={{ width: "100px" }} defaultValue={3} /> ~ <Input style={{ width: "100px" }} min={1} max={10} defaultValue={3} />
                                                    </div>
                                                </div>
                                                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                                                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>圖表範圍:</div>
                                                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
                                                        <Input style={{ width: "100px" }} defaultValue={3} /> ~ <Input style={{ width: "100px" }} min={1} max={10} defaultValue={3} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <Button type="primary">預設值</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 5fr" ,marginTop:"10px"}}>
                                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>設定生效時間:</div>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <DatePicker style={{ width: "97%" }} />
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="警示設定清單" key="2">
                            <div></div>
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
                    {/* <Vitalsigncheck></Vitalsigncheck> */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                        <div>
                            <div style={{ display: "grid", gridTemplateColumns: "70px auto" }}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <div>
                                        <div style={{ fontSize: "1rem", color: "#779F50", width: "100px", display: "flex", justifyContent: "center" }}>HR</div>
                                        <div style={{ fontSize: "2rem", color: "#779F50", width: "100px", display: "flex", justifyContent: "center" }}>123</div>
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
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "70px auto" }}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <div>
                                        <div style={{ fontSize: "1rem", color: "#C12528", width: "100px", display: "flex", justifyContent: "center" }}>NBP</div>
                                        <div style={{ fontSize: "1rem", color: "#C12528", width: "100px", display: "flex", justifyContent: "center" }}>100/40</div>
                                        <div style={{ fontSize: "1rem", color: "#C12528", width: "100px", display: "flex", justifyContent: "center" }}>(60)</div>
                                    </div>
                                </div>
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
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "70px auto" }}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <div>
                                        <div style={{ fontSize: "1rem", color: "#C12528", width: "100px", display: "flex", justifyContent: "center" }}>ABP</div>
                                        <div style={{ fontSize: "1rem", color: "#C12528", width: "100px", display: "flex", justifyContent: "center" }}>100/40</div>
                                        <div style={{ fontSize: "1rem", color: "#C12528", width: "100px", display: "flex", justifyContent: "center" }}>60</div>
                                    </div>
                                </div>
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
                        </div>
                        <div>
                            <div style={{ display: "grid", gridTemplateColumns: "70px auto" }}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <div>
                                        <div style={{ fontSize: "1rem", color: "#4773B8", width: "100px", display: "flex", justifyContent: "center" }}>
                                            SpO<sub style={{ bottom: "-1em" }}>2</sub>
                                        </div>
                                        <div style={{ fontSize: "2rem", color: "#4773B8", width: "100px", display: "flex", justifyContent: "center" }}>45%</div>
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
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "70px auto" }}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <div>
                                        <div style={{ fontSize: "1rem", color: "#7F3DB5", width: "100px", display: "flex", justifyContent: "center" }}>BT</div>
                                        <div style={{ fontSize: "2rem", color: "#7F3DB5", width: "100px", display: "flex", justifyContent: "center" }}>24&deg;C</div>
                                    </div>
                                </div>
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
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "70px auto" }}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <div>
                                        <div style={{ fontSize: "1rem", color: "#DE7531", width: "100px", display: "flex", justifyContent: "center" }}>RR</div>
                                        <div style={{ fontSize: "2rem", color: "#DE7531", width: "100px", display: "flex", justifyContent: "center" }}>24</div>
                                    </div>
                                </div>
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
            </div>
        );
    }

}

export default Vitalsign;