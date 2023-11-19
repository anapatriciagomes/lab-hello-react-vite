import ironhackLogo from '../assets/ironhack-logo-xs.png';
import menuIcon from '../assets/menu-top-xs.png';

function Navbar() {
  return (
    <nav>
      <img src={ironhackLogo} alt="Ironhack logo" />
      <img src={menuIcon} alt="Menu icon" width={'15px'} height={'15px'} />
    </nav>
  );
}

export default Navbar;
