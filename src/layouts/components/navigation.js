import React from 'react';
import Link from 'gatsby-link';
import {headerFont} from '../../styles/constants';

import styles from './navigation.module.css';
import './hambuger.css';
import './header.css';

const navigationList = ['presentations', 'CV'];

const Navigation = ({children}) => {

  let collapseMenu = null;

  function clickHamburger(event) {
    // collapseMenu.focus();
    console.log('collapse menu', collapseMenu);
    collapseMenu.classList.toggle('hide');
    event.target.classList.toggle('open');
  }

  return (

    <nav className="navbar">

      <div className="main-menu">
        <div>
          {children}
        </div>

        <div id="navIcon" onClick={clickHamburger}>
          <span/>
          <span/>
          <span/>
          <span/>
        </div>
      </div>

      <div className="navbar-collapse">
        <ul className="nav navbar-nav hide" ref={(input) => {
          collapseMenu = input;
        }}>
          <li className="">
            <a className="page-scroll" href="#services">Services</a>
          </li>
          <li className="">
            <a className="page-scroll" href="#portfolio">Portfolio</a>
          </li>
          <li className="">
            <a className="page-scroll" href="#about">About</a>
          </li>
          <li className="">
            <a className="page-scroll" href="#team">Team</a>
          </li>
          <li className="">
            <a className="page-scroll" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Navigation;
