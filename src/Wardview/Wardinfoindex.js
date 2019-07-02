import React, { Component } from 'react';
import { Input } from 'antd';


const { TextArea } = Input;

class Wardinfoindex extends Component {
    render() {
        return (
            <div >
                <div style={{ display: 'flex', justifyContent: 'center', height: '50px', fontSize: '30px' }}>
                    2019 / 06 / 13 (週四) 16:59
                </div>
                <hr style={{ width: '97%' }}></hr>
                <div style={{ height: '50px', display: 'flex', justifyContent: 'center' }}>
                    <span style={{ borderBottomWidth: '1px', borderTopWidth: '1px', borderLeftWidth: '1px', borderRightWidth: '0px', borderStyle: 'solid', width: '45%', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        主任：林又新
                    </span>
                    <span style={{ borderWidth: '1px', borderStyle: 'solid', width: '45%', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        護理長：鄭麗貞
                    </span>
                </div>
                <div style={{ height: 'auto', display: 'flex', justifyContent: 'center', padding: '10px' }}>
                    <div style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#333333', borderRadius: '50px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', margin: '5px' }}>
                        病床總數：12
                    </div>
                    <div style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#333333', borderRadius: '50px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', margin: '5px' }}>
                        簽床：7
                    </div>
                    <div style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#333333', borderRadius: '50px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', margin: '5px' }}>
                        空床：7
                    </div>
                    <div style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#333333', borderRadius: '50px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', margin: '5px' }}>
                        轉床：7
                    </div>
                    <div style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#333333', borderRadius: '50px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', margin: '5px' }}>
                        新病人：7
                    </div>
                </div>
                <div style={{ height: 'auto', display: 'flex', justifyContent: 'center', padding: '10px' }}>
                    <div style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#333333', borderRadius: '50px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', margin: '5px' }}>
                        呼吸器：12
                    </div>
                    <div style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#333333', borderRadius: '50px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', margin: '5px' }}>
                        有給NPO：7
                    </div>
                    <div style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#333333', borderRadius: '50px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', margin: '5px' }}>
                        有給TPN：7
                    </div>
                    <div style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#333333', borderRadius: '50px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', margin: '5px' }}>
                        ECMO：7
                    </div>
                </div>
                <div style={{ height: 'auto', display: 'flex', justifyContent: 'center', padding: '10px' }}>
                    <div style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#333333', borderRadius: '50px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', margin: '5px' }}>
                        葉克膜：12
                    </div>
                    <div style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#333333', borderRadius: '50px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', margin: '5px' }}>
                        有給抗生素：7
                    </div>
                    <div style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#333333', borderRadius: '50px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', margin: '5px' }}>
                        有進行透析：7
                    </div>
                </div>
                <div style={{ height: 'auto', display: 'flex', justifyContent: 'center', padding: '10px' }}>
                    <div style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#333333', borderRadius: '50px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', margin: '5px' }}>
                        意識形態E：2
                    </div>
                    <div style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#333333', borderRadius: '50px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', margin: '5px' }}>
                        意識形態V：8
                    </div>
                    <div style={{ borderWidth: '1px', borderStyle: 'solid', borderColor: '#333333', borderRadius: '50px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px', margin: '5px' }}>
                        意識形態M：2
                    </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: '10px' }}>
                    <div style={{ height: '50px', width: '97%', borderStyle: 'solid', borderTopWidth: '1px', borderRightWidth: '1px', borderLeftWidth: '1px', borderBottomWidth: '0px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        病房主任留言板
                    </div>
                    <div style={{ height: '200px', width: '97%', borderStyle: 'solid', borderWidth: '1px', display: 'flex', justifyContent: 'center' }}>
                        <TextArea  />
                    </div>
                </div>
            </div>
        );
    }
}

export default Wardinfoindex;