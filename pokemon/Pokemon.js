import React, { Component } from 'react';

export class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: {},
      pokemonUrl: ''
    }
  }

  componentWillMount() {
    fetch(this.props.item.url)
    .then(res => res.json())
    .then(data => {
      this.setState((state) => ({
        pokemonUrl: data.sprites.front_shiny
      }))
    })
  }

  

  render() {
    return (
      <div className="col-xs-12 col-sm-6 col-md-4">
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h4 className="card-title">{this.props.item.name}</h4>
          <img src={this.state.pokemonUrl} alt={this.props.item.name} />
        </div>
      </div>
      </div>
    );
  }
}

const cardStyle = {
    marginBottom: '10px'
  }