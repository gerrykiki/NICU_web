import React, { Component } from 'react';
import { Switch } from 'antd';
import Wardcarddetail from './Wardcarddetail';
import Unpreviewwardcarddetail from './UnpreviewWardCardDetail'
import { jsonResponse, updatetime } from '../jsonResponse';
import Wardinfoindex from './Wardinfoindex'
import Wardinfouser from './Wardinfouser'
import { dev_path } from '../API/Apidata'

class Bedview extends Component {
    _isMounted = false;
    state = {
        index: true,
        previewmode: false,
        simplemode: true,
        select: null,
        source: []
    };
    componentDidMount() {
        this._isMounted = true;
        if (this._isMounted) {
            this._isMounted = false
            fetch(dev_path + 'nicu/wardPatients', {
                method: "Get",
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': sessionStorage.getItem("Logindata")
                }
            })
                .then(res => res.json())
                .then(data => {
                    this.setState(
                        {
                            source: data
                        }
                    )
                })
                .catch(e => { console.log(e) });
        }
    }

    componentDidUpdate() {
        if (this._isMounted) {
            this._isMounted = false
            fetch(dev_path + 'nicu/wardPatients', {
                method: "Get",
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': sessionStorage.getItem("Logindata")
                }
            })
                .then(res => res.json())
                .then(data => {
                    this.setState(
                        {
                            source: data
                        }
                    )
                })
                .catch(e => { console.log(e) });
        }
    }
    callbackFunction = (wardinfo) => {
        this.setState({ select: wardinfo })
    }

    onChangesimple = (checked) => {
        this._isMounted = true;
        this.setState({
            simplemode: !this.state.simplemode,
        });
    }

    onChangedisplay = (checked) => {
        this._isMounted = true;
        this.setState({
            previewmode: !this.state.previewmode,
        });
    }

    onWardcardDisplay() {
        //userdata
        const source = this.state.source;
        const wardcarddetaillist = []
        const Unpreview_Wardcarddetaillist = []
        console.log("12312312")
        //simplemode true:簡 false:繁
        if (!this.state.previewmode) {
            for (let i = 0; i < source.length; i++) {
                wardcarddetaillist.push(<Wardcarddetail bedbumber={i+1} key={i} data={source} parentCallback={this.callbackFunction} selectstate={this.state.select} previewmode={true} simplemode={this.state.simplemode} />)
            }
        }
        else {
            for (let i = 0; i < 12; i++) {
                console.log(source[i])
                if (source[i] == null) {
                    Unpreview_Wardcarddetaillist.push(<Unpreviewwardcarddetail bedbumber={i+1} key={i} data={null} selectstate={null} previewmode={false} simplemode={this.state.simplemode} />)
                }
                else {
                    Unpreview_Wardcarddetaillist.push(<Wardcarddetail bedbumber={i+1} key={i} data={source} selectstate={null} parentCallback={this.callbackFunction} previewmode={false} simplemode={this.state.simplemode} />)
                }
            }

        }
        console.log(Unpreview_Wardcarddetaillist)
        const preview_style = { display: "grid", gridTemplateColumns: "1fr 3fr", gridColumnGap: "5px" }
        const Unpreview_style = { display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gridTemplateRows: "1fr 1fr 1fr", gridGap: "5px" }
        //true:Unpreview
        if (this.state.previewmode) {
            //true:sample
            if (this.state.simplemode) {
                return (
                    <div style={Unpreview_style}>{Unpreview_Wardcarddetaillist}</div>
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
                        <div style={{ overflow: "auto", maxHeight: "85vh", display: "grid", gridTemplateRows: "repeat(12,auto)", gridRowGap: "10px" }}>
                            {wardcarddetaillist}
                        </div>
                        {this.switch_wardbednumber(source)}
                    </div>
                );
            }
            //false:detail  
            else {
                return (
                    <div style={preview_style}>
                        <div style={{ overflow: "auto", maxHeight: "85vh", display: "grid", gridTemplateRows: "repeat(12,auto)", gridRowGap: "10px" }}>
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

    switch_titile_string() {
        const source = jsonResponse.Userdata.user
        const id_item = this.state.select
        if (this.state.select === null) {
            return "病房資訊摘要"
        }
        else {
            const filterdata = source.filter(function (item, index, array) {
                return item.id === id_item;       // 取得大於五歲的
            });
            const string = filterdata[0].Bednumber
            return "床號" + string + "病人資訊摘要"

        }

    }

    render() {
        const update = updatetime
        function Dateformat(time) {

            const months = "01,02,03,04,05,06,07,08,09,10,11,12".split(",");
            const timestrimg = new Date(time).getFullYear() + '-' + months[new Date(time).getMonth()] + '-' + addZero(new Date(time).getDate())
            return timestrimg
        }

        function Timeformat(time) {

            const timestrimg = addZero(new Date(time).getHours()) + ':' + addZero(new Date(time).getMinutes())
            return timestrimg
        }

        function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }

        return (
            <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
                <div style={{ height: "25px", display: "flex", justifyContent: "space-between", alignItems: 'center' }}>住院中病人資訊 > {this.switch_titile_string()}</div>
                <div style={{ height: "25px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <Switch style={{ marginRight: 5 }} checkedChildren="床頭卡顯示(繁)" unCheckedChildren="床頭卡顯示(簡)" defaultChecked={this.state.previewmode} onChange={this.onChangesimple} />
                        <Switch checkedChildren="病人摘要檢視(開)" unCheckedChildren="病人摘要檢視(關)" defaultChecked={this.state.simplemode} onChange={this.onChangedisplay} />
                    </div>
                    <div>
                        <span>資料更新時間</span>
                        <span style={{ marginLeft: "10px" }}>{Dateformat(update.time)}</span>
                        <span style={{ marginLeft: "10px" }}>{Timeformat(update.time)}</span>
                    </div>
                </div>
                <div style={{ marginTop: "5px" }}>
                    {this.onWardcardDisplay()}
                </div>
            </div>
        );
    }
}

export default Bedview;