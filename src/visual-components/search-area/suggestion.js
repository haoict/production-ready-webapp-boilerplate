import React, { Component } from 'react';
import { withTranslation } from '../../helpers/i18n';
import './suggestion-style.less';

const POKEMON_THUMBNAILS_PATH = '/static/assets/pokemon/thumbnails/';
const POKEMON_SPRITES_PATH = '/static/assets/pokemon/sprites/';

class Suggestion extends Component {
  render() {
    const { t, data, onSuggestItemClick } = this.props;

    if (!data || !data.length) return null;

    const items = data.map(item => (
      <div
        key={item.id}
        className='suggestion-item'
        onClick={() => {
          onSuggestItemClick(item.id);
        }}>
        <div className='thumbnail'>
          <img src={POKEMON_SPRITES_PATH + ('00' + item.id).slice(-3) + 'MS.png'} alt={item.name.english} />
        </div>
        <div className='name'>{item.name.english}</div>
      </div>
    ));

    if (!items || !items.length) return null;

    return <div className='suggestion-component'>{items}</div>;
  }
}

export default withTranslation()(Suggestion);
