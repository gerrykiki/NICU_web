import React, { Component } from 'react';
import { Tabs } from 'antd';
import Crosssectionlayout from './CrossSectionView/Crosssectionlayout'
import Chroniclelayout from './ChronicleView/Chroniclelayout'
import Flowsheetlayout from './FlootSheetView/Flootsheetlayout'
import Examreport from './ExamReport/ExamReport'
import Orderview from './Orderview/Orderview'
import Noteview from './NoteView/Note'
import RTview from './RT/RTview'
import Nurtionview from './Nurtion/Nurtion'
import Infectionview from './Infection/Infection'
import Scheduleview from './Schedule/Scheduleview'

class Patientviewtapbar extends Component {

    render() {
        const { TabPane } = Tabs;
        const { userdata } = this.props
        return (
            <div style={{ paddingRight: "24px", paddingLeft: "24px" }}>
                <Tabs defaultActiveKey="1" onChange={console.log("click")} tabPosition={'top'}>
                    <TabPane tab="時間點檢視" key="1">
                        <Crosssectionlayout userdata={userdata}></Crosssectionlayout>
                    </TabPane>
                    <TabPane tab="時間軸檢視" key="2">
                        <Chroniclelayout userdata={userdata}></Chroniclelayout>
                    </TabPane>
                    <TabPane tab="輸出入細節" key="3">
                        <Flowsheetlayout></Flowsheetlayout>
                    </TabPane>
                    <TabPane tab="檢驗及報告" key="4">
                        <Examreport></Examreport>
                    </TabPane>
                    <TabPane tab="醫囑及藥囑" key="5">
                        <Orderview searchbar={true}></Orderview>
                    </TabPane>
                    <TabPane tab="跨團隊紀錄" key="6">
                        <Noteview></Noteview>
                    </TabPane>
                    <TabPane tab="呼吸評估" key="7">
                        <RTview></RTview>
                    </TabPane>
                    <TabPane tab="營養評估" key="8">
                        <Nurtionview userdata={userdata}></Nurtionview>
                    </TabPane>
                    <TabPane tab="感染評估" key="9">
                        <Infectionview></Infectionview>
                    </TabPane>
                    <TabPane tab="行事曆及註記" key="10">
                        <Scheduleview userdata={userdata}></Scheduleview>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default Patientviewtapbar;