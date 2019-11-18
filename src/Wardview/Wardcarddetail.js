import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Wardcardvalue from './Wardcardvalue'
import editlogo from '../Image/svg/edit2.svg'
import fileLogo from '../Image/svg/file1.svg'
import file2Logo from '../Image/svg/file2.svg'
import { Modal, Input, DatePicker, Button } from 'antd';
import moment from 'moment';
import { wardstatedata } from '../Data/Wardviewdata'


class Wardcarddetail extends Component {
    state = {
        hoverstate: "none",
        clickstate: false,
        mouse_hover: false,
        edit_hover: false,
        visible: false
    };




    hoverbackground() {
        //console.log("123")
        this.setState({
            hoverstate: "flex"
        });
    }

    hoverbackgroundhover() {
        //console.log("456")
        this.setState({
            hoverstate: "none"
        });
    }

    sendData = (idnumber) => {
        const { previewmode, mode } = this.props
        if (previewmode) {
            this.props.parentCallback(idnumber);
        }
    }

    switch_hoverbackground() {
        this.setState(
            {
                mouse_hover: true
            }
        )
    }

    switch_hoverbackground_leave(string) {
        this.setState(
            {
                mouse_hover: false
            }
        )
    }


    switch_editbackground() {
        this.setState(
            {
                edit_hover: true
            }
        )
    }

    switch_editbackground_leave() {
        this.setState(
            {
                edit_hover: false
            }
        )
    }


