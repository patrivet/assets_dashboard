import { createContext, useState } from 'react';
import './Dashboard.css';

// Custom components
import DeviceList from '../DeviceList/DeviceList';
import DeviceView from '../DeviceView/DeviceView';

// Other files
import devicesData from '../../data/devices';

// Create context for the selected device & it's setter function.
export const DeviceContext = createContext();

const Dashboard = () => {
  // Get the devices
  let devices = devicesData.devices;

  // Define state for the selected device. Init to 1st device in array.
  const [selectedDevice, setSelectedDevice] = useState(devices[0]);

  const deviceContextVals = { selectedDevice, setSelectedDevice };

  return (
    <DeviceContext.Provider value={deviceContextVals}>
      <div className="dashboard">
        <DeviceList devices={devices} />
        <DeviceView />
      </div>
    </DeviceContext.Provider>
  );
};

export default Dashboard;
