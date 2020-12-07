import { useContext } from 'react';
import Chart from 'react-apexcharts';

// Custom components and context
import { DeviceContext } from '../Dashboard/Dashboard';
import { genTimeSeriesData } from '../../utils/helper-functions';

const GraphMemory = () => {
  const { selectedDevice } = useContext(DeviceContext);

  // Substitute (i) xaxis with current time series data.
  // (ii) memory usage for the selected device.
  const chartData = {
    options: {
      chart: {
        id: 'basic-bar',
      },
      xaxis: {
        categories: genTimeSeriesData(10),
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
