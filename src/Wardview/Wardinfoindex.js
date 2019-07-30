import React, { Component } from 'react';
import { Input, Icon, Button } from 'antd';




class Wardinfoindex extends Component {
    state = {
        editstate: "none"
    };

    editlist(){
        this.setState({
            editstate: "inline"
        });
    }

    canceleditlist(){
        this.setState({
            editstate: "none"
        });
    }
    render() {
        const editstyle = {
            display:this.state.editstate,
        }
        console.log(editstyle);
        return (
            <div style={{ borderWidth: "1px", borderColor: "rgba(238, 238, 238, 1)", borderStyle: "solid", borderRadius: "4px", overflow: "auto", height: "80vh" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '45px' }}>
                    <div style={{ fontSize: '16px', marginLeft: '30px', fontFamily: "PingFangSC-Regular" }}>
                        2019 / 06 / 13 (週四) 16:59
                    </div>
                    <div style={{ fontSize: "22px", fontFamily: "PingFangSC-Regular" }}>
                        病房資訊摘要
                    </div>
                    <div style={{ fontSize: '16px', marginRight: '20px', fontFamily: "PingFangSC-Regular" }}>
                        主任 : 林又新 / 護理長 : 鄭麗貞
                    </div>
                </div>
                <div style={{ height: 'auto', display: 'flex', justifyContent: 'center', padding: '10px' }}>
                    <div style={{ backgroundColor: "rgba(132,153,178,1)", borderRadius: '4px', height: '40px', textAlign: "center", lineHeight: "30px", margin: '5px', paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", color: "white", fontSize: "14px" }}>
                        病床總數：12
                    </div>
                    <div style={{ backgroundColor: "rgba(132,153,178,1)", borderRadius: '4px', height: '40px', textAlign: "center", lineHeight: "30px", margin: '5px', paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", color: "white", fontSize: "14px" }}>
                        簽床：7
                    </div>
                    <div style={{ backgroundColor: "rgba(132,153,178,1)", borderRadius: '4px', height: '40px', textAlign: "center", lineHeight: "30px", margin: '5px', paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", color: "white", fontSize: "14px" }}>
                        空床：7
                    </div>
                    <div style={{ backgroundColor: "rgba(132,153,178,1)", borderRadius: '4px', height: '40px', textAlign: "center", lineHeight: "30px", margin: '5px', paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", color: "white", fontSize: "14px" }}>
                        轉床：7
                    </div>
                    <div style={{ backgroundColor: "rgba(132,153,178,1)", borderRadius: '4px', height: '40px', textAlign: "center", lineHeight: "30px", margin: '5px', paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", color: "white", fontSize: "14px" }}>
                        新病人：7
                    </div>
                </div>
                <div style={{ height: 'auto', display: 'flex', justifyContent: 'center', padding: '10px' }}>
                    <div style={{ backgroundColor: "rgba(110,166,232,1)", borderRadius: '4px', height: '40px', textAlign: "center", lineHeight: "30px", margin: '5px', paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", color: "white", fontSize: "14px" }}>
                        非傾入式呼吸器：2
                    </div>
                    <div style={{ backgroundColor: "rgba(110,166,232,1)", borderRadius: '4px', height: '40px', textAlign: "center", lineHeight: "30px", margin: '5px', paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", color: "white", fontSize: "14px" }}>
                        NPO：7
                    </div>
                    <div style={{ backgroundColor: "rgba(110,166,232,1)", borderRadius: '4px', height: '40px', textAlign: "center", lineHeight: "30px", margin: '5px', paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", color: "white", fontSize: "14px" }}>
                        有給TPN：7
                    </div>
                    <div style={{ backgroundColor: "rgba(110,166,232,1)", borderRadius: '4px', height: '40px', textAlign: "center", lineHeight: "30px", margin: '5px', paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", color: "white", fontSize: "14px" }}>
                        ECMO：7
                    </div>
                    <div style={{ backgroundColor: "rgba(110,166,232,1)", borderRadius: '4px', height: '40px', textAlign: "center", lineHeight: "30px", margin: '5px', paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", color: "white", fontSize: "14px" }}>
                        有給抗生素：7
                    </div>
                    <div style={{ backgroundColor: "rgba(110,166,232,1)", borderRadius: '4px', height: '40px', textAlign: "center", lineHeight: "30px", margin: '5px', paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", color: "white", fontSize: "14px" }}>
                        有進行透析：7
                    </div>
                </div>
                <div style={{ margin: "20px" }}>
                    <div style={{ backgroundColor: "rgba(238,238,238,1)", height: "50px", padding: "10px", fontSize: "14px", borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        病房主任留言板
                        <Icon type="edit" style={{ fontSize: "20px" }} onClick={() => this.editlist()}/>
                    </div>
                    <div style={{ borderColor: "rgba(238,238,238,1)", borderStyle: 'solid', borderWidth: '1px' }}>
                        <div style={{ height: "40vh" }}>
                            123
                        </div>
                        <div style={editstyle}>
                            <div style={{ height: "40px", backgroundColor: "rgba(238,238,238,1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Input placeholder="Basic usage" style={{ width: "90%" }} />
                                <Button type="primary" style={{ margin: "10px" }}>
                                    新增
                                </Button>
                            </div>
                            <div style={{ height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Button style={{ margin: "10px" }} onClick={()=>this.canceleditlist()}>
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