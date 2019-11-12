import React, { Component } from 'react';
import * as d3 from "d3";
import './Crosssectionvitalsignchart.css'
import { center_monitor } from '../../Centormonitor_data'

class Crosssectionvitalsignchart extends Component {
    state = {
        change: false
    }
    componentDidUpdate() {

        const { svg_id } = this.props
        d3.select("#" + svg_id).remove()
        this.drawChart()
    }
    simulation_data() {
        var dataarray = [];
        for (var k = 0; k < 24; k++) {
            var dataset = []; //建立空的資料陣列
            for (var i = 0; i < 24; i++) {
                var newNum = Math.floor(Math.random() * 50) + 50;
                dataset.push(newNum);
            }
            dataarray.push(dataset);
        }
        //console.log(dataarray);
        return dataarray;
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
        function intervaldays(days, interval) {
            //false:一天 true:三天
            if (interval) {
                return days - 86400000 * 3

            }
            else {
                return days - 86400000 * 1
            }
        }

        function formatxArray(time, interval) {
            var xAxisarray = []
            if (interval) {
                for (let index = 0; index < 7; index++) {
                    xAxisarray.push(time + (index * 60 * 60 * 1000 * 4))
                }
            }
            else {
                for (let index = 0; index < 10; index++) {
                    xAxisarray.push(time + (index * 60 * 60 * 1000 * 8))
                }

            }
            return xAxisarray
        }

        function formatbotaxis(time, interval) {
            var xAxisarray = []
            if (interval) {
                xAxisarray.push(time + (17 * 60 * 60 * 1000))
            }
            else {
                for (let index = 0; index < 3; index++) {
                    xAxisarray.push(time + (((index * 24) + 17) * 60 * 60 * 1000))
                }

            }
            return xAxisarray
        }

        var formatHour = d3.timeFormat("%H")

        var formatDay = d3.timeFormat("%b %d")
        function multiFormat(date) {
            return formatHour(date)
        }

        function timeBotmultiFormat(date) {
            return formatDay(date)
        }
        //vitaldays true:threeday
        const { id_key, svg_id, datasource, axisBot, axisTop, circlrcolor, colorshadow, max, min, defaultdate, source, vitaldays } = this.props
        const width = window.screen.availWidth * 0.25, height = 100, viewwidth = width - 50, rect_width = width / 46
        const LocalDate = new Date(new Date(defaultdate).getFullYear() + ',' + monthformat(new Date(defaultdate).getMonth()) + ',' + new Date(defaultdate).getDate()).getTime()
        const LocalTime = nowtime(LocalDate)
        var vital_interval = intervaldays(LocalTime, vitaldays)

        var y = d3.scaleLinear()
            .domain([min, max])
            .range([height, 0])

        var x = d3.scaleLinear()
            .domain([vital_interval, LocalTime])
            .range([0, viewwidth])


        var yAxis = d3.axisLeft(y)
            .tickValues([0, 200])
            .tickFormat(n => (n))
            .tickSize(0, 0)
            .tickPadding(15);


        const xAxisvalue = formatxArray(vital_interval)
        const xAxisbotvalue = formatbotaxis(vital_interval)

        var xAxis = d3.axisTop(x)
            .tickValues(xAxisvalue)
            .tickSize(0, 0)
            .tickPadding(5)
            .tickFormat(function (d) { return multiFormat(d); });

        var xAxisbot = d3.axisBottom(x)
            .tickValues(xAxisbotvalue)
            .tickSize(0, 0)
            .tickPadding(height + 10)
            .tickFormat(function (d) { return timeBotmultiFormat(d) });



        var svg
        if (axisTop) {
            svg = d3.select("#" + id_key)
                .append("svg")
                .attr("id", svg_id)
                // .attr("viewBox", [0, 0, width, height + 25])
                .style("width", width)
                .style("height", height + 25)
                .append("g")
                .attr("transform", "translate(" + 40 + "," + 20 + ")");
        }
        else {
            if (axisBot) {
                svg = d3.select("#" + id_key)
                    .append("svg")
                    .attr("id", svg_id)
                    // .attr("viewBox", [0, 0, width, height + 25])
                    .style("width", width)
                    .style("height", height + 25)
                    .append("g")
                    .attr("transform", "translate(" + 40 + "," + 5 + ")");
            }
            else {

                svg = d3.select("#" + id_key)
                    .append("svg")
                    .attr("id", svg_id)
                    // .attr("viewBox", [0, 0, width, height + 10])
                    .style("width", width)
                    .style("height", height + 10)
                    .append("g")
                    .attr("transform", "translate(" + 40 + "," + 5 + ")");
            }
        }

        if (axisTop) {
            //console.log(axisTop)
            svg.append("g")
                .call(xAxis)
                .attr("class", "axis");
        }

        if (axisBot) {
            svg.append("g")
                .call(xAxisbot)
                .attr("class", "axis");

        }
        svg.append("g")
            .call(yAxis)
            .attr("class", "axis");


        svg.append('line')
            .attr('x1', x(vital_interval))
            .attr('y1', y(max))
            .attr('x2', x(LocalTime))
            .attr('y2', y(max))
            .style('stroke', 'rgba(220,220,220,1)')
            .style('stroke-width', 1)
            .style('stroke-dasharray', 5.5);

        svg.append('line')
            .attr('x1', x(vital_interval))
            .attr('y1', y(0))
            .attr('x2', x(LocalTime))
            .attr('y2', y(0))
            .style('stroke', 'rgba(220,220,220,1)')
            .style('stroke-width', 1)
            .style('stroke-dasharray', 5.5);

        if (vitaldays) {
            for (let index = 0; index < 19; index++) {
                if (index % 2 === 0) {
                    svg.append('line')
                        .attr('x1', x(vital_interval + (index * 60 * 60 * 1000 * 4)))
                        .attr('y1', 0)
                        .attr('x2', x(vital_interval + (index * 60 * 60 * 1000 * 4)))
                        .attr('y2', height)
                        .style('stroke', 'black')
                        .style('stroke-width', 2);
                }
                else {
                    svg.append('line')
                        .attr('x1', x(vital_interval + (index * 60 * 60 * 1000 * 4)))
                        .attr('y1', 0)
                        .attr('x2', x(vital_interval + (index * 60 * 60 * 1000 * 4)))
                        .attr('y2', height)
                        .style('stroke', 'rgba(220,220,220,1)')
                        .style('stroke-width', 1)
                        .style('stroke-dasharray', 5.5);
                }
            }
        }
        else {
            for (let index = 0; index < 25; index++) {
                if (index % 8 === 0) {
                    svg.append('line')
                        .attr('x1', x(vital_interval + (index * 60 * 60 * 1000)))
                        .attr('y1', 0)
                        .attr('x2', x(vital_interval + (index * 60 * 60 * 1000)))
                        .attr('y2', height)
                        .style('stroke', 'black')
                        .style('stroke-width', 2);
                }
                else {
                    svg.append('line')
                        .attr('x1', x(vital_interval + (index * 60 * 60 * 1000)))
                        .attr('y1', 0)
                        .attr('x2', x(vital_interval + (index * 60 * 60 * 1000)))
                        .attr('y2', height)
                        .style('stroke', 'rgba(220,220,220,1)')
                        .style('stroke-width', 1)
                        .style('stroke-dasharray', 5.5);
                }
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
        // for (let index = 0; index < data.length; index++) {
        //     const mappingdata = data[index]
        //     if (mappingdata > min && mappingdata < max) {
        //         svg.append('line')
        //             .attr('x1', x(index))
        //             .attr('y1', 0)
        //             .attr('x2', x(index))
        //             .attr('y2', height)
        //             .style('stroke', 'rgba(220,220,220,1)')
        //             .style('stroke-width', 1)
        //             .style('stroke-dasharray', 5.5);
        //     }
        //     else {
        //         svg.append('line')
        //             .attr('x1', x(index))
        //             .attr('y1', 0)
        //             .attr('x2', x(index))
        //             .attr('y2', height)
        //             .style('stroke', 'rgba(220,220,220,1)')
        //             .style('stroke-width', 1)
        //             .style('stroke-dasharray', 5.5);
        //     }
        // }

        // data.map((o, i) => (
        //     svg.append('rect')
        //         .attr('width', rect_width * 2)
        //         .attr('height', y(min) - y(max))
        //         .attr("x", x(i + 0.5))
        //         .attr("y", y(max))
        //         .style('fill', colorshadow)
        // ))



        // for (let index = 0; index < data.length; index++) {
        //     const element = data[index];
        //     //console.log(element)
        //     const boxwidth = 10
        //     const data_sorted = element.sort(d3.ascending)
        //     const q1 = d3.quantile(data_sorted, .25)
        //     const median = d3.quantile(data_sorted, .5)
        //     const q3 = d3.quantile(data_sorted, .75)
        //     const interQuantileRange = q3 - q1
        //     const minbox = q1 - 1.5 * interQuantileRange
        //     const maxbox = q1 + 1.5 * interQuantileRange
        //     svg
        //         .append("line")
        //         .attr("x1", x(index + 1))
        //         .attr("x2", x(index + 1))
        //         .attr("y1", y(minbox))
        //         .attr("y2", y(maxbox))
        //         .attr("stroke", circlrcolor)
        //         .style('stroke-width', 2)

        //     svg.append("rect")
        //         .attr("x", x(index + 1) - boxwidth / 2)
        //         .attr("y", y(q3))
        //         .attr("height", (y(q1) - y(q3)))
        //         .attr("width", boxwidth)
        //         .attr("stroke", circlrcolor)
        //         .style("fill", "rgba(255,255,255,1)")
        //         .style('stroke-width', 2);

        //     svg
        //         .selectAll("toto")
        //         .data([minbox, median, maxbox])
        //         .enter()
        //         .append("line")
        //         .attr("x1", x(index + 1) - boxwidth / 2)
        //         .attr("x2", x(index + 1) + boxwidth / 2)
        //         .attr("y1", function (d) { return (y(d)) })
        //         .attr("y2", function (d) { return (y(d)) })
        //         .attr("stroke", circlrcolor)
        //         .style('stroke-width', 2);

        // }
    }

    changestate() {
        this.setState({
            change: !this.state.change
        })
    }
    render() {
        const { svg_id, source, id_key } = this.props
        return (
            <div id={id_key}>
            </div>
        );
    }
}

export default Crosssectionvitalsignchart;