import React, { Component } from 'react';
import IOpage from '../../Module/iopage'

class Chronic_io extends Component {
    render() {
        const { title, userdata } = this.props
        return (
            <div style={{marginTop:"15px"}}>
                <div style={{ fontSize: "2rem", lineHeight: "40px", padding: "0px 5px" }}>{title}</div>
                <IOpage userdata={userdata} iostate={1}></IOpage>
            </div>
        );
    }
}

export default Chronic_io