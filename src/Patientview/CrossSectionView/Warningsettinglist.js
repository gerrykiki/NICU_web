import React, { Component } from 'react';
import dragdown from '../../Image/svg/dragdown.svg'

class Warningsetting extends Component {
    state = {
        dragstate: false
    }
    onClickdrag = () => {
        this.setState(
            {
                dragstate: !this.state.dragstate
            }
        )
    }
    render() {
        return (
            <div style={{ marginBottom: "10px" }}>
                <div style={{ height: 50, background: "rgba(238,238,238,1)", padding: "10px 16px", display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex" }}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>2019-06-01 08:00</div>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "20px" }}>
                            <div style={{ border: "red 1px solid", borderRadius: "4px", cursor: "pointer", color: "red", padding: "5px 20px", background: "white" }}>刪除</div>
                        </div>
                    </div>
                    <div onClick={this.onClickdrag} style={{ transform: this.state.dragstate ? "scaleY(1)" : "scaleY(-1)" }}>
                        <img src={dragdown} alt="dragdown"></img>
                    </div>
                </div>
                <div style={{ display: this.state.dragstate ? "block" : "none" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 4fr 1fr 4fr" }}>
                        <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr" }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>HR</div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>ABP</div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>NBP</div>
                        </div>
                        <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr" }}>
                            <div style={{ padding: "5px 10px" }}>
                                <div>數值上下界:170(XXX)~70(XXX)</div>
                                <div>正常值:170(XXX)~70(XXX)</div>
                            </div>
                            <div style={{ padding: "5px 10px" }}>
                                <div>數值上下界:170(XXX)~70(XXX)</div>
                                <div>正常值:170(XXX)~70(XXX)</div>
                            </div>
                            <div style={{ padding: "5px 10px" }}>
                                <div>數值上下界:170(XXX)~70(XXX)</div>
                                <div>正常值:170(XXX)~70(XXX)</div>
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr" }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>SpO2</div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>BT</div>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>RR</div>
                        </div>
                        <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr" }}>
                            <div style={{ padding: "5px 10px" }}>
                                <div>數值上下界:170(XXX)~70(XXX)</div>
                                <div>正常值:170(XXX)~70(XXX)</div>
                            </div>
                            <div style={{ padding: "5px 10px" }}>
                                <div>數值上下界:170(XXX)~70(XXX)</div>
                                <div>正常值:170(XXX)~70(XXX)</div>
                            </div>
                            <div style={{ padding: "5px 10px" }}>
                                <div>數值上下界:170(XXX)~70(XXX)</div>
                                <div>正常值:170(XXX)~70(XXX)</div>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: 50, padding: "10px 16px", display: "flex", alignItems: "center" }}>生效時間範圍:2019-06-01 08:00~2019-06-31 08:00</div>
                </div>
            </div>
        );
    }
}

export default Warningsetting