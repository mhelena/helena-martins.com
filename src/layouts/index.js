import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './components/navigation';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';

import {colors} from '../styles/constants';
import '../styles/reset-style.css';

const Header = () => (
  <div
    style={{
      background: 'white',
      marginBottom: '1.45rem',
      borderBottom: `1px gray solid`
    }}
  >
    <div
      style={{
        display: `flex`,
        margin: '0 auto',
        maxWidth: 960,
        padding: '0.5rem 1rem',
      }}
    >
      <Navigation>
        <h1 style={{margin: 0, alignSelf: 'center'}}>
          <Link
            to="/"
            style={{
              color: colors.black,
              textDecoration: 'none',
            }}>
            Helena Martins
          </Link>
        </h1>
      </Navigation>
    </div>
  </div>
);

const Footer = () => (
  <div
    style={{
      background: 'white'
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        margin: '0 auto',
        maxWidth: 960,
        padding: '1rem 1rem'
      }}
    >
      .
    </div>
  </div>
);

const TemplateWrapper = ({children}) => (
  <div>
    <Helmet
      title="H. Martins"
      meta={[
        {name: 'description', content: 'Helena Martins Website'},
        {name: 'keywords', content: 'doctor, statistics, mathematics'},
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}>
      {children()}
    </div>
    <Footer/>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
