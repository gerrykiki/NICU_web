import React, { Component } from 'react';
import chooseedit from '../Image/svg/Chooseedit.svg'
import { Modal,Input } from 'antd'

class Prescriptionordertablecell extends Component {
    state = {
        onEdit: false,
        onMove: false
    }

    on_Mouse() {
        if (this.state.onEdit) {

        }
        else {
            this.setState(
                {
                    onMove: true
                }
            )
        }
    }
    on_leave() {
        if (this.state.onEdit) {

        }
        else {
            this.setState(
                {
                    onMove: false
                }
            )
        }
    }
    Edit_state() {
        this.setState(
            {
                onEdit: true
            }
        )
    }
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
        const { info } = this.props
        const { TextArea } = Input;
        return (
            <div onMouseMove={() => this.on_Mouse()} onMouseLeave={() => this.on_leave()} style={{ height: "130px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(232,232,232,1)", borderTopWidth: "0px", display: "grid", gridTemplateColumns: "1fr 6fr", paddingLeft: "10px", paddingRight: "10px" }}>
                <div style={{ fontSize: "1rem", lineHeight: "130px" }}>{info.time}</div>
                <div style={{ display: "grid", gridTemplateRows: "80px 50px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1.5fr 0.5fr 1fr 1fr" }}>
                        <div style={{ fontSize: "1rem", display: "flex", alignItems: "center" }}>{info.Name}</div>
                        <div style={{ fontSize: "1rem", display: "flex", alignItems: "center" }}>{info.ProductName}</div>
                        <div style={{ fontSize: "1rem", display: "flex", alignItems: "center" }}>{info.Unit}</div>
                        <div style={{ fontSize: "1rem", display: "flex", alignItems: "center" }}>{info.State}</div>
                        <div style={{ fontSize: "1rem", display: "flex", alignItems: "center" }}>{info.StartTime}</div>
                        <div style={{ fontSize: "1rem", display: "flex", alignItems: "center" }}>{info.EndTime}</div>
                    </div>
                    <div style={this.state.onMove ?{ display: "grid", gridTemplateColumns: "10fr 1fr" }:null}>
                        <div style={{ fontSize: "1rem", display: "flex", alignItems: "center" }}>{info.Note}</div>
                        <div style={this.state.onMove ? { display: "flex", justifyContent: "center", alignItems: "center" } : { display: "none" }}>
                            <div onClick={() => this.Edit_state()} style={{ width: "40px", height: "40px", borderRadius: "99em", background: "rgba(124, 179, 5, 1)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <img src={chooseedit} alt='chooseedit'></img>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                    title="備註"
                    visible={this.state.onEdit}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <div style={{display:"grid",gridTemplateRows:"30px 30px 30px 30px"}}>
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
        );
    }
}

export default Prescriptionordertablecell