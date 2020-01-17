import React, { Component } from 'react';
import Router from 'next/router';
import Suggestion from './suggestion';
import './style.less';

class SearchArea extends Component {
  state = {
    searchText: ''
  };

  componentWillUnmount() {
    clearTimeout(this.delayTimer);
    this.delayTimer = null;
  }

  onSearchTextChange = e => {
    const { searchPokemonName } = this.props;
    const searchText = e.target.value;
    this.setState({ searchText });
    clearTimeout(this.delayTimer);

    if (!searchText) {
      searchPokemonName('');
      return;
    }

    this.delayTimer = setTimeout(() => {
      this.delayTimer = null;
      searchPokemonName(searchText);
    }, 500);
  };

  onSubmit = e => {
    const { searchText } = this.state;
    e.preventDefault();
    if (!searchText) {
      return;
    }
    Router.push(`/search?keyword=${searchText}`, `/search/${searchText}`).then(() => window.scrollTo(0, 0));
  };

  onSearchTextClear = () => {
    const { searchPokemonName } = this.props;
    this.setState({ searchText: '' });
    searchPokemonName('');
  };

  render() {
    const { t, lang, isLoading, data, onSuggestItemClick } = this.props;
    const { searchText } = this.state;

    return (
      <div className='search-area-component'>
        <form onSubmit={this.onSubmit}>
          <div className='input-field'>
            <input
              type='text'
              placeholder='Search'
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
          {!this.delayTimer && !isLoading && searchText && (!data || !data.length) && (
            <div className='indicate-text'>No result</div>
          )}
          <Suggestion data={data} onSuggestItemClick={onSuggestItemClick} lang={lang} />
        </form>
      </div>
    );
  }
}

export default SearchArea;
