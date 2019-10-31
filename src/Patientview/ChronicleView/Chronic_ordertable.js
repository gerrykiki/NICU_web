import React, { Component } from 'react'

class Chronicordertable extends Component {
    // 0:一天 1:三天 2:一週 3:兩週
    switch_state() {
        const { chronic_state } = this.props
        switch (chronic_state) {
            case 0:
                return 24
            case 1:
                return 21
            case 2:
                return 21
            case 3:
                return 14
            default:
                break;
        }
    }
    switch_state_title() {
        return "140px"
    }
    table_content() {
        const { title } = this.props
        const io_style = {
            title_style: { fontSize: "1.8rem", display: "flex", justifyContent: "center", alignItems: 'center' },
            row_title_style: { display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.3rem", height: "40px", border: "rgba(238,238,238,1) 1px solid", borderLeftWidth: "0px" },
            row_item_title_style: { display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.3rem", height: "40px", border: "rgba(238,238,238,1) 1px solid" }
        }
        var table_item = []
        for (let index = 0; index < this.switch_state(); index++) {
            const title_list = title.map((info, index) => <div key={index} style={io_style.row_item_title_style}>{info.title}</div>)
            const title_cell =
                <div style={{ display: "grid", gridTemplateRows: "repeat(" + title.length + ",1fr)" }}>
                    {title_list}
                </div>
            table_item.push(title_cell)
        }
        return table_item
    }
    render() {
        const { userdata, title } = this.props
        const io_style = {
            title_style: { fontSize: "1.8rem", display: "flex", justifyContent: "center", alignItems: 'center' },
            row_title_style: { display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.3rem", height: "40px", border: "rgba(238,238,238,1) 1px solid", borderLeftWidth: "0px" },
            row_item_title_style: { display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.3rem", height: "40px", border: "rgba(238,238,238,1) 1px solid", background: "rgba(238,238,238,1)" }
        }
        const title_list = title.map((info, index) => <div key={index} style={io_style.row_item_title_style}>{info.title}</div>)
        return (
            <div style={{ display: "grid", gridTemplateColumns: "140px 1fr" ,height:"240px"}}>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"2rem"}}>Order</div>
                <div>123</div>
            </div>
        );
    }
}

export default Chronicordertable