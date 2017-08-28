import React from 'react';
import PropTypes from 'prop-types';

const NewOrderItem = ({item}) => {
  const styles = {
    container: {
      paddingTop: '1rem'
    }
  };


  return (
    <div style={styles.container}>
      <h2>**New Item**</h2>
      <p>NewOrderItem</p>
    </div>

  );
};

NewOrderItem.propTypes = {

};

export default NewOrderItem;
