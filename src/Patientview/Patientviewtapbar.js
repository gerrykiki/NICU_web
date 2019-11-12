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
            <div style={{padding:"0px 24px"}}>
                <Tabs defaultActiveKey="時間點檢視" tabPosition={'top'}>
                    <TabPane tab="時間點檢視" key="時間點檢視">
                        <Crosssectionlayout userdata={userdata}></Crosssectionlayout>
                    </TabPane>
                    <TabPane tab="時間軸檢視" key="時間軸檢視">
                        <Chroniclelayout userdata={userdata}></Chroniclelayout>
                    </TabPane>
                    <TabPane tab="輸出入細節" key="輸出入細節">
                        <Flowsheetlayout></Flowsheetlayout>
                    </TabPane>
                    <TabPane tab="檢驗及報告" key="檢驗及報告">
                        <Examreport></Examreport>
                    </TabPane>
                    <TabPane tab="醫囑及藥囑" key="醫囑及藥囑">
                        <Orderview searchbar={true}></Orderview>
                    </TabPane>
                    <TabPane tab="跨團隊紀錄" key="跨團隊紀錄">
                        <Noteview></Noteview>
                    </TabPane>
                    <TabPane tab="呼吸評估" key="呼吸評估">
                        <RTview></RTview>
                    </TabPane>
                    <TabPane tab="營養評估" key="營養評估">
                        <Nurtionview userdata={userdata}></Nurtionview>
                    </TabPane>
                    <TabPane tab="感染評估" key="感染評估">
                        <Infectionview></Infectionview>
                    </TabPane>
                    <TabPane tab="行事曆及註記" key="行事曆及註記">
                        <Scheduleview userdata={userdata}></Scheduleview>
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default Patientviewtapbar;