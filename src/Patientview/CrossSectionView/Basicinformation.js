import React, { Component } from 'react';



class Basicinformation extends Component {
    render() {
        return (
            <div style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent:"center"}}>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
                    <div style={{ fontSize: '20px'}}>身高:44CM</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '40px' }}>
                    <div style={{ fontSize: '20px'}}>體重:2000g</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '40px' }}>
                    <div style={{ fontSize: '20px'}}>年齡:3週2天</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '40px' }}>
                    <div style={{ fontSize: '20px'}}>住院天數:22天</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: '40px' }}>
                    <div style={{ fontSize: '20px'}}>住院日期:2019-01-01</div>
                </div>
            </div>
        );
    }
}

export default Basicinformation;