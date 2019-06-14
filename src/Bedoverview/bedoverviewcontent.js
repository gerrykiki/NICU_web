import React, { Component } from 'react';

class BedOverview extends Component {
    rander() {
        return (
            <div style={{ background: '#333', height: '50px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <span style={{ color: '#fff', float: 'right', paddingRight: '1%', width: '200px' }}>資料更新時間 {new Date().toLocaleDateString()}</span>
            </div>
        );
    }
}