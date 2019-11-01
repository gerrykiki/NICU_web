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
        const tablewidth = (window.screen.width * 0.9 - 50) / 46
        const tabletitlewidth = window.screen.width - 48 - window.screen.width * 0.9 + 50 -tablewidth
        const intercalstyle = {
            display: "flex",
            width: '100%',
            height: "50px",
            alignItems:'center'
        }
        const { IO_data } = this.props
        console.log(IO_data)
        let IOview = IO_data.map(
            (item, index) =>
                <div key={index} style={intercalstyle}>
                    <div style={{ backgroundColor: "rgba(255,249,237,1)", fontSize: "11px", display:"flex",justifyContent:"center",alignItems:"center",width:tabletitlewidth,height:'50px'}}>{item.item}</div>
                    {item.data.map(
                        (item,index) =>
                        <div key={index} style={{ fontSize: "16px", textAlign: "center", lineHeight: "50px",width:tablewidth * 2 }}>{item}</div>
                    )}
                </div>
        )
        return (
            <div style={{ marginBottom: "20px" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px' }}>
                    <div style={{ fontSize: "2rem"}}>
                        I/O
                    </div>
                </div>
                {IOview}
            </div>
        );
    }
}

export default IOlayout;