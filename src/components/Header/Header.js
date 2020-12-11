import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const Header = () => {
  const handleClick = () => {
    // Toggle show/hide of DeviceList
    const deviceListNode = document.getElementById('deviceList');
    const deviceView = document.getElementsByClassName('deviceView')[0];
    // Toggle the hide handling classes
    deviceListNode.classList.toggle('deviceList--hide');
    deviceView.classList.toggle('deviceView__only');
  };

  return (
    <div className="header">
      <div className="header__hamburger" style={{ fontSize: 32 }}>
        <IconButton
          onClick={() => handleClick()}
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      </div>
      <h2 className="header__text">Devices Dashboard</h2>
    </div>
  );
};

export default Header;
