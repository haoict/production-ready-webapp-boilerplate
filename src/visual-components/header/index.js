import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import { withTranslation } from '../../helpers/i18n';
import './style.less';

class Header extends Component {
  render() {
    const { t } = this.props;

    return (
      <header>
        <div className='home'>
          <Link as='/' href='/'>
            <a>{t('Home')}</a>
          </Link>
        </div>

        <div className='user'>{t('Hello')}, user</div>
      </header>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(withTranslation()(Header));
