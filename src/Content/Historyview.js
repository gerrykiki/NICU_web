import React, { Component } from 'react';
import { Table, Input, DatePicker, Button } from 'antd';
import { Link } from 'react-router-dom';




class Historyview extends Component {
    state = {
        MouseClick:0
    }

    MouseClickTable(record){
        console.log(this.state.MouseClick)
        this.setState({
            MouseClick:record
        })
    }

    EditStyle(key){
        if (key === this.state.MouseClick) {
            return (
                <Link to="/Historypatientview" style={{ height: "40px", width: "100px", borderRadius: "4px" }}>詳細</Link>
            );
        }
        else return null
    }

    genderswitch(key){
        if(key === 'Male'){
            return '男'
        }
        else{
            return '女'
        }
    }

    bornweeks(birthday){
        console.log(Math.floor(birthday/7))
        console.log(birthday%7)
        const weeks = Math.floor(birthday/7)
        const days = birthday%7
        if (days === 0) {
            return weeks + '週歲'
        }
        else return weeks + '週' + days + '天'
    }

    Searchbar() {
        const InputGroup = Input.Group;
        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ fontSize: '16px' }}>
                        個案姓名:
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                        <Input placeholder="輸入個案姓名"></Input>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: "18px" }}>
                    <div style={{ fontSize: '16px' }}>
                        轉出時間:
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                        <InputGroup compact>
                            <DatePicker placeholder="選擇轉出時間" />
                        </InputGroup>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: "18px" }}>
                    <div style={{ fontSize: '16px' }}>
                        病歷號碼:
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                        <Input placeholder="輸入病歷號碼"></Input>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: "18px" }}>
                    <div style={{ fontSize: '16px' }}>
                        主治醫生:
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                        <Input placeholder="選擇主治醫師"></Input>
                    </div>
                </div>
            </div>
        );
    }
    render() {
        // rowSelection object indicates the need for row selection
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
        };
        const columns = [
            {
                title: '床號',
                dataIndex: 'bednumber',
                key: 'bednumber',
                width: "5%"
            },
            {
                title: '病人ID',
                dataIndex: 'id',
                key: 'id',
                width: "10%"
            },
            {
                title: '個案名稱',
                dataIndex: 'name',
                key: 'name',
                width: "10%"
            },
            {
                title: '性別',
                dataIndex: 'gender',
                key: 'gender',
                width: "5%"
            },
            {
                title: '體重',
                dataIndex: 'weight',
                key: 'weight',
                width: "5%"
            },
            {
                title: '出生週期',
                dataIndex: 'birweek',
                key: 'birweek',
                width: "10%"
            },
            {
                title: '轉入時年齡',
                dataIndex: 'transage',
                key: 'transage',
                width: "10%"
            },
            {
                title: '住院編號',
                dataIndex: 'hospitalnumber',
                key: 'hospitalnumber',
                width: "10%"
            },
            {
                title: '住院序號',
                dataIndex: 'hospitalindex',
                key: 'hospitalindex',
                width: "10%"
            },
            {
                title: '轉出ICU時間',
                dataIndex: 'transicutime',
                key: 'transicutime',
                width: "10%"
            },
            {
                title: '主治醫師',
                dataIndex: 'maindoc',
                key: 'maindoc',
                width: "10%"
            },
            {
                dataIndex: 'clickstate',
                key: 'clickstate',
                width: "5%"
            }
        ];
        
        const data = [
            {
                key: 1,
                bednumber: 'B01',
                id: 'G123456789',
                name: 'John Brown',
                gender: this.genderswitch('Male'),
                weight: 2000,
                birweek: this.bornweeks(27),
                transage: this.bornweeks(14),
                hospitalnumber: 12345,
                hospitalindex: 12345,
                transicutime: '2019/8/8',
                maindoc: "陳ＯＯ",
                clickstate:this.EditStyle(1)
            },
            {
                key: 2,
                bednumber: 'B02',
                id: 'G123456789',
                name: 'John Brown',
                gender: this.genderswitch('Male'),
                weight: 2000,
                birweek: this.bornweeks(47),
                transage: this.bornweeks(14),
                hospitalnumber: 12345,
                hospitalindex: 12345,
                transicutime: '2019/8/8',
                maindoc: "陳ＯＯ",
                clickstate: this.EditStyle(2)
            },
            {
                key: 3,
                bednumber: 'B03',
                id: 'G123456789',
                name: 'John Brown',
                gender: this.genderswitch('FeMale'),
                weight: 2000,
                birweek: this.bornweeks(14),
                transage: this.bornweeks(14),
                hospitalnumber: 12345,
                hospitalindex: 12345,
                transicutime: '2019/8/8',
                maindoc: "陳ＯＯ",
                clickstate: this.EditStyle(3)
            },
        ];
        
        return (
            <div style={{ paddingLeft: "24px", paddingRight: "24px" }}>
                <div style={{ fontSize: "22px", height: '50px', lineHeight: "50px" }}>
                    歷史病歷管理
                    </div>
                <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr", height: '50px', gridColumnGap: "10px" }}>
                    {this.Searchbar()}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: "10px" }}>
                        <div style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>
                            <Button style={{ width: "100%" }}>匯入</Button>
                        </div>
                        <div style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>
                            <Button style={{ width: "100%" }}>匯出</Button>
                        </div>
                        <div style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>
                            <Button style={{ width: "100%" }}>刪除</Button>
                        </div>
                    </div>
                </div>
                <div>
                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} onRow={record => {
                        return {
                            onMouseEnter: event => {this.MouseClickTable(record.key)}, // 鼠标移入行
                            onMouseLeave: event => {this.MouseClickTable(0)} // 鼠标移入行
                        };
                    }}  />
                </div>
            </div>
        );
    }
}

export default Historyview;