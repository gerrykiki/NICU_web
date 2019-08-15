import React, { Component } from 'react';


class Ioschedule extends Component {


    render() {
        const {id} = this.props
        return (
            <div style={{ width: "100%", display: "grid", gridTemplateColumns: "15% 85%",marginBottom:"20px"}}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "24px" ,borderWidth:"1px",borderStyle:"solid",borderColor:"rgba(238,238,238,1)"}}>{id}</div>
                <div style={{ display: "grid", gridTemplateRows: "60px 60px" }}>
                    <div style={{ backgroundColor: "rgba(255,249,237,1)", display: "flex", justifyContent: "space-between", alignItems: "center", paddingRight: "10px", paddingLeft: "10px" ,borderWidth:"1px",borderStyle:"solid",borderColor:"rgba(238,238,238,1)",borderLeftWidth:"0px",borderBottomWidth:"0px"}}>
                        <div style={{ fontSize: "16px", width: "14%", textAlign: "center" }}>Feed</div>
                        <div style={{ fontSize: "16px", width: "14%", textAlign: "center" }}>IV</div>
                        <div style={{ fontSize: "16px", width: "14%", textAlign: "center" }}>Other</div>
                        <div style={{ fontSize: "16px", width: "14%", textAlign: "center" }}>Input</div>
                        <div style={{ fontSize: "16px", width: "14%", textAlign: "center" }}>Urine</div>
                        <div style={{ fontSize: "16px", width: "14%", textAlign: "center" }}>Output</div>
                        <div style={{ fontSize: "16px", width: "14%", textAlign: "center" }}>In-Out</div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingRight: "10px", paddingLeft: "10px" ,borderWidth:"1px",borderStyle:"solid",borderColor:"rgba(238,238,238,1)",borderLeftWidth:"0px"}}>
                        <div style={{ fontSize: "16px", width: "14%", textAlign: "center" }}>10</div>
                        <div style={{ fontSize: "16px", width: "14%", textAlign: "center" }}>--</div>
                        <div style={{ fontSize: "16px", width: "14%", textAlign: "center" }}>2.2</div>
                        <div style={{ fontSize: "16px", width: "14%", textAlign: "center" }}>10</div>
                        <div style={{ fontSize: "16px", width: "14%", textAlign: "center" }}>10</div>
                        <div style={{ fontSize: "16px", width: "14%", textAlign: "center" }}>10</div>
                        <div style={{ fontSize: "16px", width: "14%", textAlign: "center" }}>+20</div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Ioschedule;