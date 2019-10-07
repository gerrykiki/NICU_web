import React, { Component } from 'react';
import { Switch } from 'antd';
import "./Bedview.css";
import Wardcard from './Wardcard';
import Wardcarddetail from './Wardcarddetail';
import { renderRoutes } from 'react-router-config';
import { jsonResponse, updatetime } from '../jsonResponse';

class Bedview extends Component {

    state = {
        displaymode: false,
        simplemode: false
    };


    onChangesimple = () => {
        this.setState({
            simplemode: !this.state.simplemode,
        });
    }

    onChangedisplay = () => {
        this.setState({
            displaymode: !this.state.displaymode,
        });
    }

    previwbool() {
        if (!this.state.displaymode) {
            return (
                <div className="wardinfocontent">{renderRoutes(this.props.route.routes)}</div>
            );
        }
    }

    render() {
        const wardcardlist = []
        const wardcarddetaillist = []
        const detailstyle = {
            padding: '10px',
            width: '30%',
            overflow: 'auto',
            maxHeight: '80vh'
        }

        const simplestyple = {
            margin: '10px',
            overflow: 'auto',
            maxHeight: '650px',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr'
        }

        const source = jsonResponse;
        console.log(source);
        for (let i = 0; i < source.Userdata.user.length; i++) {
            wardcardlist.push(<Wardcard key={i} data={source.Userdata.user[0]} />)
            wardcarddetaillist.push(<Wardcarddetail key={i} data={source.Userdata.user[0]} />)
        }
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
                <div style={{ display: 'flex' }}>
                    <div style={this.state.displaymode ? simplestyple : detailstyle}>
                        {this.state.simplemode ? wardcardlist : wardcarddetaillist}
                    </div>
                    {this.previwbool()}
                </div>
            </div>
        );
    }
}

export default Bedview;