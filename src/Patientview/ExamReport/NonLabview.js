import React, { Component } from 'react';
import Nonlabviewtable from '../CrossSectionView/Nonlabviewtable'
import { DatePicker, Input,Button } from 'antd';
import moment from 'moment';


class Nonlabview extends Component {

    Inputvaluesearch(value){
        console.log(value)
    }
    render() {
        var statetime = {
            "Starttime": (+new Date()),
            "Endtime": (+new Date())
        }
        const datearray = []
        const { RangePicker } = DatePicker;
        const dateFormat = 'YYYY/MM/DD';
        function onChange(value, dateString){
            statetime.Starttime = (+new Date(dateString[0]))
            statetime.Endtime = (+new Date(dateString[1]))
            datearray.push(statetime.Starttime )
            datearray.push(statetime.Endtime)
        }
        function Inputchange(){
            const value = {
                "date":datearray,
                "keyword":document.getElementById("keywordsearch").value
            }
            console.log(value)
        }
        return (
            <div style={{ width: "100%", marginBottom: "20px" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px' }}>
                    <div style={{ fontSize: "22px", fontFamily: "PingFangTC-Medium" }}>
                        Lab(非常規檢驗)
                    </div>
                </div>
                <div style={{ marginBottom: "10px" ,display:"flex"}}>
                    <RangePicker
                        defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                        format={dateFormat}
                        onChange={onChange}
                    />
                    <Input id="keywordsearch" placeholder="輸入關鍵字" style={{marginLeft:"5px",width:"25%"}}/>
                    <Button onClick={Inputchange} style={{marginLeft:"5px"}}>搜尋</Button>
                </div>
                <Nonlabviewtable></Nonlabviewtable>
            </div>
        );
    }
}

export default Nonlabview