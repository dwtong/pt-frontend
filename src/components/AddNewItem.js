import React, { Component } from 'react';

class AddNewItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: 0,
      quantity: 0,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addItem({ item: this.state.selectedOption, quantity: this.state.quantity });
    this.setState({ selectedOption: 0, quantity: 0 });
  }

  render() {
    const { label, options } = this.props;
    const { selectedOption, quantity } = this.state;

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>{label}</label>
          <select name="selectedOption" value={selectedOption} onChange={this.handleInputChange}>
            {options.map(option => <option key={option.id} value={option.id}>{option.name}</option>)}
          </select>
          <label> Quantity </label>
          <input name="quantity" type="number" value={quantity} onChange={this.handleInputChange} />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default AddNewItem;
