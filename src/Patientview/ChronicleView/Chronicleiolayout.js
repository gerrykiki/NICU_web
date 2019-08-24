import React, { Component } from 'react';

class Chronicleio extends Component {



    render() {
        const IOdata = []
        return (
            <div style={{ width: "100%", marginBottom: "20px" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px' }}>
                    <div style={{ fontSize: "22px", fontFamily: "PingFangTC-Medium" }}>
                        I/O
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "2fr repeat(21,1fr)", height: "50px" }}>
                    <div style={{ backgroundColor: "rgba(255,249,237,1)", fontSize: "16px", textAlign: "center", lineHeight: "50px" }}>IV</div>
                </div>
            </div>
        );
    }
}

export default Chronicleio;