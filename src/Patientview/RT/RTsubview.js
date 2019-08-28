import React, { Component } from 'react'
import { DatePicker, Input, Button } from 'antd'
import Table from './Gastable'

class RTsubview extends Component {
    TableSelect(item) {
        switch (item) {
            case 0:
                return (<Table gridcount={"Gas"} />);
            case 1:
                return (<Table gridcount={"Breath"} />);
            case 2:
                return (<Table gridcount={"xRay"} />);
            default:
                break;
        }
    }

    Titlestate(item){
        switch (item) {
            case 0:
                return "Gas 血氧分析";
            case 1:
                return "呼吸器使用紀錄";
            case 2:
                return "X-Ray";
            default:
                return null
        }

    }

    render() {
        const { RangePicker } = DatePicker;
        function onChange(date, dateString) {
            console.log(date, dateString);
        }
        const { tableState } = this.props
        return (
            <div style={{ width: "100%" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px' }}>
                    <div style={{ fontSize: "22px", fontFamily: "PingFangTC-Medium" }}>{this.Titlestate(tableState)}</div>
                </div>
                <div style={{ display: 'flex' }}>
                    <RangePicker onChange={onChange} />
                    <Input placeholder="Basic usage" style={{ width: "30%", marginLeft: "10px" }} />
                    <Button style={{ marginLeft: "10px" }}>搜尋</Button>
                </div>
                {this.TableSelect(tableState)}
            </div>
        );
    }
}

export default RTsubview