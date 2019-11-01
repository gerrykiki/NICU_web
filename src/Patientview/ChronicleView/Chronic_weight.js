import React, { Component } from 'react'
import Chronicweighttable from './Chronic_weighttable'

class Chronic_weight extends Component {
    render() {
        const { title, userdata } = this.props
        const item_title = [{ title: "體重" }]
        return (
            <div style={{marginTop:"15px"}}>
                <div style={{ fontSize: "2rem", lineHeight: "40px", padding: "0px 5px" }}>{title}</div>
                <Chronicweighttable title={item_title} userdata={userdata} chronic_state={0}></Chronicweighttable>
            </div>
        );
    }
}

export default Chronic_weight