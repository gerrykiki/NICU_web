import React, { Component } from 'react';

class Chronicleio extends Component {
    state = {
        itemNumber: "day"
    }

    switchitemNumber() {
        switch (this.state.itemNumber) {
            case "day":
                return "2fr repeat(24,1fr)"
            case "threeday":
                return "2fr repeat(21,1fr)"
            case "week":
                return "2fr repeat(21,1fr)"
            default:
                return "2fr repeat(14,1fr)"
        }
    }
    render() {
        const intercalstyle = {
            display: "grid",
            gridTemplateColumns: this.switchitemNumber(),
            height: "50px"
        }
        const ivsource = []
        for (let index = 0; index < 24; index++) {
            const element = Math.floor(Math.random() * 100)
            ivsource.push(element)
        }
        
        let IVdata = ivsource.map(
            (item, index) =>
                <div key={index} style={{fontSize:"16px",textAlign:"center",lineHeight:"50px"}}>{item}</div>
        )
        return (
            <div style={{ width: "100%", marginBottom: "20px" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px' }}>
                    <div style={{ fontSize: "22px", fontFamily: "PingFangTC-Medium" }}>
                        I/O
                    </div>
                </div>
                <div style={intercalstyle}>
                    <div style={{ backgroundColor: "rgba(255,249,237,1)", fontSize: "16px", textAlign: "center", lineHeight: "50px" }}>IV</div>
                    {IVdata}
                </div>
                <div style={intercalstyle}>
                    <div style={{ backgroundColor: "rgba(255,249,237,1)", fontSize: "16px", textAlign: "center", lineHeight: "50px" }}>Feed</div>
                    {IVdata}
                </div>
                <div style={intercalstyle}>
                    <div style={{ backgroundColor: "rgba(255,249,237,1)", fontSize: "16px", textAlign: "center", lineHeight: "50px" }}>Other</div>
                    {IVdata}
                </div>
                <div style={intercalstyle}>
                    <div style={{ backgroundColor: "rgba(255,249,237,1)", fontSize: "16px", textAlign: "center", lineHeight: "50px" }}>Input</div>
                    {IVdata}
                </div>
                <div style={intercalstyle}>
                    <div style={{ backgroundColor: "rgba(255,249,237,1)", fontSize: "16px", textAlign: "center", lineHeight: "50px" }}>Urine</div>
                    {IVdata}
                </div>
                <div style={intercalstyle}>
                    <div style={{ backgroundColor: "rgba(255,249,237,1)", fontSize: "16px", textAlign: "center", lineHeight: "50px" }}>Output</div>
                    {IVdata}
                </div>
            </div>
        );
    }
}

export default Chronicleio;