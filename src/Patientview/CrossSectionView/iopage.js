import React, { Component } from 'react';
import Ioschedule from './Ioschedule'


class IOpage extends Component {


    render() {
        const io_style = {
            title_style: { fontSize: "1.8rem", display: "flex", justifyContent: "center", alignItems: 'center' }
        }
        return (
            <div style={{ width: "100%", marginBottom: "20px" }}>
                <div style={{ fontSize: "22px", fontFamily: "PingFangTC-Medium", lineHeight: "40px" }}>I/O</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", height: "510px" }}>
                    {/* title */}
                    <div style={{ display: "grid", gridTemplateRows: "1fr 9fr" }}>
                        <div style={{ background: "rgba(232,232,232,1)" }}></div>
                        <div style={{ display: "grid", gridTemplateRows: "4fr 4fr 1fr" }}>
                            <div style={{ display: "grid", gridTemplateRows: "repeat(4,1fr)" }}>
                                <div style={io_style.title_style}>Feed</div>
                                <div style={io_style.title_style}>IV</div>
                                <div style={io_style.title_style}>Other</div>
                                <div style={io_style.title_style}>In:Sum</div>
                            </div>
                            <div style={{ display: "grid", gridTemplateRows: "repeat(4,1fr)" }}>
                                <div style={io_style.title_style}>U/O</div>
                                <div style={io_style.title_style}>ml/kg/hr</div>
                                <div style={io_style.title_style}>Other</div>
                                <div style={io_style.title_style}>Out:Sum</div>
                            </div>
                            <div style={io_style.title_style}>I-O</div>
                        </div>
                    </div>
                    {/* 白班 */}
                    <div style={{ display: "grid", gridTemplateRows: "1fr 9fr" }}>
                        <div style={{ background: "rgba(232,232,232,1)" }}></div>
                        <div style={{ display: "grid", gridTemplateRows: "4fr 4fr 1fr" }}>
                            <div style={{ display: "grid", gridTemplateRows: "repeat(4,1fr)" }}>
                                <div style={io_style.title_style}>--</div>
                                <div style={io_style.title_style}>--</div>
                                <div style={io_style.title_style}>--</div>
                                <div style={io_style.title_style}>--</div>
                            </div>
                            <div style={{ display: "grid", gridTemplateRows: "repeat(4,1fr)" }}>
                                <div style={io_style.title_style}>U/O</div>
                                <div style={io_style.title_style}>ml/kg/hr</div>
                                <div style={io_style.title_style}>Other</div>
                                <div style={io_style.title_style}>Out:Sum</div>
                            </div>
                            <div style={io_style.title_style}>I-O</div>
                        </div>
                    </div>
                    {/* 小夜 */}
                    <div style={{ display: "grid", gridTemplateRows: "1fr 9fr" }}>
                        <div style={{ background: "rgba(232,232,232,1)" }}></div>
                        <div style={{ display: "grid", gridTemplateRows: "4fr 4fr 1fr" }}>
                            <div style={{ display: "grid", gridTemplateRows: "repeat(4,1fr)" }}>
                                <div style={io_style.title_style}>Feed</div>
                                <div style={io_style.title_style}>IV</div>
                                <div style={io_style.title_style}>Other</div>
                                <div style={io_style.title_style}>In:Sum</div>
                            </div>
                            <div style={{ display: "grid", gridTemplateRows: "repeat(4,1fr)" }}>
                                <div style={io_style.title_style}>U/O</div>
                                <div style={io_style.title_style}>ml/kg/hr</div>
                                <div style={io_style.title_style}>Other</div>
                                <div style={io_style.title_style}>Out:Sum</div>
                            </div>
                            <div style={io_style.title_style}>I-O</div>
                        </div>
                    </div>
                    {/* 大夜 */}
                    <div style={{ display: "grid", gridTemplateRows: "1fr 9fr" }}>
                        <div style={{ background: "rgba(232,232,232,1)" }}></div>
                        <div style={{ display: "grid", gridTemplateRows: "4fr 4fr 1fr" }}>
                            <div style={{ display: "grid", gridTemplateRows: "repeat(4,1fr)" }}>
                                <div style={io_style.title_style}>Feed</div>
                                <div style={io_style.title_style}>IV</div>
                                <div style={io_style.title_style}>Other</div>
                                <div style={io_style.title_style}>In:Sum</div>
                            </div>
                            <div style={{ display: "grid", gridTemplateRows: "repeat(4,1fr)" }}>
                                <div style={io_style.title_style}>U/O</div>
                                <div style={io_style.title_style}>ml/kg/hr</div>
                                <div style={io_style.title_style}>Other</div>
                                <div style={io_style.title_style}>Out:Sum</div>
                            </div>
                            <div style={io_style.title_style}>I-O</div>
                        </div>
                    </div>
                    {/* 全日 */}
                    <div style={{ display: "grid", gridTemplateRows: "1fr 9fr" }}>
                        <div style={{ background: "rgba(232,232,232,1)" }}></div>
                        <div style={{ display: "grid", gridTemplateRows: "4fr 4fr 1fr" }}>
                            <div style={{ display: "grid", gridTemplateRows: "repeat(4,1fr)" }}>
                                <div style={io_style.title_style}>Feed</div>
                                <div style={io_style.title_style}>IV</div>
                                <div style={io_style.title_style}>Other</div>
                                <div style={io_style.title_style}>In:Sum</div>
                            </div>
                            <div style={{ display: "grid", gridTemplateRows: "repeat(4,1fr)" }}>
                                <div style={io_style.title_style}>U/O</div>
                                <div style={io_style.title_style}>ml/kg/hr</div>
                                <div style={io_style.title_style}>Other</div>
                                <div style={io_style.title_style}>Out:Sum</div>
                            </div>
                            <div style={io_style.title_style}>I-O</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default IOpage;