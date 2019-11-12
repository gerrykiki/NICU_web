import React, { Component } from 'react';
import { DatePicker, Button, Select } from 'antd';
import filterlogo from '../../Image/svg/filter.svg'
import Chronic_io from './Chronic_io'
import Chronic_lab from './Chronic_lab'
import Chronic_rt from './Chronic_rt'
import Chronic_order from './Chronic_order'
import Chronic_weight from './Chronic_weight'
import Chronic_vital from './Chronic_vital'
import Vitalxaxis from '../../Module/Vitalxaxis'
import Vitalxaxisbot from '../../Module/Vitalxaxisbot'
import moment from 'moment'

class Chroniclelayout extends Component {
    state = {
        display_Mode: false,
        item: this.props.item_array,
        scrollstate: 0,
        select_date: new Date().getTime(),
        select_interval: 0
    }
    componentDidMount() {
        var el = document.getElementById("chronic");
        el.addEventListener("scroll", this.onScrollHandle.bind(this));
    }

    onScrollHandle(event) {

        var eq = document.getElementById("chronic").scrollTop;
        console.log(eq)
        if (eq < 170 && eq >= 0) {
            this.setState({ scrollstate: 0 })
        }
        if (eq < 610 && eq >= 170) {
            this.setState({ scrollstate: 1 })
        }
        if (eq < 950 && eq >= 610) {
            this.setState({ scrollstate: 2 })
        }
        if (eq < 1000 && eq >= 950) {
            this.setState({ scrollstate: 3 })
        }
        if (eq < 1300 && eq >= 1000) {
            this.setState({ scrollstate: 4 })
        }
        if (eq >= 1300) {
            this.setState({ scrollstate: 5 })
        }

    }
    scrollToAnchor = (anchorName) => {
        console.log(anchorName)
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if (anchorElement) { anchorElement.scrollIntoView(false); }
        }
    }
    scroll_btn_style(index) {
        console.log(index, this.state.scrollstate)
        if (index === this.state.scrollstate) {
            return true
        }
        else return false
    }
    onChange = (date, dateString) => {
        console.log(date, dateString);
        this.setState(
            {
                select_date: new Date(dateString).getTime()
            }
        )
    }
    onSelectchange = (value) => {
        this.setState(
            {
                select_interval: value
            }
        )
    }
    render() {
        function monthformat(month) {
            return month + 1
        }
        function timeformat(time) {
            return new Date(time).getFullYear() + "/" + monthformat(new Date(time).getMonth()) + "/" + new Date(time).getDate()
        }
        const { Option } = Select;
        const dateFormat = 'YYYY/MM/DD';
        const { userdata } = this.props
        const crosssectioncontrollist =
            [{ "name": "生命徵象", "scrollpoint": "vital_sign_chronic" },
            { "name": "輸出入", "scrollpoint": "input_output_chronic" },
            { "name": "檢驗結果", "scrollpoint": "lab_chronic" },
            { "name": "呼吸評估", "scrollpoint": "rt_chronic" },
            { "name": "醫藥囑", "scrollpoint": "order_chronic" },
            { "name": "體重", "scrollpoint": "infection_chronic" }]

        const btn_style = {
            click_style: { border: "rgba(245, 166, 35, 1) 1px solid", color: "white", background: "rgba(245, 166, 35, 1)", borderRadius: "16px" },
            unclick_style: { borderRadius: "16px", color: "rgba(245, 166, 35, 1)", border: "rgba(245, 166, 35, 1) 1px solid" }
        }
        let button = crosssectioncontrollist.map(
            (item, index) => <Button onClick={this.scrollToAnchor.bind(this, item.scrollpoint)} key={index} style={this.scroll_btn_style(index) ? btn_style.click_style : btn_style.unclick_style}>{item.name}</Button>);

        return (
            <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <DatePicker onChange={this.onChange} defaultValue={moment(timeformat(this.state.select_date), dateFormat)} />
                        <Select defaultValue={this.state.select_interval} style={{ width: 120, marginLeft: "20px" }} onChange={this.onSelectchange}>
                            <Option value={0}>一天</Option>
                            <Option value={1}>三天</Option>
                            <Option value={2}>一週</Option>
                            <Option value={3}>兩週</Option>
                        </Select>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(8,auto)", gridColumnGap: "15px" }}>
                        <div style={{ fontSize: "1.3rem", display: "flex", justifyContent: "center", alignItems: "center" }}>項目切換:</div>
                        {button}
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src={filterlogo} alt='filterlogo'></img>
                        </div>
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "90px 1fr", height: "10px", marginTop: "10px" }}>
                    <div></div>
                    <Vitalxaxis max={200} min={0} select_interval={this.state.select_interval} select_date={this.state.select_date} id_key="xaxis_chronic" svg_id="xaxis_svg_chronic"></Vitalxaxis>
                </div>
                <div id="chronic" style={{ maxHeight: "60vh", overflow: "auto" }}>
                    {/* Vital sign */}
                    <div id="vital_sign_chronic">
                        <Chronic_vital select_date={this.state.select_date} select_interval={this.state.select_interval} userdata={userdata} title="Vital"></Chronic_vital>
                    </div>
                    {/* I/O */}
                    <div id="input_output_chronic">
                        <Chronic_io select_interval={this.state.select_interval} userdata={userdata} title="輸出入"></Chronic_io>
                    </div>
                    {/* Lab */}
                    <div id="lab_chronic">
                        <Chronic_lab select_interval={this.state.select_interval} userdata={userdata} title="檢驗結果"></Chronic_lab>
                    </div>
                    {/* RT */}
                    <div id="rt_chronic">
                        <Chronic_rt select_interval={this.state.select_interval} userdata={userdata} title=""></Chronic_rt>
                    </div>
                    {/* Order */}
                    <div id="order_chronic">
                        <Chronic_order select_interval={this.state.select_interval} userdata={userdata} title=""></Chronic_order>
                    </div>
                    {/* 體重 */}
                    <div id="infection_chronic">
                        <Chronic_weight select_interval={this.state.select_interval} userdata={userdata} title=""></Chronic_weight>
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "90px 1fr", height: "10px", marginTop: "30px" }}>
                    <div></div>
                    <Vitalxaxisbot max={200} min={0} select_interval={this.state.select_interval} select_date={this.state.select_date} id_key="xaxis_bot_chronic" svg_id="xaxis_bot_svg_chronic"></Vitalxaxisbot>
                </div>
            </div>
        );
    }
}

export default Chroniclelayout;