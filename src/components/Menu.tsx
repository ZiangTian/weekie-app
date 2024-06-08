import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './MenuStyles.css';
import { images } from '../assets/images';

interface MenuProps {
  resetTaskFilter?: () => void; // Note the optional parameter
}

const Menu: React.FC<MenuProps> = ({ resetTaskFilter }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePage, setActivePage] = React.useState<'home' | 'profile'>(() => {
    // 初始化activePage状态
    return location.pathname.includes('profile') ? 'profile' : 'home';
  });

  useEffect(() => {
    // 更新activePage状态
    if (location.pathname.includes('profile')) {
      setActivePage('profile');
    } else {
      setActivePage('home');
    }
  }, [location]);

  const handleMenuClick = (page: 'home' | 'profile') => {
    setActivePage(page);
    navigate(`/${page}`);
  };
  const handleLogoClick = () => {
    if (resetTaskFilter && activePage === 'home') {
      resetTaskFilter();
    }
  };


  return (
    <div className="menu-container">
      <img 
        src={images['iconLogo']} 
        alt="iconLogo"
        className="menu-logo"
        onClick={handleLogoClick}
      />

      <div 
        className={`menu-item ${activePage === 'home' ? 'active' : ''}`}
        onClick={() => handleMenuClick('home')}
      >
        {activePage === 'home' && <div className="menu-item-backdrop">
          <img 
            src={images['iconSel']}
            alt="iconSel"
          />
        </div>}
        
        <img 
          src={images['iconHome']} 
          alt="iconHome"
          className="menu-icon"
        />
        <div className="menu-text">Home</div>
      </div>

      <div 
        className={`menu-item ${activePage === 'profile' ? 'active' : ''}`}
        onClick={() => handleMenuClick('profile')}
      >
        {activePage === 'profile' && <div className="menu-item-backdrop">
          <img 
            src={images['iconSel']}
            alt="iconSel"
          />
        </div>}
        
        <img 
          src={images['iconProf']} 
          alt="iconProf"
          className="menu-icon"
        />
        <div className="menu-text">Profile</div>
      </div>
    </div>
  );
};

export default Menu;
