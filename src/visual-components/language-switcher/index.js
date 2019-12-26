import React from 'react';
import { i18n, withTranslation } from '../../helpers/i18n';
import './style.less';

const languages = [
  {
    key: 'vi',
    name: '🇻🇳 Tiếng Việt',
    enable: true
  },
  {
    key: 'en',
    name: '🇬🇧 English',
    enable: true
  },
  {
    key: 'ja',
    name: '日本語',
    enable: false
  },
  {
    key: 'zh',
    name: '简体中文',
    enable: false
  },
  {
    key: 'ko',
    name: '한국어',
    enable: false
  },
  {
    key: 'de',
    name: 'Deutsch',
    enable: false
  }
];

const LanguageSwitcher = () => {
  const onChangeLang = key => {
    i18n.changeLanguage(key);
  };

  const languageOptions = [];
  languages.forEach(language => {
    if (language.enable)
      languageOptions.push(
        <option value={language.key} key={language.key}>
          {language.name}
        </option>
      );
  });

  return (
    <div className='language-switcher-component'>
      <select defaultValue={i18n.language} onChange={e => onChangeLang(e.target.value)}>
        {languageOptions}
      </select>
    </div>
  );
};

export default withTranslation()(LanguageSwitcher);
