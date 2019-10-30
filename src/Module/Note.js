import React, { Component } from 'react';
import { Note_data } from '../jsonResponse'
import Notecell from './Notecell'


class Note extends Component {

    render() {
        const { title } = this.props
        const notelist = Note_data.map((info, index) => <Notecell key={index} index={index} info={info}></Notecell>)
        return (
            <div style={{ marginTop: "10px", borderRadius: "4px" }}>
                <div style={{ height: "50px", width: "100%", backgroundColor: "rgba(238,238,238,1)", paddingLeft: "24px", paddingRight: "24px", display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: "1.5rem" }}>{title}</div>
                </div>
                <div style={{ height: "300px" }}>
                    <div style={{ maxHeight: "300px", overflow: "auto", width: "100%" }}>
                        {notelist}
                    </div>
                </div>
            </div>
        );
    }
}

export default Note