import React, { Component } from 'react';
import { Button, Icon } from 'antd';



class Controlbar extends Component {
    render() {
        return (
            <div style={{ background: '#ddd', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Button style={{ margin: '5px' }}>
                    <Icon type="step-backward" />
                </Button>
                <Button style={{ margin: '5px' }}>
                    <Icon type="caret-left" />
                </Button>
                <Button style={{ margin: '5px' }}>
                    <Icon type="caret-right" />
                </Button>
                <Button style={{ margin: '5px' }}>
                    <Icon type="step-forward" />
                </Button>
            </div>

        );
    }
}

export default Controlbar;