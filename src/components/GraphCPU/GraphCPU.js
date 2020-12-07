import { useContext } from 'react';
import Chart from 'react-apexcharts';

// Custom components and context
import { DeviceContext } from '../Dashboard/Dashboard';
import { genTimeSeriesData } from '../../utils/helper-functions';

const GraphCPU = () => {
  const { selectedDevice } = useContext(DeviceContext);

  // Substitute (i) xaxis with current time series data.
  // (ii) cpu usage for the selected device.
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
        data: selectedDevice.cpuUsage,
      },
    ],
  };

  return (
    <>
      <div className="graphCPU">
        CPU
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height="90%"
        />
      </div>
    </>
  );
};

export default GraphCPU;
