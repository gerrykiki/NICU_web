import React, { Component } from 'react';
import { Switch, Card, Button } from 'antd';
import "./Bedview.css"

class Bedview extends Component {

    state = {
        displaymode: false,
        simplemode: false
    };

    onChangesimple = (checked) => {
        console.log(`switch to ${checked}`);
        this.setState({
            simplemode: !this.state.simplemode,
        });
    }



    onChangedisplay = (checked) => {
        console.log(`switch to ${checked}`);
        this.setState({
            displaymode: !this.state.displaymode,
        });
    }

    contentview = () => {
        if (this.state.displaymode && this.state.simplemode) {
            console.log("1");
            return (
                <div style={{ padding: 1, background: '#fff', display: 'flex' }}>
                    <div style={{ background: '#333', height: '1000px', margin: '10px', flexGrow: 1 }}>
                    </div>
                </div>
            );
        }
        else if (!this.state.displaymode && this.state.simplemode) {
            console.log("2");
            return (
                <div style={{ padding: 1, background: '#fff', display: 'flex' }}>
                    <div style={{ background: '#333', height: 'auto', margin: '10px', flexGrow: 1, flexWrap: 'wrap', display: 'flex', width: '35%', justifyContent: 'space-between', padding: '5px' }}>
                        <Card title="Card title" bordered={false} style={{ width: '90%', height: 200, margin: '5px' }}>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </div>
                    <div style={{ background: '#333', height: 'auto', margin: '10px', flexGrow: 2, width: '65%' }}>
                    </div>
                </div>
            );

        }
        else if (this.state.displaymode && !this.state.simplemode) {
            console.log("3");
            return (
                <div style={{ padding: 1, background: '#fff', display: 'flex' }} >
                    <div className="wardcontentlarge">
                        <Card className="wardcardlarge" title="Card title" bordered={false}>
                            <p>Card content</p>
                        </Card>
                        <Card className="wardcardlarge" title="Card title" bordered={false}>
                            <p>Card content</p>
                        </Card>
                        <Card className="wardcardlarge" title="Card title" bordered={false}>
                            <p>Card content</p>
                        </Card>
                        <Card className="wardcardlarge" title="Card title" bordered={false}>
                            <p>Card content</p>
                        </Card>
                        <Card className="wardcardlarge" title="Card title" bordered={false}>
                            <p>Card content</p>
                        </Card>
                        <Card className="wardcardlarge" title="Card title" bordered={false}>
                            <p>Card content</p>
                        </Card>
                        <Card className="wardcardlarge" title="Card title" bordered={false}>
                            <p>Card content</p>
                        </Card>
                        <Card className="wardcardlarge" title="Card title" bordered={false}>
                            <p>Card content</p>
                        </Card>
                        <Card className="wardcardlarge" title="Card title" bordered={false}>
                            <p>Card content</p>
                        </Card>
                        <Card className="wardcardlarge" title="Card title" bordered={false}>
                            <p>Card content</p>
                        </Card>
                    </div>
                </div>
            );

        }
        else {
            console.log("4");
            return (
                <div style={{ padding: 1, background: '#fff', display: 'flex' }}>
                    <div className="wardcontent">
                        <Card style={{ height: '200px' }} className="wardcard" title="Card title" bordered={true}>
                            <p>Card content</p>
                        </Card>
                        <Card style={{ height: '200px' }} className="wardcard" title="Card title" bordered={true}>
                            <p>Card content</p>
                        </Card>
                        <Card style={{ height: '200px' }} className="wardcard" title="Card title" bordered={true}>
                            <p>Card content</p>
                        </Card>
                        <Card style={{ height: '200px' }} className="wardcard" title="Card title" bordered={true}>
                            <p>Card content</p>
                        </Card>
                        <Card style={{ height: '200px' }} className="wardcard" title="Card title" bordered={true}>
                            <p>Card content</p>
                        </Card>
                        <Card style={{ height: '200px' }} className="wardcard" title="Card title" bordered={true}>
                            <p>Card content</p>
                        </Card>
                        <Card style={{ height: '200px' }} className="wardcard" title="Card title" bordered={true}>
                            <p>Card content</p>
                        </Card>
                    </div>
                    <div className="wardinfocontent">
                        <div style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#333', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            個案資訊摘要
                        </div>
                        <div style={{ borderTopWidth: '0px', borderBottomWidth: '1px', borderLeftWidth: '1px', borderRightWidth: '1px', borderStyle: 'solid', borderColor: '#333', padding: '5px' }}>
                            <div style={{ height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px' }}>
                                <span>
                                    &larr;返回病房資訊總覽
                                </span>
                                <span>
                                    前往個案頁面&rarr;
                                </span>
                            </div>
                            <div style={{ height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px' }}>
                                <div style={{ display: 'flex', margin: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <span>
                                        <div style={{ height: '20px'}}>
                                            病床
                                            </div>
                                        <div style={{ height: '20px' }}></div>
                                    </span>
                                    <span style={{ fontSize: '50px' }}>
                                        01
                                    </span>
                                    <span>
                                        <div style={{ height: '20px', fontWeight: 'bold' }}>
                                            程子倩 / Ch01 / 女 / 13週
                                    </div>
                                        <div style={{ height: '20px' }}>
                                            病歷浩:XXXXX-XXXXX   3700g (+700g)
                                    </div>
                                    </span>

                                </div>
                                <span>
                                    <Button disabled={true}>呼</Button>&nbsp;
                                    <Button disabled={true}>TPN</Button>&nbsp;
                                    <Button disabled={true}>NP0</Button>&nbsp;
                                    <Button>透</Button>&nbsp;
                                    <Button>葉</Button>&nbsp;
                                    <Button>抗</Button>
                                </span>
                            </div>
                            <div style={{ height: '20px' }}></div>
                            <div style={{ borderTopWidth: '1px', borderTopColor: 'back', borderTopStyle: 'solid', position: 'relative', margin: '5px' }}>
                                <span style={{ height: '50px', background: '#fff', textAlign: 'center', lineHeight: '50px', color: '#666666', position: 'absolute', top: '-25px', left: '50px' }}>
                                    主治醫師 陳國榮
                                </span>
                                <span style={{ height: '50px', background: '#fff', textAlign: 'center', lineHeight: '50px', color: '#666666', position: 'absolute', top: '-25px', right: '0px' }}>
                                    <Button type="link" block>
                                        隱藏醫療團隊資訊
                                    </Button>
                                </span>
                            </div>
                            <div style={{ height: '10px' }}></div>
                            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <div style={{ height: '60px', width: '150px', background: '#bebebe', margin: '10px' }}>
                                    <div style={{ height: '15px', margin: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        主治醫師
                                    </div>
                                    <div style={{ fontSize: '30px', height: '35px', margin: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        陳國榮
                                    </div>
                                </div>
                                <div style={{ height: '60px', width: '150px', background: '#bebebe', margin: '10px' }}>
                                    <div style={{ height: '15px', margin: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        住院醫師
                                    </div>
                                    <div style={{ fontSize: '30px', height: '35px', margin: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        劉珈慶
                                    </div>
                                </div>
                            </div>
                            <div style={{ height: '10px' }}></div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                                <Card style={{ height: '200px', margin: '5px', width: '97%' }} title="過去一週生命跡象" bordered={true} headStyle={{ textAlign: 'center' }}>
                                    <p>Card content</p>
                                </Card>
                                <Card style={{ height: '300px', margin: '5px', width: '47%' }} title="最近檢驗項目" bordered={true} headStyle={{ textAlign: 'center' }}>
                                    <p>Card content</p>
                                </Card>
                                <Card style={{ height: '300px', margin: '5px', width: '47%' }} title="Schedule" bordered={true} headStyle={{ textAlign: 'center' }}>
                                    <p>Card content</p>
                                </Card>
                                <Card style={{ height: '300px', margin: '5px', width: '47%' }} title="待辦事項" bordered={true} headStyle={{ textAlign: 'center' }}>
                                    <p>Card content</p>
                                </Card>
                                <Card style={{ height: '300px', margin: '5px', width: '47%' }} title="備註" bordered={true} headStyle={{ textAlign: 'center' }}>
                                    <p>Card content</p>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            );

        }
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div style={{ background: '#fff', height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#000', width: 'auto', marginLeft: 10 }}>資料更新時間 {new Date().toLocaleString()}</span>
                    <span>
                        <Switch style={{ marginRight: 5 }} checkedChildren="簡易資料" unCheckedChildren="詳細資料" defaultChecked onChange={this.onChangesimple} />
                        <Switch style={{ marginLeft: 5, marginRight: 10 }} checkedChildren="顯示摘要" unCheckedChildren="隱藏摘要" defaultChecked onChange={this.onChangedisplay} />
                    </span>
                </div>
                <div >
                    {this.contentview()}
                </div>
            </div>
        );
    }
}

export default Bedview;