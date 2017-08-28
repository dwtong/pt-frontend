import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'reactstrap';

const Card = ({children, active, onClick}) => {
  const styles = {
    listGroupItem: {
      borderRadius: 0,
      cursor: 'pointer',
    }
  };

  return (
    <a onClick={onClick}>
      <ListGroupItem action active={active} style={styles.listGroupItem}>
        {children}
      </ListGroupItem>
    </a>
  );
};

Card.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.object,
  onClick: PropTypes.func,
};

export default Card;
