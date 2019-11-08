import React, { Component } from 'react';
import * as d3 from "d3";
import '../CrossSectionView/Crosssectionvitalsignchart.css'
import { center_monitor } from '../../Centormonitor_data'

class Chronicvitalchart extends Component {
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
        const viewwidth = window.screen.availWidth - 228, height = 90, viewhieght = height + 10, rect_width = viewwidth / 46
        //選取時間(0點)
        const select_date_zero = new Date(new Date(select_date).getFullYear() + ',' + monthformat(new Date(select_date).getMonth()) + ',' + new Date(select_date).getDate()).getTime()
        //選取時間(7點)
        const select_time_format = nowtime(select_date_zero)
        //select_intercal:0一天 1三天 2兩週
        const Start_time = intervaldays(select_time_format, select_interval)

        var y = d3.scaleLinear()
            .domain([min, max])
            .range([height, 0])
        console.log(Start_time, select_time_format)
        var x = d3.scaleLinear()
            .domain([Start_time, select_time_format])
            .range([0, viewwidth - 1])

        console.log(viewhieght, viewwidth)

        var svg = d3.select("#" + id_key)
            .append("svg")
            .attr("id", svg_id)
            .attr("viewbox", [0, 0, viewwidth + 60, 110])
            .style("height","100px")
            .append("g")
            .attr("transform", "translate(" + 50 + "," + 5 + ")");

        var yAxis = d3.axisLeft(y)
            .tickValues([min, max])
            .tickFormat(n => (n))
            .tickSize(0, 0)
            .tickPadding(10);

        svg.append("g")
            .call(yAxis)
            .attr("class", "axis");

        svg.append('line')
            .attr('x1', x(Start_time))
            .attr('y1', y(max))
            .attr('x2', x(select_time_format))
            .attr('y2', y(max))
            .style('stroke', 'rgba(220,220,220,1)')
            .style('stroke-width', 1)
            .style('stroke-dasharray', 5.5);

        svg.append('line')
            .attr('x1', x(Start_time))
            .attr('y1', y(min))
            .attr('x2', x(select_time_format))
            .attr('y2', y(min))
            .style('stroke', 'rgba(220,220,220,1)')
            .style('stroke-width', 1)
            .style('stroke-dasharray', 5.5);

        //一天
        if (select_interval === 0) {
            for (let index = 0; index < 25; index++) {
                if (index % 8 === 0) {
                    svg.append('line')
                        .attr('x1', x(Start_time + (index * 60 * 60 * 1000)))
                        .attr('y1', 0)
                        .attr('x2', x(Start_time + (index * 60 * 60 * 1000)))
                        .attr('y2', height)
                        .style('stroke', 'black')
                        .style('stroke-width', 2);
                }
                else {
                    svg.append('line')
                        .attr('x1', x(Start_time + (index * 60 * 60 * 1000)))
                        .attr('y1', 0)
                        .attr('x2', x(Start_time + (index * 60 * 60 * 1000)))
                        .attr('y2', height)
                        .style('stroke', 'rgba(220,220,220,1)')
                        .style('stroke-width', 1)
                        .style('stroke-dasharray', 5.5);
                }
            }
        }

        // 三天
        if (select_interval === 1) {
            for (let index = 0; index < 22; index++) {
                if (index % 2 === 0) {
                    svg.append('line')
                        .attr('x1', x(Start_time + (index * 60 * 60 * 1000 * 4)))
                        .attr('y1', 0)
                        .attr('x2', x(Start_time + (index * 60 * 60 * 1000 * 4)))
                        .attr('y2', height)
                        .style('stroke', 'black')
                        .style('stroke-width', 2);
                }
                else {
                    svg.append('line')
                        .attr('x1', x(Start_time + (index * 60 * 60 * 1000 * 4)))
                        .attr('y1', 0)
                        .attr('x2', x(Start_time + (index * 60 * 60 * 1000 * 4)))
                        .attr('y2', height)
                        .style('stroke', 'rgba(220,220,220,1)')
                        .style('stroke-width', 1)
                        .style('stroke-dasharray', 5.5);
                }
            }
        }

        //一週
        if (select_interval === 2) {
            for (let index = 0; index < 22; index++) {
                svg.append('line')
                    .attr('x1', x(Start_time + (index * 60 * 60 * 1000 * 8)))
                    .attr('y1', 0)
                    .attr('x2', x(Start_time + (index * 60 * 60 * 1000 * 8)))
                    .attr('y2', height)
                    .style('stroke', 'black')
                    .style('stroke-width', 2);
            }
        }
        //兩週
        if (select_interval === 3) {
            for (let index = 0; index < 15; index++) {
                svg.append('line')
                    .attr('x1', x(Start_time + (index * 60 * 60 * 1000 * 24)))
                    .attr('y1', 0)
                    .attr('x2', x(Start_time + (index * 60 * 60 * 1000 * 24)))
                    .attr('y2', height)
                    .style('stroke', 'black')
                    .style('stroke-width', 2);
            }
        }

        // const data = center_monitor
        // if (vitaldays) {

        // }
        // else {
        //     for (let index = 0; index < data.length; index++) {
        //         const element = data[index];
        //         svg.append('circle')
        //             .attr("id", "the_SVG_ID")
        //             .attr('cx', x(element.time * 1000))
        //             .attr('cy', y(element.Data))
        //             .attr('r', 0.1)
        //             .style('fill', circlrcolor)

        //     }
        // }
    }

    render() {
        const { id_key } = this.props
        return (
            <div id={id_key}></div>
        );
    }
}

export default Chronicvitalchart;