import React, { Component } from 'react';
import WardcardvitalsignChart from './Wardcardvitalsign'



class WardChart extends Component {

    datarelease() {


        var dataset = []; //建立空的資料陣列
        /*
        Data format = {
            Data:data_source
            Max:max
            Min:min
        }
         */
        if (dataset.length !== 0) {

            dataset.length = 0
        }
        for (let i = 0; i < 24; i++) {
            const data = Math.floor(Math.random() * 50) + 50;
            let min = 30;
            let max = 60;
            if (i > 18) {
                min = 50;
                max = 80;
            }
            dataset.push({
                Data: data,
                Min: min,
                Max: max
            })
        }
        return dataset;
    }

    data_2_release() {
        var dataset = []; //建立空的資料陣列
        /*
        Data format = {
            Data:data_source
            Max:max
            Min:min
        }
         */
        for (let i = 0; i < 24; i++) {
            const data = 40;
            let min = 30;
            let max = 60;
            if (i > 18) {
                min = 50;
                max = 80;
            }
            dataset.push({
                Data: data,
                Min: min,
                Max: max
            })
        }
        return dataset;
    }

    render() {
        return (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridColumnGap: "5px", padding: "5px" }}>
                <div style={{ display: "grid", gridTemplateRows: "auto,auto,auto", gridRowGap: '5px' }}>
                    <div style={{ display: "grid", gridTemplateColumns: "80px auto", gridColumnGap: "5px" }}>
                        <div style={{ marginTop: "20px", display: "flex", alignItems: "center",justifyContent:"center" }}>
                            <div>
                                <div style={{ fontSize: "1rem", color: "rgba(126, 211, 33, 1)", display: "flex", justifyContent: "center" }}>HR</div>
                                <div style={{ fontSize: "2rem", color: "rgba(126, 211, 33, 1)", display: "flex", justifyContent: "center" }}>123</div>
                            </div>
                        </div>
                        <WardcardvitalsignChart svg_key={"svg_hr"} id_key={"div_hr"} data={true} axisBot={false} axisTop={true} colorshadow={"rgba(126, 211, 33, 0.1)"} circlrcolor={"black"}></WardcardvitalsignChart>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "80px auto", gridColumnGap: "5px" }}>
                        <div style={{ display: "flex", alignItems: "center" ,justifyContent:"center"}}>
                            <div>
                                <div style={{ fontSize: "1rem", color: "rgba(240, 144, 144, 1)", display: "flex", justifyContent: "center" }}>NBP</div>
                                <div style={{ fontSize: "1.5rem", color: "rgba(240, 144, 144, 1)", display: "flex", justifyContent: "center" }}>100/40</div>
                            </div>
                        </div>
                        <WardcardvitalsignChart svg_key={"svg_bp"} id_key={"div_bp"} data={true} data2={true} axisBot={false} axisTop={false} colorshadow={"rgba(240, 144, 144, 0.1)"} circlrcolor={"rgba(240, 144, 144, 1)"} data_2_circlrcolor={"rgba(240, 144, 144, 0.5)"}></WardcardvitalsignChart>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "80px auto", gridColumnGap: "5px" }}>
                        <div style={{ display: "flex", alignItems: "center",justifyContent:"center" }}>
                            <div>
                                <div style={{ fontSize: "1rem", color: "rgba(240, 144, 144, 1)", display: "flex", justifyContent: "center" }}>ABP</div>
                                <div style={{ fontSize: "1.5rem", color: "rgba(240, 144, 144, 1)", display: "flex", justifyContent: "center" }}>100/40</div>
                            </div>
                        </div>
                        <WardcardvitalsignChart svg_key={"svg_abp"} id_key={"div_abp"} data={true} data2={true} axisBot={false} axisTop={false} colorshadow={"rgba(240, 144, 144, 0.1)"} circlrcolor={"rgba(240, 144, 144, 1)"} data_2_circlrcolor={"rgba(240, 144, 144, 0.5)"}></WardcardvitalsignChart>

                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateRows: "auto,auto,auto", gridRowGap: '5px' }}>
                    <div style={{ display: "grid", gridTemplateColumns: "80px auto", gridColumnGap: "5px" }}>
                        <div style={{ marginTop: "20px", display: "flex", alignItems: "center" ,justifyContent:"center"}}>
                            <div>
                                <div style={{ fontSize: "1rem", color: "rgba(0, 183, 255, 1)", display: "flex", justifyContent: "center" }}>SpO2</div>
                                <div style={{ fontSize: "2rem", color: "rgba(0, 183, 255, 1)", display: "flex", justifyContent: "center" }}>70%</div>
                            </div>
                        </div>
                        <div>
                            <WardcardvitalsignChart svg_key={"svg_spo"} id_key={"div_spo"} data={true} axisBot={false} axisTop={true} colorshadow={"rgba(0, 183, 255, 0.1)"} circlrcolor={"rgba(0, 183, 255, 1)"}></WardcardvitalsignChart>
                        </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "80px auto", gridColumnGap: "5px" }}>
                        <div style={{ display: "flex", alignItems: "center" ,justifyContent:"center"}}>
                            <div>
                                <div style={{ fontSize: "1rem", color: "rgba(199, 162, 244,1)", display: "flex", justifyContent: "center" }}>BT</div>
                                <div style={{ fontSize: "2rem", color: "rgba(199, 162, 244,1)", display: "flex", justifyContent: "center" }}>36</div>
                            </div>
                        </div>
                        <WardcardvitalsignChart svg_key={"svg_bt"} id_key={"div_bt"} data={true} axisBot={false} axisTop={false} colorshadow={"rgba(199, 162, 244,0.1)"} circlrcolor={"rgba(199, 162, 244,1)"}></WardcardvitalsignChart>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "80px auto", gridColumnGap: "5px" }}>
                        <div style={{ display: "flex", alignItems: "center" ,justifyContent:"center"}}>
                            <div>
                                <div style={{ fontSize: "1rem", color: "rgba(255, 152, 0, 1)", display: "flex", justifyContent: "center" }}>RR</div>
                                <div style={{ fontSize: "2rem", color: "rgba(255, 152, 0, 1)", display: "flex", justifyContent: "center" }}>24</div>
                            </div>
                        </div>
                        <WardcardvitalsignChart svg_key={"svg_rr"} id_key={"div_rr"} data={true} axisBot={false} axisTop={false} colorshadow={"rgba(255, 152, 0, 0.1)"} circlrcolor={"rgba(255, 152, 0, 1)"}></WardcardvitalsignChart>
                    </div>
                </div>
            </div>
        );
    }
}

export default WardChart;