import React from 'react';
import Link from '../common/Link/Link';
import style from './Navbar.module.css';

const Navbar = (props) => {
  const links = [{
    href: '/',
    label: 'Main'
  }, {
    href: '/profile',
    label: 'Profile'
  }, {
    href: '/news',
    label: 'News'
  }]
  return (
    <div className={style.navbar}>
      {links.map((link) => <Link href={link.href} key={link.href} label={link.label}/>)}
    </div>
  );
};

export default Navbar;