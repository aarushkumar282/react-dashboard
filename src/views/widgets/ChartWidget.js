import React from 'react'
import ReactApexChart from 'react-apexcharts'

const ChartWidget = () => {
  const state = {
    series: [
      {
        name: 'Series A',
        data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48],
      },
      {
        name: 'Series B',
        data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22],
      },
      {
        name: 'Series C',
        data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 2,
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'all',
          columnWidth: '10%',
          text: 'none',
          value: false,
        },
      },
      title: {
        text: 'Email Sent',
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        labels: {},
      },
      yaxis: {
        title: {
          text: undefined,
        },
      },
      tooltip: {},
      legend: {
        offsetY: 20,
        position: 'bottom',
        horizontalAlign: 'center',
      },
    },
  }
  return (
    <>
      <div id="chart" style={{ padding: '15px' }}>
        <ReactApexChart options={state.options} series={state.series} type="bar" height={365} />
      </div>
    </>
  )
}

export default ChartWidget
