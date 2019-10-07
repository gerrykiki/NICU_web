import React, { Component } from 'react';
import Scale from '../Scale'

class Chroniclescale extends Component {
    
    render() {

        const patientid = this.props.patid
        const margin = (window.screen.width * 0.9 - 90) / 46
        const width = (window.screen.width * 0.9) - 50 + margin
        const tablewidth = (window.screen.width * 0.9 - 90) / 46
        console.log(tablewidth)
        return (
            <div style={{display:'flex',justifyContent:'flex-end'}}>
                <div id={patientid} style={{ width: width }}>
                    <Scale
                        id={patientid}
                        width={width} height={30}
                        margin={margin}>
                    </Scale>
                </div>
            </div>
        );
    }
}

export default Chroniclescale;