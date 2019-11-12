import React, { Component } from 'react';
import Wardlabviewitem from './Wardlabviewitem'
import { labdata } from '../jsonResponse'

class Wardlabview extends Component {
    render() {
        const labdata = {
            "data": [
                {
                    "item": "Glucose",
                    "time": 1566287810473,
                    "value": 25
                },
                {
                    "item": "WBC",
                    "time": 1566287810473,
                    "value": 19647
                },
                {
                    "item": "Seg",
                    "time": 1566287810473,
                    "value": 19647
                },
                {
                    "item": "Lymp",
                    "time": 1566287810473,
                    "value": 19647
                },
                {
                    "item": "Hgb",
                    "time": 1566287810473,
                    "value": 15
                },
                {
                    "item": "Platelet",
                    "time": 1566287810473,
                    "value": 500000
                },
                {
                    "item": "Na+",
                    "time": 1566287810473,
                    "value": 19647
                },
                {
                    "item": "K+",
                    "time": 1566287810473,
                    "value": 19647
                },
                {
                    "item": "Ca2+",
                    "time": 1566287810473,
                    "value": 19647
                },
                {
                    "item": "P",
                    "time": 1566287810473,
                    "value": 19647
                },
                {
                    "item": "Mg2+",
                    "time": 1566287810473,
                    "value": 19647
                },
                {
                    "item": "Alb",
                    "time": 1566287810473,
                    "value": 19647
                },
                {
                    "item": "CRP",
                    "time": 1566287810473,
                    "value": 19647
                },
                {
                    "item": "Procalcitionin",
                    "time": 1566287810473,
                    "value": 19647
                },
                {
                    "item": "pH",
                    "time": 1566287810473,
                    "value": 19647
                },
                {
                    "item": "PCO2",
                    "time": 1566287810473,
                    "value": 19647
                },
                {
                    "item": "BE",
                    "time": 1566287810473,
                    "value": 19647
                },
                {
                    "item": "PO2",
                    "time": 1566287810473,
                    "value": 19647
                },
                {
                    "item": "BUN",
                    "time": 1566287810473,
                    "value": 19647
                },
                {
                    "item": "Cr",
                    "time": 1566287810473,
                    "value": 19647
                },
                {
                    "item": "ALT",
                    "time": 1566287810473,
                    "value": 19647
                },
                {
                    "item": "AST",
                    "time": 1566287810473,
                    "value": 19647
                },
                {
                    "item": "TBil",
                    "time": 1566287810473,
                    "value": 19647
                },
                {
                    "item": "DBil",
                    "time": 1566287810473,
                    "value": 19647
                },
                {
                    "item": "ALKP",
                    "time": 1566287810473,
                    "value": 19647
                },
                {
                    "item": "Total Ca",
                    "time": 1566287810473,
                    "value": 19647
                },
                {
                    "item": "Iron",
                    "time": 1566287810473,
                    "value": 19647
                },
                {
                    "item": "TIBC",
                    "time": 1566287810473,
                    "value": 19647
                },
                {
                    "item": "FeSat",
                    "time": 1566287810473,
                    "value": 19647
                },
                {
                    "item": "Ferritin",
                    "time": 1566287810473,
                    "value": 19647
                }
            ]
        }
        return (
            <div style={{ border: "black 2px solid" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 5fr", height: "80px" }}>
                    <div style={{ border: "black 2px solid" }}>
                        <Wardlabviewitem title="Glucose" data={labdata.data}></Wardlabviewitem>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", border: "black 2px solid" }}>
                        <Wardlabviewitem title="WBC" data={labdata.data}></Wardlabviewitem>
                        <Wardlabviewitem title="Seg" data={labdata.data}></Wardlabviewitem>
                        <Wardlabviewitem title="Lymp" data={labdata.data}></Wardlabviewitem>
                        <Wardlabviewitem title="Hgb" data={labdata.data}></Wardlabviewitem>
                        <Wardlabviewitem title="Platelet" data={labdata.data}></Wardlabviewitem>
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "5fr 1fr", height: "80px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", border: "black 2px solid" }}>
                        <Wardlabviewitem title="Na+" data={labdata.data}></Wardlabviewitem>
                        <Wardlabviewitem title="K+" data={labdata.data}></Wardlabviewitem>
                        <Wardlabviewitem title="Ca2+" data={labdata.data}></Wardlabviewitem>
                        <Wardlabviewitem title="P" data={labdata.data}></Wardlabviewitem>
                        <Wardlabviewitem title="Mg2+" data={labdata.data}></Wardlabviewitem>
                    </div>
                    <div style={{ border: "black 2px solid" }}>
                        <Wardlabviewitem title="Alb" data={labdata.data}></Wardlabviewitem>
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 4fr", height: "80px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", border: "black 2px solid" }}>
                        <Wardlabviewitem title="CRP" data={labdata.data}></Wardlabviewitem>
                        <Wardlabviewitem title="Procalcitionin" data={labdata.data}></Wardlabviewitem>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", border: "black 2px solid" }}>
                        <Wardlabviewitem title="pH" data={labdata.data}></Wardlabviewitem>
                        <Wardlabviewitem title="PCO2" data={labdata.data}></Wardlabviewitem>
                        <Wardlabviewitem title="BE" data={labdata.data}></Wardlabviewitem>
                        <Wardlabviewitem title="PO2" data={labdata.data}></Wardlabviewitem>
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 2fr 2fr", height: "80px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", border: "black 2px solid" }}>
                        <Wardlabviewitem title="BUN" data={labdata.data}></Wardlabviewitem>
                        <Wardlabviewitem title="Cr" data={labdata.data}></Wardlabviewitem>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", border: "black 2px solid" }}>
                        <Wardlabviewitem title="ALT" data={labdata.data}></Wardlabviewitem>
                        <Wardlabviewitem title="AST" data={labdata.data}></Wardlabviewitem>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", border: "black 2px solid" }}>
                        <Wardlabviewitem title="TBil" data={labdata.data}></Wardlabviewitem>
                        <Wardlabviewitem title="DBil" data={labdata.data}></Wardlabviewitem>
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 4fr", height: "80px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", border: "black 2px solid" }}>
                        <Wardlabviewitem title="ALKP" data={labdata.data}></Wardlabviewitem>
                        <Wardlabviewitem title="Total Ca" data={labdata.data}></Wardlabviewitem>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", border: "black 2px solid" }}>
                        <Wardlabviewitem title="Iron" data={labdata.data}></Wardlabviewitem>
                        <Wardlabviewitem title="TIBC" data={labdata.data}></Wardlabviewitem>
                        <Wardlabviewitem title="FeSat" data={labdata.data}></Wardlabviewitem>
                        <Wardlabviewitem title="Ferritin" data={labdata.data}></Wardlabviewitem>
                    </div>
                </div>
            </div>
        );
    }
}

export default Wardlabview