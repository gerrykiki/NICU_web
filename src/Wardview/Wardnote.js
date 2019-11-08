import React, { Component } from 'react';
import { Input, Button, Tooltip } from 'antd';
import editlogo from '../Image/svg/Edit.svg'
import deleteimg from '../Image/svg/delete.svg'
import detail from '../Image/svg/details.svg'
import { WardInfo } from '../jsonResponse'
import { dev_path } from '../API/Apidata'

class WardcardNote extends Component {
    state = {
        editstate: "none",
        AnnoceData: this.props.annouce
    }

    componentDidMount() {
        fetch(dev_path+"/nicu/GetAnnouncement",{
            method: "GET",
            mode: 'cors',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': sessionStorage.getItem("Logindata")
            })
        }).then(res => {
            // if (res.ok) {
            //     this.setState(
            //         {
            //             AnnoceData: res.json
            //         }
            //     )
            // }
            // else{

            // }
            console.log(res)
        })
    }
    canceleditlist() {
        console.log(WardInfo.Announcement)
        //抓尚未改變
        this.setState({
            editstate: "none",
            AnnoceData: WardInfo.Announcement
        });
    }

    okeditlist() {
        const item = this.props.annouce
        this.setState({
            editstate: "none",
            AnnoceData: item
        });
    }

    editlist() {
        if (this.state.editstate === "none") {
            this.setState({
                editstate: "inline"
            });
        }
        else {
            this.setState({
                editstate: "none"
            });
        }
    }

    AddNewannouce() {
        if (document.getElementById("NewAnn").value === '') {
            return null
        }
        const announce = this.state.AnnoceData;
        const newData = {
            'time': +(new Date()),
            'text': document.getElementById("NewAnn").value
        }
        announce.push(newData)
        this.setState({
            AnnoceData: announce
        })
    }


    onChange(value) {
        console.log(value)
    }

    changehight() {
        if (this.state.editstate === "none") {
            return "300px"
        }
        else {
            return "210px"

        }
    }

    onClickDeleteAnnounce(index) {
        const item = this.state.AnnoceData
        item.splice(index, 1)
        this.setState(
            {
                AnnoceData: item
            }
        )
    }
    styleedit(string, index) {
        if (this.state.editstate === "none") {
            return (
                <Tooltip placement="top" title={string}>
                    <img src={detail} alt='detaillogo'></img>
                </Tooltip>);
        }
        else {
            return <img src={deleteimg} alt='deletelogo' onClick={() => this.onClickDeleteAnnounce(index)}></img>
        }
    }
    announcelist() {
        const item = this.props.annouce
        var annoucelistview = []
        if (item === null) {
            return null
        }
        else {
            for (let index = 0; index < item.length; index++) {
                const element = item[index];
                const text = <div>{new Date(element.time).getMonth()}/{new Date(element.time).getDate()} {element.writter}醫師留</div>
                const announce =
                    <div key={index} style={{ display: 'grid', gridTemplateColumns: "15px auto", gridColumnGap: "5px", paddingTop: "5px", paddingBottom: "5px" }}>
                        <div>{index + 1}.</div>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>{element.text}</div>
                            {this.styleedit(text, index)}
                        </div>
                    </div>
                annoucelistview.push(announce)
            }
            return annoucelistview
        }
    }
    render() {
        const editstyle = {
            display: this.state.editstate,
        }

        return (
            <div style={{ marginTop: "10px" }}>
                <div style={{ backgroundColor: "rgba(238,238,238,1)", height: "50px", padding: "10px", fontSize: "14px", borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>病房公告</div>
                    <div style={{ width: "15px" }} onMouseUp={() => this.editlist()}>
                        <img src={editlogo} alt='editlogo'></img>
                    </div>
                </div>
                <div style={{ borderColor: "rgba(238,238,238,1)", borderStyle: 'solid', borderWidth: '1px' }}>
                    <div style={{ maxHeight: this.changehight(), overflowY: 'auto', paddingLeft: '5px', paddingRight: "15px" }}>
                        {this.announcelist()}
                    </div>
                    <div style={editstyle}>
                        <div style={{ height: "40px", backgroundColor: "rgba(238,238,238,1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Input id={'NewAnn'} placeholder="新增病房公告" style={{ width: "90%" }} />
                            <Button type="primary" style={{ margin: "10px", width: "100px" }} onClick={() => this.AddNewannouce()}>
                                新增
                            </Button>
                        </div>
                        <div style={{ height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Button style={{ margin: "10px", width: "100px" }} onClick={() => this.canceleditlist()}>取消</Button>
                            <Button type="primary" style={{ margin: "10px", width: "100px" }} onClick={() => this.canceleditlist()}>儲存</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WardcardNote;