import React, { Component } from 'react';
import WardlifeChart from './Wardlifechart'
import Wardmonthafter from './Wardmonthafter'


class Wardgrewchart extends Component {
    constructor(props) {
        super(props);
        // 不要在這裡呼叫 this.setState()！
        this.state = {
            test_items_interval: 0
        };
    }
    switch_monthy() {
        const { userinfo } = this.props
        console.log(userinfo)
        const switch_data = this.state.test_items_interval
        switch (switch_data) {
            case 1:
                return <WardlifeChart id_key={"wardlife"} svg_key={"wardlife_svg"} gender={userinfo.Gender}></WardlifeChart>
            case 0:
                return <Wardmonthafter id_key={"wardlife_after"} svg_key={"wardlife_after_svg"} gender={userinfo.Gender}></Wardmonthafter>
            default:
                return null;
        }
    }
    //測驗項目功能_區間按鈕樣式
    SwitchTestItemInterval(testiteminterval) {
        const time_selectbtn_style = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "40px",
            paddingRight: "10px",
            paddingLeft: "10px",
            borderRadius: "16px",
            backgroundColor: "rgba(245,166,35,1)",
            color: "white",
            fontSize: "1rem",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "rgba(245,166,35,1)",
            cursor: "pointer"
        }
        const time_unselectbtn_style = {
            display: "flex", justifyContent: "center",
            alignItems: "center", height: "40px",
            paddingRight: "10px", paddingLeft: "10px",
            borderRadius: "16px", backgroundColor: "white",
            color: "rgba(245,166,35,1)", fontSize: "1rem",
            borderWidth: "1px", borderStyle: "solid",
            borderColor: "rgba(245,166,35,1)",
            cursor: "pointer"
        }
        if (testiteminterval === this.state.test_items_interval) {
            return time_selectbtn_style
        }
        else return time_unselectbtn_style
    }
    //測驗項目功能_區間按鈕選擇
    Onchangetimeinterval(changestate) {
        this.setState(
            {
                test_items_interval: changestate
            }
        )
    }
    render() {
        return (
            <div style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(238, 238, 238, 1)", borderRadius: "4px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center', height: "50px", backgroundColor: "rgba(238, 238, 238, 1)", borderTopLeftRadius: "4px", borderTopRightRadius: "4px", paddingLeft: "15px" }}>
                    <div style={{ fontSize: "1.5rem" }}>生長曲線圖</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridColumnGap: "5px" }}>
                        <div style={this.SwitchTestItemInterval(0)} onMouseUp={() => this.Onchangetimeinterval(0)}>滿足月</div>
                        <div style={this.SwitchTestItemInterval(1)} onMouseUp={() => this.Onchangetimeinterval(1)}>不滿足月</div>
                    </div>
                </div>
                {this.switch_monthy()}
            </div>
        );
    }
}
export default Wardgrewchart