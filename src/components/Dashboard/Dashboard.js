import { createContext, useState } from 'react';
import './Dashboard.css';

// Custom components
import DeviceList from '../DeviceList/DeviceList';
import DeviceView from '../DeviceView/DeviceView';

// Create context for the selected device & it's setter function.
export const DeviceContext = createContext();

const Dashboard = () => {
  const devices = ['Device 1', 'Device 2', 'Device 3', 'Device 4', 'Device 5'];

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
