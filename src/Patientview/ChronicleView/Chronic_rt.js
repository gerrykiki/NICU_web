import React, { Component } from 'react'
import Chronicrttable from './Chronic_rttable'

class Chronic_rt extends Component {
    render() {
        const { title, userdata } = this.props
        const item_title = [{ title: "RT" }]
        return (
            <div style={{marginTop:"15px"}}>
                <Chronicrttable title={item_title} userdata={userdata} chronic_state={0}></Chronicrttable>
            </div>
        );
    }
}

export default Chronic_rt