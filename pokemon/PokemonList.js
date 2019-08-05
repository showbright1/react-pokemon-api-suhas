import React, { Component } from 'react';
import { Pokemon } from './Pokemon';

export default class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: [], currentPage: 1, totalPages: 1,
      itemsPerPage: 20, totalItems: 1, nextUrl: null, previousUrl: null
    }
    this.onNextClick = this.onNextClick.bind(this);
    this.onPreviousClick = this.onPreviousClick.bind(this);
  }

  componentWillMount() {
    
    this.fetchPokemonData("https://pokeapi.co/api/v2/pokemon/");
    
  }

  fetchPokemonData(url, btn) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      this.setState((state) => ({
        pokemonList: data.results,
        totalItems: data.count,
        totalPages: Math.ceil(data.count/state.itemsPerPage),
        nextUrl: data.next,
        previousUrl: data.previous,
        currentPage: ((btn == "next") ? state.currentPage+1 : ((btn == "prev") ? state.currentPage-1 : state.currentPage))
      }));
    })
  }

  onPreviousClick(e) {
    this.fetchPokemonData(this.state.previousUrl, "prev");
  }

  onNextClick(e) {
    this.fetchPokemonData(this.state.nextUrl, "next");
  }

  render() {
    return (
      <div className="container">
        <h2>Pokemon List</h2>
        <div className="row">
        { this.state.pokemonList.map((item) => {
          return <Pokemon key={item.name} item={item} />
        }) }
        </div>
        <div>
          <button className="btn btn-primary" onClick={this.onPreviousClick} disabled={this.state.previousUrl == null}>Previous</button>
          <span> Page no: {this.state.currentPage} / {this.state.totalPages} </span>
          <button className="btn btn-primary" onClick={this.onNextClick} disabled={this.state.nextUrl == null}>Next</button>
        </div>
      </div>
    );
  }
}