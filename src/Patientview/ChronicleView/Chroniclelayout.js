import React, { Component } from 'react';
import Controlbar from '../CrossSectionView/Controlbar'
import Chroniclevitalsign from './ChronicleVitalsign'
import Chronicleio from './Chronicleiolayout'
import Chroniclelab from './Chroniclelablayout'
import Chroniclert from './Chromiclertlayout'
import Chronicleorder from './Chronicorder'
import Chronicleinfection from './Chronicleinfectionlayout'

class Chroniclelayout extends Component {
    render() {
        
        const crosssectioncontrollist = [
            {
                "name": "vital",
                "scrollpoint": "vitalsign"
            },
            {
                "name": "I/O",
                "scrollpoint": "io"
            },
            {
                "name": "Lab",
                "scrollpoint": "lab"
            },
            {
                "name": "RT",
                "scrollpoint": "rt"
            },
            {
                "name": "Order",
                "scrollpoint": "order"
            },
            {
                "name": "Infection",
                "scrollpoint": "infection"
            }
        ]
        return (
            <div>
                <Controlbar btnlist={crosssectioncontrollist}></Controlbar>
                <div style={{ maxHeight: '75vh', overflowY: 'auto' }}>
                    <div>
                        <Chroniclevitalsign></Chroniclevitalsign>
                        <Chronicleio></Chronicleio>
                        <Chroniclelab></Chroniclelab>
                        <Chroniclert></Chroniclert>
                        <Chronicleorder></Chronicleorder>
                        <Chronicleinfection></Chronicleinfection>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chroniclelayout;