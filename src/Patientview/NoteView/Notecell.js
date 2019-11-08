import React, { Component } from 'react';

class Notecell extends Component {
    state = {
        displayMode: "none"
    }

    format_Data(data) {
        const { infoDate, rowdata } = this.props
    }

    sendData(info) {
        console.log(info)
        this.props.parentCallback(info);
    }

    display_rowdate(value) {
        console.log(value)
        const state = this.state.displayMode
        if (value === 0) {

        }
        else {
            if (state === 'none') {
                this.setState(
                    {
                        displayMode: "block"
                    }
                )
            }
            else {
                this.setState(
                    {
                        displayMode: "none"
                    }
                )
            }
        }

    }

    format_display_date(date) {
        const { display_date } = this.props
        if (date === display_date) {
            return true
        }
        else return false
    }

    render() {
        function remoteMonth(month) {
            return month + 1
        }
        function Dateformat(time) {
            return new Date(time).getFullYear() + "-" + remoteMonth(new Date(time).getMonth()) + "-" + new Date(time).getDate()
        }
        function Timeformat(time) {
            return new Date(time).getHours() + ":" + new Date(time).getMinutes()
        }
        function clickstyle(datanumber) {
            if (datanumber === 0) {
                return "default"
            }
            else return "pointer"
        }
        const { infoDate, rowdata, display_date } = this.props
        const date_style = {
            date_false:{ height: "40px", display: "flex", alignItems: "center", border: "rgba(238,238,238,1) 1px solid", borderTopWidth: "0px", cursor: "pointer" },
            date_true:{ height: "40px", display: "flex", alignItems: "center",background:"rgba(59, 151, 225,1)", border: "rgb(59, 151, 225) 100% 1px solid", borderTopWidth: "0px", cursor: "pointer" }
        }
        var filterData_Date = rowdata.filter(function (item, index, array) {
            return item.NoteTime - infoDate < 24 * 60 * 60 * 1000 && item.NoteTime - infoDate > 0;       // 取得大於五歲的
        });
        const roedata_layout = filterData_Date.map((info, index) =>
            <div onClick={() => this.sendData(info)} key={index} style={this.format_display_date(info.NoteTime)?date_style.date_true:date_style.date_false}>{Timeformat(info.NoteTime)}</div>
        )

        return (
            <div style={{ marginTop: "10px" }}>
                <div onClick={() => this.display_rowdate(filterData_Date.length)} style={{ height: "40px", display: "flex", alignItems: "center", justifyContent: "space-between", border: "rgba(238,238,238,1) 1px solid", cursor: clickstyle(filterData_Date.length) }}>
                    <div>{Dateformat(infoDate)}</div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "30px", height: "30px", borderRadius: "99em", background: "rgba(59, 151, 225, 1)", color: "white" }}>{filterData_Date.length}</div>
                </div>
                <div style={{ display: this.state.displayMode }}>{roedata_layout}</div>
            </div>
        );
    }
}

export default Notecell