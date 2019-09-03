import React, { Component } from 'react';
import { Table, Input, Select, Button } from 'antd';


class Powersetting extends Component {
    state = {
        MouseClick: 0
    }

    MouseClickTable(record) {
        console.log(this.state.MouseClick)
        this.setState({
            MouseClick: record
        })
    }

    EditStyle(key) {
        if (key === this.state.MouseClick) {
            return (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridColumnGap: '10px' }}>
                    <div>編輯</div>
                    <div>刪除</div>
                </div>
            );
        }
        else return null
    }


    Searchbar() {
        const { Option } = Select;

        function handleChange(value) {
            console.log(`selected ${value}`);
        }
        return (
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ fontSize: '16px' }}>
                        角色:
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                        <Select placeholder='選擇角色' style={{ width: 120 }} onChange={handleChange}>
                            <Option value={0}>主要管理者</Option>
                            <Option value={1}>一般管理者</Option>
                            <Option value={2}>唯獨使用者</Option>
                        </Select>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', marginLeft: "18px" }}>
                    <div style={{ fontSize: '16px' }}>
                        姓名:
                    </div>
                    <div style={{ marginLeft: "10px" }}>
                        <Input placeholder="輸入個案姓名"></Input>
                    </div>
                </div>
            </div>
        );
    }
    render() {

        const columns = [
            {
                title: '編號',
                dataIndex: 'id',
                key: 'id',
                width: "10%"
            },
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                width: "10%"
            },
            {
                title: '角色',
                dataIndex: 'role',
                key: 'role',
                width: "10%"
            },
            {
                title: '權限',
                dataIndex: 'power',
                key: 'power',
                width: "48%"
            },
            {
                title: '帳號',
                dataIndex: 'account',
                key: 'account',
                width: "15%"
            },
            {
                dataIndex: 'clickstate',
                key: 'clickstate',
                width: "7%"
            }
        ];

        const data = [
            {
                key: 1,
                id: 'G123456789',
                name: 'John Brown',
                role: 0,  //0:主要管理者 1:一般管理者 2:唯獨使用者
                power: 0,
                account: 'gerrykiki@gmail.com',
                clickstate: this.EditStyle(1)
            }
        ];

        return (
            <div>
                <div style={{ display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
                    {this.Searchbar()}
                    <div style={{ display: "flex", justifyContent: 'center', alignItems: "center" }}>
                        <Button style={{ width: "100%" }}>新增帳號</Button>
                    </div>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <Table columns={columns} dataSource={data} onRow={record => {
                        return {
                            onMouseEnter: event => { this.MouseClickTable(record.key) }, // 鼠标移入行
                            onMouseLeave: event => { this.MouseClickTable(0) } // 鼠标移入行
                        };
                    }} />
                </div>
            </div>
        );
    }
}

export default Powersetting;