    //Module show
    handleOk(string) {
        this.setState({
            visible: false
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    showModal = () => {
        this.setState({
            visible: true
        });
    };
    ondatechange = (date, dateString) => {
        console.log(dateString)
    }
    render() {
        function switchgender(gender) {
            if (gender === "Male") {
                return "男"
            }
            else {
                return "女"

            }
        }
        function monthformat(month) {
            return month + 1
        }
        function dateformat(date) {
            return new Date(date).getFullYear() + "-" + monthformat(new Date(date).getMonth()) + '-' + new Date(date).getDate()
        }
        function switchbednumber(number) {
            const wardindex = number + 1
            if (wardindex < 10) {
                return "0" + wardindex;
            }
            return wardindex;
        }
        function modedisplay(mode) {
            if (mode) {
                return "none"
            }
            else {
                return "block"
            }
        }
        function modecursor(mode) {
            if (mode) {
                return "pointer"
            }
            else {
                return "default"
            }
        }
        function selectstyle(id, selectid) {
            if (selectid === id) {
                return {
                    borderRadius: "4px",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: "rgba(245, 166, 35, 1)",
                    position: 'relative'
                }
            }
            else {
                return {
                    borderRadius: "4px",
                    borderWidth: "2px",
                    borderStyle: "solid",
                    borderColor: "rgba(215, 238, 255, 1)",
                    position: 'relative'
                }
            }
        }
        const dateFormat = 'YYYY/MM/DD';
        const { data, selectstate, simplemode, previewmode, bedbumber } = this.props
        var selectstyle = selectstyle(selectstate, data.id)
        const datafiliter = data.filter(function (item, index) {
            return parseInt(item.bedNumber) === bedbumber
        })
        console.log(datafiliter[0])
        const source = datafiliter[0]
        if (source === undefined) {
            return null
        }

        return (
            <div>
                <Modal title="填寫病床資訊" visible={this.state.visible}
                    footer={
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                            <Button key="delete" type="danger" onClick={this.handleCancel}>清床</Button>
                            <Button key="cancel" onClick={this.handleCancel}>取消</Button>
                            <Button key="ok" type="primary" onClick={this.handleOk}>儲存</Button>
                        </div>}>

                    <div style={{ display: "grid", gridTemplateRowss: "1fr 1fr 1fr 1fr 1fr", gridRowGap: "10px" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "20% 80%" }}>
                            <div style={{ width: "100px" }}>病床號碼</div>
                            <div>{switchbednumber(bedbumber)}</div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "20% 80%" }}>
                            <div style={{ width: "100px" }}>病歷號碼</div>
                            <Input placeholder="XXXX-OOOOO" id="hisid_wardcard" defaultValue={source.hisid} />
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "20% 80%" }}>
                            <div style={{ width: "100px" }}>出生週數</div>
                            <div style={{ display: 'grid', gridTemplateColumns: "150px 30px 150px 30px", gridColumnGap: "10px" }}>
                                <Input placeholder="120" id="birweek_wardcard" defaultValue={20} />
                                <div style={{ display: "flex", alignItems: "center" }}>週</div>
                                <Input placeholder="120" id="birweek_wardcard" defaultValue={5} />
                                <div style={{ display: "flex", alignItems: "center" }}>日</div>
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "20% 80%" }}>
                            <div style={{ width: "100px", "textAlign": "justify" }}>生日</div>
                            <DatePicker placeholder="選擇日期" id="birthday" defaultValue={moment(dateformat(source.birthday), dateFormat)} />
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "20% 80%" }}>
                            <div style={{ width: "100px", "textAlign": "justify" }}>出生體重</div>
                            <div style={{ display: 'flex' }}><Input placeholder="120" id="weight" defaultValue={source.weight} />&nbsp;g</div>
                        </div>
                    </div>
                </Modal>
                <div style={selectstyle}>
                    <div style={{ height: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "rgba(215, 238, 255, 1)", padding: "10px", position: 'relative' }}>
                        <div style={{ fontSize: '1rem', color: "rgba(61, 119, 181, 1)" }}>{source.bedNumber} {source.name} {switchgender(source.gender)} {dateformat(source.birthday)} 病歷號:{source.hisid}</div>
                        <div onClick={this.showModal} onMouseMove={() => this.switch_editbackground()} onMouseLeave={() => this.switch_editbackground_leave()} style={{ height: "25px", width: "25px", borderRadius: "99em", backgroundColor: this.state.edit_hover ? "rgba(59, 151, 225, 1)" : "rgba(59, 151, 225, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", position: 'absolute', right: "5px", zIndex: 200 }}>
                            <img src={editlogo} alt='editlogo'></img>
                        </div>
                    </div>
                    <div style={{ cursor: modecursor(previewmode) }} onClick={() => this.sendData(data.id)}>
                        <div style={{ height: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "10px", borderBottomWidth: "0.5px", borderBottomColor: "rgba(215, 238, 255, 1)", borderBottomStyle: "solid" }}>
                            <div style={{ fontSize: '1rem', color: "rgba(59, 151, 225, 1)" }}>[{source.pregnant_Week}＋{source.pregnant_Day}]&rarr;[24+4]</div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100px" }}>
                                <img src={fileLogo} alt='fileLogo'></img>
                                <div style={{ color: "blue" }}>3</div>
                                <img src={file2Logo} alt='file2Logo'></img>
                                <div style={{ color: "black" }}>12</div>
                            </div>
                            <div style={{ fontSize: '1rem', color: "black" }}>{source.weight}g&rarr;{source.weight}g</div>
                        </div>
                        <div style={{ display: modedisplay(simplemode), borderBottomWidth: "0.5px", borderBottomColor: "rgba(215, 238, 255, 1)", borderBottomStyle: "solid" }}>
                            <Wardcardvalue source={wardstatedata}></Wardcardvalue>
                        </div>
                        <div style={{ height: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "10px", borderBottomWidth: "0.5px", borderBottomColor: "rgba(215, 238, 255, 1)", borderBottomStyle: "solid", borderTopWidth: "0.5px", borderTopColor: "rgba(215, 238, 255, 1)", borderTopStyle: "solid", position: 'relative' }}>
                            <div style={{ fontSize: '1rem', color: "black" }}>{source.remark}</div>
                            <Link onMouseLeave={() => this.switch_hoverbackground_leave("string")} onMouseMove={() => this.switch_hoverbackground()} to={{ pathname: "/nicu/patient/" + source.hisid, state: source }} style={{ height: "20px", backgroundColor: this.state.mouse_hover ? "rgba(59, 151, 225, 1)" : "rgba(59, 151, 225, 0.5)", borderRadius: "4px", textAlign: "center", lineHeight: "20px", color: "white", position: 'absolute', right: "5px" }}>進入病人資料頁面</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Wardcarddetail;