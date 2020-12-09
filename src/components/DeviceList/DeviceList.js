import './DeviceList.css';

// Custom Components
import DeviceListItem from '../DeviceListItem/DeviceListItem';

const DeviceList = ({ devices }) => {
  return (
    <div id="deviceList" className="deviceList">
      {devices.map((device) => {
        return <DeviceListItem device={device} />;
      })}
    </div>
  );
};

export default DeviceList;
