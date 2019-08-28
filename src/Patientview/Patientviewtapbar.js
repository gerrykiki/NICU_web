import React, { Component } from 'react';
import { Tabs } from 'antd';
import Crosssectionlayout from './CrossSectionView/Crosssectionlayout'
import Chroniclelayout from './ChronicleView/Chroniclelayout'
import Flowsheetlayout from './FlootSheetView/Flootsheetlayout'
import Examreport from './ExamReport/ExamReport'
import Orderview from './Orderview/Orderview'
import Noteview from './NoteView/Note'

class Patientviewtapbar extends Component {



    render() {
        const { TabPane } = Tabs;
        return (
            <div style={{paddingRight:"24px",paddingLeft:"24px"}}>
                <Tabs defaultActiveKey="6" onChange={console.log("click")}å>
                    <TabPane tab="Cross Section View" key="1">
                        <Crosssectionlayout></Crosssectionlayout>
                    </TabPane>
                    <TabPane tab="Chronicle View" key="2">
                        <Chroniclelayout></Chroniclelayout>
                    </TabPane>
                    <TabPane tab="Flow Sheet" key="3">
                        <Flowsheetlayout></Flowsheetlayout>
                    </TabPane>
                    <TabPane tab="Exam & Report" key="4">
                        <Examreport></Examreport>
                    </TabPane>
                    <TabPane tab="Order view" key="5">
                        <Orderview></Orderview>
                    </TabPane>
                    <TabPane tab="Note" key="6">
                        <Noteview></Noteview>
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