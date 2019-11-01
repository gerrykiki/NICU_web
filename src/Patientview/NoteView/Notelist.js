import React, { Component } from 'react';
import { Button } from 'antd'
import Notecell from './Notecell'

class Notelist extends Component {
    state = {
        display: true
    }
    statechange() {
        this.setState(
            {
                display: !this.state.display
            }
        )
    }
    displayMode() {
        if (this.state.display) {
            return "none"
        }
        else {
            return "block"
        }
    }

    Dataformat() {
        const { start, End } = this.props
        const startTime = new Date(start).getTime() - (8 * 60 * 60 * 1000)
        const endTime = new Date(End).getTime() - (8 * 60 * 60 * 1000)
        const interval = (endTime - startTime) / (1000 * 60 * 60 * 24)

        const note_data = [{
            "NoteTime": 1566287810473,
            "Type": "Progress Note",
            "Content": "notenotenote",
        }, {
            "NoteTime": 1566374210000,
            "Type": "Progress Note",
            "Content": "notenotenote",
        }]



    }

    dateformat(startTime, interval) {
        var array = []
        for (let index = 0; index < interval + 1; index++) {
            const element = startTime + (index * 24 * 60 * 60 * 1000)
            array.push(element)
        }
        console.log(array)
        return array
    }

    render() {

        const { start, End } = this.props
        const startTime = new Date(start).getTime() - (8 * 60 * 60 * 1000)
        const endTime = new Date(End).getTime() - (8 * 60 * 60 * 1000)
        const interval = (endTime - startTime) / (1000 * 60 * 60 * 24)
        console.log(interval)
        var arraydata
        var date_item
        if (interval === 0) {
            arraydata = null
        }
        else {
            arraydata = this.dateformat(startTime, interval)
            date_item = arraydata.map((info, index) =>
                <Notecell key={index} infoDate={info}></Notecell>
            )
        }
        
        return (
            <div style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                {date_item}
            </div>
        );
    }
}

export default Notelist