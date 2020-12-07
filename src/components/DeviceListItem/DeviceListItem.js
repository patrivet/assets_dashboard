import { useContext } from 'react';
import { AppContext } from '../Dashboard/Dashboard';

const DeviceListItem = ({ device }) => {
  const { setSelectedDevice } = useContext(AppContext);

  const handleClick = () => {
    setSelectedDevice(device);
  };

  return <div onClick={handleClick}>{device.name}</div>;
};

export default DeviceListItem;
