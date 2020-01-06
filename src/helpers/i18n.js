// const NextI18Next = require('next-i18next/dist/commonjs');

const NextI18Next = require('next-i18next').default;

const options = {
  browserLanguageDetection: true,
  serverLanguageDetection: true,
  defaultNS: 'common',
  defaultLanguage: 'en',
  ignoreRoutes: ['/_next', '/static'],
  otherLanguages: ['vi', 'ja'],
  localePath: typeof window === 'undefined' ? 'public/static/locales' : 'static/locales',
  localeStructure: '{{lng}}/{{ns}}',
  localeSubpaths: {},
  keySeparator: '::'
};

const nextI18NextInstance = new NextI18Next(options);

module.exports = { ...nextI18NextInstance };
