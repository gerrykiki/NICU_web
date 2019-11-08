import React, { Component } from 'react';
import * as d3 from "d3";
import './Wardcardvitalsign.css';
// { center_monitor } from '../Centormonitor_data'



class WardcardvitalsignChart extends Component {
    constructor(props) {
        super(props);
        //Update
    }
    componentDidUpdate() {
        const { svg_key } = this.props
        d3.select("#" + svg_key).remove()
        this.drawChart()

    }
    componentDidMount() {
        this.drawChart();
    }

    componentWillUnmount() {
    }

    cal_svg_hight() {
        const { axisTop, axisBot } = this.props
        if (axisTop) {
            if (axisBot) {
                return 160
            }
            else {
                return 130
            }
        }
        else {
            if (axisBot) {
                return 130
            }
            else {
                return 90
            }
        }
    }

    cal_svg_transform() {
        const { axisTop, axisBot } = this.props
        console.log(axisTop)
        if (axisTop) {
            if (axisBot) {
                return 70
            }
            else {
                return 50
            }
        }
        else {
            if (axisBot) {
                return 5
            }
            else {
                return 5
            }
        }
    }

    drawChart() {
        function monthformat(month) {
            return month + 1
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


        const { svg_key, circlrcolor, data, axisTop, id_key ,axisBot} = this.props
        const width = window.screen.availWidth * 0.25, height = 70, transformmargin = this.cal_svg_transform(), max = 200, min = 0, margin = 20
        var time_now = new Date().getTime();

        var time_array = []
        var time_axis_array = []

        for (let index = 0; index < 25; index++) {
            time_array.push({ key: "time", x_axis_time: time_now - index * 60 * 60 * 1000 })
            time_axis_array.push(time_now - index * 60 * 60 * 1000)
        }
        var time_array_reverse = time_array.reverse()
        var time_axis_array_reverse = time_axis_array.reverse()



        var formatHour = d3.timeFormat("%H")

        var formatMonth = d3.timeFormat("%b %d")
        function multiFormat(date) {
            return formatHour(date)
        }
        function multibotformat(date){
            if (new Date(date).getHours() === 0) {
                return formatMonth(date)
            }
            else return null
        }
        var x = d3.scaleLinear()
            .domain([time_array_reverse[0].x_axis_time, time_array_reverse[24].x_axis_time])
            .range([0, width - 40]);


        var vertigo = data

        //x和y的比例尺
        var y = d3.scaleLinear()
            .domain([min, max])
            .range([height, 0])



        var yAxis = d3.axisLeft(y)
            .tickValues([min, max])
            .tickFormat(n => (n))
            .tickSize(0, 0)
            .tickPadding(10);

        var xAxisBottom = d3.axisBottom(x)
            .tickValues(time_axis_array_reverse)
            .tickSize(0, 0)
            .tickPadding(height + 10)
            .tickFormat(function (d) { return multibotformat(d); });


        var xAxis = d3.axisTop(x)
            .tickValues(time_axis_array_reverse)
            .tickSize(0, 0)
            .tickPadding(margin)
            .tickFormat(function (d) { return multiFormat(d); });

        var svg = d3.select("#" + id_key)
            .append("svg")
            .attr("id", svg_key)
            .attr("viewBox", [0, 0, width, this.cal_svg_hight()])
            .append("g")
            .attr("transform", "translate(" + 30 + "," + transformmargin + ")");


        //y軸
        svg.append("g")
            .call(yAxis)
            .attr("class", "axis");


        if (axisTop) {
            svg.append("g")
                .call(xAxis)
                .attr("class", "axis");
        }

        if (axisBot) {
            svg.append("g")
                .call(xAxisBottom)
                .attr("class", "axis");
        }

        //上下虛線
        svg.append('line')
            .attr('x1', 0)
            .attr('y1', y(max))
            .attr('x2', width)
            .attr('y2', y(max))
            .style('stroke', 'rgba(187, 187, 187, 1)')
            .style('stroke-width', 1)
            .style('stroke-dasharray', 5.5);

        svg.append('line')
            .attr('x1', 0)
            .attr('y1', y(min))
            .attr('x2', width)
            .attr('y2', y(min))
            .style('stroke', 'rgba(187, 187, 187, 1)')
            .style('stroke-width', 1)
            .style('stroke-dasharray', 5.5);


        for (let index = 0; index < time_array_reverse.length; index++) {
            svg.append('line')
                .attr('x1', x(time_array_reverse[index].x_axis_time))
                .attr('y1', 0)
                .attr('x2', x(time_array_reverse[index].x_axis_time))
                .attr('y2', height)
                .style('stroke', 'rgba(187, 187, 187, 1)')
                .style('stroke-width', 1)
                .style('stroke-dasharray', 5.5);
        }

        // vertigo.map((o, i) => (
        //     svg.append('rect')
        //         .attr('width', width / 23)
        //         .attr('height', y(o.Min) - y(o.Max))
        //         .attr("x", x(i + 0.5))
        //         .attr("y", y(o.Max))
        //         .style('fill', colorshadow)
        // )))

        for (let index = 0; index < vertigo.length; index++) {
            const element = vertigo[index];
            svg.append('circle')
                .attr("id", "the_SVG_ID")
                .attr('cx', x(element.Time))
                .attr('cy', y(element.Data))
                .attr('r', 0.1)
                .style('fill', circlrcolor)

        }

    }

    render() {
        const { id_key } = this.props
        return (
            <div id={id_key}></div>
        );
    }
}

export default WardcardvitalsignChart;