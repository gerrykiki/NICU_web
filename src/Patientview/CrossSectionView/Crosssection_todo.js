import React, { Component } from 'react';
import Todolayout from '../../Module/Todo'

class Crosssection_todo extends Component {
    render() {
        return (
            <div>
                <div style={{ fontSize: "2rem" }}>To Do List</div>
                <Todolayout title="待辦排程"></Todolayout>
            </div>
        );
    }
}

export default Crosssection_todo
