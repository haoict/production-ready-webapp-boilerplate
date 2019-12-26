import React, { Component } from 'react';
import { withTranslation } from '../../helpers/i18n';
import './style.less';

class ItemView extends Component {
  render() {
    const { t, isLoading, data, error } = this.props;

    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>{error.message ? error.message : JSON.stringify(error)}</div>;
    }
    if (!data) {
      return <div>No item found</div>;
    }

    const tags = data.tags.map(t => (
      <div className='tag' key={t}>
        <button>{t}</button>
      </div>
    ));

    const stats = [];
    if (data.stats) {
      for (const property in data.stats) {
        stats.push(
          <div key={property}>
            {`${property}: ${data.stats[property]}`}
            <br />
          </div>
        );
      }
    }

    return (
      <div className='item-view-component'>
        <div className='icon'>
          <img src={data.icon} alt={data.name} />
        </div>
        <div className='info'>
          <div className='head'>
            <div className='name'>{data.name}</div>
            <div className='title'>{data.title}</div>
          </div>
          <div className='tags'>
            {t('Tags')}: {tags}
          </div>
          <div className='description'>{data.description}</div>
          <div className='stats'>{stats}</div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(ItemView);
