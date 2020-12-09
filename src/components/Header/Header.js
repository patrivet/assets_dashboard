import './Header.css';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

const Header = () => {
  const handleClick = () => {
    // Toggle show/hide of DeviceList
    const deviceListNode = document.getElementById('deviceList');
    // Toggle the hide class
    deviceListNode.classList.toggle('deviceList--hide');
  };

  return (
    <div className="header">
      <MenuRoundedIcon
        onClick={() => handleClick()}
        className="header__hamburger"
        style={{ fontSize: 32 }}
      />
      <h1 className="header__text">Devices Dashboard</h1>
    </div>
  );
};

export default Header;
