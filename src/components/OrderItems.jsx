import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import NewOrderItem from 'components/NewOrderItem';
import OrderItemCard from 'components/OrderItemCard';
import OrderItemDetail from 'components/OrderItemDetail';
import Card from 'components/Card';
import Section from 'components/Section';

class OrderItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: -1
    }

    this.setSelectedItem = this.setSelectedItem.bind(this)
  }

  setSelectedItem(id) {
    this.setState({selectedItem: parseInt(id, 10)})
  }

  render () {
    const styles = {
      listGroupItem: {
        borderRadius: 0
      },
      row: {
        border: '1px solid lightgray',
        marginLeft: 0,
        marginRight: '0.3rem'
      },
      col: {
        marginLeft: 0,
        paddingLeft: 0
      }
    };

    return (
      <div>
        <Section title="Order Items">
          <Row style={styles.row}>
            <Col xs={3} style={styles.col} >
              <ListGroup>
                <Card active={this.state.selectedItem === -1} onClick={() => this.setSelectedItem(-1)}>
                  <strong>New Item</strong>
                </Card>
                {this.props.items && this.props.items.map(item => this.renderItem(item))}
              </ListGroup>
            </Col>

            <Col xs={9}>

              {this.state.selectedItem === -1 ?
                <NewOrderItem />
              : <OrderItemDetail />}

            </Col>
          </Row>
        </Section>
      </div>
    );
  }

  renderItem(item) {
    return (
      <Card active={item.id === this.state.selectedItem} onClick={() => this.setSelectedItem(item.id)}>
        <p><strong>{`${item.size} ${item.binding}`}</strong></p>
        <p>Quantity: {item.quantity}</p>
      </Card>
    );
  };
};

export default OrderItems;
