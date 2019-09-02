import React, { Component } from 'react';
import { Input, Icon, Button } from 'antd';

class WardcardNote extends Component{
    state = {
        editstate: "none",
        AnnoceData:this.props.annouce
    }
    

    editlist() {
        this.setState({
            editstate: "inline"
        });
    }

    AddNewannouce(){
        if (document.getElementById("NewAnn").value ==='') {
            return null
        }
        const announce = this.state.AnnoceData;
        const newData = {
            'time': +(new Date()),
            'text':document.getElementById("NewAnn").value   
        }
        console.log(announce)
        announce.push(newData)
        this.setState({
            AnnoceData:announce
        })
    }


    onChange(value){
        console.log(value)
    }
    render(){

        const annouce = this.state.AnnoceData.sort(function (a, b) {
            return a.time < b.time ? 1 : -1
        });

        const editstyle = {
            display: this.state.editstate,
        }

        const annouceview = annouce.map(
            (item, index) =>
                <div key={index} style={{ height: "40px", lineHeight: "20px", paddingTop: '10px', paddingBottom: '10px' }}>{item.text}</div>
        )


        return(
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
                            <Input id={'NewAnn'} placeholder="Basic usage" style={{ width: "90%" }}/>
                            <Button type="primary" style={{ margin: "10px" }} onClick={()=>this.AddNewannouce()}>
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
        );
    }
}

export default WardcardNote;