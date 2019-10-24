import React, { Component } from 'react';
import {format_bednumber} from '../Commonfunction'

class Unpreviewwardcard extends Component {
    render() {
        const number = this.props.bedbumber + 1
        return (
            <div style={{ width: "99%", marginBottom: "10px", borderRadius: "4px", borderWidth: "2px", borderStyle: "solid", borderColor: "rgba(215, 238, 255, 1)", position: 'relative' }}>
                <div style={{ height: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "rgba(215, 238, 255, 1)", padding: "10px" }}>
                    <div style={{ fontSize: '18px', color: "rgba(61, 119, 181, 1)" }}>
                        {format_bednumber(number)}/ --
                    </div>
                </div>
                <div style={{ height: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "10px", borderBottomWidth: "0.5px", borderBottomColor: "rgba(215, 238, 255, 1)", borderBottomStyle: "solid" }}>
                    <div style={{ fontSize: '14px' }}>無資料</div>
                </div>
                <div style={{ height: '30px', display: 'flex', alignItems: 'center', padding: "10px" }}></div>
            </div>
        );
    }
}

export default Unpreviewwardcard;