import React, { Component } from 'react';

class Flootsheetio extends Component {
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

    IO_table(item) {
        const data = item.data.map((info, index) => <div key={index} style={{ fontSize: "1rem", display: "flex", justifyContent: "center", alignItems: "center" }}>{info}</div>)
        return (
            <div style={{ display: "grid", gridTemplateColumns: "140px repeat(24,1fr)", height: "40px" }}>
                <div style={{ fontSize: "1rem", background: "rgba(238,238,238,1)" }}>{item.item}</div>
                {data}
            </div>
        );
    }


    render() {
        const { IO_data } = this.props
        const flootsheetio_table = IO_data.map((info, index) => <div key={index}>{this.IO_table(info)}</div>)
        return (
            <div style={{ marginBottom: "20px"}}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px' }}>
                    <div style={{ fontSize: "2rem" }}>I/O</div>
                </div>
                {flootsheetio_table}
            </div>
        );
    }
}

export default Flootsheetio;