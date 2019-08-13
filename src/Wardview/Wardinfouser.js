import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import WardcardvitalsignChart from './Wardcardvitalsign'

const width = window.screen.availWidth * 0.55, height = 50, margin = 20, max = 150, min = 50



//var timeoutID = window.setInterval(( () => console.log("Hello!") ), 1000);


class Wardinfouser extends Component {
    datarelease() {
        var dataset = []; //建立空的資料陣列
        var Num = 100
        for (var i = 0; i < 24; i++) {
            var newNum = Num + (5 - Math.floor(Math.random() * 10));
            dataset.push(newNum);
            Num = newNum;
        }
        console.log(dataset);
        return dataset;
    }
    render() {
        return (
            <div style={{ borderColor: "rgba(232, 232, 232, 1)", borderWidth: "1px", borderStyle: "solid", borderRadius: "4px" }}>
                <div style={{ height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{width:"200px"}}>
                        <Link to="/Main/Bedview/Wardindex">
                            <Button type="link">&larr;返回病房資訊總覽</Button>
                        </Link>
                    </div>
                    <div style={{ fontSize: "22px" ,width:"200px",textAlign:"center"}}>個案資訊摘要</div>
                    <div style={{width:"200px",textAlign:"end"}}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: "16px", paddingRight: "16px" }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', height: "70px", width: "100%" }}>
                        <div style={{ display: "flex" }}>
                            <div style={{ width: "40px", height: '20px', lineHeight: "40px", fontSize: "1em" }}>病床</div>
                            <div style={{ fontSize: '3rem', marginLeft: "5px", height: "70px" }}>01</div>
                            <div style={{ marginLeft: "5px" }}>
                                <div style={{ lineHeight: "40px" }}>
                                    <span style={{ fontSize: "1rem" }}>程子倩</span>
                                    <span style={{ fontSize: "1rem" }}>&nbsp;/&nbsp;</span>
                                    <span style={{ fontSize: "1rem" }}>Ch01</span>
                                    <span style={{ fontSize: "1rem" }}>&nbsp;/&nbsp;</span>
                                    <span style={{ fontSize: "1rem" }}>女</span>
                                    <span style={{ fontSize: "1rem" }}>&nbsp;/&nbsp;</span>
                                    <span style={{ fontSize: "1rem" }}>13週</span>
                                </div>
                                <div style={{ lineHeight: "30px" }}>
                                    <span style={{ fontSize: "0.7rem", marginRight: "1rem" }}>病歷號:XXXXX-XXXXX</span>
                                    <span style={{ fontSize: "0.7rem", marginRight: "1rem" }}>3700g</span>
                                    <span style={{ fontSize: "0.7rem", marginRight: "1rem" }}>(+700g)</span>
                                    <span style={{ fontSize: "0.7rem" }}>聯絡電話::OOOOO-OOOOO</span>
                                </div>

                            </div>
                        </div>
                        <div style={{ marginLeft: "8px" }}>
                            <div style={{ lineHeight: "40px", display: "flex", justifyContent: "flex-end" }}>
                                <div style={{ fontSize: "14px", textAlign: "center", borderRadius: "4px", background: "rgba(232, 152, 162, 1)", color: "rgba(255, 255, 255, 1)", marginRight: "10px", width: "40px", height: "40px" }}>呼</div>
                                <div style={{ fontSize: "14px", textAlign: "center", borderRadius: "4px", background: "rgba(195, 153, 115, 1)", color: "rgba(255, 255, 255, 1)", marginRight: "10px", width: "40px", height: "40px" }}>TPN</div>
                                <div style={{ fontSize: "14px", textAlign: "center", borderRadius: "4px", background: "rgba(61, 119, 181, 1)", color: "rgba(255, 255, 255, 1)", marginRight: "10px", width: "40px", height: "40px" }}>NP0</div>
                                <div style={{ fontSize: "14px", textAlign: "center", borderRadius: "4px", background: "rgba(241, 204, 115, 1)", color: "rgba(255, 255, 255, 1)", marginRight: "10px", width: "40px", height: "40px" }}>透</div>
                                <div style={{ fontSize: "14px", textAlign: "center", borderRadius: "4px", background: "rgba(155, 202, 100, 1)", color: "rgba(255, 255, 255, 1)", marginRight: "10px", width: "40px", height: "40px" }}>葉</div>
                                <div style={{ fontSize: "14px", textAlign: "center", borderRadius: "4px", background: "rgba(65, 165, 181, 1)", color: "rgba(255, 255, 255, 1)", width: "40px", height: "40px" }}>抗</div>
                            </div>
                            <div style={{ lineHeight: "30px", textAlign: "end" }}>
                                <span style={{ fontSize: "0.7rem" }}>主治醫師&nbsp;</span>
                                <span style={{ fontSize: "0.7rem", marginRight: "14px" }}>陳XX</span>
                                <span style={{ fontSize: "0.7rem" }}>查看醫療團隊資訊</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ height: '1px', backgroundColor: "rgba(220, 220, 220, 1)", marginRight: "16px", marginLeft: "16px", marginBottom: "20px", marginTop: "20px" }}></div>
                <div style={{ textAlign: "center", lineHeight: "20px", fontSize: "16px" }}>過去24小時生命徵象</div>
                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginLeft: "20px" }}>
                    <div style={{ marginTop: "10px" , width:"100px"}}>
                        <div style={{ color: "rgba(126, 211, 33, 1)" }}>
                            HR
                        </div>
                        <div style={{ fontSize: "1.5rem", color: "rgba(126, 211, 33, 1)" }}>
                            123
                        </div>
                    </div>
                    <div id="wardvitalhr" style={{ marginRight: "20px", width: "71vw", height: "100px" }}>
                        <WardcardvitalsignChart id={"wardvitalhr"} data={this.datarelease()} width={width} height={height} margin={margin} max={max} min={min} axisBot={false} axisTop={true} circlrcolor={"rgba(126, 211, 33, 1)"}></WardcardvitalsignChart>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginLeft: "20px" }}>
                    <div style={{ marginTop: "10px" , width:"100px"}}>
                        <div style={{ color: "rgba(222, 150, 159, 1)" }}>
                            BP
                        </div>
                        <div style={{ fontSize: "1.5rem", color: "rgba(222, 150, 159, 1)" }}>
                            90
                        </div>
                    </div>
                    <div id="wardvitalbp" style={{ marginRight: "20px", width: "71vw", height: "100px" }}>
                        <WardcardvitalsignChart id={"wardvitalbp"} data={this.datarelease()} width={width} height={height} margin={margin} max={max} min={min} axisBot={false} axisTop={false} circlrcolor={"rgba(222, 150, 159, 1)"}></WardcardvitalsignChart>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginLeft: "20px" }}>
                    <div style={{ marginTop: "10px" , width:"100px"}}>
                        <div style={{ color: "rgba(59, 151, 225, 1)" }}>
                            SpO2
                        </div>
                        <div style={{ fontSize: "1.5rem", color: "rgba(59, 151, 225, 1)" }}>
                            24
                        </div>
                    </div>
                    <div id="wardvitalsp" style={{ marginRight: "20px", width: "71vw", height: "100px" }}>
                        <WardcardvitalsignChart id={"wardvitalsp"} data={this.datarelease()} width={width} height={height} margin={margin} max={max} min={min} axisBot={false} axisTop={false} circlrcolor={"rgba(59, 151, 225, 1)"}></WardcardvitalsignChart>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginLeft: "20px" }}>
                    <div style={{ marginTop: "10px" , width:"100px"}}>
                        <div style={{ color: "rgba(144, 19, 254, 1)" }}>
                            BT
                        </div>
                        <div style={{ fontSize: "1.5rem", color: "rgba(144, 19, 254, 1)" }}>
                            90
                        </div>
                    </div>
                    <div id="wardvitalbt" style={{ marginRight: "20px", width: "71vw", height: "100px" }}>
                        <WardcardvitalsignChart id={"wardvitalbt"} data={this.datarelease()} width={width} height={height} margin={margin} max={max} min={min}axisBot={false} axisTop={false} circlrcolor={"rgba(144, 19, 254, 1)"}></WardcardvitalsignChart>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", marginLeft: "20px" }}>
                    <div style={{ marginTop: "10px" , width:"100px"}}>
                        <div style={{ color: "rgba(245, 166, 35, 1)" }}>
                            RR
                        </div>
                        <div style={{ fontSize: "1.5rem", color: "rgba(245, 166, 35, 1)" }}>
                            90
                        </div>
                    </div>
                    <div id="wardvitalrr" style={{ marginRight: "20px", width: "71vw", height: "100px" }}>
                        <WardcardvitalsignChart id={"wardvitalrr"} data={this.datarelease()} width={width} height={height} margin={margin} max={max} min={min} axisBot={false} axisTop={false} circlrcolor={"rgba(245, 166, 35, 1)"}></WardcardvitalsignChart>
                    </div>
                </div>
                <div style={{ marginTop: "20px", marginBottom: "20px", display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "250px 350px", padding: "10px" }}>
                    <div style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(238, 238, 238, 1)", borderRadius: "4px", margin: "5px" }}>
                        <div style={{ height: "50px", backgroundColor: "rgba(238, 238, 238, 1)", width: "100%", borderTopLeftRadius: "4px", borderTopRightRadius: "4px" ,lineHeight:"50px",paddingLeft:"15px"}}>
                        排程
                        </div>
                    </div>
                    <div style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(238, 238, 238, 1)", borderRadius: "4px", display: "flex", margin: "5px" }}>
                        <div style={{ height: "50px", backgroundColor: "rgba(238, 238, 238, 1)", width: "100%", borderTopLeftRadius: "4px", borderTopRightRadius: "4px" ,lineHeight:"50px",paddingLeft:"15px"}}>
                        待辦事項
                        </div>

                    </div>
                    <div style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(238, 238, 238, 1)", borderRadius: "4px", display: "flex", margin: "5px" }}>
                        <div style={{ height: "50px", backgroundColor: "rgba(238, 238, 238, 1)", width: "100%", borderTopLeftRadius: "4px", borderTopRightRadius: "4px" ,lineHeight:"50px",paddingLeft:"15px"}}>
                        最近檢驗項目
                        </div>
                    </div>
                    <div style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "rgba(238, 238, 238, 1)", borderRadius: "4px", display: "flex", margin: "5px" }}>
                        <div style={{ height: "50px", backgroundColor: "rgba(238, 238, 238, 1)", width: "100%", borderTopLeftRadius: "4px", borderTopRightRadius: "4px" ,lineHeight:"50px",paddingLeft:"15px"}}>
                        備註
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Wardinfouser;