import React, { Component } from 'react';
import { Input, Button} from 'antd';
import editlogo from '../Image/svg/Edit.svg'
import { WardInfo } from '../jsonResponse'
import { dev_path } from '../API/Apidata'
import Wardnoteannounce from './Wardnoteannounce'

class WardcardNote extends Component {
    state = {
        editstate: "none",
        AnnoceData: this.props.announce
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
    storage_announce(){
        console.log(this.state.AnnoceData)
        //更換完上傳到server
        this.setState({
            editstate: "none",
            AnnoceData: this.state.AnnoceData
        });

    }
    cancel_edit() {
        console.log(this.props.changedate)
        //抓server data 在更換
        this.setState({
            editstate: "none"
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
            'announcement':document.getElementById("NewAnn").value ,
            'updateTime': +(new Date()),
            'editor': "K"
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
    announcelist() {
        //const item = this.props.announce
        const item = this.state.AnnoceData
        console.log(item)
        var annoucelistview = []
        if (item === null) {
            return null
        }
        else {
            for (let index = 0; index < item.length; index++) {
                const element = item[index];
                const text = <div>{new Date(element.updateTime).getMonth()}/{new Date(element.updateTime).getDate()} {element.editor}醫師留</div>
                const announce = <Wardnoteannounce editstate={this.state.editstate} key={index} index={index} element={element} text={text}></Wardnoteannounce>
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
                    <div style={{fontSize:"1.5rem"}}>病房公告</div>
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
                            <Button style={{ margin: "10px", width: "100px" }} onClick={() => this.cancel_edit()}>取消</Button>
                            <Button type="primary" style={{ margin: "10px", width: "100px" }} onClick={() => this.storage_announce()}>儲存</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default WardcardNote;