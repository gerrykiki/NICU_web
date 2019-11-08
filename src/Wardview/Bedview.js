import React, { Component } from 'react';
import { Switch } from 'antd';
import Wardcard from './Wardcard';
import Wardcarddetail from './Wardcarddetail';
import Unpreviewwardcard from './UnpreviewWardCard'
import Unpreviewwardcarddetail from './UnpreviewWardCardDetail'
import { jsonResponse, updatetime } from '../jsonResponse';
import Wardinfoindex from './Wardinfoindex'
import Wardinfouser from './Wardinfouser'

class Bedview extends Component {

    state = {
        index: true,
        previewmode: false,
        simplemode: true,
        select: null
    };

    callbackFunction = (wardinfo) => {
        this.setState({ select: wardinfo })
    }

    onChangesimple = (checked) => {
        this.setState({
            simplemode: !this.state.simplemode,
        });
    }

    onChangedisplay = (checked) => {
        this.setState({
            previewmode: !this.state.previewmode,
        });
    }

    previewmode_switch() {

        const source = jsonResponse.Userdata.user;
        const wardcardlist = []
        const wardcarddetaillist = []
        const Unpreview_Wardcardlist = []
        const Unpreview_Wardcarddetaillist = []

        if (!this.state.previewmode) {
            for (let i = 0; i < source.length; i++) {
                wardcardlist.push(<Wardcard  bedbumber={i} key={i} data={source[i]} parentCallback={this.callbackFunction} selectstate={this.state.select} previewmode={true} />)
                wardcarddetaillist.push(<Wardcarddetail  bedbumber={i} key={i} data={source[i]} parentCallback={this.callbackFunction} selectstate={this.state.select} previewmode={true} />)
            }
        }
        else {
            for (let i = 0; i < 12; i++) {
                console.log(source[i])
                if (source[i] == null) {
                    Unpreview_Wardcardlist.push(<Unpreviewwardcard bedbumber={i} key={i} data={null} selectstate={null} previewmode={false} />)
                    Unpreview_Wardcarddetaillist.push(<Unpreviewwardcarddetail bedbumber={i} key={i} data={null} selectstate={null} previewmode={false} />)
                }
                else {
                    Unpreview_Wardcardlist.push(<Wardcard bedbumber={i} key={i} parentCallback={this.callbackFunction} data={source[i]} selectstate={null} previewmode={false} />)
                    Unpreview_Wardcarddetaillist.push(<Wardcarddetail bedbumber={i} key={i} data={source[i]} selectstate={null} parentCallback={this.callbackFunction} previewmode={false} />)
                }
            }

        }

        const preview_style = { display: "grid", gridTemplateColumns: "1fr 3fr", gridColumnGap: "5px" }
        const Unpreview_style = { display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gridTemplateRows: "1fr 1fr 1fr", gridGap: "5px" }
        //true:Unpreview
        if (this.state.previewmode) {
            //true:sample
            if (this.state.simplemode) {
                return (
                    <div style={Unpreview_style}>{Unpreview_Wardcardlist}</div>
                );
            }
            //false:detail 
            else {
                return (
                    <div style={Unpreview_style}>{Unpreview_Wardcarddetaillist}</div>
                );
            }
        }
        //false:preview
        else {
            if (this.state.simplemode) {
                //true:sample
                return (
                    <div style={preview_style}>
                        <div>
                            {wardcardlist}
                        </div>
                        {this.switch_wardbednumber(source)}
                    </div>
                );
            }
            //false:detail  
            else {
                return (
                    <div style={preview_style}>
                        <div>
                            {wardcarddetaillist}
                        </div>
                        {this.switch_wardbednumber(source)}
                    </div>
                );
            }
        }
    }
    select_warduser(source) {
        var select = this.state.select
        const filterData = source.filter(function (item, index, array) {
            return item.id === select;
        });
        return filterData[0];
    }

    switch_wardbednumber(source) {
        if (this.state.select === null) {
            return <Wardinfoindex />
        }
        return <Wardinfouser data={this.select_warduser(source)} parentCallback={this.callbackFunction}></Wardinfouser>
    }

    switch_titile_string(){
        const source = jsonResponse.Userdata.user
        const id_item = this.state.select
        if (this.state.select === null) {
            return "病房資訊摘要"
        }
        else {
            const filterdata = source.filter(function(item, index, array){
                return item.id === id_item;       // 取得大於五歲的
              });
            const string = filterdata[0].Bednumber
            return "床號" + string + "病人資訊摘要"

        }

    }

    render() {
        const update = updatetime

        function Timestampformat(time) {

            const months = "1,2,3,4,5,6,7,8,9,10,11,12".split(",");
            const timestrimg = new Date(time).getFullYear() + '-' + months[new Date(time).getMonth()] + '-' + new Date(time).getDate()
            return timestrimg
        }

        function HourTimestampformat(time) {

            const timestrimg = hourformat(new Date(time).getHours()) + ':' + hourformat(new Date(time).getMinutes())
            return timestrimg
        }

        function hourformat(hour) {
            switch (hour) {
                case 0:
                    return '00'
                case 1:
                    return '01'
                case 2:
                    return '02'
                case 3:
                    return '03'
                case 4:
                    return '04'
                case 5:
                    return '05'
                case 6:
                    return '06'
                case 7:
                    return '07'
                case 8:
                    return '08'
                case 9:
                    return '09'
                default:
                    return hour;
            }
        }
        return (
            <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>住院中病人資訊 > {this.switch_titile_string()}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <Switch style={{ marginRight: 5 }} checkedChildren="床頭卡顯示(繁)" unCheckedChildren="床頭卡顯示(簡)" defaultChecked={this.state.previewmode} onChange={this.onChangesimple} />
                        <Switch checkedChildren="病人摘要檢視(開)" unCheckedChildren="病人摘要檢視(關)" defaultChecked={this.state.simplemode} onChange={this.onChangedisplay} />
                    </div>
                    <div>
                        <span>資料更新時間</span>
                        <span style={{ marginLeft: "10px" }}>{Timestampformat(update.time)}</span>
                        <span style={{ marginLeft: "10px" }}>{HourTimestampformat(update.time)}</span>
                    </div>
                </div>
                <div style={{ marginTop: "5px" }}>
                    {this.previewmode_switch()}
                </div>
            </div>
        );
    }
}

export default Bedview;