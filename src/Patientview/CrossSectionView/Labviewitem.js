import React, { Component } from 'react';

class Labviewitem extends Component {
    render() {
        const {data} = this.props
        console.log(data);
        return (
            <div style={{ width: "100%", marginBottom: "10px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(238,238,238,1)", height: "130px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{textAlign:'center'}}>
                    <div style={{ fontSize: "14px" ,height:"20px",lineHeight:"20px"}}>{data.title}</div>
                    <div style={{ fontSize: "20px" ,height:"25px",lineHeight:"25px"}}>{data.score}</div>
                    <div style={{ fontSize: "14px" ,height:"50px",lineHeight:"50px"}}>{data.date}</div>
                </div>
            </div>
        );
    }
}

export default Labviewitem