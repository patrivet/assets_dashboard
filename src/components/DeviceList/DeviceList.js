import { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';

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
  const [devicesToUse, setDevicesToUse] = useState(devices);

  const handleListItemClick = (index, device) => {
    setSelectedIndex(index);
    setSelectedDevice(device);
  };

  const handleSearchEntry = (event) => {
    // Get the search string and set device names containing the string to state prop.
    const { value } = event.target;

    const filteredDevices = devices.filter(
      (device) => device.name.indexOf(value) > -1
    );
    setDevicesToUse(filteredDevices);
  };

  return (
    <div id="deviceList" className="deviceList">
      <h3 className="deviceList__title">Devices</h3>
      <div className="deviceList__search">
        <TextField
          id="outlined-search"
          label="Search"
          type="search"
          variant="outlined"
          onChange={handleSearchEntry}
          autoComplete="off"
          margin="dense"
        />
      </div>

      <div className={`deviceList__inner ${classes.root}`}>
        <List component="nav" aria-label="devices">
          {devicesToUse.map((device, i) => {
            return (
              <ListItem
                key={device.ipAddress}
                button
                selected={selectedIndex === i}
                onClick={() => handleListItemClick(i, device)}
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
