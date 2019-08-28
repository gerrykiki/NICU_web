import React, { Component } from 'react'
import Nurtionorder from './Nurtionorder'

class Nurtionview extends Component {
    render() {
        return (
            <div style={{ display: "grid", gridTemplateColumns: '1fr 1fr', marginBottom: "20px", gridColumnGap: "10px" }}>
                <Nurtionorder Title={"Feeding Order"}></Nurtionorder>
                <Nurtionorder Title={"TPN Order"}></Nurtionorder>
            </div>
        );
    }
}

export default Nurtionview