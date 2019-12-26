import React, { Component } from 'react';
import Link from 'next/link';
import { withTranslation } from '../../helpers/i18n';
import LanguageSwitcher from '../language-switcher';
import './style.less';

class Footer extends Component {
  render() {
    const { t } = this.props;

    return (
      <footer>
        <div className='links'>
          <Link as='/about' href='/about'>
            <a>{t('About')}</a>
          </Link>
          ●
          <Link as='/about' href='/about'>
            <a>{t('Help')}</a>
          </Link>
          ●
          <Link as='/about' href='/about'>
            <a>{t('Privacy')}</a>
          </Link>
          ●
          <Link as='/about' href='/about'>
            <a>{t('Terms')}</a>
          </Link>
        </div>

        <div className='bottom'>
          <div className='copyright'>© 2020</div>
          <div>
            <LanguageSwitcher />
          </div>
        </div>
      </footer>
    );
  }
}

export default withTranslation()(Footer);
