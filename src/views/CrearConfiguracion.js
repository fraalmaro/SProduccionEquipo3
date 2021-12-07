import React from "react";


// react-bootstrap components
import { Badge, Button, Card, Form, Navbar, Nav, Container, Row, Col, Dropdown
} from "react-bootstrap";

function CrearConfiguracion() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Nueva Configuracion de Producto</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-2" md="6">
                      <Form.Group>
                        <label>ID</label>
                        <Form.Control
                          defaultValue="0001"
                          disabled
                          placeholder="ID producto"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-3" md="6">
                      <Form.Group>
                        <label>Nombre del producto</label>
                        <Form.Control
                          defaultValue="michael23"
                          placeholder="Username"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-3" md="12">
                      <Form.Group>
                        <label>Materias Primas:</label>
                        <Dropdown as={Nav.Item}>
                            <Dropdown.Toggle aria-expanded={false} aria-haspopup={true}
                              as={Nav.Link} data-toggle="dropdown" id="navbarDropdownMenuLink"
                              variant="default" className="m-0">
                              <span className="no-icon">Seleccionar</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu aria-labelledby="navbarDropdownMenuLink">
                              <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                Materia Prima 1
                              </Dropdown.Item>
                              <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                Materia Prima 2
                              </Dropdown.Item>
                              <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                Materia Prima 3
                              </Dropdown.Item>
                              <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                Materia Prima 4
                              </Dropdown.Item>
                              <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                Materia Prima 5
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                      </Form.Group>
                    </Col>
                    
                  </Row>
                  <Row>
                    <Col className="pr-3" md="6" align="center">
                      <Button className="btn-fill pull-rigth" type="submit" variant="info">
                        Agregar
                      </Button>
                    </Col>
                    <Col className="pr-3" md="6" align="center">
                      <Button className="btn-fill pull-right " type="submit" variant="info">
                        Guardar
                      </Button>
                    </Col>
                  </Row>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card bg-primary text-white mb-4">
              <div className="card-body">
                Materia Prima seleccionada
              </div>
              <Card.Body>
                <div className="author">
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-3.jpg").default}
                    ></img>
                    Datos de la materia prima y su icono
                  <hr></hr>
                  <div className="button-container mr-auto ml-auto">
                  
                  <Button className="btn-fill btn-danger" type="submit" variant="info">
                      Eliminar
                  </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card className="card bg-warning text-white mb-4">
              <div className="card-body">
                Materia Prima seleccionada
              </div>
              <Card.Body>
                <div className="author">
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-3.jpg").default}
                    ></img>
                    Datos de la materia prima y su icono
                  <hr></hr>
                  <div className="button-container mr-auto ml-auto">
                  
                  <Button className="btn-fill btn-danger" type="submit" variant="info">
                      Eliminar
                  </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Card className="card bg-success text-white mb-4">
              <div className="card-body">
                Materia Prima seleccionada
              </div>
              <Card.Body>
                <div className="author">
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-3.jpg").default}
                    ></img>
                    Datos de la materia prima y su icono
                  <hr></hr>
                  <div className="button-container mr-auto ml-auto">
                  
                  <Button className="btn-fill btn-danger" type="submit" variant="info">
                      Eliminar
                  </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default CrearConfiguracion;
