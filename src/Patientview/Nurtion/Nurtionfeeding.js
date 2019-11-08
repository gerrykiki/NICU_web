import React, { Component } from 'react'
import { DatePicker, Input } from 'antd';
import searchlogo from '../../Image/svg/Search.svg'
import Nurtionfeedingcell from './Nurtionfeedingcell'



class Nurtionfeedingorder extends Component {
    search_click() {
        const inputdata = document.getElementById("nurtion_feeding_input").value
        const datapicker = document.querySelectorAll("input.ant-calendar-picker-input")[1].value
        console.log(datapicker)
        if (inputdata == '' || inputdata == undefined || inputdata == null) {
            console.log("No input data")
        }
        else {
            console.log("Click search input = " + inputdata)

        }
        if (datapicker == '' || datapicker == undefined || datapicker == null) {
            console.log("No input data")
        }
        else {
            console.log("Click search input = " + datapicker)

        }

    }
    render() {
        const title = ["開立時間", "處置名稱", "開始時間", "結束時間", "開立醫生"]
        const row_data = [
            {
                FeedingOrderTime: 1566287810473,
                FeedingOrderDispositionName: "Check ABG",
                FeedingOrderStartTime: 1566287810473,
                FeedingOrderEndTime: 1566287810473,
                FeedingOrderFood: "banana",
                FeedingOrderRemarks: "abc",
            }
        ]
        const table_title = title.map((info, index) =>
            <div key={index} style={{ display: "flex", alignItems: "center",fontSize:"1rem" }}>{info}</div>
        )

        const table_cell = row_data.map((info, index) =>
            <Nurtionfeedingcell key={index} rowdata={info}/>
        )
        return (
            <div>
                <div style={{ fontSize: "2rem" }}>Feeding Order</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 2fr", gridColumnGap: "10px" }}>
                    <DatePicker id="nurtion_feeding_datepicker" />
                    <Input id="nurtion_feeding_input" placeholder="請輸入關鍵字" />
                    <div onClick={() => this.search_click()} style={{ display: "flex", alignItems: "center" }}>
                        <img src={searchlogo} alt="searchlogo" />
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr 1fr 1fr 1fr", height: "40px" }}>
                    {table_title}
                </div>
                {table_cell}
            </div>
        );
    }
}

export default Nurtionfeedingorder