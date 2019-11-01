import React, { Component } from 'react';
import { Select } from 'antd';


class Labview extends Component {
    state = {
        Datelist: [],
        selectstate: 0
    }

    changedate(list) {
        console.log(list)
        this.setState(
            {
                Datelist: list
            }
        )
    }
    title_list(listarray) {
        console.log(listarray)
        const list = listarray.map((info, index) =>
            <div key={index} style={{ height: "50px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.3rem", textoverflow: "ellipsis", width: "100%", backgroundColor: "rgba(238,238,238,1)" }}>{info}</div>
        )
        return list;
    }
    handleChange = (value) => {
        console.log(`selected ${value}`);
        this.setState(
            {
                selectstate: value
            }
        )
    }
    render() {
        const titlestyle = { height: "50px", backgroundColor: "rgba(238,238,238,1)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.3rem" }
        const { Option } = Select;
        const lab_item_list = [
            { item: "CBC檢驗:WBC、Hb、Hct、PLT" },
            { item: "電解質與腎功能檢驗:Na、K、Ca(Free)、Ca(Total)、Mg、P、BUN、Cr" },
            { item: "肝功能檢驗:AST、ALT、rGGT、Alkp、Alb" },
            { item: "心臟功能檢驗:ck、ck-MB、BNP、Troponin I" },
            { item: "凝血功能檢驗:PT、APTT、INR" },
            { item: "GAS檢驗:PH、pCO2、pO2、HCO3、BE、Sample、O2Sat、Hb、Hct、Na、K、Ca(Free)、Bun、Cr" },
            { item: "Glucose檢驗:Glu (BedSide)、Glu(Lab)" },
        ]

        const row_title = [
            { item: 0, title: ["WBC", "Hb", "Hct", "PLT"] },
            { item: 1, title: ["Na", "K", "Ca(Free)", "Ca(Total)", "Mg", "P", "BUN", "Cr"] },
            { item: 2, title: ["AST", "ALT", "rGGT", "Alkp", "Alb"] },
            { item: 3, title: ["ck", "ck-MB", "BNP", "Troponin I"] },
            { item: 4, title: ["PT", "APTT", "INR"] },
            { item: 5, title: ["PH", "pCO2", "pO2", "HCO3", "BE", "Sample", "O2Sat", "Hb", "Hct", "Na", "K", "Ca(Free)", "Bun", "Cr"] },
            { item: 6, title: ["Glu(BedSide)", "Glu(Lab)"] }
        ]
        const select_list = lab_item_list.map((info, index) =>
            <Option key={index} value={index}>{info.item}</Option>
        )

        return (
            <div>
                <div style={{ fontSize: "2rem" }}>累積報告</div>
                <div style={{ display: "grid", gridTemplateColumns: "20% 80%" }}>
                    <div style={{ fontSize: "1.5rem", display: "flex", justifyContent: "center", alignItems: "center" }}>檢驗類別</div>
                    <div style={{ padding: "2px 10px" }}>
                        <Select defaultValue={0} style={{ width: "80%" }} onChange={this.handleChange}>
                            {select_list}
                        </Select>
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "20% 80%"}}>
                    <div>
                        <div style={titlestyle}>檢驗項目</div>
                    </div>
                    <div style={{ maxWidth: "100%", overflowX: "auto" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(" + row_title[this.state.selectstate].title.length + ",100px)" }}>
                            {this.title_list(row_title[this.state.selectstate].title)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Labview;