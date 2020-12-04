import DeviceList from '../DeviceList';
import DeviceView from '../DeviceView';
import './Dashboard.css';

const Dashboard = () => {
  const devices = ['Device 1', 'Device 2', 'Device 3', 'Device 4', 'Device 5'];
  return (
    <div className="dashboard">
      <DeviceList devices={devices} />
      <DeviceView />
    </div>
  );
};

export default Dashboard;
