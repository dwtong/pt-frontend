import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';

import Card from 'components/Card';
import Section from 'components/Section';

class OrderItems extends Component {
  constructor(props) {
    super(props);
  }


  render () {
    const styles = {
      listGroupItem: {
        borderRadius: 0
      },
      row: {
        border: '1px solid lightgray',
        marginLeft: 0,
        marginRight: '0.3rem',
        minHeight: '600px'
      },
      col: {
        marginLeft: 0,
        paddingLeft: 0,
        borderRight: '1px solid lightgrey',
        paddingRight: 0
      }
    };

    return (
      <div>
        <Section title="Order Items">
          <Row style={styles.row}>
            <Col xs={3} style={styles.col} >
              <ListGroup>
                <Card active={this.props.selectedItem === -1} onClick={() => this.props.onItemClick(-1)}>
                  <strong>New Item</strong>
                </Card>
                {this.props.items && this.props.items.map(item => this.renderItem(item))}
              </ListGroup>
            </Col>

            <Col xs={9}>
              {this.props.children}
            </Col>
          </Row>
        </Section>
      </div>
    );
  }

  renderItem(item) {
    return (
      <Card active={item.id === this.props.selectedItem} onClick={() => this.props.onItemClick(item.id)}>
        <div><strong>{`${item.size} ${item.binding}`}</strong><br/>
        Quantity: {item.quantity}</div>
      </Card>
    );
  };
};

export default OrderItems;
