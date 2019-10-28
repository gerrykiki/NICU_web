import React, { Component } from 'react';
import Patientinfo from './Patientviewinfo'
import { Switch, Route } from 'react-router-dom';
import { Select } from 'antd';


class Patientviewlayout extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }



    fetch_userdata() {
        const path_url = this.props.location.pathname

    }
    render() {
        const path_url = this.props.location.pathname
        const patient_data = this.props.location.state
        // var breadcrumb
        // if (path_url.match('patient')!=null) {

        // }

        const { Option } = Select;
        return (
            <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center', paddingLeft: "20px", paddingRight: "20px",paddingTop:'5px',paddingBottom:"5px" }}>
                    <div style={{ fontSize: "1.5rem" }}>病房總覽 > 病床 > Chronicle view</div>
                    <Select defaultValue={"123"} style={{ width: 120 }}>
                        <Option value="lucy">病床01</Option>
                        <Option value="lucy">病床02</Option>
                        <Option value="lucy">病床03</Option>
                        <Option value="lucy">病床04</Option>
                        <Option value="lucy">病床05</Option>
                        <Option value="lucy">病床06</Option>
                        <Option value="lucy">病床07</Option>
                        <Option value="lucy">病床08</Option>
                        <Option value="lucy">病床09</Option>
                        <Option value="lucy">病床10</Option>
                        <Option value="lucy">病床11</Option>
                        <Option value="lucy">病床12</Option>
                    </Select>
                </div>
                <Switch>
                    {/* The component will show here if the current URL matches the path */}
                    <Route path={`${this.props.match.path}/:userid`} component={Patientinfo} />
                </Switch>
            </div>
        );
    }
}

export default Patientviewlayout;