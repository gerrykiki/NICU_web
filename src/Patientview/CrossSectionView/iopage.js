import React, { Component } from 'react';


class IOpage extends Component {


    render() {
        const io_style = {
            title_style: { fontSize: "1.8rem", display: "flex", justifyContent: "center", alignItems: 'center' },
            row_title_style:{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"1.5rem"}
        }
        return (
            <div style={{ width: "100%", marginBottom: "20px" }}>
                <div style={{ fontSize: "2rem", fontFamily: "PingFangTC-Medium", lineHeight: "40px",backgroundColor: "rgba(238, 238, 238, 1)" ,paddingLeft:"5px",paddingRight:"5px"}}>I/O</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr", height: "460px" }}>
                    {/* title */}
                    <div style={{ display: "grid", gridTemplateRows: "1fr 9fr" }}>
                        <div></div>
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
                        <div style={io_style.row_title_style}>白班</div>
                        <div style={{ display: "grid", gridTemplateRows: "4fr 4fr 1fr" }}>
                            <div style={{ display: "grid", gridTemplateRows: "repeat(4,1fr)" }}>
                                <div style={io_style.title_style}></div>
                                <div style={io_style.title_style}></div>
                                <div style={io_style.title_style}></div>
                                <div style={io_style.title_style}></div>
                            </div>
                            <div style={{ display: "grid", gridTemplateRows: "repeat(4,1fr)" }}>
                                <div style={io_style.title_style}></div>
                                <div style={io_style.title_style}></div>
                                <div style={io_style.title_style}></div>
                                <div style={io_style.title_style}></div>
                            </div>
                            <div style={io_style.title_style}>I-O</div>
                        </div>
                    </div>
                    {/* 小夜 */}
                    <div style={{ display: "grid", gridTemplateRows: "1fr 9fr" }}>
                        <div style={io_style.row_title_style}>小夜</div>
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
                        <div style={io_style.row_title_style}>大夜</div>
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
                        <div style={io_style.row_title_style}>全日</div>
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