import React, { Component } from 'react';
import { Tabs } from 'antd';
import Controlbar from './Controlbar'

const { TabPane } = Tabs;

class Crosssectionlayout extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <div>
                    <div style={{ margin: '2px' }}>
                        <Tabs defaultActiveKey="1" onChange={console.log("click")}>
                            <TabPane tab="Cross Section View" key="1">
                                <div style={{ background: '#dddddd', display: 'flex', alignItems: 'center', marginTop: '2px' }}>
                                    <span style={{ margin: '10px', display: 'flex', flexWrap: 'wrap', margin: '2px', fontSize: '16px' }}>
                                        病歷號碼:0123456789&nbsp;
                                        出生日期:2999-12-32&nbsp;
                                        聯絡電話:0970-787-787&nbsp;
                                        轉入時間:2017-12-12&nbsp;
                                        主治醫師:陳國榮醫師&nbsp;
                                        備註:背著內容限制20個字
                                    </span>
                                </div>
                                <Controlbar></Controlbar>
                            </TabPane>
                            <TabPane tab="Chronicle View" key="2">
                                Content of Tab Pane 2
                            </TabPane>
                            <TabPane tab="Flow Sheet" key="3">
                                Content of Tab Pane 3
                            </TabPane>
                            <TabPane tab="Exam & Report" key="4">
                                Content of Tab Pane 3
                            </TabPane>
                            <TabPane tab="Order view" key="5">
                                Content of Tab Pane 3
                            </TabPane>
                            <TabPane tab="Note" key="6">
                                Content of Tab Pane 3
                            </TabPane>
                            <TabPane tab="RT" key="7">
                                Content of Tab Pane 3
                            </TabPane>
                            <TabPane tab="Nurtion" key="8">
                                Content of Tab Pane 3
                            </TabPane>
                            <TabPane tab="Infection" key="9">
                                Content of Tab Pane 3
                            </TabPane>
                            <TabPane tab="Schedule" key="10">
                                Content of Tab Pane 3
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
        );
    }
}

export default Crosssectionlayout;