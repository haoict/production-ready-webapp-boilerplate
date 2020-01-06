import React, { Component } from 'react';
import Head from 'next/head';
import { withTranslation } from '../../helpers/i18n';
import './style.less';

const POKEMON_IMAGE_PATH = '/static/assets/pokemon/images/';

class PokemonView extends Component {
  render() {
    const { t, lang, isLoading, data, error } = this.props;

    if (isLoading) {
      return (
        <div className='pokemon-view-component'>
          <div className='loading'>{t('Loading')}...</div>
        </div>
      );
    }
    if (error) {
      return <div>{error.message ? error.message : JSON.stringify(error)}</div>;
    }
    if (!data) {
      return <div>Not found</div>;
    }

    const types = data.type.map(type => (
      <div className='type' key={type}>
        <button className={type}>{type.toUpperCase()}</button>
      </div>
    ));

    const stats = [];
    if (data.base) {
      for (const property in data.base) {
        stats.push(
          <div key={property}>
            {`${property}: ${data.base[property]}`}
            <br />
          </div>
        );
      }
    }

    const name = lang === 'ja' ? data.name.japanese : data.name.english;

    return (
      <>
        <Head>
          <title>{name}</title>
        </Head>
        <div className='pokemon-view-component'>
          <div className='image'>
            <img src={POKEMON_IMAGE_PATH + ('00' + data.id).slice(-3) + '.png'} alt={name} />
          </div>
          <div className='space' />
          <div className='info'>
            <div className='head'>
              <div className='name'>{name}</div>
              <div className='title'>{data.title}</div>
            </div>
            <div className='types'>
              {t('Type')}: {types}
            </div>
            <div className='description'>{data.description}</div>
            <div className='stats'>{stats}</div>
          </div>
        </div>
      </>
    );
  }
}

export default withTranslation()(PokemonView);
