import React, { Component } from 'react';
import Ioschedule from './Ioschedule'


class IOpage extends Component {


    render() {
        return (
            <div style={{ width: "100%", marginBottom: "20px" }}>
                <div style={{ fontSize: "22px", fontFamily: "PingFangTC-Medium", lineHeight: "40px" }}>I/O</div>
                <Ioschedule id={"大夜"}></Ioschedule>
                <Ioschedule id={"白班"}></Ioschedule>
                <Ioschedule id={"小夜"}></Ioschedule>
                <Ioschedule id={"全日"}></Ioschedule>
            </div>
        );
    }

}

export default IOpage;