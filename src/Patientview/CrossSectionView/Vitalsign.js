import React, { Component } from 'react';
import { Select } from 'antd';
import Crosssectionvitalsignchart from './Crossectionvitalsignchart'
import displaylogo from '../../Image/svg/Display.svg'
import Vitalsigncheck from './Vitalsigncheck'


const width = (window.screen.width - 58) * 0.425, height = 100
const margin = (width - 90) / 46, max = 150, min = 50
console.log(height)
class Vitalsign extends Component {

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
        const { Option } = Select;
        function handleChange(value) {
            console.log(`selected ${value}`);
        }
        return (
            <div style={{ width: "100%", marginBottom: "20px" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '40px' }}>
                        <div style={{ fontSize: "22px", fontFamily: "PingFangTC-Medium" }}>Vital Sign</div>
                        <div style={{ display: 'flex', alignContent: 'center', marginLeft: "10px" }}>
                            <Select defaultValue="centermonitor" style={{ width: 200 }} onChange={handleChange}>
                                <Option value="centermonitor">Center Monitor</Option>
                            </Select>
                            <Select defaultValue="threedays" style={{ width: 120, marginLeft: "10px" }} onChange={handleChange}>
                                <Option value="oneday">一天</Option>
                                <Option value="threedays">三天</Option>
                                <Option value="oneweekly">一週</Option>
                                <Option value="twoweeks">兩週</Option>
                            </Select>
                        </div>
                    </div>
                    <img src={displaylogo} alt='vitalsignedit' style={{ height: '22px', width: '22px', cursor: 'pointer' }} />
                </div>
                <div style={{ borderWidth: "1px", borderColor: "rgba(238,238,238,1)", borderStyle: "solid", borderRadius: "4px", position: 'relative' }}>
                    <Vitalsigncheck></Vitalsigncheck>
                    <div style={{ display: "flex", height: height + (margin * 4), width: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "10px", width: '15%' }}>
                            <div style={{ marginTop: "20px" }}>
                                <div style={{ fontSize: "1rem", color: "rgba(126, 211, 33, 1)" }}>HR</div>
                                <div style={{ fontSize: "2rem", color: "rgba(126, 211, 33, 1)" }}>123</div>
                            </div>
                        </div>
                        <div id="crosssectionvitalsignhr" style={{ width: width }}>
                            <Crosssectionvitalsignchart
                                id={"crosssectionvitalsignhr"}
                                data={this.datarelease()}
                                width={width} height={height}
                                margin={margin}
                                max={max}
                                min={min}
                                axisBot={false}
                                axisTop={true}
                                axisstyle={1}
                                circlrcolor={"rgba(126, 211, 33, 1)"}
                                colorshadow={"rgba(126, 211, 33, 0.5)"}
                                >
                            </Crosssectionvitalsignchart>
                        </div>
                    </div>
                    <div style={{ display: "flex", height: height + (margin * 2), width: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "10px", width: '15%' }}>
                            <div>
                                <div style={{ fontSize: "1rem", color: "rgba(220, 150, 159, 1)" }}>BP</div>
                                <div style={{ fontSize: "2rem", color: "rgba(220, 150, 159, 1)" }}>90</div>
                            </div>
                        </div>
                        <div id="crosssectionvitalsignbp" style={{ width: width }}>
                            <Crosssectionvitalsignchart
                                id={"crosssectionvitalsignbp"}
                                data={this.datarelease()}
                                width={width} height={height}
                                margin={margin}
                                max={max}
                                min={min}
                                axisBot={false}
                                axisTop={false}
                                axisstyle={1}
                                circlrcolor={"rgba(220, 150, 159, 1)"}
                                colorshadow={"rgba(220, 150, 159, 0.5)"}>
                            </Crosssectionvitalsignchart>
                        </div>
                    </div>
                    <div style={{ display: "flex", height: height + (margin * 2), width: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "10px", width: '15%' }}>
                            <div>
                                <div style={{ fontSize: "1rem", color: "rgba(59, 151, 225, 1)" }}>SpO2</div>
                                <div style={{ fontSize: "2rem", color: "rgba(59, 151, 225, 1)" }}>24</div>
                            </div>
                        </div>
                        <div id="crosssectionvitalsignSpO" style={{ width: width }}>
                            <Crosssectionvitalsignchart
                                id={"crosssectionvitalsignSpO"}
                                data={this.datarelease()}
                                width={width} height={height}
                                margin={margin}
                                max={max}
                                min={min}
                                axisBot={false}
                                axisTop={false}
                                axisstyle={1}
                                circlrcolor={"rgba(59, 151, 225, 1)"}
                                colorshadow={"rgba(59, 151, 225, 0.5)"}>
                            </Crosssectionvitalsignchart>
                        </div>
                    </div>
                    <div style={{ display: "flex", height: height + (margin * 2), width: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "10px", width: '15%' }}>
                            <div>
                                <div style={{ fontSize: "1rem", color: "rgba(144, 19, 254, 1)" }}>BT</div>
                                <div style={{ fontSize: "2rem", color: "rgba(144, 19, 254, 1)" }}>90</div>
                            </div>
                        </div>
                        <div id="crosssectionvitalsignbt" style={{ width: width }}>
                            <Crosssectionvitalsignchart
                                id={"crosssectionvitalsignbt"}
                                data={this.datarelease()}
                                width={width} height={height}
                                margin={margin}
                                max={max}
                                min={min}
                                axisBot={false}
                                axisTop={false}
                                axisstyle={1}
                                circlrcolor={"rgba(144, 19, 254, 1)"}
                                colorshadow={"rgba(144, 19, 254, 0.5)"}>
                            </Crosssectionvitalsignchart>
                        </div>
                    </div>
                    <div style={{ display: "flex", height: height + (margin * 4), width: "100%" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "10px", width: '15%' }}>
                            <div>
                                <div style={{ fontSize: "1rem", color: "rgba(245, 166, 35, 1)" }}>RR</div>
                                <div style={{ fontSize: "2rem", color: "rgba(245, 166, 35, 1)" }}>90</div>
                            </div>
                        </div>
                        <div id="crosssectionvitalsignrr" style={{ width: width }}>
                            <Crosssectionvitalsignchart
                                id={"crosssectionvitalsignrr"}
                                data={this.datarelease()}
                                width={width} height={height}
                                margin={margin}
                                max={max}
                                min={min}
                                axisBot={true}
                                axisTop={false}
                                axisstyle={1}
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

export default Vitalsign;