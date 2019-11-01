import React, { Component } from 'react'

class Rttable extends Component {



    TableStyle(gridstate) {
        const gas_title_style = {
            title: { display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" },
            title_context: { display: "grid", gridTemplateColumns: "repeat(8,1fr)" },
            context_1: { display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", border: "rgba(238,238,238,1)" },
            context_2: { display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", border: "rgba(238,238,238,1)", borderLeftWidth: "0px" }
        }
        const gas_table_title = [{ title: "PH" }, { title: "PCO2" }, { title: "PO2" }, { title: "HCO3" }, { title: "BE" }, { title: "O2" }, { title: "TCO2" }, { title: "SaCO2" }]
        const gas_table_cell = gas_table_title.map((info, index) => <div key={index} style={gas_title_style.title}>{info.title}</div>)
        const gas = (
            <div style={{ marginTop: "10px" }}>
                <div style={{ backgroundColor: "rgba(238, 238, 238, 1)", display: 'grid', gridTemplateColumns: "2fr 8fr", height: '50px' }}>
                    <div style={gas_title_style.title}>記錄日期</div>
                    <div style={gas_title_style.title_context}>{gas_table_cell}</div>
                </div>
                <div style={{ maxHeight: "60vh", overflow: "auto" }}>
                    {/* 內容 */}
                </div>
            </div>
        )

        const Breath_title_style = {
            title_1: { display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" },
            title_2: { display: "flex", alignItems: "center", fontSize: "1.5rem", padding: "0px 10px" },
            context_layout: { display: 'grid', gridTemplateColumns: "1fr 2fr 4fr", height: '50px' },
            context_1: { display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1rem", border: "rgba(238,238,238,1) 1px solid", padding: "0px 10px" },
            context_2: { display: "flex", alignItems: "center", fontSize: "1rem", border: "rgba(238,238,238,1) 1px solid", borderLeftWidth: "0px", padding: "0px 10px" }
        }
        const Breath = (
            <div style={{ marginTop: "10px" }}>
                <div style={{ backgroundColor: "rgba(238,238,238,1)", display: 'grid', gridTemplateColumns: "1fr 2fr 4fr", height: '50px' }}>
                    <div style={Breath_title_style.title_1}>時間</div>
                    <div style={Breath_title_style.title_2}>Mode</div>
                    <div style={Breath_title_style.title_2}>Setting</div>
                </div>
                <div style={{ maxHeight: "60vh", overflowY: "auto" }}>
                    {/* 內容 */}
                    <div style={Breath_title_style.context_layout}>
                        <div style={Breath_title_style.context_1}>時間</div>
                        <div style={Breath_title_style.context_2}>Mode</div>
                        <div style={Breath_title_style.context_2}>Setting</div>
                    </div>
                    <div style={Breath_title_style.context_layout}>
                        <div style={Breath_title_style.context_1}>時間</div>
                        <div style={Breath_title_style.context_2}>Mode</div>
                        <div style={Breath_title_style.context_2}>Setting</div>
                    </div>
                    <div style={Breath_title_style.context_layout}>
                        <div style={Breath_title_style.context_1}>時間</div>
                        <div style={Breath_title_style.context_2}>Mode</div>
                        <div style={Breath_title_style.context_2}>Setting</div>
                    </div>
                </div>
            </div>
        )
        switch (gridstate) {
            case "Gas":
                return gas
            case "Breath":
                return Breath
            default:
                return null
        }
    }
    render() {
        const { gridcount } = this.props
        const table = this.TableStyle(gridcount)
        return table
    }
}

export default Rttable;