import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  addFish = fish => {
    //  1. Take  copy of existing state
    const fishes = { ...this.state.fishes };
    // 2. Add our new fishes to older one
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the New fishes to state
    this.setState({ fishes });
  };

  addSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh SeaFood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              // in order react to be fast we should assign a unique key to the object so the Key property is for react and usually when we query a list it has a unique key but now we need unique key so the key itself is unique
              <Fish key={key} details={this.state.fishes[key]} />
            ))}
          </ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          addSampleFishes={this.addSampleFishes}
        />
      </div>
    );
  }
}
export default App;
