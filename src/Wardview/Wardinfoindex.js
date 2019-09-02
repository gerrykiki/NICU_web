import React, { Component } from 'react';
import { WardInfo } from '../jsonResponse';
import WardcardNote from './Wardnote'


class Wardinfoindex extends Component {
    state = {
        newannocestate: true
    };


    canceleditlist() {
        this.setState({
            editstate: "none"
        });
    }



    render() {
        const info = WardInfo;

        function Timestampformat(time) {

            const months = "1,2,3,4,5,6,7,8,9,10,11,12".split(",");
            const weekdays = "週日,週一,週二,週三,週四,週五,週六".split(",");
            const timestrimg = new Date(time).getFullYear() + '/' + months[new Date(time).getMonth()] + '/' + new Date(time).getDate() + '(' + weekdays[new Date(time).getDay()] + ')' + hourformat(new Date(time).getHours()) + ':' + hourformat(new Date(time).getMinutes())
            return timestrimg
        }

        function hourformat(hour) {
            switch (hour) {
                case 0:
                    return '00'
                case 1:
                    return '01'
                case 2:
                    return '02'
                case 3:
                    return '03'
                case 4:
                    return '04'
                case 5:
                    return '05'
                case 6:
                    return '06'
                case 7:
                    return '07'
                case 8:
                    return '08'
                case 9:
                    return '09'
                default:
                    return hour;
            }
        }
        return (
            <div style={{ borderWidth: "1px", borderColor: "rgba(238, 238, 238, 1)", borderStyle: "solid", borderRadius: "4px", overflow: "auto", height: "80vh" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '45px' }}>
                    <div style={{ fontSize: '16px', marginLeft: '20px', fontFamily: "PingFangSC-Regular" }}>
                        {Timestampformat(+(new Date()))}
                    </div>
                    <div style={{ fontSize: "22px", fontFamily: "PingFangSC-Regular" }}>
                        病房資訊摘要
                    </div>
                    <div style={{ fontSize: '16px', marginRight: '20px', fontFamily: "PingFangSC-Regular" }}>
                        主任 : {info.Director}  護理長 : {info.HeadNurse}
                    </div>
                </div>
                <div style={{ height: 'auto', display: 'flex', justifyContent: 'center', padding: '10px' }}>
                    <div style={{ backgroundColor: "rgba(132,153,178,1)", borderRadius: '4px', height: '40px', textAlign: "center", lineHeight: "30px", margin: '5px', paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", color: "white", fontSize: "14px" }}>
                        病床總數：{info.BedTotal}
                    </div>
                    <div style={{ backgroundColor: "rgba(132,153,178,1)", borderRadius: '4px', height: '40px', textAlign: "center", lineHeight: "30px", margin: '5px', paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", color: "white", fontSize: "14px" }}>
                        簽床：{info.SignBed}
                    </div>
                    <div style={{ backgroundColor: "rgba(132,153,178,1)", borderRadius: '4px', height: '40px', textAlign: "center", lineHeight: "30px", margin: '5px', paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", color: "white", fontSize: "14px" }}>
                        空床：{info.EmptyBed}
                    </div>
                    <div style={{ backgroundColor: "rgba(132,153,178,1)", borderRadius: '4px', height: '40px', textAlign: "center", lineHeight: "30px", margin: '5px', paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", color: "white", fontSize: "14px" }}>
                        轉床：{info.TransferBed}
                    </div>
                    <div style={{ backgroundColor: "rgba(132,153,178,1)", borderRadius: '4px', height: '40px', textAlign: "center", lineHeight: "30px", margin: '5px', paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", color: "white", fontSize: "14px" }}>
                        新病人：{info.NewPatient}
                    </div>
                </div>
                <div style={{ height: 'auto', display: 'flex', justifyContent: 'center', padding: '10px' }}>
                    <div style={{ backgroundColor: "rgba(110,166,232,1)", borderRadius: '4px', height: '40px', textAlign: "center", lineHeight: "30px", margin: '5px', paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", color: "white", fontSize: "14px" }}>
                        非傾入式呼吸器：{info.Ventilator}
                    </div>
                    <div style={{ backgroundColor: "rgba(110,166,232,1)", borderRadius: '4px', height: '40px', textAlign: "center", lineHeight: "30px", margin: '5px', paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", color: "white", fontSize: "14px" }}>
                        NPO：{info.NPO}
                    </div>
                    <div style={{ backgroundColor: "rgba(110,166,232,1)", borderRadius: '4px', height: '40px', textAlign: "center", lineHeight: "30px", margin: '5px', paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", color: "white", fontSize: "14px" }}>
                        有給TPN：{info.TPN}
                    </div>
                    <div style={{ backgroundColor: "rgba(110,166,232,1)", borderRadius: '4px', height: '40px', textAlign: "center", lineHeight: "30px", margin: '5px', paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", color: "white", fontSize: "14px" }}>
                        ECMO：{info.ECMO}
                    </div>
                    <div style={{ backgroundColor: "rgba(110,166,232,1)", borderRadius: '4px', height: '40px', textAlign: "center", lineHeight: "30px", margin: '5px', paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", color: "white", fontSize: "14px" }}>
                        有給抗生素：{info.Antibiotics}
                    </div>
                    <div style={{ backgroundColor: "rgba(110,166,232,1)", borderRadius: '4px', height: '40px', textAlign: "center", lineHeight: "30px", margin: '5px', paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", color: "white", fontSize: "14px" }}>
                        有進行透析：{info.Hemodialysis}
                    </div>
                </div>
                <WardcardNote annouce={info.Announcement}></WardcardNote>
            </div>
        );
    }
}

export default Wardinfoindex;