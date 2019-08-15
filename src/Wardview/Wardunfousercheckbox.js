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
            lineHeight:"30px",

        }
        const selectstyle = {
            lineHeight:"30px",
            textDecoration:"line-through"
        }
        return (
            <div style={{height:"50px",padding:"15px"}}>
                <Checkbox onChange={() => this.selectchange()} checked={this.state.checkboxselect} style={this.state.checkboxselect ? selectstyle:selectunstyle}>幫個案量體重</Checkbox>
            </div>
        )
    }

}

export default Wardinfousercheckbox;