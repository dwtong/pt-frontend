import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

const styles = {
  background: {
    position: 'fixed',
    top: 0,
    left: 0,
    content: '',
    height: '100%',
    width: '20%',
    backgroundColor: '#f26522',
    zIndex: -999,
    boxShadow: 'rgba(63, 63, 68, 0.05) 0px 0px 0px 2px, rgba(63, 63, 68, 0.15) 0px 1px 3px 1px'
  },
  logo: {
    marginBottom: '2.6rem',
    paddingRight: '1rem',
    color: 'white'
  },
  navLink: {
    padding: '0.2rem 0',
    color: 'white'
  },
  navSection: {
    marginTop: '2rem',
    marginBottom: '0.5rem',
    textTransform: 'uppercase',
    color: '#494e50'
  }
};

const Navigation = () => {
  return (
    <div>
      <div style={styles.background} />
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
          <NavLink style={styles.navLink} href="#">Ecoloop</NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={styles.navLink} href="#">Offset</NavLink>
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
