import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import Router from 'next/router';
import './style.less';

const APP_ICON = '/static/assets/images/pokedex-app-icon.png';

class Header extends Component {
  render() {
    return (
      <header>
        <div className='back' onClick={() => Router.back()}>
          <i className='fas fa-chevron-left'></i>
        </div>
        <div className='home'>
          <Link as='/' href='/'>
            <a href='/'>
              <img src={APP_ICON} alt='Home'></img>
            </a>
          </Link>
        </div>
        <div className='github'>
          <a href='https://github.com/haoict/production-ready-webapp-boilerplate'>
            <i className='fab fa-github'></i>
          </a>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Header);
