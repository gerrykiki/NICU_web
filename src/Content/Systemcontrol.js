import React, { Component } from 'react';
import { Tabs } from 'antd';
import Powersetting from '../Systemgroup/powersetting'
import Systemlog from '../Systemgroup/Systemlog'
import Warningmanage from '../Systemgroup/Warningmanage'


class Systemcontrol extends Component {

    render() {

        const { TabPane } = Tabs;
        return (
            <div style={{ paddingLeft: "24px", paddingRight: "24px" }}>
                <div style={{ fontSize: "22px", height: '50px', lineHeight: "50px" }}>歷史病歷管理</div>
                <Tabs defaultActiveKey="5" onChange={console.log("click")}å>
                    <TabPane tab="權限設定" key="1">
                        <Powersetting/>
                    </TabPane>
                    <TabPane tab="系統摘要" key="2">
                        <Systemlog/>
                    </TabPane>
                    <TabPane tab="病人資料狀態管理" key="3">
                    </TabPane>
                    <TabPane tab="裝置連線狀態管理" key="4">
                    </TabPane>
                    <TabPane tab="警示管理" key="5">
                        <Warningmanage/>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default Systemcontrol;