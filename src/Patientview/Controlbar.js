import React, { Component } from 'react';
import { Button, DatePicker, Checkbox } from 'antd';
import moment from 'moment';
import displaylogo from '../Image/svg/filter.svg'
import Basicinformation from './CrossSectionView/Basicinformation';


class Controlbar extends Component {
    state = {
        display_Mode: false,
        item: this.props.item_array,
        scrollstate: 0
    }
    sendData = (itwm_array) => {
        this.props.parentCallback(itwm_array);
    }


    sendDateData = (Datestring) => {
        this.props.parentDateCallback(Datestring);
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
    onDateChange = (date, dateString) => {
        if (date === null) {
            console.log(null)
        }
        else {
            this.sendDateData(dateString)
        }
    }
    open_display() {
        this.setState({
            display_Mode: !this.state.display_Mode
        })
    }
    componentDidMount() {
        var el = document.getElementById("crossection");
        el.addEventListener("scroll", this.onScrollHandle.bind(this));
    }

    onScrollHandle() {

        var eq = document.getElementById("crossection").scrollTop;
        console.log(eq)
        if (eq < 480 && eq >= 0) {
            this.setState({ scrollstate: 0 })
        }
        if (eq < 1200 && eq >= 480) {
            this.setState({ scrollstate: 1 })
        }
        if (eq < 1600 && eq >= 1200) {
            this.setState({ scrollstate: 2 })
        }
        if (eq < 1900 && eq >= 1600) {
            this.setState({ scrollstate: 3 })
        }
        if (eq >= 1900) {
            this.setState({ scrollstate: 4 })
        }

    }

    scroll_btn_style(index) {
        console.log(index, this.state.scrollstate)
        if (index === this.state.scrollstate) {
            return true
        }
        else return false
    }
    render() {
        const { btnlist } = this.props
        const btn_style = {
            click_style: { border: "rgba(245, 166, 35, 1) 1px solid", color: "white", background: "rgba(245, 166, 35, 1)", borderRadius: "16px" },
            unclick_style: { borderRadius: "16px", color: "rgba(245, 166, 35, 1)", border: "rgba(245, 166, 35, 1) 1px solid" }
        }
        let btn = btnlist.map(
            (item, index) => <Button onClick={this.scrollToAnchor.bind(this, item.scrollpoint)} key={index} style={this.scroll_btn_style(index) ? btn_style.click_style : btn_style.unclick_style}>{item.name}</Button>
        )
        const { userdata, Datestring } = this.props
        const dateFormat = 'YYYY/MM/DD';

        const date_string = new Date(Datestring).getFullYear() + "/" + Monthformat(new Date(Datestring).getMonth()) + "/" + new Date(Datestring).getDate()
        function Monthformat(month) {
            return month + 1
        }

        const display_style = {
            displye_mode: { position: "absolute", right: '0px', top: "50px", width: "200px", background: "white", boxShadow: "3px 3px 12px" },
            non_display_mode: { display: "none" },
            check_area: { display: "flex", justifyContent: "center", alignItems: "center" },
            check_text: { padding: "10px", width: "140px", borderRadius: "4px", borderColor: 'rgba(0, 0, 0, 0.15)', borderStyle: "solid", borderWidth: "1px", marginLeft: "10px" }
        }

        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "8px", height: "50px" }}>
                <div style={{display:"grid",gridTemplateColumns:"auto auto",gridColumnGap:"10px"}}>
                    <DatePicker onChange={this.onDateChange} defaultValue={moment(date_string, dateFormat)} placeholder="資料時間" />
                    <Basicinformation userdata={userdata}></Basicinformation>
                </div>
                <div style={{ display: "flex", alignItems: 'center', position: "relative" }}>
                    <div style={{ fontSize: "1.3rem" }}>項目切換：</div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(5,auto)", gridColumnGap: "5px" }}>{btn}</div>
                    <div onClick={() => this.open_display()} style={{ cursor: "pointer", marginLeft: "5px" }}>
                        <img src={displaylogo} alt='displaylogo' style={{ width: '22px', height: '22px' }}></img>
                    </div>
                    <div style={this.state.display_Mode ? display_style.displye_mode : display_style.non_display_mode}>
                        <div style={{ fontSize: "1.3rem", display: 'flex', alignItems: "center", justifyContent: "center", marginTop: "20px" }}>Displayed</div>
                        <div style={{ marginTop: "10px", marginBottom: "20px" }}>
                            <Checkbox.Group defaultValue={this.state.item} id={"checkbox_group"} style={{ width: '100%', display: "grid", gridTemplateRows: "repeat(6,1fr)", gridRowGap: "5px" }} onChange={this.onChange}>
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