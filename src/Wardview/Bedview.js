import React, { Component } from 'react';
import { Switch, Card } from 'antd';
import "./Bedview.css"
import Wardinfo from './Wardinfo';
import Wardcard from './Wardcard';
import Wardcarddetail from './Wardcarddetail'
import Wardinfoindex from './Wardinfoindex';
import { renderRoutes } from 'react-router-config'

class Bedview extends Component {

    state = {
        displaymode: false,
        simplemode: false,
        MedInfostate: false
    };

    onChangesimple = (checked) => {
        console.log(`switch to ${checked}`);
        this.setState({
            simplemode: !this.state.simplemode,
        });
    }



    onChangedisplay = (checked) => {
        console.log(`switch to ${checked}`);
        this.setState({
            displaymode: !this.state.displaymode,
        });
    }




    contentview = () => {
        if (this.state.displaymode && this.state.simplemode) {
            console.log("1");
            return (
                <div style={{ padding: 1, background: '#fff', display: 'flex' }}>
                    <div style={{ margin: '10px', overflow: 'auto', maxHeight: '650px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
                        <Wardcarddetail style={{ height: 'auto', margin: '5px' }} />
                        <Wardcarddetail style={{ height: 'auto', margin: '5px' }} />
                        <Wardcarddetail style={{ height: 'auto', margin: '5px' }} />
                        <Wardcarddetail style={{ height: 'auto', margin: '5px' }} />
                        <Wardcarddetail style={{ height: 'auto', margin: '5px' }} />
                        <Wardcarddetail style={{ height: 'auto', margin: '5px' }} />
                        <Wardcarddetail style={{ height: 'auto', margin: '5px' }} />
                        <Wardcarddetail style={{ height: 'auto', margin: '5px' }} />
                        <Wardcarddetail style={{ height: 'auto', margin: '5px' }} />
                        <Wardcarddetail style={{ height: 'auto', margin: '5px' }} />
                    </div>
                </div>
            );
        }
        else if (!this.state.displaymode && this.state.simplemode) {
            console.log("2");
            return (
                <div style={{ padding: 1, background: '#fff', display: 'flex' }}>
                    <div style={{ margin: '10px', display: 'flex', flexGrow: '1', width: '30%', justifyContent: 'center', overflow: 'auto', maxHeight: '650px',flexWrap:'wrap'}}>
                        <Wardcarddetail style={{ height: 'auto', width: '100%', margin: '5px' }} />
                        <Wardcarddetail style={{ height: 'auto', width: '100%', margin: '5px' }} />
                        <Wardcarddetail style={{ height: 'auto', width: '100%', margin: '5px' }} />
                        <Wardcarddetail style={{ height: 'auto', width: '100%', margin: '5px' }} />
                        <Wardcarddetail style={{ height: 'auto', width: '100%', margin: '5px' }} />
                        <Wardcarddetail style={{ height: 'auto', width: '100%', margin: '5px' }} />
                        <Wardcarddetail style={{ height: 'auto', width: '100%', margin: '5px' }} />
                        <Wardcarddetail style={{ height: 'auto', width: '100%', margin: '5px' }} />
                        <Wardcarddetail style={{ height: 'auto', width: '100%', margin: '5px' }} />
                        <Wardcarddetail style={{ height: 'auto', width: '100%', margin: '5px' }} />
                    </div>
                    <div className="wardinfocontent">
                        <div style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#333', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            個案資訊摘要
                </div>
                        <div style={{ borderTopWidth: '0px', borderBottomWidth: '1px', borderLeftWidth: '1px', borderRightWidth: '1px', borderStyle: 'solid', borderColor: '#333' }}>
                            {renderRoutes(this.props.route.routes)}
                        </div>
                    </div>
                </div>
            );

        }
        else if (this.state.displaymode && !this.state.simplemode) {
            console.log("3");
            return (
                <div style={{ padding: 1, background: '#fff', display: 'flex' }} >
                    <div style={{ margin: '10px', overflow: 'auto', maxHeight: '650px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
                        <Wardcard style={{ height: 'auto', margin: '5px' }}></Wardcard>
                        <Wardcard style={{ height: 'auto', margin: '5px' }}></Wardcard>
                        <Wardcard style={{ height: 'auto', margin: '5px' }}></Wardcard>
                        <Wardcard style={{ height: 'auto', margin: '5px' }}></Wardcard>
                        <Wardcard style={{ height: 'auto', margin: '5px' }}></Wardcard>
                        <Wardcard style={{ height: 'auto', margin: '5px' }}></Wardcard>
                        <Wardcard style={{ height: 'auto', margin: '5px' }}></Wardcard>
                        <Wardcard style={{ height: 'auto', margin: '5px' }}></Wardcard>
                        <Wardcard style={{ height: 'auto', margin: '5px' }}></Wardcard>
                        <Wardcard style={{ height: 'auto', margin: '5px' }}></Wardcard>
                    </div>
                </div>
            );

        }
        else {
            console.log("4");
            return (
                <div style={{ padding: 1, background: '#fff', display: 'flex' }}>
                    <div style={{ margin: '10px', display: 'flex', flexGrow: '1', width: '30%', justifyContent: 'center', overflow: 'auto', maxHeight: '650px',flexWrap:'wrap'}}>
                        <Wardcard style={{ height: '150px', width: '100%', margin: '5px' }} />
                        <Wardcard style={{ height: '150px', width: '100%', margin: '5px' }} />
                        <Wardcard style={{ height: '150px', width: '100%', margin: '5px' }} />
                        <Wardcard style={{ height: '150px', width: '100%', margin: '5px' }} />
                        <Wardcard style={{ height: '150px', width: '100%', margin: '5px' }} />
                        <Wardcard style={{ height: '150px', width: '100%', margin: '5px' }} />
                        <Wardcard style={{ height: '150px', width: '100%', margin: '5px' }} />
                        <Wardcard style={{ height: '150px', width: '100%', margin: '5px' }} />
                        <Wardcard style={{ height: '150px', width: '100%', margin: '5px' }} />
                        <Wardcard style={{ height: '150px', width: '100%', margin: '5px' }} />
                    </div>
                    <div className="wardinfocontent">
                        <div style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#333', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            個案資訊摘要
                        </div>
                        <div style={{ borderTopWidth: '0px', borderBottomWidth: '1px', borderLeftWidth: '1px', borderRightWidth: '1px', borderStyle: 'solid', borderColor: '#333' }}>
                            {renderRoutes(this.props.route.routes)}
                        </div>
                    </div>
                </div>
            );

        }
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div style={{ background: '#fff', height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: '#000', width: 'auto', marginLeft: 10 }}>資料更新時間 {new Date().toLocaleString()}</span>
                    <span>
                        <Switch style={{ marginRight: 5 }} checkedChildren="Detail" unCheckedChildren="Detail" defaultChecked onChange={this.onChangesimple} />
                        <Switch style={{ marginLeft: 5, marginRight: 10 }} checkedChildren="Previw" unCheckedChildren="Previw" defaultChecked onChange={this.onChangedisplay} />
                    </span>
                </div>
                <div >
                    {this.contentview()}
                </div>
            </div>
        );
    }
}

export default Bedview;