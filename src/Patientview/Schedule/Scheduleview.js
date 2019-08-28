import React, { Component } from 'react';
import Controlbar from '../Controlbar'
import Schedulelayout from '../CrossSectionView/Schedule'

class Scheduleview extends Component {
    render(){
        return(
            <div>
            <Controlbar tagdisplay={"none"}/>
            <Schedulelayout/>
            </div>
        );
    }
}

export default Scheduleview
