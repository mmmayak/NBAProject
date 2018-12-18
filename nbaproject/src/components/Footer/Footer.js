import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { CURRENT_YEAR } from '../../config';

const Footer = () => (
  <div className='footer'>
    <Link to='/' className='footer__logo'>
      <img src="/images/nba_logo.png" alt="nba logo"/>
    </Link>
    <div className='footer__right'>
      @NBA {CURRENT_YEAR} All right reserved.
    </div>
  </div>
)

export default Footer;