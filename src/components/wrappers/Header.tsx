import { useState } from 'react';
import { FaBars, FaArrowLeft } from 'react-icons/fa';

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="mobile-header">
      <nav className="mobile-nav">
        <button className="menu-btn" onClick={handleMenuClick}>
          {showMenu ? <FaArrowLeft /> : <FaBars />}
        </button>
        <h1 className="logo">Logo</h1>
      </nav>
      {showMenu && (
        <nav className="menu">
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
