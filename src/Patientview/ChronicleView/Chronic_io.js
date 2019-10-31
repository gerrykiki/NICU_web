import React, { Component } from 'react';
import IOpage from '../../Module/iopage'

class Chronic_io extends Component {
    render() {
        const { title, userdata } = this.props
        return (
            <div>
                <div style={{ fontSize: "2rem", lineHeight: "40px", backgroundColor: "rgba(238, 238, 238, 1)", padding: "0px 5px" }}>{title}</div>
                <IOpage userdata={userdata} iostate={1}></IOpage>
            </div>
        );
    }
}

export default Chronic_io