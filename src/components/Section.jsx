import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  heading: {
    textTransform: 'uppercase',
    fontSize: '1rem',
    color: 'darkgray',
    fontWeight: '400',
    marginBottom: '1rem',
  },
  section: {
    background: 'white',
    marginBottom: '1rem',
    marginTop: '1.5rem',
    padding: '1.5rem',
    borderRadius: '2px',
    boxShadow: '0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)'
  }
};

const Section = ({title, children}) => {
  return (
    <div style={styles.section}>
      <h3 style={styles.heading}>{title}</h3>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object
};

export default Section;
