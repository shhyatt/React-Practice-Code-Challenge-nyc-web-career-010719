import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: []
  }

  fetchSushis = () => {
    fetch(API)
    .then(r => r.json())
    .then(data => {
      console.log(data);
      this.setState({
        sushis: data
      })
    })
  }



  componentDidMount = () => {
    this.fetchSushis()
  }

  render() {
    console.log(this.state.sushis);
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushis}  />
        <Table sushis={this.state.sushis} />
      </div>
    );
  }
}

export default App;
