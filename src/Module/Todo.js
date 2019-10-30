import React, { Component } from 'react';
import { Checkbox ,Tooltip} from 'antd';
import { todo_data } from '../jsonResponse'
import detaillogo from '../Image/svg/details.svg'

class Todolayout extends Component {
    state = {
        Editstate: "none"
    }

    Editclick(editchange) {
        console.log(editchange)
        this.setState(
            {
                Editstate: editchange
            }
        );
    }

    updatetime_format(updatetime){

        function monthformat(month){
            return month + 1
        }
        
        return new Date(updatetime).getFullYear() + "-" + monthformat(new Date(updatetime).getMonth()) + "-" +new Date(updatetime).getDate() + " " + new Date(updatetime).getHours() + ":" + new Date(updatetime).getMinutes()
    }

    detail_text(info){
        return info.Editor + "醫師於" + this.updatetime_format(info.Time) + "更新" 
    }
    onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
        

    }
    render() {
        const { title } = this.props
        const checkbox_list = todo_data.map((info, index) =>
            <div key={index} style={{ height: "50px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Checkbox style={{ fontSize: "1.3rem" }} defaultChecked={info.Flag} value={index}>{info.Content}</Checkbox>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Tooltip placement="right" title={this.detail_text(info)}>
                        <div>
                            <img src={detaillogo} alt='detaillogo'></img>
                        </div>
                    </Tooltip>
                </div>
            </div>)
        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px', paddingRight: "5px", paddingLeft: "5px", background: "rgba(238, 238, 238, 1)" }}>
                    <div style={{ fontSize: "1.5rem" }}>{title}</div>
                </div>
                <div style={{ maxHeight: "250px", paddingLeft: "15px",paddingRight: "15px" }}>
                    {/*To do list */}
                    <Checkbox.Group style={{ width: '100%' }} onChange={this.onChange}>{checkbox_list}</Checkbox.Group>
                </div>
                {/* <div style={{ display: this.state.Editstate }}>
                    <div style={{ display: "grid", gridTemplateRows: "50px 50px", paddingRight: "16px", paddingLeft: "16px", backgroundColor: "rgba(238,238,238,1)" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <div style={{ marginRight: "10px" }}>待辦時間:</div>
                                <DatePicker placeholder="Select month" style={{ marginRight: "10px" }} />
                                <TimePicker defaultValue={moment('12:08', format)} format={format} />
                            </div>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <div style={{ marginRight: "10px" }}>結束時間:</div>
                                <DatePicker placeholder="Select month" style={{ marginRight: "10px" }} />
                                <TimePicker defaultValue={moment('12:08', format)} format={format} />
                            </div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "11fr 1fr" }}>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}><Input placeholder="待辦內容" /></div>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Button type="primary" style={{ width: "70%" }}>新增</Button>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", padding: "9px" }}>
                        <Button style={{ height: "35px", width: "100px", borderRadius: "4px" }} onClick={() => this.Editclick("none")}>取消</Button>
                        <div style={{ width: "20px" }}></div>
                        <Button type="primary" style={{ height: "35px", width: "100px", borderRadius: "4px" }}>儲存</Button>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Todolayout