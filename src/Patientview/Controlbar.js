import React, { Component } from 'react';
import { Button, DatePicker, Checkbox, Row, Col } from 'antd';
import displaylogo from '../Image/svg/Display.svg'
import Basicinformation from './CrossSectionView/Basicinformation';


class Controlbar extends Component {
    state = {
        display_Mode: false,
        item:this.props.item_array
    }
    sendData = (itwm_array) => {
        this.props.parentCallback(itwm_array);
    }
    //快速滑動
    scrollToAnchor = (anchorName) => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if (anchorElement) { anchorElement.scrollIntoView(); }
        }
    }
    onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
        this.sendData(checkedValues)

    }
    open_display() {
        this.setState({
            display_Mode: !this.state.display_Mode
        })
    }
    render() {
        const { btnlist } = this.props
        let btn = btnlist.map(
            (item, index) => <Button onClick={this.scrollToAnchor.bind(this, item.scrollpoint)} key={index} style={{ margin: '5px', borderRadius: "16px", height: "32px", color: "rgba(245, 166, 35, 1)", borderColor: "rgba(245, 166, 35, 1)", borderWidth: "1px", borderStyle: "solid" }}>{item.name}</Button>
        )
        const { userdata } = this.props

        const display_style = {
            displye_mode: { position: "absolute", right: '0px', top: "50px", width: "200px", background: "white", boxShadow: "3px 3px 12px" },
            non_display_mode: { display: "none" },
            check_area: { display: "flex", justifyContent: "center", alignItems: "center" },
            check_text: { padding: "10px", width: "140px",borderRadius:"4px",borderColor:'rgba(0, 0, 0, 0.15)',borderStyle:"solid",borderWidth:"1px",marginLeft:"10px" }
        }
        console.log(this.state.item)
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(255, 249, 237, 1)', padding: "8px", height: "50px" }}>
                <div>
                    <DatePicker placeholder="資料時間" />
                </div>
                <Basicinformation userdata={userdata}></Basicinformation>
                <div style={{ display: "flex", alignItems: 'center', position: "relative" }}>
                    <div style={{ fontSize: "1.3rem" }}>項目切換：</div>
                    {btn}
                    <div onClick={()=>this.open_display()} style={{cursor:"pointer"}}>
                        <img src={displaylogo} alt='displaylogo' style={{ width: '22px', height: '22px' }}></img>
                    </div>
                    <div style={this.state.display_Mode ? display_style.displye_mode : display_style.non_display_mode}>
                        <div style={{ fontSize: "1.3rem", display: 'flex', alignItems: "center", justifyContent: "center", marginTop: "20px" }}>Displayed</div>
                        <div style={{ marginTop: "10px", marginBottom:"20px" }}>
                            <Checkbox.Group defaultValue={this.state.item} id={"checkbox_group"} style={{ width: '100%', display: "grid", gridTemplateRows: "repeat(6,1fr)",gridRowGap:"5px" }} onChange={this.onChange}>
                                <div style={display_style.check_area}>
                                    <Checkbox value={0}></Checkbox>
                                    <div style={display_style.check_text}>Vital Sign & I/O</div>
                                </div>
                                <div style={display_style.check_area}>
                                    <Checkbox value={1} ></Checkbox>
                                    <div style={display_style.check_text}>Lab</div>
                                </div>
                                <div style={display_style.check_area}>
                                    <Checkbox value={2}></Checkbox>
                                    <div style={display_style.check_text}>RT</div>
                                </div>
                                <div style={display_style.check_area}>
                                    <Checkbox value={3}></Checkbox>
                                    <div style={display_style.check_text}>Order</div>
                                </div>
                                <div style={display_style.check_area}>
                                    <Checkbox value={4}></Checkbox>
                                    <div style={display_style.check_text}>Schedule</div>
                                </div>
                                <div style={display_style.check_area}>
                                    <Checkbox value={5}></Checkbox>
                                    <div style={display_style.check_text}>To Do List</div>
                                </div>
                            </Checkbox.Group>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Controlbar;