import React, { Component } from 'react';
import { WardInfo } from '../jsonResponse';
import WardcardNote from './Wardnote'
import Wardbedinformation from './WardBedinformation'
import Wardschedule from './Wardschedule'


class Wardinfoindex extends Component {
    state = {
        newannocestate: true
    };

    sendData = () => {
        this.props.parentCallback(null);
    }

    render() {
        const info = WardInfo;
        const item = [
            {
                "announcement":"TEXT",
                "updateTime":1566287810473,
                "editor":"修改者"
            },
            {
                "announcement":"TEXT",
                "updateTime":1566287810473,
                "editor":"修改者"
            },
            {
                "announcement":"TEXT",
                "updateTime":1566287810473,
                "editor":"修改者"
            }
        ]
        const item2 = [
            {
                "announcement":"TEXT",
                "updateTime":1566287810473,
                "editor":"修改者"
            },
            {
                "announcement":"TEXT",
                "updateTime":1566287810473,
                "editor":"修改者"
            },
            {
                "announcement":"TEXT",
                "updateTime":1566287810473,
                "editor":"修改者"
            }
        ]
        return (
            <div style={{ borderWidth: "1px", borderColor: "rgba(238, 238, 238, 1)", borderStyle: "solid", borderRadius: "4px", overflow: "auto", height: "85vh", padding:"10px" }}>
                <div style={{ display: 'grid',gridTemplateColumns:"1fr 1fr 1fr", height: '45px' }}>
                    <div></div>
                    <div style={{ fontSize: '1.5rem',display:"flex",alignItems:"center",justifyContent:"center"}}>
                        病房資訊摘要
                    </div>
                    <div style={{ fontSize: '1.5rem',display:"flex",alignItems:"center",justifyContent:"flex-end"}}>
                        主任 : {info.Director}  護理長 : {info.HeadNurse}
                    </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "50% 50%", gridColumnGap: "5px" }}>
                    <WardcardNote announce={item} changedate={item2}></WardcardNote>
                    <Wardschedule editstatus={false}></Wardschedule>
                </div>
                <Wardbedinformation></Wardbedinformation>
            </div>
        );
    }
}

export default Wardinfoindex;