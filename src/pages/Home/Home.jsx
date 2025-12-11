import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const Home = () => {

  return (
      <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="shadow-lg">
            <Card.Body>
              <Card.Title className="text-center mb-4">
                Clima en 
              </Card.Title>

              {/* {weather ? (
                <>
                  <h4>🌡️ {weather.main.temp} °C</h4>
                  <p>☁️ {weather.weather[0].description}</p>
                  <p>💨 Viento: {weather.wind.speed} km/h</p>
                </>
              ) : (
                <p>Cargando...</p>
              )} */}

              <Form className="mt-3">
                <Form.Group>
                  <Form.Control
                    type="text"
                    // value={city}
                    // onChange={(e) => setCity(e.target.value)}
                    placeholder="Buscar ciudad"
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  className="mt-3 w-100"
                  // onClick={() => setCity(city)}
                >
                  Buscar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
);
}

export default Home;