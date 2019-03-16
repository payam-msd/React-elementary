import React from 'react';

class AddFishForm extends React.Component {
  nameRef = React.createRef();

  priceRef = React.createRef();

  statusRef = React.createRef();

  descRef = React.createRef();

  imageRef = React.createRef();

  createFish = e => {
    // stop the from from submitting
    e.preventDefault();
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };
    this.props.addFish(fish);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input name="name" type="text" placeholder="Name" ref={this.nameRef} />
        <input
          name="price"
          type="Number"
          placeholder="Price"
          ref={this.priceRef}
        />
        <select type="status" ref={this.statusRef}>
          <option value="available">Fresh!!</option>
          <option value="unavailable">sold out</option>
        </select>
        <textarea
          name="desc"
          type="text"
          placeholder="Desc"
          ref={this.descRef}
        />
        <input
          name="image"
          type="text"
          placeholder="Image"
          ref={this.imageRef}
        />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}
export default AddFishForm;
