import React, { Component } from 'react';

class Labviewlayout extends Component {
    render() {
        return (
            <div style={{ width: '45%', margin: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px' }}>
                    <div style={{ fontWeight: 'bold' }}>
                        Lab(常規檢驗)
                    </div>
                </div>
                <hr></hr>
                <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', display: 'flex' }}>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', flexGrow: 1, height: '100px' }}>

                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', flexGrow: 1, height: '100px' }}>

                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', flexGrow: 1, height: '100px' }}>

                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', flexGrow: 1, height: '100px' }}>

                    </div>
                </div>
                <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', flexGrow: 1, height: '100px' }}>

                </div>
                <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', display:'flex'}}>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid',flexGrow:1,height:'100px'}}>

                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid',flexGrow:1,height:'100px'}}>

                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid',flexGrow:2,height:'100px'}}>

                    </div>
                </div>
                <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', display:'flex'}}>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid',flexGrow:1,height:'100px'}}>

                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid',flexGrow:1,height:'100px'}}>

                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid',flexGrow:1,height:'100px'}}>

                    </div>
                </div>
                <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', display:'flex'}}>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid',flexGrow:2,height:'100px'}}>

                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid',flexGrow:3,height:'100px'}}>

                    </div>
                </div>
            </div>
        );
    }
}

export default Labviewlayout