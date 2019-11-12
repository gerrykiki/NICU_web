import React, { Component } from 'react';

class Wardlabviewitem extends Component {
    render() {
        function Warningvalue(value, title) {
            if (title === "Glucose") {
                if (value > 120 || value < 50) {
                    return false
                }
            }
            if (title === "WBC") {
                if (value < 10000 || value > 30000) {
                    return false
                }
            }
            if (title === "Hgb") {
                if (value < 10 || value > 18) {
                    return false
                }
            }
            if (title === "Platelet") {
                if (value < 100000 || value > 450000) {
                    return false
                }
            }
            if (title === "Na+") {
                if (value < 135 || value > 145) {
                    return false
                }
            }
            if (title === "K+") {
                if (value < 3.5 || value > 5.5) {
                    return false
                }
            }
            if (title === "Ca2+") {
                if (value < 0.8 || value > 1.4) {
                    return false
                }
            }
            if (title === "P") {
                if (value < 4.5 || value > 6.0) {
                    return false
                }
            }
            if (title === "Mg2+") {
                if (value < -1.5 || value > 4.5) {
                    return false
                }
            }
            if (title === "Alb") {
                if (value > 3) {
                    return false
                }
            }
            if (title === "CRP") {
                if (value < 1) {
                    return false
                }
            }
            if (title === "Procalcitionin") {
                if (value < 0.5) {
                    return false
                }
            }
            if (title === "pH") {
                if (value < 7.25 || value > 7.4) {
                    return false
                }
            }
            if (title === "PCO2") {
                if (value < 40 || value > 60) {
                    return false
                }
            }
            if (title === "BE") {
                if (value < -7 || value > 6) {
                    return false
                }
            }
            if (title === "PO2") {
                if (value < 40 || value > 90) {
                    return false
                }
            }
            if (title === "BUN") {
                if (value < 1) {
                    return false
                }
            }
            if (title === "Cr") {
                if (value < 1) {
                    return false
                }
            }
            if (title === "ALT") {
                if (value < 45) {
                    return false
                }
            }
            if (title === "AST") {
                if (value < 45) {
                    return false
                }
            }
            if (title === "TBil") {
                if (value < 2) {
                    return false
                }
            }
            if (title === "DBil") {
                if (value < 0.5) {
                    return false
                }
            }
            if (title === "ALKP") {
                if (value < 450) {
                    return false
                }
            }
            if (title === "Total Ca") {
                if (value < 8 || value > 12) {
                    return false
                }
            }
            if (title === "FeSat") {
                if (value < 0.15) {
                    return false
                }
            }
            return true
        }
        const { data, title } = this.props
        const filterarray = data.filter(function (item, index) {
            return item.item === title
        });
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                <div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{filterarray[0].item}</div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: Warningvalue(filterarray[0].value, filterarray[0].item) ? "black" : "red" }}>{filterarray[0].value}</div>
                </div>
            </div>
        );
    }
}

export default Wardlabviewitem