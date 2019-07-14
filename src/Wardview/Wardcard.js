import React, { Component } from 'react';
import './Wardcard.css'
import { Link } from 'react-router-dom';
import { Button } from 'antd';


class Wardcard extends Component {

    render() {
        return (
            <Link to="/Main/Bedview/Warduser" style={this.props.style}>
                <Button className="Wardlink" onClick={this.handleClick}>
                    <div style={{ height: '100%' }}>
                        <div style={{ height: '50px', marginTop: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '20px' }}>
                                01
                        </span>
                            <span style={{ fontSize: '14px' }}>
                                程子倩/Ch01/女/13週
                        </span>
                        </div>
                        <hr style={{border:'0px',background:'#333',height:'1px'}}></hr>
                        <div style={{ height: '30px', marginTop: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ fontSize: '14px' }}>
                                病歷號:XXXXX-XXXXX
                        </span>
                            <span style={{ fontSize: '14px' }}>
                                3700g (+700g)
                        </span>
                        </div>
                        <hr color="#dddddd" style={{ width: '95%' }}></hr>
                        <div style={{ height: '30px', marginTop: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <span style={{ fontSize: '14px' }}>
                                隨時注意病人血壓狀況
                        </span>
                        </div>

                    </div>
                </Button>
            </Link>
        );
    }
}

export default Wardcard;