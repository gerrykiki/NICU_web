import React, { Component } from 'react';

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

    Selectswitch(id ,select){
        if (id === select) {
            return true
        }
        else return false
    }
    render() {
        const { selectkey,idkey } = this.props
        const Unselect_tablestyle = {
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "rgba(238, 238, 238, 1)",
            fontSize: "16px"
        }
        const select = this.Selectswitch(selectkey,idkey)
        return (
            <div style={select ? { borderWidth: "2px", borderStyle: "solid", borderColor: "rgba(59, 151, 225, 1)" } : { borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(238, 238, 238, 1)" }} onMouseUp={() => this.sendReturnSelect(idkey)}>
                <div style={Unselect_tablestyle}>MM/DD</div>
                <div style={Unselect_tablestyle}>
                    <div style={{ textAlign: "center" }}>
                        <div>8(13)</div>
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