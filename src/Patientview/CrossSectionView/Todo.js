import React, { Component } from 'react';

class Todolayout extends Component{
    render(){
        return(
            <div style={{ width: '100%', margin: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',height:'40px'  }}>
                    <div style={{ fontWeight: 'bold' }}>
                    待辦事項
                    </div>
                </div>
                <hr></hr>
            </div>
        );
    }
}

export default Todolayout