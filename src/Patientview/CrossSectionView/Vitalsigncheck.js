import React, { Component } from 'react';

const width = (window.screen.width - 58) * 0.425, height = 100
const margin = (width - 90) / 46
class Vitalsigncheck extends Component {
    state = {
        chackstate: 0,
        infostate: false
    }


    onchange(key) {
        console.log(key)
        this.setState(
            {
                chackstate: key,
                infostate: true
            }
        )
    }
    oncancel() {
        this.setState(
            {
                chackstate: 0,
                infostate: false
            }
        )
    }
    checkstate() {
        const element = []
        const checknumber = this.state.chackstate
        for (let index = 1; index < 25; index++) {
            if (index === checknumber) {
                element.push({ 'index': index, 'state': true })
            }
            else {
                element.push({ 'index': index, 'state': false })
            }
        }
        return element
    }
    render() {

        const check = {
            backgroundColor: 'rgba(245, 248, 250, 0.5)',
            borderColor: "orange",
            borderWidth: "1px",
            borderStyle: "solid"
        }
        const uncheck = {
            cursor: 'pointer'
        }

        const infostyle = {
            backgroundColor: 'white',
            position: 'absolute',
            top: - (margin + 20), left: width - 100,
            width: 500, height: 'auto',
            display: 'block',
            padding: '10px',
            borderRadius: '4px',
            borderStyle:"solid",borderColor:"orange",borderWidth:"2px"
        }

        const uninfostyle = {
            display: 'none'
        }
        let checkview = this.checkstate().map(
            (info, index) =>
                <div key={index} style={info.state ? check : uncheck} onMouseUp={() => this.onchange(index + 1)}></div>
        )
        return (
            <div style={{ width: width - 50 + (margin * 1.5), height: (5 * height) + (8 * margin), position: 'absolute', top: margin + 20, right: 0, display: 'grid', gridTemplateColumns: 'repeat(24,1fr)' }}>
                {checkview}
                <div style={this.state.infostate ? infostyle : uninfostyle}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>時間</div>
                        <div style={{ cursor: 'pointer' }} onMouseUp={() => this.oncancel()}>取消</div>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"20px"}}>
                        <div>
                            <div>HR(bpm)</div>
                        </div>
                        <div>
                            <div>123</div>
                        </div>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <div>
                            <div>BP</div>
                        </div>
                        <div>
                            <div>90</div>
                        </div>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <div>
                            <div>SpO2</div>
                        </div>
                        <div>
                            <div>24</div>
                        </div>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <div>
                            <div>BT</div>
                        </div>
                        <div>
                            <div>90</div>
                        </div>
                    </div>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <div>
                            <div>RR</div>
                        </div>
                        <div>
                            <div>90</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Vitalsigncheck