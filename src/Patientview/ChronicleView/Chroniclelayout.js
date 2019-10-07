import React, { Component } from 'react';
import Controlbar from '../Controlbar'
import IOlayout from '../BasicIO'
import Chroniclevitalsign from './ChronicleVitalsign'
import Chroniclelab from './Chroniclelablayout'
import Chroniclert from './Chromiclertlayout'
import Chronicleorder from './Chronicorder'
import Chronicleinfection from './Chronicleinfectionlayout'

class Chroniclelayout extends Component {
    simdata() {
        const Inputarray = []
        for (let index = 0; index < 24; index++) {
            const element = Math.floor(Math.random() * 100);
            Inputarray.push(element)
        }
        return Inputarray
    }

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

        //Sim IO data
        const IOsource = [
            {
                "item": "IV",
                "data": this.simdata()
            },
            {
                "item": "Feed",
                "data": this.simdata()
            },
            {
                "item": "Other",
                "data": this.simdata()
            },
            {
                "item": "Input",
                "data": this.simdata()
            },
            {
                "item": "Urine",
                "data": this.simdata()
            },
            {
                "item": "Output",
                "data": this.simdata()
            }
        ]


        return (
            <div>
                <Controlbar btnlist={crosssectioncontrollist} tagdisplay={"flex"}></Controlbar>
                <div id='Chroniclelayout' style={{ maxHeight: '75vh', overflowY: 'auto' }} >
                    <div>
                        <div id='Chroniclevitalsign'><Chroniclevitalsign ></Chroniclevitalsign></div>
                        <IOlayout IO_data={IOsource}></IOlayout>
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