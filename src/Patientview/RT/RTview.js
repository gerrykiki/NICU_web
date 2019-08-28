import React, { Component } from 'react';
import RTsubview from './RTsubview'

class RTview extends Component {
    render(){
        return(
            <div style={{ display: "grid",gridTemplateColumns:'2fr 3fr 1fr', marginBottom: "20px",gridColumnGap:"5px" }}>
                <RTsubview tableState={0}></RTsubview>
                <RTsubview tableState={1}></RTsubview>
                <RTsubview tableState={2}></RTsubview>
            </div>
        );
    }
}

export default RTview
