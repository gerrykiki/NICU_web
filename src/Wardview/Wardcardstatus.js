import React, { Component } from 'react';

class Wardcarstatus extends Component {

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
                return "Foley"
            case "Drain":
                return "Drain"
            default:
                return item
        }
    }

    style_change(source) {
        if (source.data) {
            const status_true_style = { display: "flex", alignItems: "center", justifyContent: "center", width: "100%", background: "rgba(64, 121, 182, 1)", color: "white", borderRadius: "4px" }
            return status_true_style
        }
        else {
            const status_false_style = { borderWidth: "1px", borderColor: "rgba(187, 187, 187, 1)", borderStyle: "solid", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(187, 187, 187, 1)", width: "100%" }
            return status_false_style
        }
    }
    render() {
        // 宣告一個新的 state 變數，我們稱作為「count」。
        const { data } = this.props
        return (
            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr", gridGap: "10px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gridGap: "5px" }}>
                    <div style={this.style_change(data[0])}>
                        {this.status_titlestring_switch(data[0].item)}
                    </div>
                    <div style={this.style_change(data[1])}>
                        {this.status_titlestring_switch(data[1].item)}
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridGap: "5px" }}>
                    <div style={this.style_change(data[2])}>
                        {this.status_titlestring_switch(data[2].item)}
                    </div>
                    <div style={this.style_change(data[3])}>
                        {this.status_titlestring_switch(data[3].item)}
                    </div>
                    <div style={this.style_change(data[4])}>
                        {this.status_titlestring_switch(data[4].item)}
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridGap: "5px" }}>
                    <div style={this.style_change(data[5])}>
                        {this.status_titlestring_switch(data[5].item)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Wardcarstatus