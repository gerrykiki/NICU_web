import React, { Component } from 'react';
import Controlbar from '../Controlbar';
import Basicinformation from './Basicinformation';
import Vitalsign from './Vitalsign';


class Contentlayout extends Component{
    render(){
        return(
            <div>
                <Controlbar></Controlbar>
                <Basicinformation></Basicinformation>
                <Vitalsign></Vitalsign>
            </div>
        );
    }

}

export default Contentlayout;