import React, { Component } from 'react';

import './suggestion-style.less';

const POKEMON_SPRITES_PATH = 'https://haoict.github.io/static/images/pokemon/sprites/';

class Suggestion extends Component {
  render() {
    const { data, onSuggestItemClick } = this.props;

    if (!data || !data.length) return null;

    const items = data.map((item) => {
      return (
        <div
          key={item.id}
          className='suggestion-item'
          onClick={() => {
            onSuggestItemClick(item.id);
          }}>
          <div className='thumbnail'>
            <img
              src={item.imageThumb || POKEMON_SPRITES_PATH + ('00' + item.id).slice(-3) + 'MS.png'}
              alt={item.name.english}
            />
          </div>
          <div className='name'>{item.name.english}</div>
        </div>
      );
    });

    if (!items || !items.length) return null;

    return <div className='suggestion-component'>{items}</div>;
  }
}

export default Suggestion;
