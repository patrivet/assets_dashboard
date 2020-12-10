import Chart from 'react-apexcharts';
import './GraphMemory.css';

const GraphMemory = ({ deviceData, timeSeries }) => {
  const arrLen = deviceData.length;
  // Set series data to be the last 10 values
  deviceData = deviceData.slice(arrLen - 10, arrLen);

  // Substitute (i) xaxis with current time series data.
  // (ii) memory usage for the selected device.
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
      dataLabels: {
        enabled: false,
      },
      yaxis: {
        title: {
          text: 'Memory (Bytes)',
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
        name: 'Memory Usage',
        data: deviceData,
      },
    ],
  };

  return (
    <div className="graphMemory">
      Memory Usage
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height="90%"
      />
    </div>
  );
};

export default GraphMemory;
