import { createContext, useState } from 'react';
import { DateTime } from 'luxon';
import './Dashboard.css';

// Custom components
import DeviceList from '../DeviceList/DeviceList';
import DeviceView from '../DeviceView/DeviceView';

// Other files
import devicesData from '../../data/devices';

// Create context for the selected device & it's setter function.
export const AppContext = createContext();

const Dashboard = () => {
  // Get the devices
  let devices = devicesData.devices;

  /* Define values for context across the app. */
  // -The selected device. Init to 1st device in array.
  const [selectedDevice, setSelectedDevice] = useState(devices[0]);

  // -Current timeStamp
  const now = DateTime.local();

  const appContextVals = {
    selectedDevice,
    setSelectedDevice,
    now,
  };

  return (
    <AppContext.Provider value={appContextVals}>
      <div className="dashboard">
        <DeviceList devices={devices} />
        <DeviceView />
      </div>
    </AppContext.Provider>
  );
};

export default Dashboard;
