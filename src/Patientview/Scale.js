import React, { Component } from 'react';
import * as d3 from "d3";


class Scale extends Component {
    componentDidMount() {
        this.drawChart();
    }
    drawChart() {
        const { id, width, height, margin} = this.props
        var x = d3.scaleLinear()
        .domain([1, 24])
        .range([0, width - margin - margin])

        var xAxis = d3.axisTop(x)
        .ticks(20)
        .tickSize(0, 0)
        .tickPadding(margin);

        var svg = d3.select("#" + id)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + margin + "," + (margin + 20) + ")");

        svg.append("g")
        .call(xAxis)
        .attr("class", "axis");


    }
    render() {
        return <div id={"#" + this.props.id}></div>
    }
}

export default Scale