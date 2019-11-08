import React, { Component } from 'react';
import { Button } from 'antd'
import Notecell from './Notecell'

class Notelist extends Component {
    state = {
        display: true
    }
    callbackFunction = (item_array) => {
        console.log(item_array)
        this.sendData(item_array)
 
    }

    sendData(info) {
        console.log(info)
        this.props.parentCallback(info);
    }

    Date_format(startTime, interval) {
        var array = []
        for (let index = 0; index < interval + 1; index++) {
            const element = startTime + (index * 24 * 60 * 60 * 1000)
            array.push(element)
        }
        console.log(array)
        return array
    }

    render() {
        const { start, End,note_data,display_data } = this.props
        const startTime = new Date(start).getTime() - (8 * 60 * 60 * 1000)
        const endTime = new Date(End).getTime() - (8 * 60 * 60 * 1000)
        const interval = (endTime - startTime) / (1000 * 60 * 60 * 24)
        console.log(display_data)
        var arraydata
        var date_item
        if (interval === 0) {
            arraydata = null
        }
        else {
            arraydata = this.Date_format(startTime, interval)
            date_item = arraydata.map((info, index) =>
                <Notecell display_date={display_data} parentCallback={this.callbackFunction}  rowdata={note_data} key={index} infoDate={info}></Notecell>
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