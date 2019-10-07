import React, { Component } from 'react';
import IOlayout from '../BasicIO'
import Controlbar from '../Controlbar';
import Flowsheetvitalsign from './Flootsheetvitalsign'

class Flowsheetlayout extends Component {

    simdata() {
        const Inputarray = []
        for (let index = 0; index < 24; index++) {
            const element = Math.floor(Math.random() * 100);
            Inputarray.push(element)
        }
        return Inputarray
    }

    render() {
        //Sim IO data
        const IOsource = [
            {
                "item": "IV (ml) 1/2NS FOR DRUG",
                "data": this.simdata()
            },
            {
                "item": "IV (ml) D10W",
                "data": this.simdata()
            },
            {
                "item": "IV (ml) IVIG",
                "data": this.simdata()
            },
            {
                "item": "UAC (ml) 1/2NS+HEPARIN",
                "data": this.simdata()
            },
            {
                "item": "UAC (ml) NS+HEPARIN",
                "data": this.simdata()
            },
            {
                "item": "UAC (ml) 20%TPN",
                "data": this.simdata()
            },
            {
                "item": "UAC (ml) Albumin 4cc+D5W 2cc",
                "data": this.simdata()
            },
            {
                "item": "UVC (ml) D20W",
                "data": this.simdata()
            },
            {
                "item": "UVC (ml) Dopamin 21.6 mg in D5W",
                "data": this.simdata()
            },
            {
                "item": "UVC (ml)Dopamin 21.6 mg  in D5W",
                "data": this.simdata()
            },
            {
                "item": "FFP (ml)",
                "data": this.simdata()
            },
            {
                "item": "PRBC (ml)",
                "data": this.simdata()
            },
            {
                "item": "Plt.Ph (ml)",
                "data": this.simdata()
            },
            {
                "item": "PO (ml)",
                "data": this.simdata()
            },
            {
                "item": "NG/OG (ml)",
                "data": this.simdata()
            },
            {
                "item": "RV (ml)",
                "data": this.simdata()
            }
        ]


        return (
            <div>
                <Controlbar tagdisplay={"none"}></Controlbar>
                <div id='Flowsheetlayout' style={{ maxHeight: '75vh', overflowY: 'auto' }}>
                <div><Flowsheetvitalsign></Flowsheetvitalsign></div>
                    <div>
                        <IOlayout IO_data={IOsource}></IOlayout>
                    </div>
                </div>
            </div>
        );
    }
}

export default Flowsheetlayout;