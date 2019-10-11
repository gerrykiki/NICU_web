import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import WardcardvitalsignChart from './Wardcardvitalsign'
import Wardinfousercheckbox from './Wardunfousercheckbox'
import { Warduser } from '../jsonResponse'
import { Select } from 'antd';


const width = window.screen.availWidth * 0.55, height = 50, margin = 20, max = 150, min = 50

//var timeoutID = window.setInterval(( () => console.log("Hello!") ), 1000);

class Wardinfouser extends Component {
    state = {
        alertstate: "none",
        test_items_interval: 0,
        Data_change:true
    }

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
            const data = Math.floor(Math.random() * 100);
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
            case "Floey":
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
            case "Floey":
                return "Floey"
            case "Drain":
                return "Drain"
            default:
                return item
        }
    }

    detaildatastylelist(detail) {
        console.log(detail)

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

    Datachange(){
        this.setState(
            {
                Data_change:!this.state.Data_change
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
        const userinfo = this.props.location.state
        const userdata = Warduser;
        console.log(userdata)
        const alertX = document.body.clientWidth * 0.35
        const alertY = document.body.clientHeight * 0.25
        const { Option } = Select;


        let detaillist = userinfo.detaildata.map(
            (info, index) =>
                <div key={index} style={info.data ?
                    { lineHeight: "24px", paddingRight: "5px", paddingLeft: "5px", fontSize: "10px", textAlign: "center", borderRadius: "4px", color: "rgba(255, 255, 255, 1)", marginRight: "10px", height: "24px", backgroundColor: this.detailinformationswitchstyle(info.item) } :
                    { lineHeight: "24px", paddingRight: "5px", paddingLeft: "5px", fontSize: "10px", textAlign: "center", borderRadius: "4px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(187,187,187,1)", color: "rgba(187, 187, 187, 1)", marginRight: "10px", height: "24px" }}>
                    {this.detailinformationswitch(info.item)}
                </div>
        )

        function handleChange(value) {
            console.log(`selected ${value}`);
        }



        return (
            <div style={{ borderColor: "rgba(232, 232, 232, 1)", borderWidth: "1px", borderStyle: "solid", borderRadius: "4px" }}>
                <div style={{ display: this.state.alertstate, position: "absolute", top: alertY, left: alertX, borderWidth: "1px", borderColor: "rgba(238,238,238,1)", borderStyle: "solid", borderRadius: '4px' }}>
                    <div style={{ padding: "10px", width: "30vw", borderRadius: "4px", backgroundColor: "white" }}>
                        <div style={{ height: "50px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div>醫療團隊資訊</div>
                            <div onMouseUp={() => this.CancelMedgroupclick()} style={{ cursor: "pointer" }}>取消</div>
                        </div>
                        <hr></hr>
                        <div>
                            <div style={{ height: '50px', background: "rgba(255,249,237,1)", paddingLeft: "10px", lineHeight: "50px" }}>團隊人員</div>
                            <div style={{ maxHeight: "300px", overflowY: "auto", paddingLeft: "10px", marginTop: "10px" }}>
                                <div style={{ height: '50px', borderBottomColor: "rgba(238,238,238,1)", borderBottomWidth: "1px", borderBottomStyle: "1px", display: "flex", alignItems: "center" }}>主治醫師 陳ＯＯ</div>
                                <div style={{ height: '50px', borderBottomColor: "rgba(238,238,238,1)", borderBottomWidth: "1px", borderBottomStyle: "1px", display: "flex", alignItems: "center" }}>住院醫師 劉ＯＯ</div>
                                <div style={{ height: '50px', borderBottomColor: "rgba(238,238,238,1)", borderBottomWidth: "1px", borderBottomStyle: "1px", display: "flex", alignItems: "center" }}>專科護理師 林ＯＯ</div>
                                <div style={{ height: '50px', borderBottomColor: "rgba(238,238,238,1)", borderBottomWidth: "1px", borderBottomStyle: "1px", display: "flex", alignItems: "center" }}>護理師 遊ＯＯ</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: "10px", paddingRight: "10px" }}>
                    <div style={{ width: "200px" }}>
                        <Link to="/Main/Bedview/Wardindex">
                            <div>&larr;返回病房資訊總覽</div>
                        </Link>
                    </div>
                    <div style={{ fontSize: "22px", width: "200px", textAlign: "center" }}>個案資訊摘要</div>
                    <div style={{ width: "200px", textAlign: "end" }}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: "16px", paddingRight: "16px" }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', height: "70px", width: "100%" }}>
                        <div style={{ display: "flex" }}>
                            <div style={{ width: "40px", height: '20px', lineHeight: "40px", fontSize: "1em" }}>病床</div>
                            <div style={{ fontSize: '3rem', marginLeft: "5px", height: "70px" }}>01</div>
                            <div style={{ marginLeft: "5px" }}>
                                <div style={{ height: "40px", display: "flex", alignItems: "center" }}>
                                    <span style={{ fontSize: "10px" }}>{userinfo.Name}</span>
                                    <span style={{ fontSize: "10px" }}>&nbsp;/&nbsp;</span>
                                    <span style={{ fontSize: "10px" }}>{userinfo.Channel}</span>
                                    <span style={{ fontSize: "10px" }}>&nbsp;/&nbsp;</span>
                                    <span style={{ fontSize: "10px" }}>{this.Genderstring(userinfo.Gender)}</span>
                                    <span style={{ fontSize: "10px" }}>&nbsp;/&nbsp;</span>
                                    <span style={{ fontSize: "10px" }}>{userinfo.Week}</span>
                                </div>
                                <div style={{ height: "30px", display: "flex", alignItems: "center" }}>
                                    <span style={{ fontSize: "10px", marginRight: "1rem" }}>病歷號:{userinfo.id}</span>
                                    <span style={{ fontSize: "10px", marginRight: "1rem" }}>{userinfo.data.Weight}g</span>
                                    <span style={{ fontSize: "10px", marginRight: "1rem" }}>({userinfo.data.WeightDif}g)</span>
                                    <span style={{ fontSize: "10px" }}>聯絡電話:{userdata.phoneNumber}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{ height: "40px", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>{detaillist}</div>
                            <div style={{ height: "30px", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                                <span style={{ fontSize: "0.7rem" }}>主治醫師&nbsp;</span>
                                <span style={{ fontSize: "0.7rem", marginRight: "14px" }}>{userdata.MainDoctor}</span>
                                <span onMouseUp={() => this.Medgroupclick()} style={{ fontSize: "0.7rem", cursor: 'pointer', color: "blue" }}>查看醫療團隊資訊</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ height: '1px', backgroundColor: "rgba(220, 220, 220, 1)", marginRight: "16px", marginLeft: "16px", marginBottom: "20px", marginTop: "20px" }}></div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
                    <div></div>
                    <div style={{ fontSize: "16px", display: "flex", justifyContent: "center", alignItems: "center" }}>過去24小時生命徵象</div>
                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", paddingRight: "10px" }}>
                        <Select placeholder='選擇角色' style={{ width: 200 }} onChange={handleChange}>
                            <Option value={0}>Center Monitor</Option>
                            <Option value={1}>HIS</Option>
                            <Option value={2}>NIS</Option>
                        </Select>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginLeft: "20px" }}>
                    <div style={{ marginTop: "10px", width: "100px" }}>
                        <div style={{ color: "rgba(126, 211, 33, 1)" }}>
                            HR
                        </div>
                        <div style={{ fontSize: "1.5rem", color: "rgba(126, 211, 33, 1)" }}>
                            123
                        </div>
                    </div>
                    <div id="wardvitalhr" style={{ marginRight: "20px", width: "71vw", height: "200px" }}>
                        <WardcardvitalsignChart id={"wardvitalhr"} data={this.datarelease()} width={300} height={100} margin={margin} max={100} min={0} axisBot={false} axisTop={true} colorshadow={"rgba(126, 211, 33, 0.1)"} circlrcolor={"rgba(126, 211, 33, 1)"}></WardcardvitalsignChart>
                    </div>
                </div>
                {/* <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginLeft: "20px" }}>
                    <div style={{ marginTop: "10px", width: "100px" }}>
                        <div style={{ color: "rgba(222, 150, 159, 1)" }}>
                            BP
                        </div>
                        <div style={{ fontSize: "1.5rem", color: "rgba(222, 150, 159, 1)" }}>
                            90
                        </div>
                    </div>
                    <div id="wardvitalbp" style={{ marginRight: "20px", width: "71vw", height: "100px" }}>
                        <WardcardvitalsignChart id={"wardvitalbp"} data={this.datarelease()} width={width} height={height} margin={margin} max={max} min={min} axisBot={false} axisTop={false} circlrcolor={"rgba(222, 150, 159, 1)"}></WardcardvitalsignChart>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginLeft: "20px" }}>
                    <div style={{ marginTop: "10px", width: "100px" }}>
                        <div style={{ color: "rgba(59, 151, 225, 1)" }}>
                            SpO2
                        </div>
                        <div style={{ fontSize: "1.5rem", color: "rgba(59, 151, 225, 1)" }}>
                            24
                        </div>
                    </div>
                    <div id="wardvitalsp" style={{ marginRight: "20px", width: "71vw", height: "100px" }}>
                        <WardcardvitalsignChart id={"wardvitalsp"} data={this.datarelease()} width={width} height={height} margin={margin} max={max} min={min} axisBot={false} axisTop={false} circlrcolor={"rgba(59, 151, 225, 1)"}></WardcardvitalsignChart>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginLeft: "20px" }}>
                    <div style={{ marginTop: "10px", width: "100px" }}>
                        <div style={{ color: "rgba(144, 19, 254, 1)" }}>
                            BT
                        </div>
                        <div style={{ fontSize: "1.5rem", color: "rgba(144, 19, 254, 1)" }}>
                            90
                        </div>
                    </div>
                    <div id="wardvitalbt" style={{ marginRight: "20px", width: "71vw", height: "100px" }}>
                        <WardcardvitalsignChart id={"wardvitalbt"} data={this.datarelease()} width={width} height={height} margin={margin} max={max} min={min} axisBot={false} axisTop={false} circlrcolor={"rgba(144, 19, 254, 1)"}></WardcardvitalsignChart>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginLeft: "20px" }}>
                    <div style={{ marginTop: "10px", width: "100px" }}>
                        <div style={{ color: "rgba(245, 166, 35, 1)" }}>
                            RR
                        </div>
                        <div style={{ fontSize: "1.5rem", color: "rgba(245, 166, 35, 1)" }}>
                            90
                        </div>
                    </div>
                    <div id="wardvitalrr" style={{ marginRight: "20px", width: "71vw", height: "100px" }}>
                        <WardcardvitalsignChart id={"wardvitalrr"} data={this.datarelease()} width={width} height={height} margin={margin} max={max} min={min} axisBot={false} axisTop={false} circlrcolor={"rgba(245, 166, 35, 1)"}></WardcardvitalsignChart>
                    </div>
                </div> */}
                <div style={{ marginTop: "20px", display: "grid", gridColumnGap: "10px", gridRowGap: "20px", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "350px 250px", padding: "10px" }}>
                    {/*檢驗項目*/}
                    <div style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(238, 238, 238, 1)", borderRadius: "4px" }}>
                        <div style={{ display: "flex", alignItems: 'center', justifyContent: "space-between", backgroundColor: "rgba(238, 238, 238, 1)", paddingLeft: "15px", paddingRight: "15px" }}>
                            <div style={{ display: "flex", alignItems: 'center', height: "50px", fontSize: "1rem" }}>檢驗項目</div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridColumnGap: "5px" }}>
                                <div style={this.SwitchTestItemInterval(0)} onMouseUp={() => this.Onchangetimeinterval(0)}>24hr</div>
                                <div style={this.SwitchTestItemInterval(1)} onMouseUp={() => this.Onchangetimeinterval(1)}>48hr</div>
                                <div style={this.SwitchTestItemInterval(2)} onMouseUp={() => this.Onchangetimeinterval(2)}>72hr</div>
                            </div>
                        </div>
                        <div style={{ maxHeight: "200px", overflow: 'auto' }}>
                            <div style={{ height: "50px", display: 'grid', gridTemplateColumns: "1fr 1.5fr 1.5fr", borderBottomWidth: "1px", borderBottomColor: "rgba(232, 232, 232, 1)", borderBottomStyle: "solid" }}>
                                <div style={{ fontSize: "1rem", display: "flex", paddingLeft: "15px", alignItems: "center" }}>檢驗時間</div>
                                <div style={{ fontSize: "1rem", display: "flex", paddingLeft: "15px", alignItems: "center" }}>檢驗項目</div>
                                <div style={{ fontSize: "1rem", display: "flex", paddingLeft: "15px", alignItems: "center" }}>檢驗結果</div>
                            </div>
                        </div>
                    </div>
                    {/*生長曲線*/}
                    <div style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(238, 238, 238, 1)", borderRadius: "4px" }}>
                        <div style={{ display: "flex", alignItems: 'center', height: "50px", backgroundColor: "rgba(238, 238, 238, 1)", borderTopLeftRadius: "4px", borderTopRightRadius: "4px", paddingLeft: "15px", fontSize: "1rem" }}>生長曲線圖</div>
                    </div>
                    {/*排程*/}
                    <div style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(238, 238, 238, 1)", borderRadius: "4px", height: "250px" }}>
                        <div style={{ display: "flex", alignItems: 'center', height: "50px", backgroundColor: "rgba(238, 238, 238, 1)", borderTopLeftRadius: "4px", borderTopRightRadius: "4px", paddingLeft: "15px", fontSize: "1rem" }}>排程</div>
                        <div style={{ maxHeight: "200px", overflow: 'auto' }}>
                            <div style={{ height: "50px", display: 'grid', gridTemplateColumns: "25% 75%", borderBottomWidth: "1px", borderBottomColor: "rgba(232, 232, 232, 1)", borderBottomStyle: "solid" }}>
                                <div style={{ fontSize: "1rem", display: "flex", paddingLeft: "15px", alignItems: "center" }}>檢驗時間</div>
                                <div style={{ fontSize: "1rem", display: "flex", paddingLeft: "15px", alignItems: "center" }}>排程事項</div>
                            </div>
                        </div>
                    </div>
                    {/* 待辦事項 */}
                    <div style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(238, 238, 238, 1)", borderRadius: "4px", height: "250px" }}>
                        <div style={{ display: "flex", alignItems: 'center', height: "50px", backgroundColor: "rgba(238, 238, 238, 1)", borderTopLeftRadius: "4px", borderTopRightRadius: "4px", paddingLeft: "15px", fontSize: "1rem" }}>待辦事項</div>
                        <div style={{ maxHeight: "200px", overflow: 'auto' }}>
                            <Wardinfousercheckbox selectstate={true}></Wardinfousercheckbox>
                        </div>
                    </div>
                </div>
                <div style={{ padding: "10px" }}>
                    <div style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(238, 238, 238, 1)", borderRadius: "4px", height: "250px" }}>
                        <div style={{ display: "flex", alignItems: 'center', height: "50px", backgroundColor: "rgba(238, 238, 238, 1)", borderTopLeftRadius: "4px", borderTopRightRadius: "4px", paddingLeft: "15px", fontSize: "1rem" }}>病人評論</div>
                        <div style={{ padding: "15px", }}>123</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Wardinfouser;