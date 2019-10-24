import React, { Component } from 'react';
import { Input, Button, Tooltip } from 'antd';
import editlogo from '../Image/svg/Edit.svg'
import deleteimg from '../Image/svg/delete.svg'

class WardcardNote extends Component {
    state = {
        editstate: "none",
        AnnoceData: this.props.annouce
    }

    canceleditlist() {
        this.setState({
            editstate: "none"
        });
    }
    editlist() {
        this.setState({
            editstate: "inline"
        });
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
        console.log(announce)
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
    styleedit(){
        if (this.state.editstate === "none") {
            return null
        }
        else{

            return <img src={deleteimg} alt='deletelogo'></img>
        }
    }
    announcelist() {
        const item = this.props.annouce
        console.log(item)
        var annoucelistview = []
        for (let index = 0; index < item.length; index++) {
            const element = item[index];
            const text = <div>{element.text},{new Date(element.time).getMonth()}/{new Date(element.time).getDate()} {element.writter}醫師留</div>
            const announce = <Tooltip placement="top" title={text}>
                <div style={{display:'flex',justifyContent:"space-between",alignItems:"center"}}>
                    <div key={index} style={{ height: "50px", lineHeight: "30px", paddingTop: '10px', paddingBottom: '10px', fontSize: "16px" }}>{element.text}</div>
                    {this.styleedit()}
                </div>
            </Tooltip>
            annoucelistview.push(announce)
        }
        // const annouceview = annouce.map(
        //     (item, index) =>
        //         <Tooltip placement="left" title={text}>
        //             <div key={index} style={{ height: "50px", lineHeight: "30px", paddingTop: '10px', paddingBottom: '10px', fontSize: "16px" }}>{item.text}</div>
        //         </Tooltip>
        // )
        return annoucelistview
    }
    render() {



        const editstyle = {
            display: this.state.editstate,
        }





        return (
            <div style={{ marginTop: "10px" }}>
                <div style={{ backgroundColor: "rgba(238,238,238,1)", height: "50px", padding: "10px", fontSize: "14px", borderTopLeftRadius: "4px", borderTopRightRadius: "4px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>病房公告</div>
                    <div style={{ width: "30px" }} onMouseUp={() => this.editlist()}>
                        <img src={editlogo} alt='editlogo'></img>
                    </div>
                </div>
                <div style={{ borderColor: "rgba(238,238,238,1)", borderStyle: 'solid', borderWidth: '1px' }}>
                    <div style={{ maxHeight: "300px", overflowY: 'auto', paddingLeft: '40px', paddingRight: "40px", height: this.changehight() }}>
                        {this.announcelist()}
                    </div>
                    <div style={editstyle}>
                        <div style={{ height: "40px", backgroundColor: "rgba(238,238,238,1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Input id={'NewAnn'} placeholder="Basic usage" style={{ width: "90%" }} />
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