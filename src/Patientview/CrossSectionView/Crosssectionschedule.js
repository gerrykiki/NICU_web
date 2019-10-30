import React, { Component } from 'react';
import Schedule_event_list from '../../Module/Schedule_event'
import Note from '../../Module/Note'
class Crossection_schedule extends Component {
    render() {
        return (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridColumnGap: "10px" }}>
                <Schedule_event_list title="排程與事件"></Schedule_event_list>
                <Note title="病人當日註記"></Note>
            </div>
        );
    }
}

export default Crossection_schedule;