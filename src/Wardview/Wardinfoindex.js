import React, { Component } from 'react';
import { WardInfo } from '../jsonResponse';
import WardcardNote from './Wardnote'
import Wardbedinformation from './WardBedinformation'


class Wardinfoindex extends Component {
    state = {
        newannocestate: true
    };


    canceleditlist() {
        this.setState({
            editstate: "none"
        });
    }


    sendData = () => {
        this.props.parentCallback(null);
    }

    render() {
        const info = WardInfo;
        // function Timestampformat(time) {

        //     const months = "1,2,3,4,5,6,7,8,9,10,11,12".split(",");
        //     const weekdays = "週日,週一,週二,週三,週四,週五,週六".split(",");
        //     const timestrimg = new Date(time).getFullYear() + '/' + months[new Date(time).getMonth()] + '/' + new Date(time).getDate() + '(' + weekdays[new Date(time).getDay()] + ')' + hourformat(new Date(time).getHours()) + ':' + hourformat(new Date(time).getMinutes())
        //     return timestrimg
        // }

        // function hourformat(hour) {
        //     switch (hour) {
        //         case 0:
        //             return '00'
        //         case 1:
        //             return '01'
        //         case 2:
        //             return '02'
        //         case 3:
        //             return '03'
        //         case 4:
        //             return '04'
        //         case 5:
        //             return '05'
        //         case 6:
        //             return '06'
        //         case 7:
        //             return '07'
        //         case 8:
        //             return '08'
        //         case 9:
        //             return '09'
        //         default:
        //             return hour;
        //     }
        // }
        return (
            <div style={{ borderWidth: "1px", borderColor: "rgba(238, 238, 238, 1)", borderStyle: "solid", borderRadius: "4px", overflow: "auto", height: "80vh",paddingRight:"10px",paddingLeft:"10px" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '45px' }}>
                    <div style={{ fontSize: '16px', marginLeft: '20px'}}>
                        
                    </div>
                    <div style={{ fontSize: "22px"}}>
                        病房資訊摘要
                    </div>
                    <div style={{ fontSize: '16px', marginRight: '20px' }}>
                        主任 : {info.Director}  護理長 : {info.HeadNurse}
                    </div>
                </div>
                <WardcardNote annouce={info.Announcement}></WardcardNote>
                <Wardbedinformation></Wardbedinformation>
            </div>
        );
    }
}

export default Wardinfoindex;