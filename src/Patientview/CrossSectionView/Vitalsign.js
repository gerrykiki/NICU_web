import React, { Component } from 'react';
import { Button,Card } from 'antd';


class Vitalsign extends Component {
    render() {
        return (
            <div style={{ width: '45%', margin: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',height:'40px'  }}>
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
            </div>
        );
    }

}

export default Vitalsign;