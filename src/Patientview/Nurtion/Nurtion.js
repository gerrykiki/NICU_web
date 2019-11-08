import React, { Component } from 'react'
import Nurtionfeedingorder from './Nurtionfeeding'
import { Select, Button, DatePicker, Modal } from 'antd';
import WardlifeChart from '../../Wardview/Wardlifechart'
import Wardmonthafter from '../../Wardview/Wardmonthafter'
import Nurtiontpnorder from './Nurtion_TPN'

class Nurtionview extends Component {
    constructor(props) {
        super(props);
        // 不要在這裡呼叫 this.setState()！
        this.state = {
            test_items_interval: 0,
            visible: false
        };
    }
    switch_monthy() {
        const { userdata } = this.props
        const switch_data = this.state.test_items_interval
        console.log(userdata)
        switch (switch_data) {
            case 1:
                return <WardlifeChart id_key={"wardlife"} svg_key={"wardlife_svg"} gender={userdata.Gender}></WardlifeChart>
            case 0:
                return <Wardmonthafter id_key={"wardlife_after"} svg_key={"wardlife_after_svg"} gender={userdata.Gender}></Wardmonthafter>
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
    handleChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
        this.setState(
            {
                test_items_interval: checkedValues
            }
        )

    }
    onOk = (value) => {
        console.log('onOk: ', value);
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    render() {
        const { Option } = Select;

        return (
            <div>
                <div style={{ display: "grid", gridTemplateColumns: '1fr 1fr', marginBottom: "20px", gridColumnGap: "10px" }}>
                    <div style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(238, 238, 238, 1)", borderRadius: "4px" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center', height: "50px", backgroundColor: "rgba(238, 238, 238, 1)", borderTopLeftRadius: "4px", borderTopRightRadius: "4px", paddingLeft: "15px", paddingRight: "15px" }}>
                            <div style={{ fontSize: "1.5rem" }}>生長曲線圖</div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridColumnGap: "5px" }}>
                                <Select defaultValue={this.state.test_items_interval} style={{ width: 120 }} onChange={this.handleChange}>
                                    <Option value={0}>滿足月</Option>
                                    <Option value={1}>不滿足月</Option>
                                </Select>
                                <Button type="primary" onClick={this.showModal}>手動新增</Button>
                                <Modal
                                    title="手動新增體重紀錄"
                                    visible={this.state.visible}
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}
                                >
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <div style={{ display: "flex", alignItems: "center" }}>選擇時間:</div>
                                        <DatePicker id="nurtion_datepicker" style={{ width: "400px" }} showTime placeholder="選擇時間" onOk={this.onOk} />
                                    </div>
                                </Modal>
                                {/* <div style={this.SwitchTestItemInterval(0)} onMouseUp={() => this.Onchangetimeinterval(0)}>滿足月</div>
                            <div style={this.SwitchTestItemInterval(1)} onMouseUp={() => this.Onchangetimeinterval(1)}>不滿足月</div> */}
                            </div>
                        </div>
                        {this.switch_monthy()}
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: '1fr 1fr', gridColumnGap: "10px",marginBottom:"20px" }}>
                    <Nurtionfeedingorder></Nurtionfeedingorder>
                    <Nurtiontpnorder></Nurtiontpnorder>
                </div>
            </div>
        );
    }
}

export default Nurtionview