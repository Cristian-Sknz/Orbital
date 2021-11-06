import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import React from 'react';

type NavbarItemProps = {
  closeMenu(): void;
  active?: boolean;
  item: {
    title: string;
    link: string;
  };
};

const NavbarItem: React.FC<NavbarItemProps> = ({ item }, props) => {
  return (
    <li className='nav-item' onClick={props.closeMenu}>
      <a href={`#${item.link}`} className='nav-link'>
        {props.active && <Icon icon={['fas', 'angle-right']} />}
        {item.title}
      </a>
    </li>
  );
};

export default NavbarItem;
