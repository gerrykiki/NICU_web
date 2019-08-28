import React, { Component } from 'react';
import {Button} from 'antd'

class Notelist extends Component {
    state = {
        display:true
    }
    statechange(){
        this.setState(
            {
                display:!this.state.display
            }
        )
    }
    displayMode(){
        if (this.state.display) {
            return "none"
        }
        else{
            return "block"
        }
    }

    Dateformat(){
        return new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate()
    }
    render() {
        const listdisplaystyle = {
            display:this.displayMode(),
            borderRadius:0,
            borderTopWidth:"0px",
            width:"100%",
            lineHeight:"32px",
            height:"32px",
            textAlign:"Left"
        }
        //const {date} = this.props
        const date = new Date().getMonth() + 1
        console.log(date)
        return (
            <div>
                <Button onClick={()=>this.statechange()} style={{borderRadius:0,width:"100%",lineHeight:"32px",height:"32px",textAlign:"Left"}}>
                    {this.Dateformat()}
                </Button>
                <Button style={listdisplaystyle} >16:00</Button>
            </div>
        );
    }
}

export default Notelist