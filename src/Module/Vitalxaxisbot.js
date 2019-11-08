import React, { Component } from 'react';
import * as d3 from "d3";
import '../Patientview/CrossSectionView/Crosssectionvitalsignchart.css'

class Vitalxaxisbot extends Component {
    state = {
        change: false
    }
    componentDidUpdate() {

        const { svg_id } = this.props
        d3.select("#" + svg_id).remove()
        this.drawChart()
    }

    componentDidMount() {
        this.drawChart();
    }
    drawChart() {
        function nowtime(time) {
            return time + (7 * 60 * 60 * 1000)
        }
        function monthformat(month) {
            return month + 1
        }
        function intervaldays(select_date, select_interval) {
            switch (select_interval) {
                //一天
                case 0:
                    return select_date - 86400000 * 1
                //三天
                case 1:
                    return select_date - 86400000 * 3
                //一週
                case 2:
                    return select_date - 86400000 * 7
                //兩週
                case 3:
                    return select_date - 86400000 * 14
                default:
                    return null
            }
        }

        const { id_key, svg_id, axisBot, axisTop, circlrcolor, max, min, select_interval, select_date } = this.props
        const viewwidth = window.screen.availWidth - 228, height = 100, viewhieght = height + 10, rect_width = viewwidth / 46
        //選取時間(0點)
        const select_date_zero = new Date(new Date(select_date).getFullYear() + ',' + monthformat(new Date(select_date).getMonth()) + ',' + new Date(select_date).getDate()).getTime()
        //選取時間(7點)
        const select_time_format = nowtime(select_date_zero)
        //select_intercal:0一天 1三天 2兩週
        const Start_time = intervaldays(select_time_format, select_interval)
        console.log(Start_time)
        var xaxis = []
        if (select_interval === 0) {
            const time = Start_time + (12 * 60 * 60 * 1000)
            console.log(time)
            xaxis.push(time)
        }
        if (select_interval === 1) {
            for (let index = 0; index < 3; index++) {
                const time = Start_time + (12 * 60 * 60 * 1000) + (index * 24 * 60 * 60 * 1000)
                xaxis.push(time)
            }
        }

        if (select_interval === 2) {
            for (let index = 0; index < 7; index++) {
                const time = Start_time + (12 * 60 * 60 * 1000) + (index * 24 * 60 * 60 * 1000)
                xaxis.push(time)
            }
        }


        if (select_interval === 3) {
            for (let index = 0; index < 14; index++) {
                const time = Start_time + (12 * 60 * 60 * 1000) + (index * 24 * 60 * 60 * 1000)
                xaxis.push(time)
            }
        }
        var x = d3.scaleLinear()
            .domain([Start_time, select_time_format])
            .range([0, viewwidth - 1])


        var svg = d3.select("#" + id_key)
            .append("svg")
            .attr("id", svg_id)
            .attr("viewbox", [0, 0, viewwidth + 60, 25])
            .append("g")
            .attr("transform", "translate(" + 50 + "," + -10 + ")");

        var formatHour = d3.timeFormat("%d")

        function multiFormat(date) {
            return monthformat(new Date(date).getMonth()) + '/' + formatHour(date)
        }


        var xAxis = d3.axisBottom(x)
            .tickValues(xaxis)
            .tickSize(0, 0)
            .tickPadding(10)
            .tickFormat(function (d) { return multiFormat(d); });

            
        svg.append("g")
            .call(xAxis)
            .attr("class", "axis");

    }

    render() {
        const { id_key } = this.props
        return (
            <div id={id_key}></div>
        );
    }
}

export default Vitalxaxisbot;