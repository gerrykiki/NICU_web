import React, { Component } from 'react';
import * as d3 from "d3";
import './Wardcardvitalsign.css';



class WardcardvitalsignChart extends Component {
    componentDidMount() {
        this.drawChart();
    }

    drawChart() {
        const { id, width, height, min, max, margin, circlrcolor, data, colorshadow } = this.props

        var vertigo = data;
        console.log(vertigo)
        //x和y的比例尺
        var y = d3.scaleLinear()
            .domain([min, max])
            .range([height, 0])

        var x = d3.scaleLinear()
            .domain([1, 24])
            .range([0, width])

        var yAxis = d3.axisLeft(y)
            .tickValues([min, max])
            .tickFormat(n => (n))
            .tickSize(0, 0)
            .tickPadding(10);


        var xAxis = d3.axisTop(x)
            .ticks(4)
            .tickSize(0, 0)
            .tickPadding(margin);

        var svg = d3
            .select("#" + id)
            .select("div")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + 40 + "," + (margin + 30) + ")");

        //y軸
        svg.append("g")
            .call(yAxis)
            .attr("class", "axis");

        svg.append("g")
            .call(xAxis)
            .attr("class", "axis");

        // if (axisBot) {
        //     console.log(axisBot)
        //     svg.append("g")
        //         .call(xAxisbottom)
        //         .attr("class", "axis")
        //         .attr("transform", "translate(" + 0 + ", " + height + ")");
        // }

        // if (axisTop) {
        //     console.log(axisTop)
        //     svg.append("g")
        //         .call(xAxis)
        //         .attr("class", "axis");
        // }

        //上下警戒線
        // svg.append('line')
        //     .attr('x1', -margin)
        //     .attr('y1', y(min))
        //     .attr('x2', width)
        //     .attr('y2', y(min))
        //     .style('stroke', 'red')
        //     .style('stroke-width', 1)
        //     .style('stroke-dasharray', 5.5);

        // svg.append('line')
        //     .attr('x1', -margin)
        //     .attr('y1', y(max))
        //     .attr('x2', width)
        //     .attr('y2', y(max))
        //     .style('stroke', 'red')
        //     .style('stroke-width', 1)
        //     .style('stroke-dasharray', 5.5);

        //上下虛線
        svg.append('line')
            .attr('x1', 0)
            .attr('y1', y(max))
            .attr('x2', width)
            .attr('y2', y(max))
            .style('stroke', 'rgba(0, 0, 0, 0.1)')
            .style('stroke-width', 1)
            .style('stroke-dasharray', 5.5);

        svg.append('line')
            .attr('x1', 0)
            .attr('y1', y(min))
            .attr('x2', width)
            .attr('y2', y(min))
            .style('stroke', 'rgba(0, 0, 0, 0.1)')
            .style('stroke-width', 1)
            .style('stroke-dasharray', 5.5);


        for (let index = 0; index < vertigo.length; index++) {
            svg.append('line')
                .attr('x1', x(index + 1))
                .attr('y1', 0)
                .attr('x2', x(index + 1))
                .attr('y2', height)
                .style('stroke', 'rgba(0, 0, 0, 0.1)')
                .style('stroke-width', 1)
                .style('stroke-dasharray', 5.5);
        }

        vertigo.map((o, i) => (
            svg.append('rect')
                .attr('width', width / 23)
                .attr('height', y(o.Min) - y(o.Max))
                .attr("x", x(i + 0.5))
                .attr("y", y(o.Max))
                .style('fill', colorshadow)
        ))

        vertigo.map((o, i) => (
            o.Data > 0 && o.Data < 100 ?
                svg.append('circle')
                    .attr('cx', x(i + 1))
                    .attr('cy', y(o.Data))
                    .attr('r', 2.5)
                    .style('fill', circlrcolor)
                : null
        ))




    }

    render() {
        return <div id={"#" + this.props.id}></div>
    }
}

export default WardcardvitalsignChart;