import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import todo from '../store/todo';
import { observer } from 'mobx-react-lite';

const Pie = observer(() => {

  const getData = (data) => {
    let notCompletedCount = 0;
    let completedCount = 0;

    data.forEach(obj => {
      if (obj.completed) {
        completedCount++;
      } else {
        notCompletedCount++;
      }
    });

    return [
      { item: 'Not completed', count: notCompletedCount },
      { item: 'Completed', count: completedCount }
    ]
  }

  const data = getData(todo.todos);

  const pieChart = useRef()

  useEffect(() => {

    // Get positions for each data object
    const piedata = d3.pie().value(d => d.count)(data)
    // Define arcs for graphing
    const arc = d3.arc().innerRadius(0).outerRadius(200)

    const colors = d3.scaleOrdinal(['#414042', '#f37037'])

    // Define the size and position of svg
    const svg = d3.select(pieChart.current)
      .attr('width', 400)
      .attr('height', 400)
      .append('g')
      .attr('transform', 'translate(200,200)')

    // Add tooltip
    const tooldiv = d3.select('#chartArea')
      .append('div')
      .style('visibility', 'hidden')
      .style('position', 'absolute')
      .style('background-color', '#eee')
      .style('padding', '10px')


    // Draw pie
    svg.append('g')
      .selectAll('path')
      .data(piedata)
      .join('path')
      .attr('d', arc)
      .attr('fill', (d, i) => colors(i))
      .attr('stroke', 'white')
      .on('mouseover', (e, d) => {

        tooldiv.style('visibility', 'visible')
          .text(`${d.data.item}:` + `${d.data.count}`)
      })
      .on('mousemove', (e, d) => {
        tooldiv.style('top', (e.pageY - 50) + 'px')
          .style('left', (e.pageX - 50) + 'px')
      })
      .on('mouseout', () => {
        tooldiv.style('visibility', 'hidden')
      })

  })

  return (
    <>

      <div id='chartArea'>
        <svg ref={pieChart}></svg>
      </div>
      <h3>Completed and not completed tasks ratio</h3>
    </>
  )
})

export default Pie;
