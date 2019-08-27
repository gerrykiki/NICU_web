import React, { Component } from 'react';

class IOlayout extends Component {
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
        const { IO_data } = this.props
        console.log(IO_data)
        let IOview = IO_data.map(
            (item, index) =>
                <div key={index} style={intercalstyle}>
                    <div style={{ backgroundColor: "rgba(255,249,237,1)", fontSize: "11px", display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}}>{item.item}</div>
                    {item.data.map(
                        (item,index) =>
                        <div key={index} style={{ fontSize: "16px", textAlign: "center", lineHeight: "50px" }}>{item}</div>
                    )}
                </div>
        )
        return (
            <div style={{ width: "100%", marginBottom: "20px" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px' }}>
                    <div style={{ fontSize: "22px", fontFamily: "PingFangTC-Medium" }}>
                        I/O
                    </div>
                </div>
                {IOview}
            </div>
        );
    }
}

export default IOlayout;