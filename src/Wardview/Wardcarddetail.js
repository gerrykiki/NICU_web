import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "antd/dist/antd.css";
import Wardcardvalue from './Wardcardvalue'
import editlogo from '../Image/svg/edit2.svg'
import fileLogo from '../Image/svg/file1.svg'
import file2Logo from '../Image/svg/file2.svg'


class Wardcarddetail extends Component {
    state = {
        hoverstate: "none",
        clickstate: false,
        mouse_hover: false,
        edit_hover: false
    };

    switchbednumber(number) {
        if (number < 10) {
            return "0" + number;
        }
        return number;
    }

    switchgender(gender) {
        switch (gender) {
            case "Male":
                return "男"
            case "FeMale":
                return "女"
            default:
                return "未知"
        }
    }




    detaildatastylelist(bool) {
        //No API Data
        const detail = this.props.data.detaildata
        let detaillist = detail.map((info, index) =>
            <div key={index} style={info.data ?
                { height: "24px", borderWidth: "1px", borderRadius: "4px", textAlign: "center", lineHeight: "24px", paddingLeft: "4px", paddingRight: "4px", color: "rgba(255, 255, 255, 1)", backgroundColor: this.detailinformationswitchstyle(info.item) } :
                { height: "24px", borderWidth: "1px", borderColor: "rgba(187, 187, 187, 1)", borderStyle: "solid", borderRadius: "4px", textAlign: "center", lineHeight: "24px", paddingLeft: "4px", paddingRight: "4px", color: "rgba(187, 187, 187, 1)" }}>
                {this.detailinformationswitch(info.item)}
            </div>
        )
        return detaillist;

    }


    hoverbackground() {
        //console.log("123")
        this.setState({
            hoverstate: "flex"
        });
    }

    hoverbackgroundhover() {
        //console.log("456")
        this.setState({
            hoverstate: "none"
        });
    }

    sendData = (idnumber) => {
        const { previewmode } = this.props
        if (previewmode) {
            this.props.parentCallback(idnumber);
        }
    }

    switch_hoverbackground() {
        this.setState(
            {
                mouse_hover: true
            }
        )
    }

    switch_hoverbackground_leave(string) {
        this.setState(
            {
                mouse_hover: false
            }
        )
    }


    switch_editbackground() {
        this.setState(
            {
                edit_hover: true
            }
        )
    }

    switch_editbackground_leave() {
        this.setState(
            {
                edit_hover: false
            }
        )
    }

    Birthday_format(bir) {
        function Monthformat(month) {
            return month + 1
        }
        const bir_time = new Date(bir).getFullYear() + "-" + Monthformat(new Date(bir).getMonth()) + '-' + new Date(bir).getDate()
        return bir_time
    }
    render() {
        const { data, selectstate } = this.props
        var selectstyle = null
        if (selectstate === data.id) {
            selectstyle = {
                width: "99%",
                marginBottom: "10px",
                borderRadius: "4px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "rgba(245, 166, 35, 1)",
                position: 'relative'
            }
        }
        else {
            selectstyle = {
                width: "99%",
                marginBottom: "10px",
                borderRadius: "4px",
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "rgba(215, 238, 255, 1)",
                position: 'relative'
            }
        }
        this.Birthday_format(data.Birthday)
        return (
            <div style={{ cursor: 'pointer' }} onClick={() => this.sendData(data.id)}>
                <div style={selectstyle}>
                    <div style={{ height: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: "rgba(215, 238, 255, 1)", padding: "10px", position: 'relative' }}>
                        <div style={{ fontSize: '1rem', color: "rgba(61, 119, 181, 1)" }}>{data.Bednumber} {data.Name} {this.switchgender(data.Gender)} {this.Birthday_format(data.Birthday)} 病歷號:{data.id}</div>
                        <div onMouseMove={() => this.switch_editbackground()} onMouseLeave={() => this.switch_editbackground_leave()} style={{ height: "25px", width: "25px", borderRadius: "99em", backgroundColor: this.state.edit_hover ? "rgba(59, 151, 225, 1)" : "rgba(59, 151, 225, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", position: 'absolute', right: "5px" }}>
                            <img src={editlogo} alt='editlogo'></img>
                        </div>
                    </div>
                    <div style={{ height: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "10px", borderBottomWidth: "0.5px", borderBottomColor: "rgba(215, 238, 255, 1)", borderBottomStyle: "solid" }}>
                        <div style={{ fontSize: '1rem', color: "black" }}>20＋5&rarr;24+4</div>
                        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100px"}}>
                            <img src={fileLogo} alt='fileLogo'></img>
                            <div style={{color:"blue"}}>3</div>
                            <img src={file2Logo} alt='file2Logo'></img>
                            <div style={{color:"black"}}>12</div>
                        </div>
                        <div style={{ fontSize: '1rem', color: "black" }}>{data.data.Weight}g&rarr;{data.data.WeightDif}g</div>
                    </div>
                    <div style={{ borderBottomWidth: "0.5px", borderBottomColor: "rgba(215, 238, 255, 1)", borderBottomStyle: "solid" }}>
                        <Wardcardvalue source={data}></Wardcardvalue>
                    </div>
                    <div style={{ height: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "10px", borderBottomWidth: "0.5px", borderBottomColor: "rgba(215, 238, 255, 1)", borderBottomStyle: "solid", borderTopWidth: "0.5px", borderTopColor: "rgba(215, 238, 255, 1)", borderTopStyle: "solid", position: 'relative' }}>
                        <div style={{ fontSize: '1rem', color: "black" }}>{data.Note}</div>
                        <Link onMouseLeave={() => this.switch_hoverbackground_leave("string")} onMouseMove={() => this.switch_hoverbackground()} to={{ pathname: "/nicu/patient", state: data }} style={{ height: "20px", backgroundColor: this.state.mouse_hover ? "rgba(59, 151, 225, 1)" : "rgba(59, 151, 225, 0.5)", borderRadius: "4px", textAlign: "center", lineHeight: "20px", color: "white", position: 'absolute', right: "5px" }}>進入病人資料頁面</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Wardcarddetail;