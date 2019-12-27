import React, { Component } from 'react';
import { i18n, withTranslation } from '../../helpers/i18n';
import Link from 'next/link';
import './style.less';

const POKEMON_THUMBNAILS_PATH = '/static/assets/pokemon/thumbnails/';
const POKEMON_SPRITES_PATH = '/static/assets/pokemon/sprites/';

class PokemonList extends Component {
  render() {
    const { t, data, header, showCount = true } = this.props;

    if (!data || !data.length)
      return (
        <div className='pokemon-list-component'>
          <div className='header'>{showCount && <p>{t('ShowingXresult', { count: 0 })}</p>}</div>
        </div>
      );

    const items = data.map(item => {
      const name = i18n.language === 'ja' ? item.name.japanese : item.name.english;
      return (
        <div key={item.id} className='pokemon-card'>
          <Link as={`/pokemons/${item.id}`} href={`/pokemons?id=${item.id}`}>
            <a>
              <div className='thumbnail'>
                <img src={POKEMON_SPRITES_PATH + ('00' + item.id).slice(-3) + 'MS.png'} alt={name} />
              </div>
              <div className='name'>{name}</div>
            </a>
          </Link>
        </div>
      );
    });

    return (
      <div className='pokemon-list-component'>
        <div className='header'>
          {header && <h3>{header}</h3>}
          {showCount && <p>{t('ShowingXresult', { count: items.length })}</p>}
        </div>
        <div className='list'>{items}</div>
      </div>
    );
  }
}

export default withTranslation()(PokemonList);
