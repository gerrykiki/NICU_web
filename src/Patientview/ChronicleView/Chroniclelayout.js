import React, { Component } from 'react';
import { DatePicker, Button } from 'antd';
import filterlogo from '../../Image/svg/filter.svg'
import Chronic_io from './Chronic_io'
import Chronic_lab from './Chronic_lab'
import Chronic_rt from './Chronic_rt'

class Chroniclelayout extends Component {
    state = {
        display_Mode: false,
        item: this.props.item_array,
        scrollstate: 0
    }
    componentDidMount() {
        var el = document.getElementById("crossection");
        el.addEventListener("scroll", this.onScrollHandle.bind(this));
    }

    onScrollHandle(event) {

        var eq = document.getElementById("crossection").scrollTop;
        console.log(eq)
        if (eq < 520 && eq >= 0) {
            this.setState({ scrollstate: 0 })
        }
        if (eq < 1280 && eq >= 520) {
            this.setState({ scrollstate: 1 })
        }
        if (eq < 1690 && eq >= 1280) {
            this.setState({ scrollstate: 2 })
        }
        if (eq < 2100 && eq >= 1690) {
            this.setState({ scrollstate: 3 })
        }
        if (eq >= 2100) {
            this.setState({ scrollstate: 4 })
        }

    }
    scrollToAnchor = (anchorName) => {
        if (anchorName) {
            let anchorElement = document.getElementById(anchorName);
            if (anchorElement) { anchorElement.scrollIntoView(); }
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
        const { userdata } = this.props
        const crosssectioncontrollist =
            [{ "name": "vital", "scrollpoint": "vital_sign" },
            { "name": "I/O", "scrollpoint": "input_output" },
            { "name": "Lab", "scrollpoint": "lab" },
            { "name": "RT", "scrollpoint": "rt" },
            { "name": "Order", "scrollpoint": "order" },
            { "name": "Infection", "scrollpoint": "infection" }]

        const btn_style = {
            click_style: { border: "rgba(245, 166, 35, 1) 1px solid", color: "white", background: "rgba(245, 166, 35, 1)", borderRadius: "16px" },
            unclick_style: { borderRadius: "16px", color: "rgba(245, 166, 35, 1)", border: "rgba(245, 166, 35, 1) 1px solid" }
        }
        let btn = crosssectioncontrollist.map(
            (item, index) => <Button onClick={this.scrollToAnchor.bind(this, item.scrollpoint)} key={index} style={this.scroll_btn_style(index) ? btn_style.click_style : btn_style.unclick_style}>{item.name}</Button>);
        function onChange(date, dateString) {
            console.log(date, dateString);
        }
        return (
            <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <DatePicker onChange={onChange} />
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(8,auto)", gridColumnGap: "15px" }}>
                        <div style={{ fontSize: "1.3rem", display: "flex", justifyContent: "center", alignItems: "center" }}>項目切換:</div>
                        {btn}
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src={filterlogo} alt='filterlogo'></img>
                        </div>
                    </div>
                </div>
                {/* Vital sign */}
                {/* I/O */}
                <Chronic_io userdata={userdata} title="I/O"></Chronic_io>
                {/* Lab */}
                <Chronic_lab userdata={userdata} title="Lab"></Chronic_lab>
                {/* RT */}
                <Chronic_rt userdata={userdata} title=""></Chronic_rt>
                {/* Order */}
                {/* 體重 */}
            </div>
        );
    }
}

export default Chroniclelayout;