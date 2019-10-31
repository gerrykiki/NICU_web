import React, { Component } from 'react'
import Chronicordertable from './Chronic_ordertable'

class Chronic_order extends Component {
    render() {
        const {  userdata } = this.props
        const item_title = [{ title: "order" }]
        return (
            <div style={{marginTop:"15px"}}>
                <Chronicordertable title={item_title} userdata={userdata} chronic_state={0}></Chronicordertable>
            </div>
        );
    }
}

export default Chronic_order