import React, { Component } from 'react';
import editlogo from '../../Image/svg/Edit.svg'
import detaillogo from '../../Image/svg/details.svg'
import { Tooltip, Input, Button } from 'antd';

class Notice extends Component {
    state = {
        EditMode: false
    }
    onChangeEditMode() {
        this.setState(
            {
                EditMode: !this.state.EditMode
            }
        )
    }

    onClickCancel() {
        this.setState(
            {
                EditMode: false
            }
        )
    }

    onClickEnter() {
        this.setState(
            {
                EditMode: false
            }
        )
    }
    render() {
        function monthformat(month) {
            return month + 1
        }
        function dateformat(time) {
            return new Date(time).getFullYear() + "-" + monthformat(new Date(time).getMonth()) + "-" + new Date(time).getDate()
        }
        function tooltiptext(editor, time) {
            return editor + "醫師於" + dateformat(time) + "更新"
        }
        const data = [
            {
                Time: 1566287810473,
                Content: "remarksremarks",
                Editor: "修改者"
            },
            {
                Time: 1566287810473,
                Content: "remarksremarks",
                Editor: "修改者"
            }
        ]

        const remarkcell = data.map((info, index) =>
            <div key={index} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 5px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>{index + 1}.{info.Content}</div>
                <Tooltip placement="topRight" title={tooltiptext(info.Editor, info.Time)}>
                    <img src={detaillogo} alt="detaillogo" />
                </Tooltip>
            </div>
        )
        return (
            <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 10px", background: "rgba(238,238,238,1)" }}>
                    <div style={{ fontSize: "1.5rem" }}>病人重要注意事項</div>
                    <div onClick={() => this.onChangeEditMode()}>
                        <img src={editlogo} alt="editlogo" />
                    </div>
                </div>
                <div style={{ maxHeight: "250px", overflowY: "auto" }}>
                    {remarkcell}
                </div>
                <div style={{ display: this.state.EditMode ? "block" : "none" }}>
                    <div style={{ padding: "5px 10px" }}>
                        <Input placeholder="輸入當日註記內容"></Input>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "auto auto", gridColumnGap: "20px" }}>
                            <Button onClick={() => this.onClickCancel()}>取消</Button>
                            <Button onClick={() => this.onClickEnter()} type="primary">儲存</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Notice