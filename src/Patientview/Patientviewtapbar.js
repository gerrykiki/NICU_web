import React, { Component } from 'react';
import { Tabs } from 'antd';
import Crosssectionlayout from './CrossSectionView/Crosssectionlayout'
import Chroniclelayout from './ChronicleView/Chroniclelayout'

class Patientviewtapbar extends Component {



    render() {
        const { TabPane } = Tabs;
        return (
            <div style={{paddingRight:"24px",paddingLeft:"24px"}}>
                <Tabs defaultActiveKey="2" onChange={console.log("click")}å>
                    <TabPane tab="Cross Section View" key="1">
                        <Crosssectionlayout></Crosssectionlayout>
                    </TabPane>
                    <TabPane tab="Chronicle View" key="2">
                        <Chroniclelayout></Chroniclelayout>
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
        );
    }
}

export default Patientviewtapbar;