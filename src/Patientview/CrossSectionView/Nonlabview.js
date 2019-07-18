import React, { Component } from 'react';
import {Table} from 'antd';




const columns = [
    {
        title: '檢驗時間',
        dataIndex: 'time',
        key: 'time',
    },
    {
        title: '檢驗項目',
        dataIndex: 'item',
        key: 'item',
    },
    {
        title: '檢驗結果',
        dataIndex: 'result',
        key: 'result',
    }
];

const data = [
    {
        key: '1',
        time: '2019-07-01 20:00',
        item: '檢驗項目',
        result:'檢驗結果'
    },
    {
        key: '2',
        time: '2019-07-01 20:00',
        item: '檢驗項目',
        result:'檢驗結果'
    },
    {
        key: '3',
        time: '2019-07-01 20:00',
        item: '檢驗項目',
        result:'檢驗結果'
    },
];


class Nonlabviewlayout extends Component{
    render(){
        return(
            <div style={{ width: '45%', margin: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center',height:'40px'  }}>
                    <div style={{ fontWeight: 'bold' }}>
                        Lab(非常規檢驗)
                    </div>
                </div>
                <hr></hr>
                <Table columns={columns} dataSource={data} />
            </div>
        );
    }
}

export default Nonlabviewlayout