import React, { Component } from 'react';
import { Switch } from 'antd';
import "./Bedview.css";
import Wardcard from './Wardcard';
import Wardcarddetail from './Wardcarddetail';
import Unpreviewwardcard from './UnpreviewWardCard'
import Unpreviewwardcarddetail from './UnpreviewWardCardDetail'
import { renderRoutes } from 'react-router-config';
import { jsonResponse, updatetime } from '../jsonResponse';

class Bedview extends Component {

    state = {
        previewmode: false,
        simplemode: false,
        select: null
    };

    callbackFunction = (childData) => {
        this.setState({ select: childData })
    }

    onChangesimple = () => {
        this.setState({
            simplemode: !this.state.simplemode,
        });
    }

    onChangedisplay = () => {
        this.setState({
            previewmode: !this.state.previewmode,
        });
    }

    previwbool() {
        if (!this.state.previewmode) {
            return (
                <div className="wardinfocontent">{renderRoutes(this.props.route.routes)}</div>
            );
        }
    }

    previewswitch() {

        const wardcardlist = []
        const wardcarddetaillist = []
        const Unpreview_Wardcardlist = []
        const Unpreview_Wardcarddetaillist = []

        const source = jsonResponse;
        console.log(source.Userdata.user)
        for (let i = 0; i < source.Userdata.user.length; i++) {
            wardcardlist.push(<Wardcard key={i} data={source.Userdata.user[i]} parentCallback={this.callbackFunction} selectstate={this.state.select} />)
            wardcarddetaillist.push(<Wardcarddetail key={i} data={source.Userdata.user[i]} parentCallback={this.callbackFunction} selectstate={this.state.select} />)
        }

        for (let i = 0; i < 12; i++) {
            if (source.Userdata.user[i] == null) {
                Unpreview_Wardcardlist.push(<Unpreviewwardcard key={i} data={null} selectstate={null} />)
                Unpreview_Wardcarddetaillist.push(<Unpreviewwardcarddetail key={i} data={null} selectstate={null} />)
            }
            else {
                Unpreview_Wardcardlist.push(<Unpreviewwardcard key={i} data={source.Userdata.user[i]} selectstate={null} />)
                Unpreview_Wardcarddetaillist.push(<Unpreviewwardcarddetail key={i} data={source.Userdata.user[i]} selectstate={null} />)
            }
        }
        if (this.props.location === "/Main/Bedview/Wardindex") {
            console.log(123)
        }
        const detailstyle = {
            padding: '10px',
            width: '30%',
            overflow: 'auto',
            maxHeight: '80vh'
        }

        const previewstyle = {
            margin: '10px',
            overflow: 'auto',
            maxHeight: '650px',
            width: '99%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr'
        }
        if (this.state.previewmode) {
            if (this.state.simplemode) {
                return (
                    <div style={previewstyle}>{Unpreview_Wardcardlist}</div>
                );
            } else {
                return (
                    <div style={previewstyle}>{Unpreview_Wardcarddetaillist}</div>
                );
            }
        }
        else {
            if (this.state.simplemode) {
                return (
                    <div style={{ display: 'flex' }}>
                        <div style={detailstyle}>{wardcardlist}</div>
                        <div className="wardinfocontent">{renderRoutes(this.props.route.routes)}</div>
                    </div>
                );
            } else {
                return (
                    <div style={{ display: 'flex' }}>
                        <div style={detailstyle}>{wardcarddetaillist}</div>
                        <div className="wardinfocontent">{renderRoutes(this.props.route.routes)}</div>
                    </div>
                );
            }
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
            <div>
                <div style={{ paddingLeft: "10px", paddingRight: "10px", fontSize: "16px", display: "flex", justifyContent: "space-between", alignItems: 'center' }}>病房總覽</div>
                <div style={{ paddingLeft: "10px", paddingRight: "10px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                        <span style={{ fontSize: "14px" }}>資料更新時間</span>
                        <span style={{ marginLeft: "10px", fontSize: "14px" }}>{Timestampformat(update.time)}</span>
                        <span style={{ marginLeft: "10px", fontSize: "14px" }}>{HourTimestampformat(update.time)}</span>
                    </div>
                    <div>
                        <Switch style={{ marginRight: 5 }} checkedChildren="Detail" unCheckedChildren="Detail" defaultChecked onChange={this.onChangesimple} />
                        <Switch checkedChildren="Previw" unCheckedChildren="Previw" defaultChecked onChange={this.onChangedisplay} />
                    </div>
                </div>
                <div>
                    {this.previewswitch()}
                </div>
            </div>
        );
    }
}

export default Bedview;