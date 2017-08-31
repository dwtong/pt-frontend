import React from 'react';
import PropTypes from 'prop-types';
import NumberField from 'components/NumberField';
import { Button, Table } from 'reactstrap';

const OrderItemDetail = ({item, removeItem}) => {
  const styles = {
    container: {
      paddingTop: '1rem'
    },
    button: {
      cursor: 'pointer',
      marginBottom: '1rem'
    }
  };

  return (
    <div style={styles.container}>
      <h3>Summary</h3>
      <Button outline style={styles.button} color="danger" onClick={() => removeItem(item.id)}>Remove Item</Button>
      <Table>
        <tr>
          <td>Item</td>
          <td>{item.size} {item.binding}</td>
        </tr>
        <tr>
          <td>Quantity</td>
          <td>{item.quantity}</td>
        </tr>
        <tr>
          <td></td>
          <td></td>
        </tr>
      </Table>
      <h3>Paper Allocation</h3>
    </div>
  );
};

OrderItemDetail.propTypes = {
  item: PropTypes.object.isRequired,
  removeItem: PropTypes.func.isRequired
};

export default OrderItemDetail;
