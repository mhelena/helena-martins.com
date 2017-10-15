import React from 'react';
import Link from 'gatsby-link';

import './hambuger.css';
import './header.css';

import {headerFont} from '../../styles/constants';
import {colors} from '../../styles/constants';

const navigationList = ['presentations', 'teaching', 'education', 'CV'];

const Navigation = ({children}) => {

  let collapseMenu = null;
  let hamburgerIcon = null;

  function clickHamburger() {
    collapseMenu.focus();
    collapseMenu.classList.toggle('hide');
    hamburgerIcon.classList.toggle('open');
  }

  return (

    <nav className="navbar">

      <div className="main-menu">
        <div>
          {children}
        </div>

        <div id="navIcon"
             ref={(input) => {
               hamburgerIcon = input;
              }}
             onClick={clickHamburger}>
          <span/>
          <span/>
          <span/>
          <span/>
        </div>
      </div>

      <div className="navbar-links">
        <ul className="nav hide" ref={(input) => {
          collapseMenu = input;
        }}>
          {navigationList.map(link => (
            <li key={link}>
              <Link
                to={link}
                style={{
                  color: colors.black,
                  textDecoration: 'none',
                  fontFamily: headerFont
                }}
                onClick={clickHamburger}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
};

export default Navigation;
