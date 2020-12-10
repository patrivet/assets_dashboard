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
        id: 'basic-bar',
      },
      xaxis: {
        categories: timeSeries,
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
        type="line"
        height="90%"
      />
    </div>
  );
};

export default GraphMemory;
