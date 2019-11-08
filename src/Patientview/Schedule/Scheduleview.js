import React, { Component } from 'react';
import Notice from './Notice'
import Bedsidecard from './Bedsidecard'
import Scheduletodo from './Scheduletodo'

class Scheduleview extends Component {
    render() {
        function monthformat(month) {
            return month + 1
        }
        function dateformat(time) {
            return new Date(time).getFullYear() + "-" + monthformat(new Date(time).getMonth()) + "-" + new Date(time).getDate()
        }
        function exporttime(time){
            if (time === null) {
                return "--"
            }
            else{
                return dateformat(time)
            }
        }
        const { userdata } = this.props
        const time = new Date().getTime()
        const schedule_layout_style = {
            information:{fontSize:"1.5rem"}
        }
        const todolist_data = [
            {
                Time:1566287810473,
                Content:"幫大明量體重1",
                Flag:true,
                Editor:"修改者"
            },
            {
                Time:1566287810000,
                Content:"幫大明量體重2",
                Flag:false,
                Editor:"修改者"
            },
            {
                Time:1566287840473,
                Content:"幫大明量體重3",
                Flag:true,
                Editor:"修改者"
            }
        ]
        console.log(userdata)
        return (
            <div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={schedule_layout_style.information}>身分證證字號:{userdata.id}</div>
                    <div style={schedule_layout_style.information}>/</div>
                    <div style={schedule_layout_style.information}>轉入時間:{dateformat(time)}</div>
                    <div style={schedule_layout_style.information}>/</div>
                    <div style={schedule_layout_style.information}>轉出時間:{exporttime(null)}</div>
                </div>
                <Notice></Notice>
                <Bedsidecard></Bedsidecard>
                <Scheduletodo todolist_data={todolist_data}></Scheduletodo>
            </div>
        );
    }
}

export default Scheduleview
