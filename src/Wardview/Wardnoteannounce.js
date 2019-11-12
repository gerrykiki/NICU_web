import React, { Component } from 'react';
import deleteimg from '../Image/svg/delete.svg'
import detail from '../Image/svg/details.svg'
import {  Tooltip } from 'antd';

class Wardnoteannounce extends Component {
    state = {
        AnnoceData: this.props.announce
    }

    styleedit(string, index,editstate) {
        if (editstate === "none") {
            return (
                <Tooltip placement="top" title={string}>
                    <img src={detail} alt='detaillogo'></img>
                </Tooltip>);
        }
        else {
            return <img src={deleteimg} alt='deletelogo' onClick={() => this.onClickDeleteAnnounce(index)}></img>
        }
    }

    render() {
        const { index, element, text,editstate } = this.props
        return (
            <div style={{ display: 'grid', gridTemplateColumns: "15px auto", gridColumnGap: "5px", paddingTop: "5px", paddingBottom: "5px" }}>
                <div>{index + 1}.</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>{element.announcement}</div>
                    {this.styleedit(text, index,editstate)}
                </div>
            </div>
        );
    }
}
export default Wardnoteannounce