import React, { Component } from 'react';
import { Month_format } from '../Commonfunction'

class Bedinformation extends Component {
    state = {
        tableselect: false
    }

    SelectTruechange() {
        this.setState({
            tableselect: true
        })
    }

    SelectFalsechange() {
        this.setState({
            tableselect: false
        })
    }

    sendReturnSelect = (id) => {
        this.props.parentCallback(id);
    }

    Selectswitch(id, select) {
        if (id === select) {
            return true
        }
        else return false
    }
    render() {
        function weekdatformat(weekday) {
            switch (weekday) {
                case 0:
                    return "SUN"
                case 1:
                    return "MON"
                case 2:
                    return "TUE"
                case 3:
                    return "WED"
                case 4:
                    return "THU"
                case 5:
                    return "FRI"
                case 6:
                    return "SAT"
                default:
                    return null
            }
        }
        const { selectkey, idkey, localtime } = this.props
        const day = Month_format(new Date(localtime).getMonth()) + "/" + new Date(localtime).getDate()
        const weekday = new Date(localtime).getDay()
        const Unselect_tablestyle = {height: "50px",display: "flex",alignItems: "center",justifyContent: "center",borderWidth: "1px",borderStyle: "solid",borderColor: "rgba(238, 238, 238, 1)"}
        const select = this.Selectswitch(selectkey, idkey)
        return (
            <div style={select ? { borderWidth: "2px", borderStyle: "solid", borderColor: "rgba(59, 151, 225, 1)" } : { borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(238, 238, 238, 1)",cursor:"pointer" }} onClick={() => this.sendReturnSelect(idkey)}>
                <div style={Unselect_tablestyle}>
                    <div>
                        <div style={{ fontSize: "1rem", textAlign: "center" }}>{day}</div>
                        <div style={{ fontSize: "1rem", textAlign: "center" }}>{weekdatformat(weekday)}</div>
                    </div>
                </div>
                <div style={Unselect_tablestyle}>
                    <div style={{ textAlign: "center" }}>
                        <div>8(12)</div>
                        <div>62%</div>
                    </div>
                </div>
                <div style={Unselect_tablestyle}>--</div>
                <div style={Unselect_tablestyle}>4</div>
            </div>
        );
    }
}

export default Bedinformation