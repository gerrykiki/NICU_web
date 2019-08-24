import React, { Component } from 'react';


class Chronicleorder extends Component {
    render() {
        return (
            <div style={{ display: "grid", gridTemplateColumns: "2fr repeat(21,1fr)", height: "100px" }}>
                <div style={{ fontSize: "20px", lineHeight: "100px", textAlign: "center" }}>Order</div>
            </div>
        );
    }

}

export default Chronicleorder;