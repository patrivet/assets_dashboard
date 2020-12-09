import './Header.css';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

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
      <MenuRoundedIcon
        onClick={() => handleClick()}
        className="header__hamburger"
        style={{ fontSize: 32 }}
      />
      <h2 className="header__text">Devices Dashboard</h2>
    </div>
  );
};

export default Header;
