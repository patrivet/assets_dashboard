import { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './DeviceList.css';

// Custom Components
import { AppContext } from '../Dashboard/Dashboard';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const DeviceList = ({ devices }) => {
  const classes = useStyles();
  const { setSelectedDevice } = useContext(AppContext);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (_, index, device) => {
    setSelectedIndex(index);
    setSelectedDevice(device);
  };

  return (
    <div id="deviceList" className="deviceList">
      <h3 className="deviceList__title">Devices</h3>
      <p className="deviceList__search">Search</p>
      <div className={`deviceList__inner ${classes.root}`}>
        <List component="nav" aria-label="devices">
          {devices.map((device, i) => {
            return (
              <ListItem
                button
                selected={selectedIndex === i}
                onClick={(event) => handleListItemClick(event, i, device)}
              >
                <ListItemText
                  primary={device.name}
                  secondary={device.ipAddress}
                />
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
};

export default DeviceList;
