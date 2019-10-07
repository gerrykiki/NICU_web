import React, { Component } from 'react';
import { Select } from 'antd';
import Crosssectionvitalsignchart from '../CrossSectionView/Crossectionvitalsignchart'
import Chroniclescale from '../ChronicleView/Chroniclescale'

const width = window.screen.width * 0.9, height = width * 0.08, margin = (window.screen.width * 0.9 - 90) / 46, max = 150, min = 50
const axisstyle = -0.5
console.log(height)

class Flowsheetvitalsign extends Component {
    constructor() {
        super()
        this.state = {
            needFixed: false
        }
    }

    componentDidMount() {
        document.getElementById("Flowsheetlayout").addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        document.getElementById("Flowsheetlayout").removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        let scrollTop = document.getElementById("Flowsheetlayout").scrollTop
        if (this.state.needFixed) {
            if (scrollTop < 50) {
                this.setState({
                    needFixed: !this.state.needFixed
                })
            }
        }
        else {
            if (scrollTop > 50) {
                this.setState({
                    needFixed: !this.state.needFixed
                })
            }
        }
    }
    datarelease() {
        var dataarray = [];
        for (var k = 0; k < 24; k++) {
            var dataset = []; //建立空的資料陣列
            for (var i = 0; i < 24; i++) {
                var newNum = Math.floor(Math.random() * 50) + 50;
                dataset.push(newNum);
            }
            dataarray.push(dataset);
        }
        //console.log(dataarray);
        return dataarray;
    }
    render() {
        console.log(this)
        const { Option } = Select;
        const scrollstyle = {
            position: "absolute",
            top: 107,
            right: 0,
            backgroundColor:'white'
        }
        const stablestyle = {
            position: "static",
            backgroundColor:'white'

        }
        return (
            <div style={{ width: "100%", marginBottom: "20px" }}>
                <div style={{ display: 'flex', alignItems: 'center', height: '40px' }}>
                    <div style={{ fontSize: "22px", fontFamily: "PingFangTC-Medium" }}>VitalSign</div>
                    <div style={{ marginLeft: '10px' }}>
                        <Select value='Center Monitor' style={{ width: 200 }}>
                            <Option value={0}>Center Monitor</Option>
                            <Option value={1}>NIS</Option>
                            <Option value={2}>HIS</Option>
                        </Select>
                    </div>
                    <div style={{ marginLeft: '10px' }}>
                        <Select value='一週' style={{ width: 100 }}>
                            <Option value={0}>一天</Option>
                            <Option value={1}>三天</Option>
                            <Option value={2}>一週</Option>
                            <Option value={3}>兩週</Option>
                        </Select>
                    </div>
                </div>
                <div style={this.state.needFixed ? scrollstyle : stablestyle}><Chroniclescale patid='flootsheetscale'></Chroniclescale></div>
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between", height: height + 50, width: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "10px" }}>
                            <div style={{}}>
                                <div style={{ fontSize: "1rem", color: "rgba(126, 211, 33, 1)" }}>HR</div>
                                <div style={{ fontSize: "2rem", color: "rgba(126, 211, 33, 1)" }}>123</div>
                            </div>
                        </div>
                        <div id="flootsheethr" style={{ width: width }}>
                            <Crosssectionvitalsignchart
                                id={"flootsheethr"}
                                data={this.datarelease()}
                                width={width} height={height}
                                margin={margin}
                                max={max}
                                min={min}
                                axisBot={false}
                                axisTop={false}
                                axisstyle = {axisstyle}
                                circlrcolor={"rgba(126, 211, 33, 1)"}
                                colorshadow={"rgba(126, 211, 33, 0.5)"}>
                            </Crosssectionvitalsignchart>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", height: height + 50, width: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "10px" }}>
                            <div>
                                <div style={{ fontSize: "1rem", color: "rgba(220, 150, 159, 1)" }}>BP</div>
                                <div style={{ fontSize: "2rem", color: "rgba(220, 150, 159, 1)" }}>90</div>
                            </div>
                        </div>
                        <div id="flootsheetbp" style={{ width: width }}>
                            <Crosssectionvitalsignchart
                                id={"flootsheetbp"}
                                data={this.datarelease()}
                                width={width} height={height}
                                margin={margin}
                                max={max}
                                min={min}
                                axisBot={false}
                                axisTop={false}
                                axisstyle = {axisstyle}
                                circlrcolor={"rgba(220, 150, 159, 1)"}
                                colorshadow={"rgba(220, 150, 159, 0.5)"}>
                            </Crosssectionvitalsignchart>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", height: height + 50, width: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "10px" }}>
                            <div>
                                <div style={{ fontSize: "1rem", color: "rgba(59, 151, 225, 1)" }}>SpO2</div>
                                <div style={{ fontSize: "2rem", color: "rgba(59, 151, 225, 1)" }}>24</div>
                            </div>
                        </div>
                        <div id="flootsheetSpO" style={{ width: width }}>
                            <Crosssectionvitalsignchart
                                id={"flootsheetSpO"}
                                data={this.datarelease()}
                                width={width} height={height}
                                margin={margin}
                                max={max}
                                min={min}
                                axisBot={false}
                                axisTop={false}
                                axisstyle = {axisstyle}
                                circlrcolor={"rgba(59, 151, 225, 1)"}
                                colorshadow={"rgba(59, 151, 225, 0.5)"}>
                            </Crosssectionvitalsignchart>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", height: height + 50, width: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "10px" }}>
                            <div>
                                <div style={{ fontSize: "1rem", color: "rgba(144, 19, 254, 1)" }}>BT</div>
                                <div style={{ fontSize: "2rem", color: "rgba(144, 19, 254, 1)" }}>90</div>
                            </div>
                        </div>
                        <div id="flootsheetBT" style={{ width: width }}>
                            <Crosssectionvitalsignchart
                                id={"flootsheetBT"}
                                data={this.datarelease()}
                                width={width} height={height}
                                margin={margin}
                                max={max}
                                min={min}
                                axisBot={false}
                                axisTop={false}
                                axisstyle = {axisstyle}
                                circlrcolor={"rgba(144, 19, 254, 1)"}
                                colorshadow={"rgba(144, 19, 254, 0.5)"}>
                            </Crosssectionvitalsignchart>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", height: height + 50, width: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "10px" }}>
                            <div>
                                <div style={{ fontSize: "1rem", color: "rgba(245, 166, 35, 1)" }}>RR</div>
                                <div style={{ fontSize: "2rem", color: "rgba(245, 166, 35, 1)" }}>90</div>
                            </div>
                        </div>
                        <div id="flootsheetRR" style={{ width: width }}>
                            <Crosssectionvitalsignchart
                                id={"flootsheetRR"}
                                data={this.datarelease()}
                                width={width} height={height}
                                margin={margin}
                                max={max}
                                min={min}
                                axisBot={false}
                                axisTop={false}
                                axisstyle = {axisstyle}
                                circlrcolor={"rgba(245, 166, 35, 1)"}
                                colorshadow={"rgba(245, 166, 35, 0.5)"}>
                            </Crosssectionvitalsignchart>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Flowsheetvitalsign