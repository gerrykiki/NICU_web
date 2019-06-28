import React, { Component } from 'react';
import './Wardcard.css'
import {Button} from 'antd'


class Wardcard extends Component{

    render(){
        return(
            <div className="Wardcardboder">
                <Button ghost='true' className="Wardbutton"></Button>
            </div>
        );
    }
}

export default Wardcard;