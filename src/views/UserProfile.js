import React from "react";


// react-bootstrap components
import { Badge, Button, Card, Form, Navbar, Nav, Container, Row, Col, Dropdown, Modal
} from "react-bootstrap";

function User() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edición de Usuario</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Compañia</label>
                        <Form.Control
                          defaultValue="Postobón"
                          disabled
                          placeholder="Postobón"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Nombre de Usuario</label>
                        <Form.Control
                          defaultValue="michael23"
                          placeholder="Username"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label htmlFor="exampleInputEmail1">
                          Email
                        </label>
                        <Form.Control
                          placeholder="Email"
                          type="email"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Nombres</label>
                        <Form.Control
                          defaultValue="Mike"
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                      <Form.Group>
                        <label>Apellidos</label>
                        <Form.Control
                          defaultValue="Andrew"
                          placeholder="Last Name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Dirección</label>
                        <Form.Control
                          defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                          placeholder="Home Address"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <Form.Group>
                        <label>Ciudad</label>
                        <Form.Control
                          defaultValue="Mike"
                          placeholder="City"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="4">
                      <Form.Group>
                        <label>Pais</label>
                        <Form.Control
                          defaultValue="Andrew"
                          placeholder="Country"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pl-1" md="4">
                      <Form.Group>
                        <label>Codigo Postal</label>
                        <Form.Control
                          placeholder="ZIP Code"
                          type="number"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Form.Group>
                        <label>Rol</label>
                        
                        <Dropdown as={Nav.Item}>
                            <Dropdown.Toggle
                              aria-expanded={false}
                              aria-haspopup={true}
                              as={Nav.Link}
                              data-toggle="dropdown"
                              id="navbarDropdownMenuLink"
                              variant="default"
                              className="m-0"
                            >
                              <span className="no-icon">Usuario de Inventario</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu aria-labelledby="navbarDropdownMenuLink">
                              <Dropdown.Item
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Administrador
                              </Dropdown.Item>
                              <Dropdown.Item
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Usuario de Producción
                              </Dropdown.Item>
                              
                            </Dropdown.Menu>
                          </Dropdown>

                      </Form.Group>
                    </Col>
                    </Row>
                    <Row>
              <Col className="text-center" md="12">
                <Button
                  className="btn-fill btn-wd"
                  variant="info"
                  onClick={() => setShowModal(true)}
                >
                  Guardar Datos
                </Button>
              </Col>
            </Row>
                          {/* Mini Modal */}
        <Modal
          className="modal-mini modal-primary"
          show={showModal}
          onHide={() => setShowModal(false)}
        >
          <Modal.Header className="justify-content-center">
            <div className="modal-profile">
              <i className="nc-icon nc-bulb-63"></i>
            </div>
          </Modal.Header>
          <Modal.Body className="text-center">
            <p>¿Desea guardar los cambios realizados?</p>
          </Modal.Body>
          <div className="modal-footer">
            <Button
              className="btn-simple"
              type="button"
              variant="link"
              onClick={() => setShowModal(false)}
            >
              Atras
            </Button>
            <Button
              className="btn-simple"
              type="button"
              variant="link"
              onClick={() => setShowModal(false)}
            >
              Guardar
            </Button>
          </div>
        </Modal>
        {/* End Modal */}




                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card className="card-user">
              <div className="card-image">
                <img
                  alt="..."
                  src={
                    require("assets/img/photo-1431578500526-4d9613015464.jpeg")
                      .default
                  }
                ></img>
              </div>
              <Card.Body>
                <div className="author">
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={require("assets/img/faces/face-3.jpg").default}
                    ></img>
                  <hr></hr>
                  <div className="button-container mr-auto ml-auto">
                  
                  <Button className="btn-fill pull-right" type="submit" variant="info">
                      Cambiar foto
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

export default User;
