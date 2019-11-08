import React, { Component } from 'react';
import * as d3 from "d3";
import '../Patientview/CrossSectionView/Crosssectionvitalsignchart.css'

class Vitalxaxis extends Component {
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
        var xaxis = []
        if (select_interval === 0) {
            for (let index = 0; index < 25; index++) {
                const time = Start_time + (30 * 60 * 1000) + (index * 60 * 60 * 1000)
                xaxis.push(time)
            }
        }
        if (select_interval === 1) {
            for (let index = 0; index < 22; index++) {
                const time = Start_time + (2 * 60 * 60 * 1000) + (index * 60 * 60 * 1000 * 4)
                xaxis.push(time)
            }
        }

        if (select_interval === 2) {
            for (let index = 0; index < 22; index++) {
                const time = Start_time + (4 * 60 * 60 * 1000) + (index * 60 * 60 * 1000 * 8)
                xaxis.push(time)
            }
        }

        if (select_interval === 3) {
            for (let index = 0; index < 15; index++) {
                const time = Start_time + (12 * 60 * 60 * 1000) + (index * 60 * 60 * 1000 * 24)
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
            .attr("transform", "translate(" + 50 + "," + 15 + ")");

        var formatHour = d3.timeFormat("%H")
        var formatday = d3.timeFormat("%d")
        function multiFormat(date) {
            if (select_interval === 0) {
                return formatHour(date) + '~' + formatHour(date + (60 * 60 * 1000))
            }
            if (select_interval === 1) {
                return formatHour(date - (2 * 60 * 60 * 1000)) + '~' + formatHour(date + (2 * 60 * 60 * 1000))
            }
            if (select_interval === 2) {
                return formatHour(date - (4 * 60 * 60 * 1000)) + '~' + formatHour(date + (4 * 60 * 60 * 1000))
            }
            if (select_interval === 3) {
                return monthformat(new Date(date).getMonth()) + '/' + formatday(date)
            }
            return formatHour(date)
        }
        var xAxis = d3.axisTop(x)
            .tickValues(xaxis)
            .tickSize(0, 0)
            .tickPadding(5)
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

export default Vitalxaxis;