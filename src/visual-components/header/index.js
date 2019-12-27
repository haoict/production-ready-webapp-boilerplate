import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { withTranslation } from '../../helpers/i18n';
import Router from 'next/router';
import './style.less';

const APP_ICON = '/static/assets/images/pokedex-app-icon.png';

class Header extends Component {
  render() {
    const { t } = this.props;

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
        <div className='user' onClick={() => alert('Login feature comming soon')}>
          <i className='fa fa-user'></i>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(withTranslation()(Header));
