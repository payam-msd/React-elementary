import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import base from '../base';

import sampleFishes from '../sample-fishes'; // ?  carry our list of food
import Fish from './Fish';

//! <ATTENTION> :
//* Function related to the state will place in the exact page that target state is. in General every thing that is related to state is in this page
class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  componentDidMount() {
    const { params } = this.props.match;
    //* these are FIREBASE config and sync data
    // ? the bottom line shows the current DATA route
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes',
    });
  }

  //* need some clean up after changing the store name
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

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

  addToOrder = key => {
    // 1. take a copy from order in state
    const order = { ...this.state.order };
    // 2. Either add order OR update the number in our order
    order[key] = order[key] + 1 || 1;
    // 3. assign it to the set state
    this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh SeaFood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              // ?  in order react to be fast we should assign a unique key to the object so the Key property is for react and usually when we query a list it has a unique key but now we need unique key so the key itself is unique
              <Fish
                key={key}
                index={key} // ? index carry our key here so the point is that we couldn't use the key ={key} in Fish page so here is new key to use
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          addSampleFishes={this.addSampleFishes}
        />
      </div>
    );
  }
}
export default App;
