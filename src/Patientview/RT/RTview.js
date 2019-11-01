import React, { Component } from 'react';
import RTsubview from './RTsubview'

class RTview extends Component {
    render(){
        return(
            <div style={{ display: "grid",gridTemplateColumns:'1fr 1fr',gridColumnGap:"5px" }}>
                <RTsubview tableState={0}></RTsubview>
                <RTsubview tableState={1}></RTsubview>
            </div>
        );
    }
}

export default RTview
