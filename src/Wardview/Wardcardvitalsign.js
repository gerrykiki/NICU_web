import React, { Component } from 'react';
import * as d3 from "d3";
import './Wardcardvitalsign.css';



class WardcardvitalsignChart extends Component {
    componentDidMount() {
        this.drawChart();
    }

    drawChart() {
        const { id, width, height, margin, max, min, axisBot, axisTop, circlrcolor, data } = this.props

        var vertigo = data;


        var y = d3.scaleLinear()
            .domain([0, 200])
            .range([height, 0])


        var x = d3.scaleLinear()
            .domain([1, 24])
            .range([0, width - 20])


        var yAxis = d3.axisLeft(y)
            .tickValues([0, 200])
            .tickFormat(n => (n))
            .tickSize(0, 0)
            .tickPadding(margin + 5);

        var ylimitAxis = d3.axisLeft(y)
            .tickValues([min, max])
            .tickFormat(n => (n))
            .tickSize(0, 0)
            .tickPadding(margin + 5);


        var xAxis = d3.axisTop(x)
            .ticks(20)
            .tickSize(0, 0)
            .tickPadding(margin);

        var xAxisbottom = d3.axisBottom(x)
            .ticks(20)
            .tickSize(0, 0)
            .tickPadding(margin);



        var svg = d3.select("#" + id)
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + 50 + "," + (margin + 20) + ")");




        svg.append("g")
            .call(yAxis)
            .attr("class", "axis");



        svg.append("g")
            .call(ylimitAxis)
            .attr("class", "limitaxis")
            .style('stroke', circlrcolor);

        var line = d3.line()
            .x(function (d, i) {
                return x(i + 1); //利用尺度運算資料索引，傳回x的位置
            })
            .y(function (d) {
                return y(d); //利用尺度運算資料的值，傳回y的位置
            });


        if (axisBot) {
            console.log(axisBot)
            svg.append("g")
                .call(xAxisbottom)
                .attr("class", "axis")
                .attr("transform", "translate(" + 0 + ", " + height + ")");
        }

        if (axisTop) {
            console.log(axisTop)
            svg.append("g")
                .call(xAxis)
                .attr("class", "axis");
        }

        svg.append('line')
            .attr('x1', -margin)
            .attr('y1', y(min))
            .attr('x2', width)
            .attr('y2', y(min))
            .style('stroke', 'red')
            .style('stroke-width', 1)
            .style('stroke-dasharray', 5.5);

        svg.append('line')
            .attr('x1', -margin)
            .attr('y1', y(max))
            .attr('x2', width)
            .attr('y2', y(max))
            .style('stroke', 'red')
            .style('stroke-width', 1)
            .style('stroke-dasharray', 5.5);

        svg.append('line')
            .attr('x1', -margin)
            .attr('y1', y(200))
            .attr('x2', width)
            .attr('y2', y(200))
            .style('stroke', 'rgba(0, 0, 0, 0.1)')
            .style('stroke-width', 1)
            .style('stroke-dasharray', 5.5);

        svg.append('line')
            .attr('x1', -margin)
            .attr('y1', y(0))
            .attr('x2', width)
            .attr('y2', y(0))
            .style('stroke', 'rgba(0, 0, 0, 0.1)')
            .style('stroke-width', 1)
            .style('stroke-dasharray', 5.5);

        svg.append('path')
            .attr('d', line(vertigo))
            .style('stroke',circlrcolor);

        vertigo.map((o, i) => (
            o > 0 && o < 200 ?
                o > min && o < max ?
                    svg.append('circle')
                        .attr('cx', x(i + 1))
                        .attr('cy', y(o))
                        .attr('r', 2)
                        .style('fill', circlrcolor)
                        .on("mouseover", function (d) {
                            var x0 = x.invert(d3.mouse(this)[0]);
                            console.log(x0);
                        })
                    :
                    svg.append('circle')
                        .attr('cx', x(i + 1))
                        .attr('cy', y(o))
                        .attr('r', 2)
                        .style('fill', 'red')
                : null
        ))

        for (let index = 0; index < vertigo.length; index++) {
            const mappingdata = vertigo[index]
            if (mappingdata > min && mappingdata < max) {
                svg.append('line')
                    .attr('x1', x(index + 1))
                    .attr('y1', 0)
                    .attr('x2', x(index + 1))
                    .attr('y2', height)
                    .style('stroke', 'rgba(0, 0, 0, 0.1)')
                    .style('stroke-width', 1)
                    .style('stroke-dasharray', 5.5);
            }
            else {
                svg.append('line')
                    .attr('x1', x(index + 1))
                    .attr('y1', 0)
                    .attr('x2', x(index + 1))
                    .attr('y2', height)
                    .style('stroke', 'black')
                    .style('stroke-width', 1)
                    .style('stroke-dasharray', 5.5);
            }
        }



    }

    render() {
        return <div id={"#" + this.props.id}></div>
    }
}

export default WardcardvitalsignChart;