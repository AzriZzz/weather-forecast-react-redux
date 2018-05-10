import React, { Component } from 'react';

import SearchBar from '../container/search_bar';

export default class App extends Component {
  render() {
    return (
      // <div>React simple starter</div>
      <div>
        Weather App 
        <SearchBar />
      </div>
    );
  }
}
