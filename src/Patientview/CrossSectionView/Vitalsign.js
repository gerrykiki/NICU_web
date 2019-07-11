import React, { Component } from 'react';
import { Button } from 'antd';


class Vitalsign extends Component {
    render() {
        return (
            <div style={{ width: '50%', margin: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontWeight: 'bold' }}>
                        Vital Sign(一天生命徵象)
                    </div>
                    <div style={{ display: 'flex', alignContent: 'center' }}>
                        <Button style={{ margin: '5px' }}>
                            1天
                        </Button>
                        <Button style={{ margin: '5px' }}>
                            3天
                        </Button>
                        <Button style={{ margin: '5px' }}>
                            1週
                        </Button>
                        <Button style={{ margin: '5px' }}>
                            月
                        </Button>
                    </div>
                </div>
                <hr></hr>
                <Card title="Default size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
        );
    }

}

export default Vitalsign;