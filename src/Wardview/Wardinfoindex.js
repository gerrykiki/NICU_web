import React, { Component } from 'react';
import { Input, Icon, Button } from 'antd';
import { WardInfo } from '../jsonResponse';




class Wardinfoindex extends Component {
    state = {
        editstate: "none",
        newannocestate:true
    };

    editlist() {
        this.setState({
            editstate: "inline"
        });
    }

    canceleditlist() {
        this.setState({
            editstate: "none"
        });
    }



    render() {
        const editstyle = {
            display: this.state.editstate,
        }
        const info = WardInfo;

        function Timestampformat(time) {

            const months = "1,2,3,4,5,6,7,8,9,10,11,12".split(",");
            const weekdays = "週日,週一,週二,週三,週四,週五,週六".split(",");
            const timestrimg = new Date(time).getFullYear() + '/' + months[new Date(time).getMonth()] + '/' + new Date(time).getDate() + '(' + weekdays[new Date(time).getDay()] + ')' + new Date(time).getHours() + ':' + new Date(time).getMinutes()
            return timestrimg
        }
        const annouce = info.Announcement.sort(function (a, b) {
            return a.time < b.time ? 1 : -1
        });

        const annouceview = annouce.map(
            (item, index) =>
                <div key={index} style={{ height: "40px", lineHeight: "20px", paddingTop: '10px', paddingBottom: '10px' }}>{item.text}</div>
        )
        console.log(annouce)
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
                <div style={{ margin: "20px" }}>
                    <div style={{ backgroundColor: "rgba(238,238,238,1)", height: "50px", padding: "10px", fontSize: "14px", borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        病房主任留言板
                        <Icon type="edit" style={{ fontSize: "20px" }} onClick={() => this.editlist()} />
                    </div>
                    <div style={{ borderColor: "rgba(238,238,238,1)", borderStyle: 'solid', borderWidth: '1px' }}>
                        <div style={{ maxHeight: "40vh", overflowY: 'auto', paddingLeft: '40px', paddingRight: "40px" }}>
                            {annouceview}
                        </div>
                        <div style={editstyle}>
                            <div style={{ height: "40px", backgroundColor: "rgba(238,238,238,1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Input placeholder="Basic usage" style={{ width: "90%" }} />
                                <Button type="primary" style={{ margin: "10px" }}>
                                    新增
                                </Button>
                            </div>
                            <div style={{ height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Button style={{ margin: "10px" }} onClick={() => this.canceleditlist()}>
                                    取消
                            </Button>
                                <Button type="primary" style={{ margin: "10px" }}>
                                    儲存
                            </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Wardinfoindex;