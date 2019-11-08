import React, { Component } from 'react';



class Basicinformation extends Component {
    render() {
        const { userdata } = this.props
        console.log(userdata)
        const info_style = { display: 'flex', alignItems: 'center', fontSize: '1.3rem' }
        var DateDiff = function (sDate1) { 
            const days = parseInt((new Date().getTime()-sDate1)/86400000)
            return days
          };
        return (
            <div style={{ display: 'grid', gridTemplateColumns: "repeat(3,auto)", gridColumnGap: "5px" }}>
                <div style={info_style}>週數:20＋5&rarr;24+4</div>
                <div style={info_style}>體重:{userdata.data.Weight}&rarr;{userdata.data.WeightDif}</div>
                <div style={info_style}>住院第{DateDiff(userdata.Dateforward)}天</div>
            </div>
        );
    }
}

export default Basicinformation;