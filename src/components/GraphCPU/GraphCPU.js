import Chart from 'react-apexcharts';
import './GraphCPU.css';

const GraphCPU = ({ deviceData, timeSeries }) => {
  const arrLen = deviceData.length;
  // Set series data to be the last 10 values
  deviceData = deviceData.slice(arrLen - 10, arrLen);

  // Substitute (i) xaxis with current time series data.
  // (ii) cpu usage for the selected device.
  const chartData = {
    options: {
      chart: {
        id: 'basic-area',
        dropShadow: {
          enabled: true,
          top: 0,
          left: 0,
          blur: 3,
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: timeSeries,
      },
      colors: ['#00E396'],
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        title: {
          text: 'CPU (%)',
          style: {
            fontSize: '12px',
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 400,
          },
        },
      },
    },
    series: [
      {
        name: 'CPU Usage',
        data: deviceData,
      },
    ],
  };

  return (
    <div className="graphCPU">
      CPU Usage
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height="90%"
      />
    </div>
  );
};

export default GraphCPU;
