import React, { Component } from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import WardcardvitalsignChart from './Wardcardvitalsign'

const width = window.screen.availWidth * 0.5, height = 150, margin = 20, max = 90, min = 10



//var timeoutID = window.setInterval(( () => console.log("Hello!") ), 1000);


class Wardinfouser extends Component {
    datarelease() {
        var dataset = []; //建立空的資料陣列
        var Num = 50
        for (var i = 0; i < 20; i++) {
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
                    <div>
                        <Link to="/Main/Bedview/Wardindex">
                            <Button type="link">&larr;返回病房資訊總覽</Button>
                        </Link>
                    </div>
                    <div style={{ fontSize: "22px" }}>個案資訊摘要</div>
                    <div>
                        <Button type="link">前往個案頁面&rarr;</Button>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: "16px", paddingRight: "16px" }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', height: "70px", width: "100%" }}>
                        <div style={{ display: "flex" }}>
                            <div style={{ height: '40px', lineHeight: "40px" }}>病床</div>
                            <div style={{ fontSize: '50px', marginLeft: "5px" }}>01</div>
                            <div style={{ marginLeft: "5px" }}>
                                <div style={{ lineHeight: "40px" }}>
                                    <span style={{ fontSize: "20px" }}>程子倩</span>
                                    <span style={{ fontSize: "20px" }}>&nbsp;/&nbsp;</span>
                                    <span style={{ fontSize: "20px" }}>Ch01</span>
                                    <span style={{ fontSize: "20px" }}>&nbsp;/&nbsp;</span>
                                    <span style={{ fontSize: "20px" }}>女</span>
                                    <span style={{ fontSize: "20px" }}>&nbsp;/&nbsp;</span>
                                    <span style={{ fontSize: "20px" }}>13週</span>
                                </div>
                                <div style={{ lineHeight: "30px" }}>
                                    <span style={{ fontSize: "14px", marginRight: "14px" }}>病歷號:XXXXX-XXXXX</span>
                                    <span style={{ fontSize: "14px", marginRight: "14px" }}>3700g</span>
                                    <span style={{ fontSize: "14px", marginRight: "14px" }}>(+700g)</span>
                                    <span style={{ fontSize: "14px" }}>聯絡電話::OOOOO-OOOOO</span>
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
                                <span style={{ fontSize: "14px" }}>主治醫師&nbsp;</span>
                                <span style={{ fontSize: "14px", marginRight: "14px" }}>陳XX</span>
                                <span style={{ fontSize: "14px" }}>查看醫療團隊資訊</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ height: '1px', backgroundColor: "rgba(220, 220, 220, 1)", marginRight: "16px", marginLeft: "16px", marginBottom: "20px", marginTop: "20px" }}></div>
                <div style={{ textAlign: "center", lineHeight: "20px", fontSize: "16px" }}>過去24小時生命徵象</div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div id="wardvital" style={{ marginTop: "20px", marginBottom: "20px", marginRight: "20px", width: "51vw", height: "150px" }}>
                        {console.log("wid" + width)}
                        <WardcardvitalsignChart data={this.datarelease()} width={width} height={100} margin={margin} max={max} min={min} axisBot={false} axisTop={true} circlrcolor={"green"}></WardcardvitalsignChart>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div id="wardvital" style={{ marginTop: "20px", marginBottom: "20px", marginRight: "20px", width: "51vw", height: "150px" }}>
                        <WardcardvitalsignChart data={this.datarelease()} width={width} height={100} margin={margin} max={max} min={min} axisBot={false} axisTop={false} circlrcolor={"green"}></WardcardvitalsignChart>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <div id="wardvital" style={{ marginTop: "20px", marginBottom: "20px", marginRight: "20px", width: "51vw", height: "150px" }}>
                        <WardcardvitalsignChart data={this.datarelease()} width={width} height={100} margin={margin} max={max} min={min} axisBot={false} axisTop={false} circlrcolor={"green"}></WardcardvitalsignChart>
                    </div>
                </div>
                <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                    {
                        //小卡片
                    }
                </div>
            </div>
        );
    }
}

export default Wardinfouser;