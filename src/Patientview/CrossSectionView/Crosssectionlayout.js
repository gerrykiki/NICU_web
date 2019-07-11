import React, { Component } from 'react';
import { Tabs } from 'antd';
import Controlbar from '../Controlbar'


const { TabPane } = Tabs;

class Crosssectionlayout extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <div style={{ height: '40px', background: '#dddddd', display: 'flex', alignItems: 'center' }}>
                    <span style={{ margin: '10px' }}>
                        {this.props.route.breadcrumbName}
                    </span>
                </div>
                <div style={{ background: '#dddddd', display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                    <span style={{ margin: '10px', display: 'flex', flexWrap: 'wrap', margin: '10px', fontSize: '14px' }}>
                        姓名:王大明&nbsp;
                        身分證字號:A123456789&nbsp;
                        性別:男&nbsp;
                        年齡:3&nbsp;
                        病歷號碼:0123456789&nbsp;
                        出生日期:2999-12-32&nbsp;
                        聯絡電話:0970-787-787&nbsp;
                        轉入時間:2017-12-12&nbsp;
                        主治醫師:陳國榮醫師&nbsp;
                        備註:背著內容限制20個字
                    </span>
                </div>
                <div>
                    <div style={{ margin: '10px' }}>
                        <Tabs defaultActiveKey="1" onChange={console.log("click")}>
                            <TabPane tab="Cross Section View" key="1">
                                <Controlbar></Controlbar>
                            </TabPane>
                            <TabPane tab="Chromice View" key="2">
                                Content of Tab Pane 2
                            </TabPane>
                            <TabPane tab="Flow Sheet" key="3">
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