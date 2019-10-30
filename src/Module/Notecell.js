import React, { Component } from 'react';
import detaillogo from '../Image/svg/details.svg'
import { Tooltip } from 'antd';

class Notecell extends Component {
    
    updatetime_format(updatetime){
        function monthformat(month){
            return month + 1
        }
        return new Date(updatetime).getFullYear() + "-" + monthformat(new Date(updatetime).getMonth()) + "-" +new Date(updatetime).getDate() + " " + new Date(updatetime).getHours() + ":" + new Date(updatetime).getMinutes()
    }
    render() {
        const { index, info } = this.props
        const text = info.updatedoctor + "醫師於" + this.updatetime_format(info.updatetime) + "更新"   
        return (
            <div style={{ display: "grid", gridTemplateColumns: "19fr 1fr", minHeight: "50px" }}>
                <div style={{ wordBreak: "break-all", fontSize: "1.3rem", display: "flex", alignItems: "center" }}>{index}.{info.data}</div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Tooltip placement="right" title={text}>
                        <div>
                            <img src={detaillogo} alt='detaillogo'></img>
                        </div>
                    </Tooltip>
                </div>
            </div>
        );
    }
}

export default Notecell