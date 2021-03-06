import React, { Component } from 'react';
import * as d3 from "d3";
import { growdata } from '../jsonResponse'

class Wardmonthafter extends Component {
    componentDidMount() {
        this.drawChart();
    }

    drawChart() {
        const {  gender, svg_key} = this.props
        const width = window.screen.availWidth * 0.25, height = 290

        //var vertigo = datarelease();

        //x和y的比例尺
        var y = d3.scaleLinear()
            .domain([1000, 10000])
            .range([height, 0])

        var x = d3.scaleLinear()
            .domain([0, 6])
            .range([0, width])

        var yAxis = d3.axisLeft(y)
            .ticks(10)
            .tickSize(0, 0)
            .tickPadding(10);


        var xAxis = d3.axisTop(x)
            .ticks(6)
            .tickSize(0, 0)
            .tickPadding(-15)
            .tickFormat(function (d) { 
                if (d === 0) {
                    return "birth"
                }
                else return 'M' + d; 
            });


        var svg = d3
            .select("#" + svg_key)
            // .style("height", "300px")
            // .style("width", svgwidth + "px")
            // .select("svg")
            .attr("viewBox", [0, 0, width + 60, 330])
            .append("g")
            .attr("transform", "translate(" + 50 + "," + 20 + ")");


        //y軸
        svg.append("g")
            .call(yAxis)
            .attr("class", "axis");



        svg.append("g")
            .call(xAxis)
            .attr("class", "axis")
            .attr("transform", "translate(" + 0 + ", " + height + ")");

        for (let index = 0; index < 7; index++) {
            svg.append('line')
                .attr('x1', x(index))
                .attr('y1', 0)
                .attr('x2', x(index))
                .attr('y2', height)
                .style('stroke', 'rgba(187, 187, 187, 1)')
                .style('stroke-width', 1)
                .style('stroke-dasharray', 5.5);

        }

        for (let index = 0; index < 19; index++) {
            const number = index * 500 + 1000
            svg.append('line')
                .attr('x1', 0)
                .attr('y1', y(number))
                .attr('x2', width)
                .attr('y2', y(number))
                .style('stroke', 'rgba(187, 187, 187, 1)')
                .style('stroke-width', 1)
                .style('stroke-dasharray', 5.5);

        }

        // for (let index = 22; index < 45; index++) {
        //     svg.append('line')
        //         .attr('x1', x(index))
        //         .attr('y1', 0)
        //         .attr('x2', x(index))
        //         .attr('y2', height)
        //         .style('stroke', 'rgba(187, 187, 187, 1)')
        //         .style('stroke-width', 1)
        //         .style('stroke-dasharray', 5.5);
        // }

        if (gender === 'Male') {
            for (let index = 0; index < growdata.Male_after.length - 1; index++) {
                svg.append('line')
                    .attr('x1', x(growdata.Male_after[index].y))
                    .attr('y1', y(growdata.Male_after[index].min))
                    .attr('x2', x(growdata.Male_after[index + 1].y))
                    .attr('y2', y(growdata.Male_after[index + 1].min))
                    .style('stroke', 'orange')
                    .style('stroke-width', 1.5);
            }

            for (let index = 0; index < growdata.Male_after.length - 1; index++) {
                svg.append('line')
                    .attr('x1', x(growdata.Male_after[index].y))
                    .attr('y1', y(growdata.Male_after[index].max))
                    .attr('x2', x(growdata.Male_after[index + 1].y))
                    .attr('y2', y(growdata.Male_after[index + 1].max))
                    .style('stroke', 'blue')
                    .style('stroke-width', 1.5);
            }
        }
        else {
            for (let index = 0; index < growdata.FeMale_after.length - 1; index++) {
                svg.append('line')
                    .attr('x1', x(growdata.FeMale_after[index].y))
                    .attr('y1', y(growdata.FeMale_after[index].min))
                    .attr('x2', x(growdata.FeMale_after[index + 1].y))
                    .attr('y2', y(growdata.FeMale_after[index + 1].min))
                    .style('stroke', 'orange')
                    .style('stroke-width', 1.5);
            }

            for (let index = 0; index < growdata.FeMale_after.length - 1; index++) {
                svg.append('line')
                    .attr('x1', x(growdata.FeMale_after[index].y))
                    .attr('y1', y(growdata.FeMale_after[index].max))
                    .attr('x2', x(growdata.FeMale_after[index + 1].y))
                    .attr('y2', y(growdata.FeMale_after[index + 1].max))
                    .style('stroke', 'blue')
                    .style('stroke-width', 1.5);
            }
        }


        // var cur_line = d3.line()
        //     .x(function (d) { return d.min; })
        //     .y0(0)
        //     .y1(function (d) { return d.y; })
        //     .interpolate('bundle');

        // svg.append('path')
        //     .attr('d', cur_line(growdata.Male_befor))
        //     .attr('stroke', 'black')
        //     .attr('fill', 'none');

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


        // svg.append('line')
        //     .attr('x1', 0)
        //     .attr('y1', y(min))
        //     .attr('x2', width)
        //     .attr('y2', y(min))
        //     .style('stroke', 'rgba(187, 187, 187, 1)')
        //     .style('stroke-width', 1)
        //     .style('stroke-dasharray', 5.5);


        // console.log(yAxis)
        // for (let index = 0; index < vertigo.length; index++) {
        //     svg.append('line')
        //         .attr('x1', x(index + 1))
        //         .attr('y1', 0)
        //         .attr('x2', x(index + 1))
        //         .attr('y2', height)
        //         .style('stroke', 'rgba(187, 187, 187, 1)')
        //         .style('stroke-width', 1)
        //         .style('stroke-dasharray', 5.5);
        // }




    }

    render() {
        const { id_key, svg_key } = this.props
        return (
            <div id={id_key}>
                <svg id={svg_key}></svg>
            </div>
        );
    }
}

export default Wardmonthafter;
