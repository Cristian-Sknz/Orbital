import React, { useCallback, useRef, useState } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import { useElementHide } from '~/lib/hooks';
import NavbarItens from './NavbarItens/NavbarItens';

import './navbar.css';

const Navbar: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const navbarRef : React.RefObject<HTMLElement> = useRef(null);
  const isHide : boolean = useElementHide<HTMLElement>(navbarRef);

  const menuClass = classNames({ 
    'menu-btn': true, 
    active: menu 
  });

  const navbarClass = classNames({
    'navbar': true,
    'active': isHide
  })

  const toggleMenu = useCallback(() => {
    setMenu(!menu);
  }, [menu]);

  return (
    <header>
      <nav className={navbarClass} ref={navbarRef}>
        <div className='container nav-container'>
          <a href='/#' className='nav-logo'>
            <img alt='logo'/>
          </a>
          <NavbarItens
            menu={menu}
            closeMenu={() => setMenu(false)}/>
          <div className={menuClass} onClick={toggleMenu}>
            <Icon icon={['fas', !menu ? 'bars' : 'times']} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
