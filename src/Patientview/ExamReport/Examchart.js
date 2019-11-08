import React, { Component } from 'react';
import * as d3 from "d3";

class Examchart extends Component {
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
        function formattimetoInteger(time) {
            return new Date(time).getTime()
        }
        function monthformat(month) {
            return month + 1
        }

        var formatHour = d3.timeFormat("%H")
        var formatday = d3.timeFormat("%d")
        function multiFormat(date) {

            return formatHour(date)
        }
        const { Time,id_key, svg_id, axisBot, axisTop, circlrcolor, max, min, height, select_interval, select_date } = this.props
        const Start_time = formattimetoInteger(Time[0])
        const End_time = formattimetoInteger(Time[1])
        const interval = (End_time - Start_time) / (24 * 60 * 60 * 1000)
        const viewwidth = window.screen.availWidth - 218 - 15

        var x = d3.scaleLinear().domain([Start_time, End_time]).range([0, viewwidth])
        var y = d3.scaleLinear().domain([min, max]).range([100, 0])

        var svg = d3.select("#" + id_key)
            .append("svg")
            .attr("id", svg_id)
            .attr("viewbox", [0, 0, viewwidth + 30, 100])
            .style("height", 100)
            .append("g")
            .attr("transform", "translate(" + 30 + "," + 0 + ")");

        svg.append('line')
            .attr('x1', x(Start_time) - 15)
            .attr('y1', y(max))
            .attr('x2', x(End_time) + 15)
            .attr('y2', y(max))
            .style('stroke', 'black')
            .style('stroke-width', 1)
            .style('stroke-dasharray', 5.5);

        svg.append('line')
            .attr('x1', x(Start_time) - 15)
            .attr('y1', y(min))
            .attr('x2', x(End_time) + 15)
            .attr('y2', y(min))
            .style('stroke', 'black')
            .style('stroke-width', 1)
            .style('stroke-dasharray', 5.5);

        console.log(interval)
        for (let index = 0; index < interval + 1; index++) {
            svg.append('line')
                .attr('x1', x(Start_time + (index * 24 * 60 * 60 * 1000)))
                .attr('y1', y(min))
                .attr('x2', x(Start_time + (index * 24 * 60 * 60 * 1000)))
                .attr('y2', y(max))
                .style('stroke', 'black')
                .style('stroke-width', 1)
                .style('stroke-dasharray', 5.5);
        }
    }

    render() {
        const { id_key } = this.props
        return (
            <div id={id_key} style={{height:"100px"}}></div>
        );
    }
}

export default Examchart;