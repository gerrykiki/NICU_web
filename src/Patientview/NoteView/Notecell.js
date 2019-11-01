import React, { Component } from 'react';

class Notecell extends Component {
    render() {
        function remoteMonth(month) {
            return month + 1
        }
        function Dateformat(time) {
            return new Date(time).getFullYear() + "-" + remoteMonth(new Date(time).getMonth()) + "-" + new Date(time).getDate()
        }
        function Timeformat(time) {
            return new Date(time).getHours() + ":" + new Date(time).getMinutes()
        }
        const { infoDate } = this.props
        
        return (
            <div style={{height: "40px", display: "flex", alignItems: "center", border: "rgba(238,238,238,1)"}}>{Dateformat(infoDate)}</div>
        );
    }
}

export default Notecell