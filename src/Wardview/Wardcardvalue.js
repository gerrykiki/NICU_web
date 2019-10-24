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
                            <div style={{ fontSize: "12px", color: "black" }}>HR</div>
                            <div style={{ fontSize: "18px", color: "black" }}>{this.search_item(data.data.RowData, "HR")}</div>
                        </div>
                        <div>
                            <div style={{ fontSize: "12px", color: "black" }}>SpO2</div>
                            <div style={{ fontSize: "18px", color: "black" }}>{this.search_item(data.data.RowData, "SpO2")}</div>
                        </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gridRowGap: "5px" }}>
                        <div>
                            <div style={{ fontSize: "12px", color: "black" }}>ABP</div>
                            <div style={{ fontSize: "18px", color: "black" }}>{this.search_item(data.data.RowData, "ABP_hight")}/{this.search_item(data.data.RowData, "ABP_low")}({this.search_item(data.data.RowData, "ABP_avg")})</div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridColumnsGap: "5px" }}>
                            <div>
                                <div style={{ fontSize: "12px", color: "black" }}>RR</div>
                                <div style={{ fontSize: "18px", color: "black" }}>{this.search_item(data.data.RowData, "RR")}%</div>
                            </div>
                            <div>
                                <div style={{ fontSize: "12px", color: "black" }}>BT</div>
                                <div style={{ fontSize: "18px", color: "black" }}>{this.search_item(data.data.RowData, "BT")}</div>
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