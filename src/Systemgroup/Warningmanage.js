import React, { Component } from 'react';
import { Checkbox, Select, Radio, Input, Button } from 'antd';

class Warningmanage extends Component {
    state = {
        value: 1,
    };

    onRadioChange = e => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

    Step5function() {
        const { Option } = Select;

        return (
            <div style={{ marginTop: '20px' }}>
                <div style={{ color: 'rgba(59, 151, 225, 1)', fontSize: '16px' }}>Step.5</div>
                <div style={{ borderWidth: '1px', borderColor: 'rgba(59, 151, 225, 1)', borderStyle: 'solid', borderRadius: '8px', width: '100%', padding: '30px', display: 'flex', alignItems: 'center' }}>
                    <div>
                        <div style={{ fontSize: '16px', marginBottom: '20px' }}>設定警示Profile</div>
                        <div>
                            <Radio.Group onChange={this.onChange} value={this.state.value}>
                                <Radio style={{ display: 'block', height: '50px', lineHeight: '50px' }} value={1}>
                                    不設定為Profile，直接儲存本次設定
                                </Radio>
                                <Radio style={{ display: 'block', height: '50px', lineHeight: '50px' }} value={1}>
                                    將此設定規則儲存為套件Profile
                                    <Select value='藍色' style={{ width: 150, marginLeft: 10, marginRight: 10 }}>
                                        <Option value={0}>主要管理者</Option>
                                        <Option value={1}>一般管理者</Option>
                                        <Option value={2}>唯獨使用者</Option>
                                    </Select>
                                </Radio>
                            </Radio.Group>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    Step4function() {
        const { Option } = Select;

        return (
            <div style={{ marginTop: '20px' }}>
                <div style={{ color: 'rgba(59, 151, 225, 1)', fontSize: '16px' }}>Step.4</div>
                <div style={{ borderWidth: '1px', borderColor: 'rgba(59, 151, 225, 1)', borderStyle: 'solid', borderRadius: '8px', width: '100%', padding: '30px', display: 'flex', alignItems: 'center' }}>
                    <div>
                        <div style={{ fontSize: '16px', marginBottom: '20px' }}>設定警示呈現方式</div>
                        <div>
                            <Radio.Group onChange={this.onChange} value={this.state.value}>
                                <Radio style={{ display: 'block', height: '50px', lineHeight: '50px' }} value={1}>
                                    箭頭呈現
                                    <Select placeholder='選擇方向' style={{ width: 150, marginLeft: 10, marginRight: 10 }}>
                                        <Option value={0}>主要管理者</Option>
                                        <Option value={1}>一般管理者</Option>
                                        <Option value={2}>唯獨使用者</Option>
                                    </Select>
                                </Radio>
                                <Radio style={{ display: 'block', height: '50px', lineHeight: '50px' }} value={1}>
                                    區塊呈現
                                    <Input style={{ width: 150, marginLeft: 10, marginRight: 10 }} placeholder='請輸入Profile name' />
                                </Radio>
                            </Radio.Group>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    Step3function() {
        const { Option } = Select;

        return (
            <div style={{ marginTop: '20px' }}>
                <div style={{ color: 'rgba(59, 151, 225, 1)', fontSize: '16px' }}>Step.3</div>
                <div style={{ borderWidth: '1px', borderColor: 'rgba(59, 151, 225, 1)', borderStyle: 'solid', borderRadius: '8px', width: '100%', padding: '30px', display: 'flex', alignItems: 'center' }}>
                    <div>
                        <div style={{ fontSize: '16px', marginBottom: '20px' }}>設定警示類型</div>
                        <div>
                            <Radio.Group onChange={this.onChange} value={this.state.value}>
                                <Radio style={{ display: 'block', height: '150px', lineHeight: '50px' }} value={1}>
                                    閾值警示
                                    <div style={{ height: '50px', marginLeft: '30px', display: 'flex', alignItems: 'center' }}>
                                        <Checkbox>超過閾值</Checkbox>
                                        <Input style={{ width: 150, marginLeft: 10, marginRight: 10 }} placeholder='請輸入數值' />
                                        <div>以上（合）時，顯示警示燈號</div>
                                    </div>
                                    <div style={{ height: '50px', marginLeft: '30px', display: 'flex', alignItems: 'center' }}>
                                        <Checkbox>超過閾值</Checkbox>
                                        <Input style={{ width: 150, marginLeft: 10, marginRight: 10 }} placeholder='請輸入數值' />
                                        <div>以下（合）時，顯示警示燈號</div>
                                    </div>
                                </Radio>
                                <Radio style={{ display: 'block', height: '100px', lineHeight: '50px' }} value={2}>
                                    與特定觀察值比較
                                    <div style={{ height: '50px', marginLeft: '30px', display: 'flex', alignItems: 'center' }}>
                                        <div>與</div>
                                        <Select value='前一筆' style={{ width: 100, marginLeft: 10, marginRight: 10 }}>
                                            <Option value={0}>主要管理者</Option>
                                            <Option value={1}>一般管理者</Option>
                                            <Option value={2}>唯獨使用者</Option>
                                        </Select>
                                        <div>觀察值比較</div>
                                        <Select value='高於' style={{ width: 100, marginLeft: 10, marginRight: 5 }}>
                                            <Option value={0}>主要管理者</Option>
                                            <Option value={1}>一般管理者</Option>
                                            <Option value={2}>唯獨使用者</Option>
                                        </Select>
                                        <Input style={{ width: 100, marginLeft: 5, marginRight: 10 }} placeholder='請輸入數值' />
                                        <div>%，則亮燈</div>
                                    </div>
                                </Radio>
                            </Radio.Group>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    Step2function() {
        const { Option } = Select;

        function handleChange(value) {
            console.log(`selected ${value}`);
        }
        return (
            <div style={{ marginTop: '20px' }}>
                <div style={{ color: 'rgba(59, 151, 225, 1)', fontSize: '16px' }}>Step.2</div>
                <div style={{ borderWidth: '1px', borderColor: 'rgba(59, 151, 225, 1)', borderStyle: 'solid', borderRadius: '8px', width: '100%', padding: '30px', display: 'flex', alignItems: 'center' }}>
                    <div>
                        <div style={{ fontSize: '16px', marginBottom: '20px' }}>設定警示適用對象</div>
                        <div>
                            <Radio.Group onChange={this.onRadioChange} value={this.state.value}>
                                <Radio style={{ display: 'block', height: '50px', lineHeight: '50px' }} value={1}>Option A</Radio>
                                <Radio style={{ display: 'block', height: '150px', lineHeight: '50px' }} value={2}>
                                    Option b
                                    <div style={{ marginLeft: "20px" }}>
                                        <Radio.Group onChange={this.onChange} value={this.state.value}>
                                            <Radio style={{ display: 'block', height: '50px', lineHeight: '50px' }} value={1}>
                                                <Select placeholder='選擇角色' style={{ width: 200, marginLeft: 10 }} onChange={handleChange}>
                                                    <Option value={0}>主要管理者</Option>
                                                    <Option value={1}>一般管理者</Option>
                                                    <Option value={2}>唯獨使用者</Option>
                                                </Select>
                                            </Radio>
                                            <Radio style={{ display: 'block', height: '50px', lineHeight: '50px' }} value={2}>
                                                <Input style={{ width: 450, marginLeft: 10 }} placeholder='0-20週' />
                                            </Radio>
                                        </Radio.Group>
                                    </div>
                                </Radio>
                            </Radio.Group>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    Step1function() {
        const { Option } = Select;

        function handleChange(value) {
            console.log(`selected ${value}`);
        }
        return (
            <div>
                <div style={{ color: 'rgba(59, 151, 225, 1)', fontSize: '16px' }}>Step.1</div>
                <div style={{ borderWidth: '1px', borderColor: 'rgba(59, 151, 225, 1)', borderStyle: 'solid', borderRadius: '8px', width: '100%', padding: '30px', display: 'flex', alignItems: 'center' }}>
                    <div>
                        <div style={{ fontSize: '16px', marginBottom: '20px' }}>選擇臨床警示項目</div>
                        <div>
                            <Select placeholder='選擇角色' style={{ width: 200 }} onChange={handleChange}>
                                <Option value={0}>主要管理者</Option>
                                <Option value={1}>一般管理者</Option>
                                <Option value={2}>唯獨使用者</Option>
                            </Select>
                            <Select placeholder='選擇角色' style={{ width: 200, marginLeft: '20px' }} onChange={handleChange}>
                                <Option value={0}>主要管理者</Option>
                                <Option value={1}>一般管理者</Option>
                                <Option value={2}>唯獨使用者</Option>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    render() {
        const { Option } = Select;

        function handleChange(value) {
            console.log(`selected ${value}`);
        }

        function onChange(e) {
            console.log(`checked = ${e.target.checked}`);
        }
        return (
            <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Checkbox onChange={onChange}></Checkbox>
                    <div style={{ marginLeft: '10px' }}>套用已儲存Profile</div>
                    <Select placeholder='選擇角色' style={{ width: 200, marginLeft: "10px" }} onChange={handleChange}>
                        <Option value={0}>主要管理者</Option>
                        <Option value={1}>一般管理者</Option>
                        <Option value={2}>唯獨使用者</Option>
                    </Select>
                </div>
                {this.Step1function()}
                {this.Step2function()}
                {this.Step3function()}
                {this.Step4function()}
                {this.Step5function()}
                <div style={{ padding: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button style={{ width: '150px', height: '50px' }}>取消</Button>
                    <Button style={{ width: '150px', height: '50px', marginLeft: '20px' }}>儲存</Button>
                </div>
            </div>
        );
    }
}

export default Warningmanage