import React, { Component } from 'react';
import { Button, Card, Icon } from 'antd';


class IOpage extends Component {
    render() {
        return (
            <div style={{ width: '45%', margin: '20px',overflow:'auto',maxHeight:'700px'}}>
                <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', height: '40px' }}>
                    <div style={{ fontWeight: 'bold' }}>
                        I/O
                    </div>
                </div>
                <hr></hr>
                <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', display: 'flex' }}>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, padding: '10px' }}>
                        大夜
                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', flexGrow: 1 }}>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '25%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            Feed
                        </div>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '75%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                            10
                        </div>
                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', flexGrow: 1 }}>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '25%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            IV
                        </div>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '75%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                            --
                        </div>

                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', flexGrow: 1 }}>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '25%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            Other
                        </div>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '75%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                            2.2
                        </div>

                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', flexGrow: 1 }}>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '25%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            Input
                        </div>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '75%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                            10
                        </div>
                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', flexGrow: 1 }}>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '25%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                            Urine
                        </div>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '75%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                            10
                        </div>
                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', flexGrow: 1 }}>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '25%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            Output
                        </div>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '75%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            10
                        </div>
                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', flexGrow: 1 }}>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '25%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            In-Out
                        </div>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '75%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            +20
                        </div>
                    </div>
                </div>
                <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', display: 'flex',marginTop:'10px' }}>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, padding: '10px' }}>
                        白班
                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', flexGrow: 1 }}>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '25%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            Feed
                        </div>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '75%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                            10
                        </div>
                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', flexGrow: 1 }}>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '25%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            IV
                        </div>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '75%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                            --
                        </div>

                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', flexGrow: 1 }}>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '25%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            Other
                        </div>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '75%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                            2.2
                        </div>

                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', flexGrow: 1 }}>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '25%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            Input
                        </div>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '75%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                            10
                        </div>
                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', flexGrow: 1 }}>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '25%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                            Urine
                        </div>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '75%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                            10
                        </div>
                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', flexGrow: 1 }}>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '25%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            Output
                        </div>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '75%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            10
                        </div>
                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', flexGrow: 1 }}>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '25%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            In-Out
                        </div>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '75%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            +20
                        </div>
                    </div>
                </div>
                <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', display: 'flex',marginTop:'10px' }}>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, padding: '10px' }}>
                        小夜
                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', flexGrow: 1 }}>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '25%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            Feed
                        </div>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '75%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                            10
                        </div>
                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', flexGrow: 1 }}>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '25%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            IV
                        </div>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '75%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                            --
                        </div>

                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', flexGrow: 1 }}>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '25%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            Other
                        </div>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '75%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                            2.2
                        </div>

                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', flexGrow: 1 }}>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '25%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            Input
                        </div>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '75%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                            10
                        </div>
                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', flexGrow: 1 }}>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '25%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                            Urine
                        </div>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '75%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                            10
                        </div>
                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', flexGrow: 1 }}>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '25%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            Output
                        </div>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '75%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            10
                        </div>
                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', flexGrow: 1 }}>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '25%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            In-Out
                        </div>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '75%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            +20
                        </div>
                    </div>
                </div>
                <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', display: 'flex',marginTop:'10px' }}>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, padding: '10px' }}>
                        全日
                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', flexGrow: 1 }}>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '25%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                            Feed
                        </div>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '75%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                            10
                        </div>
                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', flexGrow: 1 }}>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '25%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            IV
                        </div>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '75%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                            --
                        </div>

                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', flexGrow: 1 }}>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '25%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            Other
                        </div>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '75%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                            2.2
                        </div>

                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', flexGrow: 1 }}>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '25%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            Input
                        </div>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '75%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                            10
                        </div>
                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', flexGrow: 1 }}>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '25%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                            Urine
                        </div>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '75%',display:'flex',justifyContent:'center',alignItems:'center' }}>
                            10
                        </div>
                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', flexGrow: 1 }}>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '25%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            Output
                        </div>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '75%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            10
                        </div>
                    </div>
                    <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '140px', flexGrow: 1 }}>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '25%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            In-Out
                        </div>
                        <div style={{ borderWidth: '1px', borderColor: 'black', borderStyle: 'solid', height: '75%' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
                            +20
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default IOpage;