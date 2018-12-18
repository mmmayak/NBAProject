import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import SideNavigation from './SideNav/SideNav';

const Header = (props) => {

    

  const navBars = () => (
    <div className='header__bars'>
      <FontAwesome 
        name='bars' 
        onClick={props.onOpenNav}
        style={{
          color: '#dfdfdf',
          padding: '10px',
          cursor: 'pointer'
        }}/>
    </div>
  )

  const logo = () => (
      <Link to='/' className='header__logo'>
        <img src="/images/nba_logo.png" alt="nba logo"/>
      </Link>
    )


  return(
    <header className='header'>
      <SideNavigation {...props}/>
      <div className='header__options'>
        {navBars()}
        {logo()}
      </div>
    </header>
  )
}

export default Header;