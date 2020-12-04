// import React from 'react';
import './DeviceList.css';
import DeviceListItem from '../DeviceListItem';

const DeviceList = ({ devices }) => {
  return (
    <>
      <div className="deviceList">
        {devices.map((device) => {
          return <DeviceListItem device={device} />;
        })}
      </div>
    </>
  );
};

export default DeviceList;
