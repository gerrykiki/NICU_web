import React, { Component } from 'react';
import WardcardvitalsignChart from './Wardcardvitalsign'


const width = window.screen.availWidth * 0.25, height = 50, margin = 20, max = 150, min = 50

class WardChart extends Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

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
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridColumnGap: "5px", padding: "10px" }}>
                <div style={{ display: "grid", gridTemplateRows: "1fr 1fr" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ marginTop: "10px", width: "70px" }}>
                            <div style={{ fontSize: "1rem", color: "rgba(126, 211, 33, 1)" }}>HR</div>
                            <div style={{ fontSize: "1.5rem", color: "rgba(126, 211, 33, 1)" }}>123</div>
                        </div>
                        <div id="wardvitalhr">
                            <WardcardvitalsignChart id={"wardvitalhr"} data={true} width={width} height={100} margin={margin} max={100} min={0} axisBot={false} axisTop={true} colorshadow={"rgba(126, 211, 33, 0.1)"} circlrcolor={"rgba(126, 211, 33, 1)"}></WardcardvitalsignChart>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ width: "70px" }}>
                            <div style={{ fontSize: "1rem", color: "rgba(240, 144, 144, 1)" }}>NBP</div>
                            <div style={{ fontSize: "1.5rem", color: "rgba(240, 144, 144, 1)" }}>100/40</div>
                        </div>
                        <div id="wardvital_NBP">
                            <WardcardvitalsignChart id={"wardvital_NBP"} data={true} data2={true} width={width} height={100} margin={margin} max={100} min={0} axisBot={false} axisTop={false} colorshadow={"rgba(240, 144, 144, 0.1)"} circlrcolor={"rgba(240, 144, 144, 1)"} data_2_circlrcolor={"rgba(240, 144, 144, 0.5)"}></WardcardvitalsignChart>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ width: "70px" }}>
                            <div style={{ fontSize: "1rem", color: "rgba(240, 144, 144, 1)" }}>ABP</div>
                            <div style={{ fontSize: "1.5rem", color: "rgba(240, 144, 144, 1)" }}>100/40</div>
                        </div>
                        <div id="wardvital_ABP">
                            <WardcardvitalsignChart id={"wardvital_ABP"} data={true} data2={true} width={width} height={100} margin={margin} max={100} min={0} axisBot={false} axisTop={false} colorshadow={"rgba(240, 144, 144, 0.1)"} circlrcolor={"rgba(240, 144, 144, 1)"} data_2_circlrcolor={"rgba(240, 144, 144, 0.5)"}></WardcardvitalsignChart>
                        </div>
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateRows: "1fr 1fr" }}>
                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginLeft: "20px" }}>
                        <div style={{ marginTop: "10px", width: "50px" }}>
                            <div style={{ fontSize: "1rem", color: "rgba(0, 183, 255, 1)" }}>SpO2</div>
                            <div style={{ fontSize: "1.5rem", color: "rgba(0, 183, 255, 1)" }}>70%</div>
                        </div>
                        <div id="wardvital_SpO2">
                            <WardcardvitalsignChart id={"wardvital_SpO2"} data={true} width={width} height={100} margin={margin} max={100} min={0} axisBot={false} axisTop={true} colorshadow={"rgba(0, 183, 255, 0.1)"} circlrcolor={"rgba(0, 183, 255, 1)"}></WardcardvitalsignChart>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginLeft: "20px" }}>
                        <div style={{ marginTop: "10px", width: "50px" }}>
                            <div style={{ fontSize: "1rem", color: "rgba(199, 162, 244,1)" }}>BT</div>
                            <div style={{ fontSize: "1.5rem", color: "rgba(199, 162, 244,1)" }}>36</div>
                        </div>
                        <div id="wardvital_BT">
                            <WardcardvitalsignChart id={"wardvital_BT"} data={true} width={width} height={100} margin={margin} max={100} min={0} axisBot={false} axisTop={false} colorshadow={"rgba(199, 162, 244,0.1)"} circlrcolor={"rgba(199, 162, 244,1)"}></WardcardvitalsignChart>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginLeft: "20px" }}>
                        <div style={{ marginTop: "10px", width: "50px" }}>
                            <div style={{ fontSize: "1rem", color: "rgba(255, 152, 0, 1)" }}>RR</div>
                            <div style={{ fontSize: "1.5rem", color: "rgba(255, 152, 0, 1)" }}>24</div>
                        </div>
                        <div id="wardvital_RR">
                            <WardcardvitalsignChart id={"wardvital_RR"} data={true} width={width} height={100} margin={margin} max={100} min={0} axisBot={false} axisTop={false} colorshadow={"rgba(255, 152, 0, 0.1)"} circlrcolor={"rgba(255, 152, 0, 1)"}></WardcardvitalsignChart>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WardChart;