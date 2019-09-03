import React, { Component } from 'react';
import Labviewitem from './Labviewitem'

class Labviewlayout extends Component {
    render() {
        const data = [
            [{ title: "Glucose", score: 77, date: "2019/01/01" }],
            [{ title: "WBC", score: 19647, date: "Seg 59%2019/01/01" }],
            [{ title: "WBC", score: 14.8, date: "2019/01/01" }],
            [{ title: "Platelet", score: 125, date: "2019/01/01" }],
            [
                { title: "Na+", score: 125, date: "2019/01/01" },
                { title: "K+", score: 125, date: "2019/01/01" },
                { title: "Ca2+", score: 125, date: "2019/01/01" },
                { title: "P", score: 125, date: "2019/01/01" },
                { title: "Mg2+", score: 125, date: "2019/01/01" },
            ],
            [
                { title: "CRP", score: 125, date: "2019/01/01" }
            ],
            [
                { title: "Procalcitionin", score: 125, date: "2019/01/01" }
            ],
            [
                { title: "Current Antibiotics", score: 125, date: "2019/01/01" }
            ],
            [
                { title: "Bun", score: 125, date: "2019/01/01" },
                { title: "Cr", score: 125, date: "2019/01/01" }
            ],
            [
                { title: "ALT", score: 125, date: "2019/01/01" },
                { title: "AST", score: 125, date: "2019/01/01" }
            ],
            [
                { title: "TBIL", score: 125, date: "2019/01/01" },
                { title: "D.Bil", score: 125, date: "2019/01/01" }
            ],
            [
                { title: "ALKP", score: 125, date: "2019/01/01" },
                { title: "Total Ca", score: 125, date: "2019/01/01" },
                { title: "LDH", score: 125, date: "2019/01/01" }
            ],
            [
                { title: "Iron", score: 125, date: "2019/01/01" },
                { title: "TIBC", score: 125, date: "2019/01/01" },
                { title: "FeSat", score: 125, date: "2019/01/01" },
                { title: "Ferritin", score: 125, date: "2019/01/01" }
            ]
        ]
        return (
            <div style={{ width: "100%", marginBottom: "20px" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px' }}>
                    <div style={{ fontSize: "22px", fontFamily: "PingFangTC-Medium" }}>
                        Lab(常規檢驗)
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gridGap: "10px" }}>
                    <Labviewitem data={data[0]}></Labviewitem>
                    <Labviewitem data={data[1]}></Labviewitem>
                    <Labviewitem data={data[2]}></Labviewitem>
                    <Labviewitem data={data[3]}></Labviewitem>
                </div>
                <div>
                    <Labviewitem data={data[4]}></Labviewitem>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 2fr", gridGap: "10px" }}>
                    <Labviewitem data={data[5]}></Labviewitem>
                    <Labviewitem data={data[6]}></Labviewitem>
                    <Labviewitem data={data[7]}></Labviewitem>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridGap: "10px" }}>
                    <Labviewitem data={data[8]}></Labviewitem>
                    <Labviewitem data={data[9]}></Labviewitem>
                    <Labviewitem data={data[10]}></Labviewitem>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gridGap: "10px" }}>
                    <Labviewitem data={data[11]}></Labviewitem>
                    <Labviewitem data={data[12]}></Labviewitem>
                </div>
            </div>
        );
    }
}

export default Labviewlayout