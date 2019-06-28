import React, { Component } from 'react';
import { Switch, Card } from 'antd';
import "./Bedview.css"
import Wardinfo from './Wardinfo';
import Wardcard from './Wardcard'

class Bedview extends Component {

    state = {
        displaymode: false,
        simplemode: false,
        MedInfostate: false
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
                    <div>
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
                        <Wardcard/>
                        <Wardcard/>
                        <Wardcard/>
                        <Wardcard/>
                        <Wardcard/>
                        <Wardcard/>
                        <Wardcard/>
                        <Wardcard/>
                        <Wardcard/>
                        <Wardcard/>
                        <Wardcard/>
                    </div>
                    <div className="wardinfocontent">
                        <Wardinfo />
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