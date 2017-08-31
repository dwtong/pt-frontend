import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Col, Row } from 'reactstrap';
import NumberField from 'components/NumberField';
import OptionPicker from 'components/OptionPicker';

class NewOrderItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        binding: -1,
        size: -1,
        quantity: 0
      }
    }

    this.baseState = {...this.state};
    this.addItem = this.addItem.bind(this);
    this.addItemDetail = this.addItemDetail.bind(this);
  }

  render() {
    const { binding, size, quantity } = this.state.item;
    const { bindings, sizes } = this.props;

    const styles = {
      container: {
        paddingTop: '1rem'
      },
      button: {
        cursor: 'pointer',
      }
    };

    return (
      <div style={styles.container}>
        <h2>New Item</h2>
        <Row>
          <Col xs={6}>
            <OptionPicker
              label="Binding"
              name="binding"
              options={bindings}
              value={binding}
              onChange={(e) => this.addItemDetail('binding', e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <OptionPicker
              label="Size"
              options={sizes}
              value={size}
              onChange={(e) => this.addItemDetail('size', e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <NumberField
              label="Quantity"
              value={quantity}
              onChange={(e) => this.addItemDetail('quantity', parseInt(e.target.value, 10))}
            />
          </Col>
        </Row>
        <Button outline style={styles.button} color="success" onClick={this.addItem}>Add Item</Button>
      </div>
    );
  }

  addItemDetail(name, value) {
    this.setState({ item: { ...this.state.item, [name]: value } });
  }

  addItem(e) {
    const { item } = this.state;
    const { bindings, sizes, addItem } = this.props;
    const newItem = { ...item };

    newItem.binding = bindings.find(b => b.id === parseInt(item.binding, 10)).name;
    newItem.size = sizes.find(b => b.id === parseInt(item.size, 10)).name;
    addItem(newItem);
    this.setState(this.baseState);
  }
};

NewOrderItem.propTypes = {

};

export default NewOrderItem;
