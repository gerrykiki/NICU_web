import React, { Component } from 'react';
import Controlbar from '../Controlbar'
import IOlayout from '../BasicIO'
import Chroniclevitalsign from './ChronicleVitalsign'
import Chroniclelab from './Chroniclelablayout'
import Chroniclert from './Chromiclertlayout'
import Chronicleorder from './Chronicorder'
import Chronicleinfection from './Chronicleinfectionlayout'

class Chroniclelayout extends Component {

    render() {

        const crosssectioncontrollist = [
            {
                "name": "vital",
                "scrollpoint": "vital_sign"
            },
            {
                "name": "I/O",
                "scrollpoint": "input_output"
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
            <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                <div></div>
            </div>
        );
    }
}

export default Chroniclelayout;