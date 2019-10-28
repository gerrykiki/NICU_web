import React, { Component } from 'react';
import Patientviewtapbar from './Patientviewtapbar'

class Patientinfo extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    time_month_format(time) {
        return new Date(time).getMonth() + 1
    }
    gender_format(gender_string) {
        switch (gender_string) {
            case "Male":
                return "男"
            case "FeMale":
                return "女"
            default:
                return ""
        }
    }
    render() {
        const path_url = this.props.location.pathname
        const patient_data = this.props.location.state
        const title_style = {fontSize: "1.3rem"}
        return (
            <div>
                <div style={{ background: 'rgba(238, 238, 238, 1)', display: 'flex', justifyContent: "space-between", alignItems: 'center', height: "50px", paddingLeft: "20px", paddingRight: "20px" }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(7,auto)", gridColumnGap: "20px" }}>
                            <div style={title_style}>{patient_data.Name}</div>
                            <div style={title_style}>性別:{this.gender_format(patient_data.Gender)}</div>
                            <div style={title_style}>生日{new Date(patient_data.Birthday).getFullYear()}-{this.time_month_format(patient_data.Birthday)}-{new Date(patient_data.Birthday).getDate()}</div>
                            <div style={title_style}>病歷號碼:{patient_data.id}</div>
                            <div style={title_style}>主治醫師:{patient_data.MainDoctor}醫師</div>
                            <div style={title_style}>備註:{patient_data.Note}</div>
                            <div style={{fontSize: "1.3rem",color:"blue",textDecoration:"underline",cursor:"pointer"}}>病人基本資料</div>
                        </div>
                    </div>
                </div>
                <Patientviewtapbar userdata={patient_data}></Patientviewtapbar>
            </div>
        );
    }
}

export default Patientinfo