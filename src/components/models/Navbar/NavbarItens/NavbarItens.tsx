import React, { useEffect } from 'react';
import classNames from 'classnames';

import NavbarItem from './NavbarItem';
import NavbarData from '~/assets/data/Navbar.json';
import { useScroll } from '~/lib/hooks';

//import ThemeButton from '../ThemeButton';

type NavbarItensProps = {
  closeMenu(): void;
  menu: boolean;
};

const getByLink = (link: any) => {
  return NavbarData.filter((i) => i.link === link).map((i) => i.title)[0]
}

const NavbarItens: React.FC<NavbarItensProps> = (props) => {
  const scroll = useScroll(NavbarData.map(({ link }) => `.${link}`));
  const className = classNames({
    'nav-list': true,
    active: props.menu,
  });

  useEffect(() => {
    const section = getByLink(scroll?.id);
    document.title = `Orbital - ${(section) ? section : 'Inicio'}`;
  }, [scroll]);

  return (
    <ul className={className}>
      {NavbarData.map((item) => (
        <NavbarItem
          item={item}
          closeMenu={props.closeMenu}
          active={scroll?.id === item.link}
          key={item.link}
        />
      ))}
      <li className='nav-item'>{/*<ThemeButton></ThemeButton>*/}</li>
    </ul>
  );
};

export default NavbarItens;