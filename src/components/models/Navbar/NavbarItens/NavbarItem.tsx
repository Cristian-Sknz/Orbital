import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
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

const NavbarItem: React.FC<NavbarItemProps> = (props) => {
  return (
    <li className='nav-item' onClick={props.closeMenu}>
      <a href={`#${props.item.link}`} className='nav-link'>
        {props.active && <Icon icon={faAngleRight} />}
        {props.item.title}
      </a>
    </li>
  );
};

export default NavbarItem;
