import React, { Component } from 'react';
import Wardlabviewitem from './Wardlabviewitem'
import { labdata } from '../jsonResponse'

class Wardlabview extends Component {
    render() {
        const data = labdata
        return (
            <div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gridGap: "10px" }}>
                    <Wardlabviewitem data={data[0]}></Wardlabviewitem>
                    <Wardlabviewitem data={data[1]}></Wardlabviewitem>
                    <Wardlabviewitem data={data[2]}></Wardlabviewitem>
                    <Wardlabviewitem data={data[3]}></Wardlabviewitem>
                </div>
                <div>
                    <Wardlabviewitem data={data[4]}></Wardlabviewitem>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 2fr", gridGap: "10px" }}>
                    <Wardlabviewitem data={data[5]}></Wardlabviewitem>
                    <Wardlabviewitem data={data[6]}></Wardlabviewitem>
                    <Wardlabviewitem data={data[7]}></Wardlabviewitem>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridGap: "10px" }}>
                    <Wardlabviewitem data={data[8]}></Wardlabviewitem>
                    <Wardlabviewitem data={data[9]}></Wardlabviewitem>
                    <Wardlabviewitem data={data[10]}></Wardlabviewitem>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gridGap: "10px" }}>
                    <Wardlabviewitem data={data[11]}></Wardlabviewitem>
                    <Wardlabviewitem data={data[12]}></Wardlabviewitem>
                </div>
            </div>
        );
    }
}

export default Wardlabview