import { useContext } from 'react';
import { DeviceContext } from '../Dashboard/Dashboard';

const DeviceListItem = ({ device }) => {
  const { setSelectedDevice } = useContext(DeviceContext);

  const handleClick = () => {
    setSelectedDevice(device);
  };

  return <div onClick={handleClick}>{device}</div>;
};

export default DeviceListItem;
