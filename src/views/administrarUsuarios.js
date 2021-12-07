import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col, 
  Dropdown
} from "react-bootstrap";

function administrarUsuarios() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Lista de Usuarios</Card.Title>
                <p className="card-category">
                  Todos los usuarios registrados en el sistema.
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">#</th>
                      <th className="border-0">Nombre</th>
                      <th className="border-0">Identificación</th>
                      <th className="border-0">Rol</th>
                      <th className="border-0">Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Dakota Rice</td>
                      <td>123456789</td>
                      <td>Inventario</td>
                      <td>
                      <Dropdown as={Nav.Item}>
                            <Dropdown.Toggle aria-expanded={false} aria-haspopup={true}
                              as={Nav.Link} data-toggle="dropdown" id="navbarDropdownMenuLink"
                              variant="default" className="m-0">
                              <span className="no-icon">Seleccionar</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu aria-labelledby="navbarDropdownMenuLink">
                              <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                Eliminar
                              </Dropdown.Item>
                              <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                Editar
                              </Dropdown.Item>
                              <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                Deshabilitar
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Minerva Hooper</td>
                      <td>987654321</td>
                      <td>Producción</td>
                      <td>
                      <Dropdown as={Nav.Item}>
                            <Dropdown.Toggle aria-expanded={false} aria-haspopup={true}
                              as={Nav.Link} data-toggle="dropdown" id="navbarDropdownMenuLink"
                              variant="default" className="m-0">
                              <span className="no-icon">Seleccionar</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu aria-labelledby="navbarDropdownMenuLink">
                              <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                Eliminar
                              </Dropdown.Item>
                              <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                Editar
                              </Dropdown.Item>
                              <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                Deshabilitar
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Sage Rodriguez</td>
                      <td>789654456</td>
                      <td>Producción</td>
                      <td>
                      <Dropdown as={Nav.Item}>
                            <Dropdown.Toggle aria-expanded={false} aria-haspopup={true}
                              as={Nav.Link} data-toggle="dropdown" id="navbarDropdownMenuLink"
                              variant="default" className="m-0">
                              <span className="no-icon">Seleccionar</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu aria-labelledby="navbarDropdownMenuLink">
                              <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                Eliminar
                              </Dropdown.Item>
                              <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                Editar
                              </Dropdown.Item>
                              <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                Deshabilitar
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Philip Chaney</td>
                      <td>321123852</td>
                      <td>Inventario</td>
                      <td>
                      <Dropdown as={Nav.Item}>
                            <Dropdown.Toggle aria-expanded={false} aria-haspopup={true}
                              as={Nav.Link} data-toggle="dropdown" id="navbarDropdownMenuLink"
                              variant="default" className="m-0">
                              <span className="no-icon">Seleccionar</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu aria-labelledby="navbarDropdownMenuLink">
                              <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                Eliminar
                              </Dropdown.Item>
                              <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                Editar
                              </Dropdown.Item>
                              <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                Deshabilitar
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Doris Greene</td>
                      <td>147852369</td>
                      <td>Inventario</td>
                      <td>
                      <Dropdown as={Nav.Item}>
                            <Dropdown.Toggle aria-expanded={false} aria-haspopup={true}
                              as={Nav.Link} data-toggle="dropdown" id="navbarDropdownMenuLink"
                              variant="default" className="m-0">
                              <span className="no-icon">Seleccionar</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu aria-labelledby="navbarDropdownMenuLink">
                              <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                Eliminar
                              </Dropdown.Item>
                              <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                Editar
                              </Dropdown.Item>
                              <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                Deshabilitar
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Mason Porter</td>
                      <td>369258147</td>
                      <td>Inventario</td>
                      <td>
                      <Dropdown as={Nav.Item}>
                            <Dropdown.Toggle aria-expanded={false} aria-haspopup={true}
                              as={Nav.Link} data-toggle="dropdown" id="navbarDropdownMenuLink"
                              variant="default" className="m-0">
                              <span className="no-icon">Seleccionar</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu aria-labelledby="navbarDropdownMenuLink">
                              <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                Eliminar
                              </Dropdown.Item>
                              <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                Editar
                              </Dropdown.Item>
                              <Dropdown.Item href="#pablo" onClick={(e) => e.preventDefault()}>
                                Deshabilitar
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default administrarUsuarios;
