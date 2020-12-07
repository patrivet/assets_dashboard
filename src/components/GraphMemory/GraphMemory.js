import { useContext } from 'react';
import Chart from 'react-apexcharts';

// Custom components and context
import { AppContext } from '../Dashboard/Dashboard';
import { genTimeSeriesData } from '../../utils/helper-functions';

const GraphMemory = () => {
  const { selectedDevice, now } = useContext(AppContext);

  // Substitute (i) xaxis with current time series data.
  // (ii) memory usage for the selected device.
  const chartData = {
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: genTimeSeriesData(10, now),
      },
    },
    series: [
      {
        name: 'series-1',
        data: selectedDevice.memoryUsage,
      },
    ],
  };
  return (
    <div className="graphMemory">
      Memory
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
