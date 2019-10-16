import React, { Component } from 'react';
import * as d3 from "d3";
import './Wardcardvitalsign.css';



class WardcardvitalsignChart extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.drawChart();
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }



    drawChart() {
        const { id, width, height, min, max, margin, circlrcolor, data, colorshadow, axisTop, data2, data_2_circlrcolor } = this.props

        var vertigo = datarelease();

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

        var svgwidth = width + 50

        var svg = d3
            .select("#" + id)
            .append("div")
            .style("height", "170px")
            .style("width", svgwidth + "px")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + 40 + "," + (margin + 30) + ")");


        //y軸
        svg.append("g")
            .call(yAxis)
            .attr("class", "axis");


        if (axisTop) {
            console.log(axisTop)
            svg.append("g")
                .call(xAxis)
                .attr("class", "axis");
        }

        // if (axisBot) {
        //     console.log(axisBot)
        //     svg.append("g")
        //         .call(xAxisbottom)
        //         .attr("class", "axis")
        //         .attr("transform", "translate(" + 0 + ", " + height + ")");
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


        for (let index = 0; index < vertigo.length; index++) {
            svg.append('line')
                .attr('x1', x(index + 1))
                .attr('y1', 0)
                .attr('x2', x(index + 1))
                .attr('y2', height)
                .style('stroke', 'rgba(187, 187, 187, 1)')
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

        if (data) {
            vertigo.map((o, i) => (
                o.Data > 0 && o.Data < 100 ?
                    svg.append('circle')
                        .attr("id", "the_SVG_ID")
                        .attr('cx', x(i + 1))
                        .attr('cy', y(o.Data))
                        .attr('r', 2.5)
                        .style('fill', circlrcolor)
                    : null
            ))
        }


        if (data2) {
            console.log("there has data 2")
            const data_2 = data_2_release()
            data_2.map((o, i) => (
                o.Data > 0 && o.Data < 100 ?
                    svg.append('circle')
                        .attr('cx', x(i + 1))
                        .attr('cy', y(o.Data))
                        .attr('r', 2.5)
                        .style('fill', data_2_circlrcolor)
                    : null
            ))
        }
        else {

            console.log("there not has data 2")
        }

        function drawdata() {
            svg.selectAll("#the_SVG_ID").remove()
            console.log("reflash")
            const raw_data = datarelease()
            raw_data.map((o, i) => (
                o.Data > 0 && o.Data < 100 ?
                    svg.append('circle')
                        .attr("id", "the_SVG_ID")
                        .attr('cx', x(i + 1))
                        .attr('cy', y(o.Data))
                        .attr('r', 2.5)
                        .style('fill', circlrcolor)
                    : null
            ))
        }

        function datarelease() {

            var dataset = []; //建立空的資料陣列
            /*
            Data format = {
                Data:data_source
                Max:max
                Min:min
            }
             */
            if (dataset.length != 0) {

                dataset.length = 0
            }
            for (let i = 0; i < 24; i++) {
                const data = Math.floor(Math.random() * 50) + 50;
                let min = 30;
                let max = 60;
                if (i > 18) {
                    min = 50;
                    max = 80;
                }
                dataset.push({
                    Data: data,
                    Min: min,
                    Max: max
                })
            }
            return dataset;
        }

        function data_2_release() {
            var dataset = []; //建立空的資料陣列
            /*
            Data format = {
                Data:data_source
                Max:max
                Min:min
            }
             */
            for (let i = 0; i < 24; i++) {
                const data = 40;
                let min = 30;
                let max = 60;
                if (i > 18) {
                    min = 50;
                    max = 80;
                }
                dataset.push({
                    Data: data,
                    Min: min,
                    Max: max
                })
            }
            return dataset;
        }

        this.timerID = setInterval(function next() {
            drawdata();
        }, 3000);
    }

    render() {
        return null
    }
}

export default WardcardvitalsignChart;