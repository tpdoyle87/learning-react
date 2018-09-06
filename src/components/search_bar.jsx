import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    this.props.searchFunction(event.target.value)
  }

  render(){
    return (
      <input type="text" onChange={ this.handleUpdate } className="form-control form-search"/>
    );
  }
}

export default SearchBar
