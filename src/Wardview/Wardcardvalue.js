import React, { Component } from 'react';
import Wardcarstatus from './Wardcardstatus'

class Wardcardvalue extends Component {
    search_item(itemarray, string) {
        console.log(string)
        const filteritem = itemarray.filter(function (item, index, array) {
            return item.item === string;       // 取得大於五歲的
        });
        console.log(filteritem)
        return filteritem[0].data;
    }
    render() {
        const data = this.props.source
        const status_data = data.detaildata
        return (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', paddingTop: "3px", paddingLeft: "10px", paddingRight: "10px", paddingBottom: "3px" }}>
                <div style={{ display: 'grid', gridTemplateColumns: "1fr 2fr", gridColumnsGap: "5px" }}>
                    <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gridRowGap: "5px" }}>
                        <div>
                            <div style={{ fontSize: "1rem", color: "#779F50" }}>HR(/min)</div>
                            <div style={{ fontSize: "1.5rem", color: "#779F50" }}>{this.search_item(data.data.RowData, "HR")}</div>
                        </div>
                        <div>
                            <div style={{ fontSize: "1rem", color: "#4773B8" }}>SpO<sub>2</sub>(%)</div>
                            <div style={{ fontSize: "1.5rem", color: "#4773B8" }}>{this.search_item(data.data.RowData, "SpO2")}</div>
                        </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gridRowGap: "5px" }}>
                        <div>
                            <div style={{ fontSize: "1rem", color: "#C12528" }}>ABP(mmHg)</div>
                            <div style={{ fontSize: "1.5rem", color: "#C12528" }}>{this.search_item(data.data.RowData, "ABP_hight")}/{this.search_item(data.data.RowData, "ABP_low")}({this.search_item(data.data.RowData, "ABP_avg")})</div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridColumnsGap: "5px" }}>
                            <div>
                                <div style={{ fontSize: "1rem", color: "#DE7531" }}>RR(/min)</div>
                                <div style={{ fontSize: "1.5rem", color: "#DE7531" }}>{this.search_item(data.data.RowData, "RR")}%</div>
                            </div>
                            <div>
                                <div style={{ fontSize: "1rem", color: "#7F3DB5" }}>BT(&deg;C)</div>
                                <div style={{ fontSize: "1.5rem", color: "#7F3DB5" }}>{this.search_item(data.data.RowData, "BT")}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Wardcarstatus data={status_data}></Wardcarstatus>
            </div>
        );
    }
}

export default Wardcardvalue