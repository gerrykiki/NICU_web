import React, { Component } from 'react';

class Labviewitem extends Component {
    render() {
        const { data } = this.props
        let labitem = data.map(
            (item, index) =>
                <div key={index}  style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: "14px", height: "20px", lineHeight: "20px" }}>{item.title}</div>
                    <div style={{ fontSize: "20px", height: "25px", lineHeight: "25px" }}>{item.score}</div>
                    <div style={{ fontSize: "14px", height: "50px", lineHeight: "50px" }}>{item.date}</div>
                </div>
        )
        return (
            <div style={{ width: "100%", marginBottom: "10px", borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(238,238,238,1)", height: "130px", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                {labitem}
            </div>
        );
    }
}

export default Labviewitem