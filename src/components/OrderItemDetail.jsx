import React from 'react';
import PropTypes from 'prop-types';

const OrderItemDetail = ({item}) => {
  const styles = {
    container: {
      paddingTop: '1rem'
    }
  };


  return (
    <div style={styles.container}>
      <h2>**Name of Order Item**</h2>
      <p>OrderItemDetail</p>
    </div>

  );
};

OrderItemDetail.propTypes = {
  item: PropTypes.object.isRequired
};

export default OrderItemDetail;
