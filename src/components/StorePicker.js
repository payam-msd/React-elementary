import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // One Of The Ways To Reach The Input Is To Use Reference Method.First Call The CreateRef(); Then Create A Constructor And bind() The Acutal Function To itSelf With Binding (this).Don't Forget to add "ref" attribute To Input.

  // constructor() {
  //   super() will Run Component Fist.necessary for every constructor
  //   super();
  //   this.show = this.show.bind(this);
  // }

  // show() {
  //   console.log(this);
  // }

  // The Second Way which is the easiest way is to turn your function to Arrow-Function.like so:

  myInput = React.createRef();

  goToStore = e => {
    // prevent default action
    e.preventDefault();
    // grab the input value
    // const theInput = this.myInput.value.value;
    const myValue = this.myInput.current.value;
    // push to the demand page
    this.props.history.push(`/store/${myValue}`);
  };

  render() {
    return (
      <React.Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <p>PLEASE ENTER A STORE </p>
          <input
            type="text"
            ref={this.myInput}
            placeholder="StoreName"
            defaultValue={getFunName()}
            required
          />
          <button type="submit">Visit Store</button>
        </form>
      </React.Fragment>
    );
  }
}
export default StorePicker;
