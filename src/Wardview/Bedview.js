import React, { Component } from 'react';
import { Switch } from 'antd';
import "./Bedview.css";
import Wardcard from './Wardcard';
import Wardcarddetail from './Wardcarddetail';
import { renderRoutes } from 'react-router-config';

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

        for (let i = 0; i < 1; i++) {
            //記得在JSX中使用JS變數要用花括號包著
            wardcardlist.push(<Wardcard />)
            wardcarddetaillist.push(<Wardcarddetail />)
        }


        return (
            <div>
                <div className="wardcardlayout">
                    <div className="wardcardheader">
                        病房總覽
                    </div>
                    <div>
                        <span className="timeinformation">資料更新時間 {new Date().toLocaleString()}</span>
                        <span>
                            <Switch style={{ margin: 5 }} checkedChildren="Detail" unCheckedChildren="Detail" defaultChecked onChange={this.onChangesimple} />
                            <Switch style={{ margin: 5 }} checkedChildren="Previw" unCheckedChildren="Previw" defaultChecked onChange={this.onChangedisplay} />
                        </span>
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex' }}>
                        <div style={this.state.displaymode ? simplestyple : detailstyle}>
                            {this.state.simplemode ? wardcardlist : wardcarddetaillist}
                        </div>
                        {this.previwbool()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Bedview;