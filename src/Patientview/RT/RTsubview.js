import React, { Component } from 'react'
import { DatePicker, Input, Button } from 'antd'
import Rttable from './RT_table'
import searchlogo from '../../Image/svg/Search.svg'

class RTsubview extends Component {
    TableSelect(item) {
        switch (item) {
            case 0:
                return (<Rttable gridcount={"Gas"} />);
            case 1:
                return (<Rttable gridcount={"Breath"} />);
            case 2:
                return (<Rttable gridcount={"xRay"} />);
            default:
                break;
        }
    }

    title(item){
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
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '40px' }}>
                    <div style={{ fontSize: "2rem" }}>{this.title(tableState)}</div>
                </div>
                <div style={{ display: 'flex' ,alignItems:"center"}}>
                    <RangePicker onChange={onChange} />
                    <Input placeholder="Basic usage" style={{ width: "40%",margin:"0px 10px" }} />
                    <img src={searchlogo} alt="searchlogo"/>
                </div>
                {this.TableSelect(tableState)}
            </div>
        );
    }
}

export default RTsubview