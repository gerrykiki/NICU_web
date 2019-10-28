import React, { Component } from 'react';
import { Checkbox } from 'antd';

class Wardinfousercheckbox extends Component{
    state = {
        checkboxselect : false
    }

    selectchange() {
        this.setState({
            checkboxselect: !this.state.checkboxselect
        });
    }

    render() {
        
        const selectunstyle = {
            fontSize:"1rem"
        }
        const selectstyle = {
            textDecoration:"line-through",fontSize:"1rem"
        }
        return (
            <div style={{height:"50px",paddingLeft:"15px",display:"flex",alignItems:"center"}}>
                <Checkbox onChange={() => this.selectchange()} checked={this.state.checkboxselect} style={this.state.checkboxselect ? selectstyle:selectunstyle}>幫個案量體重</Checkbox>
            </div>
        )
    }

}

export default Wardinfousercheckbox;