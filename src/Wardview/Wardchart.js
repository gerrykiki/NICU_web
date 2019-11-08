import React, { Component } from 'react';
import WardcardvitalsignChart from './Wardcardvitalsign'



class WardChart extends Component {
    render() {
        function datarelease() {
            var dataset = []; //建立空的資料陣列
            const nowTime = new Date().getTime() - 24 * 60 * 60 * 1000
    
            for (let i = 0; i < (24 * 60 * 12); i++) {
                const data = Math.floor(Math.random() * 100) + 50;
                const time = nowTime +( i * 5 * 1000)
                dataset.push({
                    Data: data,
                    Time: time
                })
            }
            return dataset;
        }
        const data = datarelease()

        // const { hisid } = this.props
        return (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridColumnGap: "5px", padding: "5px" }}>
                <div style={{ display: "grid", gridTemplateRows: "auto,auto,auto", gridRowGap: '5px' }}>
                    <div style={{ display: "grid", gridTemplateColumns: "80px auto", gridColumnGap: "5px" }}>
                        <div style={{ marginTop: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div>
                                <div style={{ fontSize: "1rem", color: "#779F50", display: "flex", justifyContent: "center" }}>HR</div>
                                <div style={{ fontSize: "2rem", color: "#779F50", display: "flex", justifyContent: "center" }}>123</div>
                            </div>
                        </div>
                        <WardcardvitalsignChart svg_key={"svg_hr"} id_key={"div_hr"} data={data} axisBot={false} axisTop={true} colorshadow={"rgba(126, 211, 33, 0.1)"} circlrcolor={"#779F50"}></WardcardvitalsignChart>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "80px auto", gridColumnGap: "5px" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div>
                                <div style={{ fontSize: "1rem", color: "#C12528", display: "flex", justifyContent: "center" }}>NBP</div>
                                <div style={{ fontSize: "1.5rem", color: "#C12528", display: "flex", justifyContent: "center" }}>100/40</div>
                            </div>
                        </div>
                        <WardcardvitalsignChart svg_key={"svg_bp"} id_key={"div_bp"} data={data} data2={true} axisBot={false} axisTop={false} colorshadow={"rgba(240, 144, 144, 0.1)"} circlrcolor={"#C12528"} data_2_circlrcolor={"rgba(240, 144, 144, 0.5)"}></WardcardvitalsignChart>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "80px auto", gridColumnGap: "5px" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div>
                                <div style={{ fontSize: "1rem", color: "#C12528", display: "flex", justifyContent: "center" }}>ABP</div>
                                <div style={{ fontSize: "1.5rem", color: "#C12528", display: "flex", justifyContent: "center" }}>100/40</div>
                            </div>
                        </div>
                        <WardcardvitalsignChart svg_key={"svg_abp"} id_key={"div_abp"} data={data} data2={true} axisBot={true} axisTop={false} colorshadow={"rgba(240, 144, 144, 0.1)"} circlrcolor={"#C12528"} data_2_circlrcolor={"rgba(240, 144, 144, 0.5)"}></WardcardvitalsignChart>
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateRows: "auto,auto,auto", gridRowGap: '5px' }}>
                    <div style={{ display: "grid", gridTemplateColumns: "80px auto", gridColumnGap: "5px" }}>
                        <div style={{ marginTop: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div>
                                <div style={{ fontSize: "1rem", color: "#4773B8", display: "flex", justifyContent: "center" }}>SpO2</div>
                                <div style={{ fontSize: "2rem", color: "#4773B8", display: "flex", justifyContent: "center" }}>70%</div>
                            </div>
                        </div>
                        <div>
                            <WardcardvitalsignChart svg_key={"svg_spo"} id_key={"div_spo"} data={data} axisBot={false} axisTop={true} colorshadow={"rgba(0, 183, 255, 0.1)"} circlrcolor={"#4773B8"}></WardcardvitalsignChart>
                        </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "80px auto", gridColumnGap: "5px" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div>
                                <div style={{ fontSize: "1rem", color: "#7F3DB5", display: "flex", justifyContent: "center" }}>BT</div>
                                <div style={{ fontSize: "2rem", color: "#7F3DB5", display: "flex", justifyContent: "center" }}>36</div>
                            </div>
                        </div>
                        <WardcardvitalsignChart svg_key={"svg_bt"} id_key={"div_bt"} data={data} axisBot={false} axisTop={false} colorshadow={"rgba(199, 162, 244,0.1)"} circlrcolor={"#7F3DB5"}></WardcardvitalsignChart>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "80px auto", gridColumnGap: "5px" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div>
                                <div style={{ fontSize: "1rem", color: "#DE7531", display: "flex", justifyContent: "center" }}>RR</div>
                                <div style={{ fontSize: "2rem", color: "#DE7531", display: "flex", justifyContent: "center" }}>24</div>
                            </div>
                        </div>
                        <WardcardvitalsignChart svg_key={"svg_rr"} id_key={"div_rr"} data={data} axisBot={true} axisTop={false} colorshadow={"rgba(255, 152, 0, 0.1)"} circlrcolor={"#DE7531"}></WardcardvitalsignChart>
                    </div>
                </div>
            </div>
        );
    }
}

export default WardChart;