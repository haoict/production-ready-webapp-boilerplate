import React, { Component } from 'react';

import Link from 'next/link';
import './style.less';

const POKEMON_SPRITES_PATH = '/static/assets/pokemon/sprites/';

class PokemonList extends Component {
  render() {
    const { title, isLoading, data, error, showCount = true } = this.props;

    if (isLoading) {
      return (
        <div className='pokemon-list-component'>
          <div className='title'>{title && <h3>{title}</h3>}</div>
          <div className='list'>
            <div className='loading'>Loading...</div>
          </div>
        </div>
      );
    }

    if (error) {
      // show error message if you want
    }

    if (!data || !data.length) {
      return (
        <div className='pokemon-list-component'>
          <div className='title'>{showCount && <p>Showing 0 result</p>}</div>
        </div>
      );
    }

    const items = data.map(item => {
      return (
        <div key={item.id} className='pokemon-card'>
          <Link as={`/pokemons/${item.id}`} href={`/pokemons?id=${item.id}`}>
            <a>
              <div className='thumbnail'>
                <img src={POKEMON_SPRITES_PATH + ('00' + item.id).slice(-3) + 'MS.png'} alt={item.name.english} />
              </div>
              <div className='name'>{item.name.english}</div>
            </a>
          </Link>
        </div>
      );
    });

    return (
      <div className='pokemon-list-component'>
        <div className='title'>
          {title && <h3>{title}</h3>}
          {showCount && <p>Showing {items.length} result(s)</p>}
        </div>
        <div className='list'>{items}</div>
      </div>
    );
  }
}

export default PokemonList;
