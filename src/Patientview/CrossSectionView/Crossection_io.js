import React, { Component } from 'react';
import IOpage from '../../Module/iopage'

class Crossection_io extends Component {
    render() {
        const { userdata, title } = this.props
        const io_style = {
            title_style: { fontSize: "1.8rem", display: "flex", justifyContent: "center", alignItems: 'center' },
            row_title_style: { display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.5rem" }
        }
        return (
            //510
            <div>
                <div style={{ fontSize: "2rem", lineHeight: "40px", backgroundColor: "rgba(238, 238, 238, 1)", padding:"0px 5px" }}>{title}</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr" }}>
                    <div></div>
                    <div style={io_style.row_title_style}>白班</div>
                    <div style={io_style.row_title_style}>小夜</div>
                    <div style={io_style.row_title_style}>大夜</div>
                    <div style={io_style.row_title_style}>全日</div>
                </div>
                <IOpage userdata={userdata} iostate={0}></IOpage>
            </div>
        );
    }
}

export default Crossection_io