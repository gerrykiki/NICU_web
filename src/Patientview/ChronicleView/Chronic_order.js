import React, { Component } from 'react'
import Chronic_table from './Chronic_table'

class Chronic_order extends Component {
    render() {
        const {  userdata } = this.props
        const item_title = [{ title: "order" }]
        return (
            <div style={{marginTop:"15px"}}>
                <Chronic_table title={item_title} userdata={userdata} chronic_state={0}></Chronic_table>
            </div>
        );
    }
}

export default Chronic_order