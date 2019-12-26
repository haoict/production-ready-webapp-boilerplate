import React, { Component } from 'react';
import { withTranslation } from '../../helpers/i18n';
import Suggestion from './suggestion';
import './style.less';

class SearchArea extends Component {
  state = {
    searchText: ''
  };

  onSearchTextChange = e => {
    const { searchChampName } = this.props;
    const searchText = e.target.value;
    this.setState({ searchText });
    clearTimeout(this.delayTimer);

    if (!searchText) {
      searchChampName('');
      return;
    }

    this.delayTimer = setTimeout(() => {
      searchChampName(searchText);
    }, 500);
  };

  onSubmit = e => {
    const { searchChampName } = this.props;
    const { searchText } = this.state;
    e.preventDefault();
    searchChampName(searchText);
  };

  onSearchTextClear = () => {
    const { searchChampName } = this.props;
    this.setState({ searchText: '' });
    searchChampName('');
  };

  render() {
    const { t, data, onSuggestItemClick } = this.props;
    const { searchText } = this.state;

    return (
      <div className='search-area-component'>
        <form onSubmit={this.onSubmit}>
          <div className='input-field'>
            <input
              type='text'
              placeholder={t('Search')}
              value={searchText}
              onChange={this.onSearchTextChange}
              onFocus={this.onSearchTextChange}
            />
            {searchText && (
              <span className='clear-btn' onClick={this.onSearchTextClear}>
                <i className='fas fa-backspace' />
              </span>
            )}
          </div>
          <button type='submit' ref='submitBtn'>
            <i className='fas fa-search fa-fw' />
          </button>
          <Suggestion data={data} onSuggestItemClick={onSuggestItemClick} />
        </form>
      </div>
    );
  }
}

export default withTranslation()(SearchArea);
