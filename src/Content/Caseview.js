import React, { Component } from 'react';
import { Table, Divider, Tag, Breadcrumb, Input, Select, DatePicker, Button } from 'antd';
import { Link } from 'react-router-dom';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </span>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <Divider type="vertical" />
            </span>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

const InputGroup = Input.Group;
const { Option } = Select;

class Caseview extends Component {
    Searchbar() {
        return (
            <div style={{ background: '#fff', height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ flexGrow: 2, display: 'flex', alignItems: 'center' }}>
                    <div style={{ background: '#fff', width: 'auto' }}>
                        個案姓名:
                    </div>
                    <div style={{ background: '#484', width: 'auto' }}>
                        <Input placeholder="輸入個案姓名">
                        </Input>
                    </div>
                </div>
                <div style={{ flexGrow: 2, display: 'flex', alignItems: 'center' }}>
                    <div style={{ background: '#fff', width: 'auto' }}>
                        轉出時間:
                    </div>
                    <div style={{ background: '#484', width: 'auto' }}>
                        <InputGroup compact>
                            <DatePicker placeholder="選擇轉出時間" />
                        </InputGroup>
                    </div>
                </div>
                <div style={{ flexGrow: 2, display: 'flex', alignItems: 'center' }}>
                    <div style={{ background: '#fff', width: 'auto' }}>
                        病歷號碼:
                    </div>
                    <div style={{ background: '#484', width: 'auto' }}>
                        <Input placeholder="輸入病歷號碼">
                        </Input>
                    </div>
                </div>
                <div style={{ flexGrow: 2, display: 'flex', alignItems: 'center' }}>
                    <div style={{ background: '#fff', width: 'auto' }}>
                        主治醫生:
                    </div>
                    <div style={{ background: '#484', width: 'auto' }}>
                        <Input placeholder="選擇主治醫師">
                        </Input>
                    </div>
                </div>
                <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: 'auto', flexGrow: 1 }}>
                        <Button type="primary" icon="search" />
                    </div>
                    <div style={{ width: 'auto', flexGrow: 2 }}>
                        <Button>匯出</Button>
                    </div>
                </div>
            </div>
        );
    }


    render() {
        return (
            <div>
                <div style={{ background: '#fff', height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Breadcrumb>
                        <Breadcrumb.Item>首頁</Breadcrumb.Item>
                        <Breadcrumb.Item>個案資訊管理</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <div>
                    {this.Searchbar()}
                </div>
                <Link to='/Main/Crosssectionlayout'>123</Link>
                <div>
                    <Link to="/Main/Crosssectionlayout"></Link>
                        <Table columns={columns} dataSource={data} onRow={(record, rowIndex) => {
                            return {
                                onClick: event => { console.log("Click table") } // click row

                            };
                        }}>
                        </Table>
                </div>
            </div>
        );
    }
}

export default Caseview;