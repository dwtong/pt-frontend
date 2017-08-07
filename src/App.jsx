import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import './App.css';
import Navigation from './components/Navigation';
import OrderForm from './components/OrderForm';

class App extends Component {
  render() {
    const styles = {
      container: {
        marginTop: '1rem',
        marginLeft: '1.5rem',
        width: '93%'
      },
      navigation: {
        width: '15%'
      },
      row: {
        paddingTop: '1rem'
      }
    };

    return (
      <div>
        <Container style={styles.container}>
          <Row style={styles.row}>
            <Col style={styles.navigation} xs="3">
              <Navigation />
            </Col>
            <Col style={styles.content} xs="9">
              <OrderForm />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
