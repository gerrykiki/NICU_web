import React, { Component } from 'react';


class IOpage extends Component {

    switch_state() {
        const { iostate } = this.props
        switch (iostate) {
            case 0:
                return 4
            case 1:
                return 24
            case 2:
                return 21
            case 3:
                return 21
            case 4:
                return 14
            default:
                break;
        }
    }

    switch_state_title() {
        const { iostate } = this.props
        switch (iostate) {
            case 0:
                return "1fr "
            case 1:
                return "140px "
            case 2:
                return "140px "
            case 3:
                return "140px "
            case 4:
                return "140px "
            default:
                break;
        }
    }
    render() {
        const io_style = {
            title_style: { fontSize: "1.8rem", display: "flex", justifyContent: "center", alignItems: 'center' },
            row_title_style: { display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1.3rem", height: "40px" }
        }
        return (
            <div style={{ display: "grid", gridTemplateRows: "4fr 4fr 1fr" }}>
                <div style={{ display: "grid", gridTemplateColumns: this.switch_state_title() + this.switch_state() + "fr", border: "black 2px solid" }}>
                    <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr 1fr" }}>
                        <div style={io_style.row_title_style}>Feed</div>
                        <div style={io_style.row_title_style}>IV</div>
                        <div style={io_style.row_title_style}>Other</div>
                        <div style={io_style.row_title_style}>In:Sum</div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(" + this.switch_state() + ",1fr)" }}>
                        <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr 1fr" }}>
                            {/* 白班 */}
                            <div style={io_style.row_title_style}>Feed</div>
                            <div style={io_style.row_title_style}>IV</div>
                            <div style={io_style.row_title_style}>Other</div>
                            <div style={io_style.row_title_style}>In:Sum</div>
                        </div>
                        <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr 1fr" }}>
                            {/* 小夜 */}
                            <div style={io_style.row_title_style}>Feed</div>
                            <div style={io_style.row_title_style}>IV</div>
                            <div style={io_style.row_title_style}>Other</div>
                            <div style={io_style.row_title_style}>In:Sum</div>
                        </div>
                        <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr 1fr" }}>
                            {/* 大夜 */}
                            <div style={io_style.row_title_style}>Feed</div>
                            <div style={io_style.row_title_style}>IV</div>
                            <div style={io_style.row_title_style}>Other</div>
                            <div style={io_style.row_title_style}>In:Sum</div>
                        </div>
                        <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr 1fr" }}>
                            {/* 全日 */}
                            <div style={io_style.row_title_style}>Feed</div>
                            <div style={io_style.row_title_style}>IV</div>
                            <div style={io_style.row_title_style}>Other</div>
                            <div style={io_style.row_title_style}>In:Sum</div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: this.switch_state_title() + this.switch_state() + "fr", border: "black 2px solid", borderTopWidth: "0px" }}>
                    <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr 1fr" }}>
                        <div style={io_style.row_title_style}>Feed</div>
                        <div style={io_style.row_title_style}>IV</div>
                        <div style={io_style.row_title_style}>Other</div>
                        <div style={io_style.row_title_style}>In:Sum</div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(" + this.switch_state() + ",1fr)" }}>
                        <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr 1fr" }}>
                            <div style={io_style.row_title_style}>Feed</div>
                            <div style={io_style.row_title_style}>IV</div>
                            <div style={io_style.row_title_style}>Other</div>
                            <div style={io_style.row_title_style}>In:Sum</div>
                        </div>
                        <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr 1fr" }}>
                            <div style={io_style.row_title_style}>Feed</div>
                            <div style={io_style.row_title_style}>IV</div>
                            <div style={io_style.row_title_style}>Other</div>
                            <div style={io_style.row_title_style}>In:Sum</div>
                        </div>
                        <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr 1fr" }}>
                            <div style={io_style.row_title_style}>Feed</div>
                            <div style={io_style.row_title_style}>IV</div>
                            <div style={io_style.row_title_style}>Other</div>
                            <div style={io_style.row_title_style}>In:Sum</div>
                        </div>
                        <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr 1fr" }}>
                            <div style={io_style.row_title_style}>Feed</div>
                            <div style={io_style.row_title_style}>IV</div>
                            <div style={io_style.row_title_style}>Other</div>
                            <div style={io_style.row_title_style}>In:Sum</div>
                        </div>
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: this.switch_state_title() + this.switch_state() + "fr", border: "black 2px solid", borderTopWidth: "0px" }}>
                    <div style={io_style.row_title_style}>I-O</div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(" + this.switch_state() + ",1fr)" }}>
                        <div style={io_style.row_title_style}>Feed</div>
                        <div style={io_style.row_title_style}>IV</div>
                        <div style={io_style.row_title_style}>Other</div>
                        <div style={io_style.row_title_style}>In:Sum</div>
                    </div>
                </div>
            </div>
        );
    }

}

export default IOpage;