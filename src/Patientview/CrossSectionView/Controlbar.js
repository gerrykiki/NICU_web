import React, { Component } from 'react';
import { Button, DatePicker } from 'antd';


class Controlbar extends Component {
    render() {
        const { btnlist } = this.props

        let btn = btnlist.map(
            (item, index) => <Button key={index} style={{ margin: '5px', borderRadius: "16px", height: "32px", color: "rgba(245, 166, 35, 1)", borderColor: "rgba(245, 166, 35, 1)", borderWidth: "1px", borderStyle: "solid" }}>{item}</Button>
        )
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(255, 249, 237, 1)', padding: "8px" }}>
                <div>
                    <DatePicker placeholder="選擇轉出時間" />
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ fontSize: "16px" }}>項目切換：</div>
                    {btn}
                </div>
            </div>

        );
    }
}

export default Controlbar;