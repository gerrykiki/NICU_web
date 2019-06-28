import React, { Component } from 'react';
import { Card, Button, Checkbox } from 'antd';

class Wardinfo extends Component {


    state = {
        MedInfostate: false
    };

    onChangeMedInfo = () => {
        this.setState({
            MedInfostate: !this.state.MedInfostate,
        });
    }
    MedInfo = () => {
        if (this.state.MedInfostate) {
            return (
                <div>
                </div>
            );
        }
        else {
            return (
                <div>
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
                </div>
            );

        }
    }

    render() {
        return (
            <div>

                <div style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#333', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    個案資訊摘要
                        </div>
                <div style={{ borderTopWidth: '0px', borderBottomWidth: '1px', borderLeftWidth: '1px', borderRightWidth: '1px', borderStyle: 'solid', borderColor: '#333' }}>
                    <div style={{ height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span>
                            <Button type="link">
                                &larr;返回病房資訊總覽
                                    </Button>
                        </span>
                        <span>
                            <Button type="link">
                                前往個案頁面&rarr;
                                    </Button>
                        </span>
                    </div>
                    <div style={{ height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px' }}>
                        <div style={{ margin: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>
                                <div style={{ height: '20px' }}>
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
                            <Button type="link" block onClick={this.onChangeMedInfo}>
                                隱藏醫療團隊資訊
                                    </Button>
                        </span>
                    </div>
                    <div style={{ height: '10px' }}></div>
                    {this.MedInfo()}
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                        <Card style={{ height: '200px', margin: '5px', width: '97%' }} title="過去一週生命跡象" bordered={true} headStyle={{ textAlign: 'center' }}>
                            <p>Card content</p>
                        </Card>
                        <Card style={{ margin: '5px', width: '47%' }} title="Schedule" bordered={true} headStyle={{ textAlign: 'center' }}>
                            <div style={{ overflow: 'auto', height: '150px' }}>
                                <Checkbox>Checkbox</Checkbox><br></br>
                                <Checkbox>Checkbox</Checkbox><br></br>
                                <Checkbox>Checkbox</Checkbox><br></br>
                                <Checkbox>Checkbox</Checkbox><br></br>
                                <Checkbox>Checkbox</Checkbox><br></br>
                                <Checkbox>Checkbox</Checkbox><br></br>
                                <Checkbox>Checkbox</Checkbox><br></br>
                                <Checkbox>Checkbox</Checkbox><br></br>
                            </div>
                        </Card>
                        <Card style={{ margin: '5px', width: '47%' }} title="Schedule" bordered={true} headStyle={{ textAlign: 'center' }}>
                            <div style={{ overflow: 'auto', height: '150px' }}>
                                <Checkbox>Checkbox</Checkbox><br></br>
                                <Checkbox>Checkbox</Checkbox><br></br>
                                <Checkbox>Checkbox</Checkbox><br></br>
                                <Checkbox>Checkbox</Checkbox><br></br>
                                <Checkbox>Checkbox</Checkbox><br></br>
                                <Checkbox>Checkbox</Checkbox><br></br>
                                <Checkbox>Checkbox</Checkbox><br></br>
                                <Checkbox>Checkbox</Checkbox><br></br>
                            </div>
                        </Card>
                        <Card style={{ margin: '5px', width: '47%' }} title="待辦事項" bordered={true} headStyle={{ textAlign: 'center' }}>
                            <div style={{ overflow: 'auto', height: '100px' }}>
                                <Checkbox>Checkbox</Checkbox><br></br>
                                <Checkbox>Checkbox</Checkbox><br></br>
                                <Checkbox>Checkbox</Checkbox><br></br>
                                <Checkbox>Checkbox</Checkbox><br></br>
                                <Checkbox>Checkbox</Checkbox><br></br>
                                <Checkbox>Checkbox</Checkbox><br></br>
                                <Checkbox>Checkbox</Checkbox><br></br>
                                <Checkbox>Checkbox</Checkbox><br></br>
                            </div>
                        </Card>
                        <Card style={{ margin: '5px', width: '47%' }} title="待辦事項" bordered={true} headStyle={{ textAlign: 'center' }}>
                            <div style={{ overflow: 'auto', height: '100px' }}>
                                <Checkbox>Checkbox</Checkbox><br></br>
                                <Checkbox>Checkbox</Checkbox><br></br>
                                <Checkbox>Checkbox</Checkbox><br></br>
                                <Checkbox>Checkbox</Checkbox><br></br>
                                <Checkbox>Checkbox</Checkbox><br></br>
                                <Checkbox>Checkbox</Checkbox><br></br>
                                <Checkbox>Checkbox</Checkbox><br></br>
                                <Checkbox>Checkbox</Checkbox><br></br>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default Wardinfo;