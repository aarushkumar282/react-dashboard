import React from 'react'
import ReactApexChart from 'react-apexcharts'

const MonthChart = () => {
  const state = {
    series: [67],
    options: {
      chart: {
        height: 150,
        type: 'radialBar',
        offsetY: -10,
        offsetX: -35,
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 135,
          dataLabels: {
            name: {
              fontSize: '12px',
              color: undefined,
              offsetY: 50,
            },
            value: {
              offsetY: 20,
              fontSize: '12px',
              color: undefined,
              formatter: function (val) {
                return val + '%'
              },
            },
          },
        },
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          shadeIntensity: 0.15,
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 65, 91],
        },
      },
      stroke: {
        dashArray: 4,
      },
      labels: ['Series A'],
    },
  }

  return (
    <div id="chart">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="radialBar"
        height={200}
        width={200}
      />
    </div>
  )
}

export default MonthChart
