import React, { Component } from 'react';
import { Switch} from 'antd';

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
                    <div style={{ background: '#333', height: '1000px', margin: '10px', flexGrow: 1 }}>
                    </div>
                    <div style={{ background: '#333', height: '1000px', margin: '10px', flexGrow: 2 }}>
                    </div>
                </div>
            );

        }
        else if (this.state.displaymode && !this.state.simplemode) {
            console.log("3");
            return (
                <div style={{ padding: 1, background: '#fff', display: 'flex' }} >
                    <div style={{ background: '#333', height: '1000px', margin: '10px', flexGrow: 1 }}>
                    </div>
                </div>
            );

        }
        else {
            console.log("4");
            return (
                <div style={{ padding: 1, background: '#fff', display: 'flex' }}>
                    <div style={{ background: '#333', height: '1000px', margin: '10px', flexGrow: 1 }}>
                    </div>
                    <div style={{ background: '#333', height: '1000px', margin: '10px', flexGrow: 2 }}>
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
                    <span style={{ color: '#000', width: 'auto', marginLeft: 10 }}>資料更新時間 {new Date().toLocaleDateString()}</span>
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