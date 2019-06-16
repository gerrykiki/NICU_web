import React, { Component } from 'react';
import { Radio } from 'antd';

class Bedview extends Component {

    state = {
        value: 1
    };

    onChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        return (
            <div>
                <div style={{ background: '#fff', height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Radio.Group style={{ marginLeft: 20 }} onChange={this.onChange} value={this.state.value}>
                        <Radio style={{ color: '#000' }} value={1}>簡易顯示</Radio>
                        <Radio style={{ color: '#000' }} value={2}>詳細顯示</Radio>
                    </Radio.Group>
                    <span style={{ color: '#000', width: 'auto', marginRight: 20 }}>資料更新時間 {new Date().toLocaleDateString()}</span>
                </div>
                <div style={{ padding: 1, background: '#fff', display: 'flex' }}>
                    <div style={{ background: '#333', height: '1000px', margin: '10px', flexGrow: 1 }}>
                    </div>
                    <div style={{ background: '#333', height: '1000px', margin: '10px', flexGrow: 2 }}>
                    </div>
                </div>
            </div>
        );
    }
}

export default Bedview;