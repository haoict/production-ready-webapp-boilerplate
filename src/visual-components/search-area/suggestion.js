import React, { Component } from 'react';
import { withTranslation } from '../../helpers/i18n';
import './suggestion-style.less';

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
        <div className='icon'>
          <img src={item.icon} alt={item.name} />
        </div>
        <div className='text'>
          <div className='name'>{item.name}</div>
          <div className='title'>{item.title}</div>
        </div>
      </div>
    ));

    if (!items || !items.length) return null;

    return <div className='suggestion-component'>{items}</div>;
  }
}

export default withTranslation()(Suggestion);
