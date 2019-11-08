import React, { Component } from 'react';
import * as d3 from "d3";

class Examaxis extends Component {
    componentDidUpdate() {

        const { svg_id } = this.props
        d3.select("#" + svg_id).remove()
        this.drawChart()
    }

    componentDidMount() {
        this.drawChart();
    }
    drawChart() {
        function formattimetoInteger(time) {
            return new Date(time).getTime()
        }
        function monthformat(month) {
            return month + 1
        }

        var formatHour = d3.timeFormat("%H")
        var formatday = d3.timeFormat("%d")
        function multiFormat(date) {

            return monthformat(new Date(date).getMonth()) + "/" + formatday(date)
        }
        const {Time, id_key, svg_id, axisBot, axisTop, circlrcolor, max, min, height, select_interval, select_date } = this.props
        const Start_time = formattimetoInteger(Time[0])
        const End_time = formattimetoInteger(Time[1])
        const interval = (End_time - Start_time) / (24 * 60 * 60 * 1000)
        const viewwidth = window.screen.availWidth - 218 - 15

        var time_interval = []
        for (let index = 0; index < interval + 1; index++) {
            const element = Start_time + index * 24 * 60 * 60 * 1000
            time_interval.push(element)
        }
        var x = d3.scaleLinear().domain([Start_time, End_time]).range([0, viewwidth])
        var y = d3.scaleLinear().domain([min, max]).range([100, 0])

        var svg = d3.select("#" + id_key)
            .append("svg")
            .attr("id", svg_id)
            .attr("viewbox", [0, 0, viewwidth + 30, 20])
            .style("height", 20)
            .append("g")
            .attr("transform", "translate(" + 30 + "," + 20 + ")");


        var xAxis = d3.axisTop(x)
            .tickValues(time_interval)
            .tickPadding(0)
            .tickFormat(function (d) { return multiFormat(d); });


        var xAxisbot = d3.axisBottom(x)
            .tickValues(time_interval)
            .tickPadding(-10)
            .tickSize(0,0)
            .tickFormat(function (d) { return multiFormat(d); });

        if (axisTop) {
            svg.append("g")
                .call(xAxis)
                .attr({
                    'font-size': "10px",
                    'fill': 'black'
                })
        }
        if (axisBot) {
            svg.append("g")
                .call(xAxisbot)
                .attr({
                    'font-size': "10px",
                    'fill': 'black'
                })
        }
    }

    render() {
        const { id_key } = this.props
        return (
            <div id={id_key} style={{ height: "20px" }}></div>
        );
    }
}

export default Examaxis;