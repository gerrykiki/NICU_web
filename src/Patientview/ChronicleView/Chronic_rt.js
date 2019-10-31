import React, { Component } from 'react'
import Chronic_table from './Chronic_table'

class Chronic_rt extends Component {
    render() {
        const { title, userdata } = this.props
        const item_title = [{ title: "RT" }]
        return (
            <div style={{marginTop:"15px"}}>
                <Chronic_table title={item_title} userdata={userdata} chronic_state={0}></Chronic_table>
            </div>
        );
    }
}

export default Chronic_rt