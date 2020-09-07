import React, { Component } from 'react';
import './App.css';
import MainContent from './MainContent'

class App extends Component {
  constructor() {
    super();
    this.state =
    {
      unoname: '',
      unosprite: '',
      dosname: '',
      dossprite: '',
    }
  }

  componentDidMount() {
    const pokeuno = Math.round(Math.random() * 450)
    const pokedos = Math.round(Math.random() * 450)
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeuno}`)
      .then(response => response.json())
      .then(poke => this.setState({ unoname: poke.name, unosprite: poke.sprites.front_default }))

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokedos}`)
      .then(response => response.json())
      .then(poke => this.setState({ dosname: poke.name, dossprite: poke.sprites.front_default }))
  }




  render() {
    const { unoname, unosprite, dosname, dossprite } = this.state
    return (
      <div>
        <MainContent pokeunoname={unoname} pokeunosprite={unosprite} pokedosname={dosname} pokedossprite={dossprite} />
      </div>
    );
  }
}

export default App;
