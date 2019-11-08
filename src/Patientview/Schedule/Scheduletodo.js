import React, { Component } from 'react';
import editlogo from '../../Image/svg/Edit.svg'
import { Checkbox,Input,Button } from 'antd';
import { log } from 'util';

class Scheduletodo extends Component {
    state = {
        EditMode: false,
        displayMode: true, //true已完成 flase未完成
        todolist:this.props.todolist_data
    }
    onChangeEditMode() {
        this.setState(
            {
                EditMode: !this.state.EditMode
            }
        )
    }

    onClickCancel() {
        this.setState(
            {
                EditMode: false
            }
        )
    }

    onClickEnter() {
        this.setState(
            {
                EditMode: false
            }
        )
    }
    onClickfinish(){
        console.log("finish")
        this.setState(
            {
                displayMode:true
            }
        )
    }
    onClickunfisish(){
        this.setState(
            {
                displayMode:false
            }
        )
    }

    onChange = (checkedValues) => {
        console.log('checked = ', document.getElementById("finish"));
        

    }
    render() {
        const button_style = {
            finish: { display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "16px", border: "rgba(245, 166, 35, 1) 1px solid", color: "rgba(245, 166, 35, 1)" },
            unfinish: { display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "16px", border: "rgba(245, 166, 35, 1) 1px solid", background: "rgba(245, 166, 35, 1)", color: "white" }
        }

        const todolist_data = this.state.todolist
        console.log(todolist_data)
        const finish_data = todolist_data.filter(function(item,index,array){
            return item.Flag === true
        });

        const finish_value = finish_data.map(function(item, index, array){
            return item.Time
        });

        const unfinish_data = todolist_data.filter(function(item,index,array){
            return item.Flag === false
        });
        const finish_checkbox = finish_data.map(function(item,index,array){
            return (
                <div key={index}><Checkbox  value={item.Time}>{item.Content}</Checkbox></div>
            );
        });
        const unfinish_checkbox = unfinish_data.map(function(item,index,array){
            return (
                <div key={index}><Checkbox value={item.Time}>{item.Content}</Checkbox></div>
            );
        });
        return (
            <div style={{ marginBottom: "20px" }}>
                <div style={{ fontSize: "2rem" }}>To Do List</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 10px", background: "rgba(238,238,238,1)" }}>
                    <div style={{ fontSize: "1.5rem" }}>待辦排程</div>
                    <div onClick={() => this.onChangeEditMode()}>
                        <img src={editlogo} alt="editlogo" />
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "10px 0px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "115px 115px", gridColumnGap: "10px" }}>
                        <div onClick={()=>this.onClickunfisish()} style={this.state.displayMode ? button_style.finish : button_style.unfinish}>未完成</div>
                        <div onClick={()=>this.onClickfinish()} style={this.state.displayMode ? button_style.unfinish : button_style.finish}>已完成</div>
                    </div>
                </div>
                <Checkbox.Group defaultValue={finish_value} style={{ width: '100%' }} onChange={this.onChange}>
                    <div style={{ overflowY: "auto", maxHeight: "200px" }}>
                        {this.state.displayMode?finish_checkbox:unfinish_checkbox}
                    </div>
                </Checkbox.Group>
                <div style={{ display: this.state.EditMode ? "block" : "none" }}>
                    <div style={{ padding: "5px 10px",display:"flex",justifyContent:"center",alignItems:"center" }}>
                        <Input placeholder="輸入當日註記內容"></Input>
                        <Button type="primary">新增</Button>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "auto auto", gridColumnGap: "20px" }}>
                            <Button onClick={() => this.onClickCancel()}>取消</Button>
                            <Button onClick={() => this.onClickEnter()} type="primary">儲存</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Scheduletodo