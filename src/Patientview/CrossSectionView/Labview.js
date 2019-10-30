import React, { Component } from 'react';
import Labviewitem from './Labviewitem'
import { labdata } from '../../jsonResponse'

class Labviewlayout extends Component {
    render() {
        const data = labdata
        return (
            <div style={{ marginBottom: "20px" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px', paddingLeft: "5px", paddingRight: "5px", background: "rgba(238,238,238,1)" }}>
                    <div style={{ fontSize: "2rem" }}>
                        檢驗報告
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