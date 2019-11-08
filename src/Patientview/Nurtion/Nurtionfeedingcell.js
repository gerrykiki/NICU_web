import React, { Component } from 'react'
import { Input, Modal } from 'antd';
import editlogo from '../../Image/svg/edit2.svg'

class Nurtionfeedingcell extends Component {
    state = {
        EditMode: "none",
        onEdit: false
    }
    onMouseEnter() {
        console.log("123")
        this.setState(
            {
                EditMode: "flex"
            }
        )
    }
    onMouseLeave() {
        this.setState(
            {
                EditMode: "none"
            }
        )
    }
    showModal = () => {
        this.setState({
            onEdit: true,
        });
    };

    handleOk = e => {
        console.log(e);
        this.setState({
            onEdit: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            onEdit: false,
        });
    };
    render() {
        const { TextArea } = Input;
        const { rowdata } = this.props
        function Monthformat(month) {
            return month + 1
        }
        function timeformatMMDD(time) {
            return Monthformat(new Date(time).getMonth()) + "/" + new Date(time).getDate()
        }
        function timeformatHHmm(time) {
            return new Date(time).getHours() + ":" + new Date(time).getMinutes()
        }
        function timeformatitemtime(time) {
            return new Date(time).getFullYear() + "-" + Monthformat(new Date(time).getMonth()) + "-" + new Date(time).getDate()
        }
        return (
            <div onMouseMove={() => this.onMouseEnter()} onMouseLeave={() => this.onMouseLeave()} style={{ display: "grid", gridTemplateColumns: "1fr 6fr" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <div>
                        <div style={{ display: "flex", alignItems: "center", fontSize: "1rem", width: "100%" }}>{timeformatMMDD(rowdata.FeedingOrderTime)}</div>
                        <div style={{ display: "flex", alignItems: "center", fontSize: "1rem", width: "100%" }}>{timeformatHHmm(rowdata.FeedingOrderTime)}</div>
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateRows: "1fr 1fr" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr 1fr 1fr", height: "40px" }}>
                        <div style={{ display: "flex", alignItems: "center", fontSize: "1rem" }}>{rowdata.FeedingOrderDispositionName}}</div>
                        <div style={{ display: "flex", alignItems: "center", fontSize: "1rem" }}>{timeformatitemtime(rowdata.FeedingOrderStartTime)}</div>
                        <div style={{ display: "flex", alignItems: "center", fontSize: "1rem" }}>{timeformatitemtime(rowdata.FeedingOrderEndTime)}</div>
                        <div style={{ display: "flex", alignItems: "center", fontSize: "1rem" }}>{rowdata.FeedingOrderFood}</div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingRight: "20px" }}>
                        <div style={{ display: "flex", alignItems: "center", fontSize: "1rem" }}>{rowdata.FeedingOrderRemarks}</div>
                        <div onClick={this.showModal} style={{ display: this.state.EditMode, justifyContent: "center", alignItems: "center", background: "rgba(124, 179, 5, 1)", width: "30px", height: "30px", borderRadius: "99em",cursor:"pointer" }}>
                            <img src={editlogo} alt="editlogo" />
                        </div>
                        <Modal
                            title="備註"
                            visible={this.state.onEdit}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            <div style={{ display: "grid", gridTemplateRows: "30px 30px 30px 30px" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div>開立時間:</div>
                                    <div>上次編輯時間:</div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div>處理名稱:</div>
                                    <div>上次編輯人:</div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <div>頻次:</div>
                                    <div>開立醫師:</div>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>備註內容:</div>
                                <TextArea rows={5} />
                            </div>
                        </Modal>
                    </div>
                </div>
            </div>
        );
    }
}

export default Nurtionfeedingcell