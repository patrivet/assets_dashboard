import { useContext, useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import './DeviceView.css';

// Custom Components and context
import { AppContext } from '../Dashboard/Dashboard';
import GraphCPU from '../GraphCPU/GraphCPU';
import GraphMemory from '../GraphMemory/GraphMemory';
import ProgramsTable from '../ProgramsTable/ProgramsTable';
import {
  genTimeSeriesData,
  generateRandomVals,
} from '../../utils/helper-functions';

const DeviceView = () => {
  const { selectedDevice } = useContext(AppContext);
  const [deviceData, setDeviceData] = useState({
    cpuUsage: selectedDevice.cpuUsage,
    memoryUsage: selectedDevice.memoryUsage,
  });
  const [now, setNow] = useState(DateTime.local());

  useEffect(() => {
    /* Each time the deviceData changes - wait this timeout
    and then add new random values to the end of the arrays */
    setTimeout(() => {
      // Generate a single random value for cpuUsage and memoryUsage
      const cpuVal = generateRandomVals(1, 120)[0];
      const memVal = generateRandomVals(1, 800)[0];
      // Update the local state (and the device) with the new values.
      setDeviceData((currState) => ({
        memoryUsage: [...currState.memoryUsage, memVal],
        cpuUsage: [...currState.cpuUsage, cpuVal],
      }));
      selectedDevice.cpuUsage = deviceData.cpuUsage;
      selectedDevice.memoryUsage = deviceData.memoryUsage;
      // Set current time in local state.
      setNow(DateTime.local());
    }, 60000);
  }, [deviceData]);

  return (
    <div className="deviceView">
      <h4 className="deviceView__header">
        {selectedDevice.name} ({selectedDevice.ipAddress})
      </h4>
      <GraphCPU
        deviceData={deviceData.cpuUsage}
        timeSeries={genTimeSeriesData(10, now)}
      />
      <GraphMemory
        deviceData={deviceData.memoryUsage}
        timeSeries={genTimeSeriesData(10, now)}
      />
      <ProgramsTable />
    </div>
  );
};

export default DeviceView;
