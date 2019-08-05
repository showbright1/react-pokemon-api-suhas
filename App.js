import React, { Component } from 'react';
import PokemonList from './pokemon/PokemonList';

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="text-center">
        <PokemonList />
      </div>
    );
  }
}