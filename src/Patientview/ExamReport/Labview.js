import React, { Component } from 'react';
import { DatePicker, Button, Select } from 'antd';
import moment from 'moment';

class Labview extends Component {
    state = {
        Datelist: []
    }

    changedate(list) {
        console.log(list)
        this.setState(
            {
                Datelist: list
            }
        )
    }
    render() {
        console.log(this.state.Datelist)
        const { Option } = Select;
        const { RangePicker } = DatePicker;
        const dateFormat = 'YYYY/MM/DD';
        const datearray = []
        var statetime = {
            "starttime": (+new Date()),
            "Endtime": (+new Date())
        }
        function onChange(value, dateString) {
            statetime.starttime = (+new Date(dateString[0]))
            statetime.Endtime = (+new Date(dateString[1]))
            const diffcount = ((statetime.Endtime - statetime.starttime) / 86400000) + 1
            datearray.length = 0
            for (let index = 0; index < diffcount; index++) {
                const element = statetime.starttime + (index * 86400000);
                datearray.push(element)
            }
        }

        let dataview = this.state.Datelist.map(
            (item, index) =>
                <div key={index} style={{width:"64px" ,height: "50px", lineHeight: "50px", textAlign: "center", paddingRight: "10px" ,paddingLeft:"10px",backgroundColor:"rgba(255,249,237,1)"}}>
                    {timestampchange(item)}
                </div>
        )

        function timestampchange(time) {
            var months = "1,2,3,4,5,6,7,8,9,10,11,12".split(",");
            return months[new Date(time).getMonth()] + "/" + new Date(time).getDate()
        }

        return (
            <div style={{ width: "100%", marginBottom: "20px" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px' }}>
                    <div style={{ fontSize: "22px", fontFamily: "PingFangTC-Medium" }}>
                        LAB(常規檢驗）
                    </div>
                </div>
                <div>
                    <Select defaultValue="lucy" style={{ width: '20%' }}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                    <RangePicker
                        defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                        format={dateFormat}
                        style={{ marginLeft: "10px" }}
                        onChange={onChange}
                    />
                    <Button style={{ marginLeft: "10px" }} onClick={() => this.changedate(datearray)}>搜尋</Button>
                </div>
                <div style={{ display: "flex", marginTop: "10px", borderRadius: "4px" }}>
                    <div>
                        <div style={{ padding: "15px", backgroundColor: "rgba(255,249,237,1)", height: "50px", width: "100px", textAlign: 'center' }}>檢驗項目</div>
                        <div style={{ padding: "15px", backgroundColor: "rgba(255,249,237,1)", height: "50px", width: "100px", textAlign: 'center' }}>Na</div>
                        <div style={{ padding: "15px", backgroundColor: "rgba(255,249,237,1)", height: "50px", width: "100px", textAlign: 'center' }}>K</div>
                        <div style={{ padding: "15px", backgroundColor: "rgba(255,249,237,1)", height: "50px", width: "100px", textAlign: 'center' }}>Ca</div>
                        <div style={{ padding: "15px", backgroundColor: "rgba(255,249,237,1)", height: "50px", width: "100px", textAlign: 'center' }}>Mg</div>
                        <div style={{ padding: "15px", backgroundColor: "rgba(255,249,237,1)", height: "50px", width: "100px", textAlign: 'center' }}>p</div>
                        <div style={{ padding: "15px", backgroundColor: "rgba(255,249,237,1)", height: "50px", width: "100px", textAlign: 'center' }}>Bun</div>
                        <div style={{ padding: "15px", backgroundColor: "rgba(255,249,237,1)", height: "50px", width: "100px", textAlign: 'center' }}>Cr</div>
                    </div>
                    <div style={{ display: "flex",width: "auto", overflowY: "auto" }}>
                        {dataview}
                    </div>
                </div>
            </div>
        );
    }
}

export default Labview;