import React, { Component } from 'react';
import Head from 'next/head';
require('./style.less');

const POKEMON_IMAGE_PATH = 'https://haoict.github.io/static/images/pokemon/images/';

class PokemonView extends Component {
  render() {
    const { isLoading, data, error } = this.props;

    if (isLoading) {
      return (
        <div className='pokemon-view-component'>
          <div className='loading'>Loading...</div>
        </div>
      );
    }
    if (error) {
      return <div className='pokemon-view-component'>{error.message ? error.message : JSON.stringify(error)}</div>;
    }
    if (!data) {
      return <div className='pokemon-view-component'>Not found</div>;
    }

    const types = data.type.map((type) => (
      <div className='type' key={type}>
        <button aria-label='type' className={type}>
          {type.toUpperCase()}
        </button>
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

    return (
      <div className='pokemon-view-container'>
        <Head>
          <title>{data.name.english}</title>
          <meta name='viewport' content='width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no' />
        </Head>
        <div className='pokemon-view-component'>
          <div className='image'>
            <img src={data.image || POKEMON_IMAGE_PATH + ('00' + data.id).slice(-3) + '.png'} alt={data.name.english} />
          </div>
          <div className='info'>
            <div className='head'>
              <div className='name'>{data.name.english}</div>
              <div className='title'>{data.title}</div>
            </div>
            <div className='types'>Type: {types}</div>
            <div className='description'>{data.description}</div>
            <div className='stats'>{stats}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonView;
