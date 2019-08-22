import React, { Component } from 'react';
import Controlbar from '../CrossSectionView/Controlbar'
import Vitalsign from '../CrossSectionView/Vitalsign'

class Chroniclelayout extends Component {
    render() {
        const crosssectioncontrollist = ["vital", "I/O", "RT", "Order", "Schedule&To Do List"]
        return (
            <div>
                <Controlbar btnlist={crosssectioncontrollist}></Controlbar>
                <div style={{ maxHeight: '75vh', overflowY: 'auto' }}>
                    <div>
                        <Vitalsign></Vitalsign>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chroniclelayout;