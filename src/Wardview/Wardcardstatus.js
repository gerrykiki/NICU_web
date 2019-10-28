import React, { Component } from 'react';

class Wardcarstatus extends Component {

    status_background_switch(item) {
        //console.log(item);
        switch (item) {
            case "Depends":
                return "rgba(232,152,162,1)"
            case "TPN":
                return "rgba(195,153,115,1)"
            case "NPO":
                return "rgba(61, 119, 181, 1)"
            case "HD":
                return "rgba(241, 204, 115, 1)"
            case "Anti":
                return "rgba(155, 202, 100, 1)"
            case "Foley":
                return "rgba(65, 165, 181, 1)"
            case "Drain":
                return "rgba(25,26,144,1)"
            default:
                return null
        }
    }

    status_titlestring_switch(item) {
        //console.log(item);
        switch (item) {
            case "Depends":
                return "呼(侵入)"
            case "TPN":
                return "TPN"
            case "NPO":
                return "NPO"
            case "HD":
                return "HD"
            case "Anti":
                return "Anti"
            case "Foley":
                return "Floey"
            case "Drain":
                return "Drain"
            default:
                return item
        }
    }

    style_change(source) {
        if (source.data) {
            const backgroungcolor = this.status_background_switch(source.item)
            const status_true_style = { display: "flex", alignItems: "center", justifyContent: "center", width: "100%", background: backgroungcolor, color: "white", borderRadius: "4px" }
            return status_true_style
        }
        else {
            const status_false_style = { borderWidth: "1px", borderColor: "rgba(187, 187, 187, 1)", borderStyle: "solid", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(187, 187, 187, 1)", width: "100%" }
            return status_false_style
        }
    }
    render() {    // 宣告一個新的 state 變數，我們稱作為「count」。
        const status_data = this.props.data
        console.log(status_data)
        return (
            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr", gridGap: "10px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gridGap: "5px" }}>
                    <div style={this.style_change(status_data[0])}>
                        {this.status_titlestring_switch(status_data[0].item)}
                    </div>
                    <div style={this.style_change(status_data[1])}>
                        {this.status_titlestring_switch(status_data[1].item)}
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridGap: "5px" }}>
                    <div style={this.style_change(status_data[2])}>
                        {this.status_titlestring_switch(status_data[2].item)}
                    </div>
                    <div style={this.style_change(status_data[3])}>
                        {this.status_titlestring_switch(status_data[3].item)}
                    </div>
                    <div style={this.style_change(status_data[4])}>
                        {this.status_titlestring_switch(status_data[4].item)}
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridGap: "5px" }}>
                    <div style={this.style_change(status_data[5])}>
                        {this.status_titlestring_switch(status_data[5].item)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Wardcarstatus