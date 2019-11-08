import React, { Component } from 'react';
import IOpage from '../../Module/iopage'

class Chronic_io extends Component {
    render() {
        function chronicio(number){
            return number + 1
        }
        const { title, userdata,select_interval } = this.props
        return (
            <div style={{marginTop:"15px"}}>
                <div style={{ fontSize: "2rem", lineHeight: "40px", padding: "0px 5px" }}>{title}</div>
                <IOpage userdata={userdata} iostate={chronicio(select_interval)}></IOpage>
            </div>
        );
    }
}

export default Chronic_io