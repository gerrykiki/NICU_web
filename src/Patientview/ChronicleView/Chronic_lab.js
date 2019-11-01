import React, { Component } from 'react'
import Chronic_table from './Chronic_table'

class Chronic_lab extends Component {
    render() {
        const { title, userdata } = this.props
        const item_title = [{ title: "生化" }, { title: "血液" }, { title: "培養" }, { title: "GAS" }, { title: "Glu" }, { title: "放射" }, { title: "其他" }]
        return (
            <div style={{marginTop:"15px"}}>
                <div style={{ fontSize: "2rem", lineHeight: "40px", padding: "0px 5px" }}>{title}</div>
                <Chronic_table title={item_title} userdata={userdata} chronic_state={0}></Chronic_table>
            </div>
        );
    }
}

export default Chronic_lab