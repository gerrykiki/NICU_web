import React, { Component } from 'react';



class Basicinformation extends Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        Basic Info
                    </div>
                    <hr></hr>
                    <div style={{ height: '50px', display: 'flex', alignItems: 'center', borderWidth: '1px', borderColor: '#333', borderStyle: 'solid' }}>
                        <div style={{display:'flex',alignItems:'center',marginLeft:'20px'}}>
                            <div>
                                身高:
                            </div>
                            <div style={{fontSize:'20px',fontWeight:'bold'}}>
                                44CM
                            </div>
                        </div>
                        <div style={{display:'flex',alignItems:'center',marginLeft:'40px'}}>
                            <div>
                                體重:
                            </div>
                            <div style={{fontSize:'20px',fontWeight:'bold'}}>
                                2000g
                            </div>
                        </div>
                        <div style={{display:'flex',alignItems:'center',marginLeft:'40px'}}>
                            <div>
                                年齡:
                            </div>
                            <div style={{fontSize:'20px',fontWeight:'bold'}}>
                                3週2天
                            </div>
                        </div>
                        <div style={{display:'flex',alignItems:'center',marginLeft:'40px'}}>
                            <div>
                                住院天數:
                            </div>
                            <div style={{fontSize:'20px',fontWeight:'bold'}}>
                                22天
                            </div>
                        </div>
                        <div style={{display:'flex',alignItems:'center',marginLeft:'40px'}}>
                            <div>
                                住院日期:
                            </div>
                            <div style={{fontSize:'20px',fontWeight:'bold'}}>
                                2019-01-01
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Basicinformation;