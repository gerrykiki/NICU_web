import React, { Component } from 'react';
import { WardInfo } from '../jsonResponse';


class Wardbedinformation extends Component {
    render() {
        const tablestyle = {
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "rgba(238, 238, 238, 1)",
            fontSize: "16px"
        }
        const info = WardInfo;
        return (
            <div style={{ marginTop: "10px" }}>
                <div style={{ backgroundColor: "rgba(238,238,238,1)", height: "50px", padding: "15px", fontSize: "16px" }}>當入床位資訊</div>
                <div style={{ width: "100%" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr" }}>
                        <div>
                            <div style={tablestyle}>天數</div>
                            <div style={tablestyle}>佔床數</div>
                            <div style={tablestyle}>數出人數</div>
                            <div style={tablestyle}>數入人數</div>
                        </div>
                        <div>
                            <div style={tablestyle}>MM/DD</div>
                            <div style={tablestyle}>
                                <div style={{ textAlign: "center" }}>
                                    <div>8(13)</div>
                                    <div>62%</div>
                                </div>
                            </div>
                            <div style={tablestyle}>--</div>
                            <div style={tablestyle}>4</div>
                        </div>
                        <div>
                            <div style={tablestyle}>MM/DD</div>
                            <div style={tablestyle}>
                                <div style={{ textAlign: "center" }}>
                                    <div>8(13)</div>
                                    <div>62%</div>
                                </div>
                            </div>
                            <div style={tablestyle}>--</div>
                            <div style={tablestyle}>4</div>
                        </div>
                        <div>
                            <div style={tablestyle}>MM/DD</div>
                            <div style={tablestyle}>
                                <div style={{ textAlign: "center" }}>
                                    <div>8(13)</div>
                                    <div>62%</div>
                                </div>
                            </div>
                            <div style={tablestyle}>--</div>
                            <div style={tablestyle}>4</div>
                        </div>
                        <div>
                            <div style={tablestyle}>MM/DD</div>
                            <div style={tablestyle}>
                                <div style={{ textAlign: "center" }}>
                                    <div>8(13)</div>
                                    <div>62%</div>
                                </div>
                            </div>
                            <div style={tablestyle}>--</div>
                            <div style={tablestyle}>4</div>
                        </div>
                        <div>
                            <div style={tablestyle}>MM/DD</div>
                            <div style={tablestyle}>
                                <div style={{ textAlign: "center" }}>
                                    <div>8(13)</div>
                                    <div>62%</div>
                                </div>
                            </div>
                            <div style={tablestyle}>--</div>
                            <div style={tablestyle}>4</div>
                        </div>
                        <div>
                            <div style={tablestyle}>MM/DD</div>
                            <div style={tablestyle}>
                                <div style={{ textAlign: "center" }}>
                                    <div>8(13)</div>
                                    <div>62%</div>
                                </div>
                            </div>
                            <div style={tablestyle}>--</div>
                            <div style={tablestyle}>4</div>
                        </div>
                        <div>
                            <div style={tablestyle}>MM/DD</div>
                            <div style={tablestyle}>
                                <div style={{ textAlign: "center" }}>
                                    <div>8(13)</div>
                                    <div>62%</div>
                                </div>
                            </div>
                            <div style={tablestyle}>--</div>
                            <div style={tablestyle}>4</div>
                        </div>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr", marginTop: "10px" }}>
                        <div>
                            <div style={tablestyle}>天數</div>
                            <div style={tablestyle}>佔床數</div>
                            <div style={tablestyle}>數出人數</div>
                            <div style={tablestyle}>數入人數</div>
                        </div>
                        <div>
                            <div style={tablestyle}>MM/DD</div>
                            <div style={tablestyle}>
                                <div style={{ textAlign: "center" }}>
                                    <div>8(13)</div>
                                    <div>62%</div>
                                </div>
                            </div>
                            <div style={tablestyle}>--</div>
                            <div style={tablestyle}>4</div>
                        </div>
                        <div>
                            <div style={tablestyle}>MM/DD</div>
                            <div style={tablestyle}>
                                <div style={{ textAlign: "center" }}>
                                    <div>8(13)</div>
                                    <div>62%</div>
                                </div>
                            </div>
                            <div style={tablestyle}>--</div>
                            <div style={tablestyle}>4</div>
                        </div>
                        <div>
                            <div style={tablestyle}>MM/DD</div>
                            <div style={tablestyle}>
                                <div style={{ textAlign: "center" }}>
                                    <div>8(13)</div>
                                    <div>62%</div>
                                </div>
                            </div>
                            <div style={tablestyle}>--</div>
                            <div style={tablestyle}>4</div>
                        </div>
                        <div>
                            <div style={tablestyle}>MM/DD</div>
                            <div style={tablestyle}>
                                <div style={{ textAlign: "center" }}>
                                    <div>8(13)</div>
                                    <div>62%</div>
                                </div>
                            </div>
                            <div style={tablestyle}>--</div>
                            <div style={tablestyle}>4</div>
                        </div>
                        <div>
                            <div style={tablestyle}>MM/DD</div>
                            <div style={tablestyle}>
                                <div style={{ textAlign: "center" }}>
                                    <div>8(13)</div>
                                    <div>62%</div>
                                </div>
                            </div>
                            <div style={tablestyle}>--</div>
                            <div style={tablestyle}>4</div>
                        </div>
                        <div>
                            <div style={tablestyle}>MM/DD</div>
                            <div style={tablestyle}>
                                <div style={{ textAlign: "center" }}>
                                    <div>8(13)</div>
                                    <div>62%</div>
                                </div>
                            </div>
                            <div style={tablestyle}>--</div>
                            <div style={tablestyle}>4</div>
                        </div>
                        <div>
                            <div style={tablestyle}>MM/DD</div>
                            <div style={tablestyle}>
                                <div style={{ textAlign: "center" }}>
                                    <div>8(13)</div>
                                    <div>62%</div>
                                </div>
                            </div>
                            <div style={tablestyle}>--</div>
                            <div style={tablestyle}>4</div>
                        </div>
                    </div>
                </div>
                <div style={{ height: "30px" }}></div>
                <div>
                    <div style={{ backgroundColor: "rgba(238,238,238,1)", height: "50px", padding: "15px", fontSize: "16px" }}>當入床位資訊</div>
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
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gridColumnGap:"5px"}}>
                        <div>
                            <div style={{backgroundColor:"rgba(238,238,238,1)",height:"50px",paddingLeft:"10px",lineHeight:"50px",fontSize:"16px"}}>轉入病人清單</div>
                            <div style={{overflow:"auto",maxHeight:"200px"}}>
                                <div style={{height:"50px",display:"grid",gridTemplateColumns:"1fr 3fr"}}>
                                    <div style={{paddingLeft:"10px",display:"flex",alignItems:"center",borderStyle:"solid",borderWidth:"1px",borderColor:"rgba(238,238,238,1)"}}>病歷號碼</div>
                                    <div style={{paddingLeft:"10px",display:"flex",alignItems:"center",borderStyle:"solid",borderWidth:"1px",borderColor:"rgba(238,238,238,1)"}}>姓名</div>
                                </div>
                                <div style={{height:"50px",display:"grid",gridTemplateColumns:"1fr 3fr"}}>
                                    <div style={{paddingLeft:"10px",display:"flex",alignItems:"center",borderStyle:"solid",borderWidth:"1px",borderColor:"rgba(238,238,238,1)"}}>XXXX-XXXX</div>
                                    <div style={{paddingLeft:"10px",display:"flex",alignItems:"center",borderStyle:"solid",borderWidth:"1px",borderColor:"rgba(238,238,238,1)"}}>王小明</div>
                                </div>
                                <div style={{height:"50px",display:"grid",gridTemplateColumns:"1fr 3fr"}}>
                                    <div style={{paddingLeft:"10px",display:"flex",alignItems:"center",borderStyle:"solid",borderWidth:"1px",borderColor:"rgba(238,238,238,1)"}}>XXXX-XXXX</div>
                                    <div style={{paddingLeft:"10px",display:"flex",alignItems:"center",borderStyle:"solid",borderWidth:"1px",borderColor:"rgba(238,238,238,1)"}}>王小明</div>
                                </div>
                                <div style={{height:"50px",display:"grid",gridTemplateColumns:"1fr 3fr"}}>
                                    <div style={{paddingLeft:"10px",display:"flex",alignItems:"center",borderStyle:"solid",borderWidth:"1px",borderColor:"rgba(238,238,238,1)"}}>XXXX-XXXX</div>
                                    <div style={{paddingLeft:"10px",display:"flex",alignItems:"center",borderStyle:"solid",borderWidth:"1px",borderColor:"rgba(238,238,238,1)"}}>王小明</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div style={{backgroundColor:"rgba(238,238,238,1)",height:"50px",paddingLeft:"10px",lineHeight:"50px",fontSize:"16px"}}>轉出病人清單</div>
                            <div style={{overflow:"auto",maxHeight:"200px"}}>
                                <div style={{height:"50px",display:"grid",gridTemplateColumns:"1fr 3fr"}}>
                                    <div style={{paddingLeft:"10px",display:"flex",alignItems:"center",borderStyle:"solid",borderWidth:"1px",borderColor:"rgba(238,238,238,1)"}}>病歷號碼</div>
                                    <div style={{paddingLeft:"10px",display:"flex",alignItems:"center",borderStyle:"solid",borderWidth:"1px",borderColor:"rgba(238,238,238,1)"}}>姓名</div>
                                </div>
                                <div style={{height:"50px",display:"grid",gridTemplateColumns:"1fr 3fr"}}>
                                    <div style={{paddingLeft:"10px",display:"flex",alignItems:"center",borderStyle:"solid",borderWidth:"1px",borderColor:"rgba(238,238,238,1)"}}>XXXX-XXXX</div>
                                    <div style={{paddingLeft:"10px",display:"flex",alignItems:"center",borderStyle:"solid",borderWidth:"1px",borderColor:"rgba(238,238,238,1)"}}>王小明</div>
                                </div>
                                <div style={{height:"50px",display:"grid",gridTemplateColumns:"1fr 3fr"}}>
                                    <div style={{paddingLeft:"10px",display:"flex",alignItems:"center",borderStyle:"solid",borderWidth:"1px",borderColor:"rgba(238,238,238,1)"}}>XXXX-XXXX</div>
                                    <div style={{paddingLeft:"10px",display:"flex",alignItems:"center",borderStyle:"solid",borderWidth:"1px",borderColor:"rgba(238,238,238,1)"}}>王小明</div>
                                </div>
                                <div style={{height:"50px",display:"grid",gridTemplateColumns:"1fr 3fr"}}>
                                    <div style={{paddingLeft:"10px",display:"flex",alignItems:"center",borderStyle:"solid",borderWidth:"1px",borderColor:"rgba(238,238,238,1)"}}>XXXX-XXXX</div>
                                    <div style={{paddingLeft:"10px",display:"flex",alignItems:"center",borderStyle:"solid",borderWidth:"1px",borderColor:"rgba(238,238,238,1)"}}>王小明</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Wardbedinformation;