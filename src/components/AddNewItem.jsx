import React, { Component } from 'react';
import { Button } from 'reactstrap';

class AddNewItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: '',
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
    if (this.state.selectedOption && this.state.quantity > 0) {
      this.props.addItem({ selection: this.state.selectedOption, quantity: this.state.quantity });
      this.setState({ selectedOption: '', quantity: 0 });
    } else {
      // TODO: error messages
    }
  }

  render() {
    const { label, options } = this.props;
    const { selectedOption, quantity } = this.state;

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>{label}</label>
          <select name="selectedOption" value={selectedOption} onChange={this.handleInputChange}>
            <option default>Select an option...</option>
            {options.map(option => <option key={option.id} value={option.id}>{option.name}</option>)}
          </select>
          <label> Quantity </label>
          <input name="quantity" type="number" value={quantity} onChange={this.handleInputChange} />
          <Button outline color="success">Add Item</Button>
        </form>
      </div>
    );
  }
}

export default AddNewItem;
