import React, { Component } from 'react';
import { format_bednumber } from '../Commonfunction'
import editlogo from '../Image/svg/edit2.svg'
import { Modal, Input, DatePicker } from 'antd';

class Unpreviewwardcard extends Component {
    state = { visible: false };
    showModal = () => {
        this.setState({
            visible: true,
            databool: false,
            data: null
        });
    };

    handleOk(string) {
        console.log(string);

        const bednumber = document.getElementById("bednumber").value;
        const hisnumber = document.getElementById("hisid").value;
        const birweek = document.getElementById("birweek").value;
        const birthday = string;
        const weight = document.getElementById("weight").value;
        const statedata = {
            "BedNumber": bednumber,
            "id": hisnumber,
            "birweek": birweek,
            "birthday": birthday,
            "weight": weight
        }
        console.log(statedata)
        this.setState({
            visible: false,
            data: statedata,
            databool: false
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    savestatus(string) {
        console.log(string)
    }
    render() {        
        const number = this.props.bedbumber + 1
        var changedate
        function ondatechange(date, dateString) {
            console.log(date, dateString);
            changedate = dateString
        }
        return (
            <div style={{ width: "99%", marginBottom: "10px", borderRadius: "4px", borderWidth: "2px", borderStyle: "solid", borderColor: "rgba(215, 238, 255, 1)", position: 'relative' }}>
                <div style={{ height: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "rgba(215, 238, 255, 1)", padding: "10px" }} >
                    <div style={{ fontSize: '18px', color: "rgba(61, 119, 181, 1)" }}>{format_bednumber(number)}/ -- </div>
                    <div style={{ height: "25px", width: "25px", borderRadius: "99em", backgroundColor: "rgba(59, 151, 225, 1)", display: "flex", justifyContent: "center", alignItems: "center" }} onClick={this.showModal}>
                        <img src={editlogo} alt='editlogo'></img>
                    </div>
                    <Modal
                        title="填寫病床資訊"
                        visible={this.state.visible}
                        onOk={() => this.handleOk(changedate)}
                        onCancel={this.handleCancel}
                    >
                        <div style={{ display: "grid", gridTemplateRowss: "1fr 1fr 1fr 1fr 1fr", gridRowGap: "10px" }}>
                            <div style={{ display: "grid", gridTemplateColumns: "20% 80%" }}>
                                <div style={{ width: "100px" }}>病床號碼</div>
                                <Input placeholder={format_bednumber(number)} id="bednumber" />
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "20% 80%" }}>
                                <div style={{ width: "100px" }}>病歷號碼</div>
                                <Input placeholder="XXXX-OOOOO" id="hisid" />
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "20% 80%" }}>
                                <div style={{ width: "100px" }}>出生週數</div>
                                <div style={{ display: 'flex' }}>
                                    <Input placeholder="120" id="birweek" />&nbsp;週
                                </div>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "20% 80%" }}>
                                <div style={{ width: "100px", "textAlign": "justify" }}>生日</div>
                                <DatePicker onChange={ondatechange} id="birthday" />
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "20% 80%" }}>
                                <div style={{ width: "100px", "textAlign": "justify" }}>體重</div>
                                <div style={{ display: 'flex' }}>
                                    <Input placeholder="120" id="weight" />&nbsp;g
                                </div>
                            </div>
                        </div>
                    </Modal>
                </div>
                <div style={{ height: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "10px", borderBottomWidth: "0.5px", borderBottomColor: "rgba(215, 238, 255, 1)", borderBottomStyle: "solid" }}>
                    <div style={{ fontSize: '14px' }}>無資料</div>
                </div>
                <div style={{ height: '30px', display: 'flex', alignItems: 'center', padding: "10px" }}></div>
            </div>
        );
    }
}

export default Unpreviewwardcard;