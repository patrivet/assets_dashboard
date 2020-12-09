import { createContext, useState, useEffect } from 'react';
import { DateTime } from 'luxon';
import './Dashboard.css';

// Custom components
import Header from '../Header/Header';
import DeviceList from '../DeviceList/DeviceList';
import DeviceView from '../DeviceView/DeviceView';

// Other files
import devicesData from '../../data/devices';
import { createInitalRandomData } from '../../utils/helper-functions';

// Create context for the selected device & it's setter function.
export const AppContext = createContext();

const Dashboard = () => {
  const [isReady, setIsReady] = useState(false);

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

  // Call function to generate data for Devices and their programs
  useEffect(() => {
    createInitalRandomData(devices).then(() => {
      setIsReady(true);
    });
  }, []);

  return (
    <AppContext.Provider value={appContextVals}>
      <Header />
      {isReady ? (
        <>
          <div className="dashboard">
            <DeviceList devices={devices} />
            <DeviceView />
          </div>
        </>
      ) : (
        <h2
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          Fetching Data
        </h2>
      )}
    </AppContext.Provider>
  );
};

export default Dashboard;
