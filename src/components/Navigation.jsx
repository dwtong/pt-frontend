import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

const styles = {
  logo: {
    marginBottom: '1rem',
    color: '#f26522'
  },
  navLink: {
    padding: '0.2rem 0'
  },
  navSection: {
    marginTop: '2rem',
    marginBottom: '0.5rem',
    textTransform: 'uppercase',
    color: 'darkgray'
  }
};

const Navigation = () => {
  return (
    <div>
      <h2 style={styles.logo}>Paper Tracker</h2>

      <p style={styles.navSection}>Orders</p>
      <Nav vertical>
        <NavItem>
          <NavLink style={styles.navLink} href="#">New Order</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={styles.navLink} href="#">Active Orders</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={styles.navLink} href="#">Completed Orders</NavLink>
        </NavItem>
      </Nav>

      <p style={styles.navSection}>Customers</p>
      <Nav vertical>
        <NavItem>
          <NavLink style={styles.navLink} href="#">New Customer</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={styles.navLink} href="#">Existing Customers</NavLink>
        </NavItem>
      </Nav>

      <p style={styles.navSection}>Paper</p>
      <Nav vertical>
        <NavItem>
          <NavLink style={styles.navLink} href="#">Inventory</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={styles.navLink} href="#">New Collection</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={styles.navLink} href="#">Past Collections</NavLink>
        </NavItem>
      </Nav>
    </div>

  );
};

export default Navigation;
