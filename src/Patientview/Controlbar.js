import React, { Component } from 'react';
import { Button, DatePicker } from 'antd';
import displaylogo from '../Image/svg/Display.svg'


class Controlbar extends Component {
    //快速滑動
    scrollToAnchor = (anchorName) => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if (anchorElement) { anchorElement.scrollIntoView(); }
        }
    }

    render() {
        const { btnlist, tagdisplay } = this.props
        if (tagdisplay === "flex") {
            var btn = btnlist.map(
                (item, index) => <Button onClick={this.scrollToAnchor.bind(this, item.scrollpoint)} key={index} style={{ margin: '5px', borderRadius: "16px", height: "32px", color: "rgba(245, 166, 35, 1)", borderColor: "rgba(245, 166, 35, 1)", borderWidth: "1px", borderStyle: "solid" }}>{item.name}</Button>
            )
        }
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(255, 249, 237, 1)', padding: "8px" }}>
                <div>
                    <DatePicker placeholder="選擇轉出時間" />
                </div>
                <div style={{ display: tagdisplay, alignItems: 'center' }}>
                    <div style={{ fontSize: "16px" }}>項目切換：</div>
                    {btn}
                    <img src={displaylogo} alt='displaylogo' style={{fontSize:'16px'}}></img>
                </div>
            </div>

        );
    }
}

export default Controlbar;