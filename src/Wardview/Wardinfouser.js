import React, { Component } from 'react';
import WardChart from './Wardchart'
import Wardinfousercheckbox from './Wardunfousercheckbox'
import Wardlabview from './Wardlab'
import { Modal, Select } from 'antd';
import Wardgrewchart from './Wardgrewchart'

class Wardinfouser extends Component {
    state = {
        alertstate: "none",
        Data_change: true,
        visible: false,
        source:false
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
    datarelease() {
        var dataset = []; //建立空的資料陣列
        /*
        Data format = {
            Data:data_source
            Max:max
            Min:min
        }
         */
        for (let i = 0; i < 24; i++) {
            const data = 50;
            let min = 30;
            let max = 60;
            if (i > 18) {
                min = 50;
                max = 80;
            }
            dataset.push({
                Data: data,
                Min: min,
                Max: max
            })
        }
        return dataset;
    }

    Genderstring(gender) {
        switch (gender) {
            case "Male":
                return "男"
            case "FeMale":
                return "女"
            default:
                return null
        }
    }
    detailinformationswitchstyle(item) {
        //console.log(item);
        switch (item) {
            case "Depends":
                return "rgba(232,152,162,1)"
            case "TPN":
                return "rgba(195,153,115,1)"
            case "NPO":
                return "rgba(61, 119, 181, 1)"
            case "HD":
                return "rgba(241, 204, 115, 1)"
            case "Anti":
                return "rgba(155, 202, 100, 1)"
            case "Foley":
                return "rgba(65, 165, 181, 1)"
            case "Drain":
                return "rgba(25,26,144,1)"
            default:
                return null
        }
    }
    detailinformationswitch(item) {
        //console.log(item);
        switch (item) {
            case "Depends":
                return "入侵式呼吸器"
            case "TPN":
                return "TPN"
            case "NPO":
                return "NPO"
            case "HD":
                return "HD"
            case "Anti":
                return "Anti-B"
            case "Foley":
                return "Foley"
            case "Drain":
                return "Drain"
            default:
                return item
        }
    }

    Medgroupclick() {
        this.setState(
            {
                alertstate: "block"
            }
        )
    }


    CancelMedgroupclick() {
        this.setState(
            {
                alertstate: "none"
            }
        )
    }

    Datachange() {
        this.setState(
            {
                Data_change: !this.state.Data_change
            }
        )
    }

    Switchitem(item) {
        switch (item.item) {
            case "HR":
                return item.data
            case "BP":
                return item.data
            case "SpO2":
                return item.data
            case "BT":
                return item.data
            case "RR":
                return item.data
            default:
                return null
        }
    }

    sendData = (idnumber) => {
        this.props.parentCallback(idnumber);
    }



    Birthday_format(bir) {
        function Monthformat(month) {
            return month + 1
        }
        const bir_time = new Date(bir).getFullYear() + "-" + Monthformat(new Date(bir).getMonth()) + '-' + new Date(bir).getDate()
        return bir_time
    }
    sourcehandleChange = (value) => {
        // console.log(`selected ${value}`);
        switch (value) {
            case 0:
                this.switch_source(false)
                break;
            case 1:
                this.switch_source(true)
                break;
            default:
                break;
        }

    }
    switch_source(bool) {
        this.setState(
            {
                source: bool
            }
        )
    }
    render() {

        const userinfo = this.props.data
        const { Option } = Select;
        // console.log(userinfo)
        let detaillist = userinfo.detaildata.map(
            (info, index) =>
                <div key={index} style={info.data ?
                    { lineHeight: "24px", paddingRight: "5px", paddingLeft: "5px", fontSize: "10px", textAlign: "center", borderRadius: "4px", color: "rgba(255, 255, 255, 1)", marginRight: "10px", height: "24px", backgroundColor: this.detailinformationswitchstyle(info.item) } :
                    { lineHeight: "24px", paddingRight: "5px", paddingLeft: "5px", fontSize: "10px", textAlign: "center", borderRadius: "4px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(187,187,187,1)", color: "rgba(187, 187, 187, 1)", marginRight: "10px", height: "24px" }}>
                    {this.detailinformationswitch(info.item)}
                </div>
        )

        return (
            <div style={{ borderColor: "rgba(232, 232, 232, 1)", borderWidth: "1px", borderStyle: "solid", borderRadius: "4px" }}>
                <div style={{ height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: "10px", paddingRight: "10px" }}>
                    <div style={{ width: "200px" }}>
                        <div style={{ cursor: "pointer", color: "blue" }} onClick={() => this.sendData(null)}>&larr;返回病房資訊總覽</div>
                    </div>
                    <div style={{ fontSize: "2rem", textAlign: "center" }}>個案資訊摘要</div>
                    <div style={{ width: "200px", textAlign: "end" }}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: "16px", paddingRight: "16px" }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', height: "70px", width: "100%" }}>
                        <div style={{ display: "flex" }}>
                            <div style={{ height: '20px', lineHeight: "40px", fontSize: "1.5rem" }}>病床</div>
                            <div style={{ fontSize: '3rem', marginLeft: "5px", height: "70px" }}>{userinfo.Bednumber}</div>
                            <div style={{ marginLeft: "5px" }}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <div style={{ fontSize: "1.5rem" }}>{userinfo.Name}</div>
                                    <div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>{this.Genderstring(userinfo.Gender)}</div>
                                    <div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>{this.Birthday_format(userinfo.Birthday)}</div>
                                    <div style={{ fontSize: "1.5rem", marginLeft: "10px" }}>病歷號:{userinfo.id}</div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <span style={{ fontSize: "1rem", marginRight: "1rem" }}>20＋5&rarr;24+4</span>
                                    <span style={{ fontSize: "1rem", marginRight: "1rem" }}>{userinfo.data.Weight}g&rarr;({userinfo.data.WeightDif}g)</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{ height: "40px", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>{detaillist}</div>
                            <div style={{ height: "30px", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                                <span style={{ fontSize: "1rem" }}>主治醫師&nbsp;</span>
                                <span style={{ fontSize: "1rem", marginRight: "14px" }}>{userinfo.MainDoctor}</span>
                                <span onMouseUp={this.showModal} style={{ fontSize: "1rem", cursor: 'pointer', color: "blue" }}>查看醫療團隊資訊</span>
                                <Modal
                                    title="醫療資訊團隊"
                                    visible={this.state.visible}
                                    onOk={this.handleOk}
                                    onCancel={this.handleCancel}>
                                    <div style={{ height: '50px', background: "rgba(255,249,237,1)", paddingLeft: "10px", lineHeight: "50px" }}>團隊人員</div>
                                    <div style={{ maxHeight: "300px", overflowY: "auto", paddingLeft: "10px", marginTop: "10px" }}>
                                        <div style={{ height: '50px', borderBottomColor: "rgba(238,238,238,1)", borderBottomWidth: "1px", borderBottomStyle: "1px", display: "flex", alignItems: "center" }}>主治醫師 陳ＯＯ</div>
                                        <div style={{ height: '50px', borderBottomColor: "rgba(238,238,238,1)", borderBottomWidth: "1px", borderBottomStyle: "1px", display: "flex", alignItems: "center" }}>住院醫師 劉ＯＯ</div>
                                        <div style={{ height: '50px', borderBottomColor: "rgba(238,238,238,1)", borderBottomWidth: "1px", borderBottomStyle: "1px", display: "flex", alignItems: "center" }}>專科護理師 林ＯＯ</div>
                                        <div style={{ height: '50px', borderBottomColor: "rgba(238,238,238,1)", borderBottomWidth: "1px", borderBottomStyle: "1px", display: "flex", alignItems: "center" }}>護理師 遊ＯＯ</div>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ height: '1px', backgroundColor: "rgba(220, 220, 220, 1)", marginRight: "16px", marginLeft: "16px", marginBottom: "20px", marginTop: "20px" }}></div>
                <div style={{ overflow: "auto", maxHeight: "750px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                        <div></div>
                        <div style={{ fontSize: "1.5rem", display: "flex", justifyContent: "center", alignItems: "center" }}>過去24小時生命徵象</div>
                        <div style={{textAlign:'end'}}>
                            <Select defaultValue={0} style={{ width: 200 }} onChange={this.sourcehandleChange}>
                                <Option value={0}>Center Monitor</Option>
                                <Option value={1}>NIS</Option>
                            </Select>
                        </div>
                    </div>
                    {/* 統計圖表 */}
                    <WardChart hisid={userinfo.id}></WardChart>
                    {/* */}
                    <div style={{ marginTop: "20px", display: "grid", gridColumnGap: "10px", gridTemplateColumns: "50% 50%", padding: "10px" }}>
                        {/*檢驗項目*/}
                        <div style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(238, 238, 238, 1)", borderRadius: "4px" }}>
                            <div style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", backgroundColor: "rgba(238, 238, 238, 1)", paddingLeft: "15px", paddingRight: "15px" }}>
                                <div style={{ display: "flex", alignItems: 'center', height: "50px", fontSize: "1.5rem" }}>檢驗項目</div>
                            </div>
                            <Wardlabview id={"wardlab"}></Wardlabview>
                        </div>
                        {/*生長曲線*/}
                        <Wardgrewchart userinfo={userinfo}></Wardgrewchart>
                    </div>
                    {/*排程*/}
                    <div style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(238, 238, 238, 1)", borderRadius: "4px", height: "250px", padding: "10px" }}>
                        <div style={{ display: "flex", alignItems: 'center', height: "50px", backgroundColor: "rgba(238, 238, 238, 1)", borderTopLeftRadius: "4px", borderTopRightRadius: "4px", paddingLeft: "15px", fontSize: "1.5rem" }}>病人重要注意事項</div>
                        <div style={{ maxHeight: "200px", overflow: 'auto' }}>
                            <div style={{ height: "50px", display: 'grid', gridTemplateColumns: "25% 75%", borderBottomWidth: "1px", borderBottomColor: "rgba(232, 232, 232, 1)", borderBottomStyle: "solid" }}>
                                <div style={{ fontSize: "1rem", display: "flex", paddingLeft: "15px", alignItems: "center" }}>1.對甲殼類食物過敏</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: "20px", display: "grid", gridColumnGap: "10px", gridTemplateColumns: "1fr 1fr", padding: "10px" }}>
                        {/*排程*/}
                        <div style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(238, 238, 238, 1)", borderRadius: "4px", height: "250px" }}>
                            <div style={{ display: "flex", alignItems: 'center', height: "50px", backgroundColor: "rgba(238, 238, 238, 1)", borderTopLeftRadius: "4px", borderTopRightRadius: "4px", paddingLeft: "15px", fontSize: "1.5rem" }}>排程</div>
                            <div style={{ maxHeight: "200px", overflow: 'auto' }}>
                                <div style={{ height: "50px", display: 'grid', gridTemplateColumns: "25% 75%", borderBottomWidth: "1px", borderBottomColor: "rgba(232, 232, 232, 1)", borderBottomStyle: "solid" }}>
                                    <div style={{ fontSize: "1rem", display: "flex", paddingLeft: "15px", alignItems: "center" }}>6/16 16:00</div>
                                    <div style={{ fontSize: "1rem", display: "flex", paddingLeft: "15px", alignItems: "center" }}>個案家屬來訪</div>
                                </div>
                            </div>
                        </div>
                        {/* 待辦事項 */}
                        <div style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(238, 238, 238, 1)", borderRadius: "4px", height: "250px" }}>
                            <div style={{ display: "flex", alignItems: 'center', height: "50px", backgroundColor: "rgba(238, 238, 238, 1)", borderTopLeftRadius: "4px", borderTopRightRadius: "4px", paddingLeft: "15px", fontSize: "1.5rem" }}>待辦事項</div>
                            <div style={{ maxHeight: "200px", overflow: 'auto' }}>
                                <Wardinfousercheckbox selectstate={true}></Wardinfousercheckbox>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Wardinfouser;