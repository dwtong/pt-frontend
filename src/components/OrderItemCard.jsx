import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'reactstrap';
import Card from 'components/Card';

const OrderItemCard = ({item}) => {
  const styles = {

    }

  return (
    <Card active={item.isSelected === true}>
      <p><strong>{`${item.size} ${item.binding}`}</strong></p>
      <p>Quantity: {item.quantity}</p>
    </Card>
  );
};

OrderItemCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default OrderItemCard;
