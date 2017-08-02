import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

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

  handleQuantityFocus(event) {
    event.target.select();
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

    const styles = {
      formGroup: {
        paddingRight: '1rem'
      },
      label: {
        paddingRight: '0.5rem'
      }
    };

    return(
      <div>
        <Form inline onSubmit={this.handleSubmit}>
          <FormGroup style={styles.formGroup} >
            <Input type="select" name="selectedOption" value={selectedOption} onChange={this.handleInputChange}>
              <option default>Choose {label}...</option>
              {options.map(option => <option key={option.id} value={option.id}>{option.name}</option>)}
            </Input>
          </FormGroup>

          <FormGroup style={styles.formGroup} >
            <Label style={styles.label}>Quantity</Label>
            <Input name="quantity" type="number" value={quantity} onFocus={this.handleQuantityFocus} onChange={this.handleInputChange} />
          </FormGroup>
          <FormGroup style={styles.formGroup} >
            <Button outline color="success">Add Item</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default AddNewItem;
