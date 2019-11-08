import React, { Component } from 'react';
import { WardInfo } from '../jsonResponse';
import WardcardNote from './Wardnote'
import Wardbedinformation from './WardBedinformation'
import Wardschedule from './Wardschedule'


class Wardinfoindex extends Component {
    state = {
        newannocestate: true
    };

    sendData = () => {
        this.props.parentCallback(null);
    }

    render() {
        const info = WardInfo;
        return (
            <div style={{ borderWidth: "1px", borderColor: "rgba(238, 238, 238, 1)", borderStyle: "solid", borderRadius: "4px", overflow: "auto", height: "80vh", paddingRight: "10px", paddingLeft: "10px" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '45px' }}>
                    <div style={{ fontSize: '16px', marginLeft: '20px' }}>

                    </div>
                    <div style={{ fontSize: "22px" }}>
                        病房資訊摘要
                    </div>
                    <div style={{ fontSize: '16px', marginRight: '20px' }}>
                        主任 : {info.Director}  護理長 : {info.HeadNurse}
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "50% 50%", gridColumnGap: "5px" }}>
                    <WardcardNote annouce={null}></WardcardNote>
                    <Wardschedule editstatus={false}></Wardschedule>
                </div>
                <Wardbedinformation></Wardbedinformation>
            </div>
        );
    }
}

export default Wardinfoindex;