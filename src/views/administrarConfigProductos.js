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

function administrarConfigProductos() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Configuraciones de Productos</Card.Title>
                <p className="card-category">
                  cada Producto consta de 2 a 5 diferentes materias primas. Esta seleccion de materias primas se le llama configuracion de producto
                </p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">#</th>
                      <th className="border-0">Codigo</th>
                      <th className="border-0">Nombre Producto</th>
                      <th className="border-0">Materias Primas</th>
                      <th className="border-0">Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>1234</td>
                      <td>UvaPersonal</td>
                      <td>Materia 1, Materia 5, Materia 2....</td>
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
                            </Dropdown.Menu>
                          </Dropdown>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>4321</td>
                      <td>NaranjaPersonal</td>
                      <td>Materia 3, Materia 5, Materia 2....</td>
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
                            </Dropdown.Menu>
                          </Dropdown>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>9876</td>
                      <td>Manzana 1.2L</td>
                      <td>Materia 9, Materia 4, Materia 2....</td>
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
                            </Dropdown.Menu>
                          </Dropdown>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>6543</td>
                      <td>Naranja 3.5L</td>
                      <td>Materia 1, Materia 2, Materia 8....</td>
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
                            </Dropdown.Menu>
                          </Dropdown>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>8523</td>
                      <td>LimonPersonal</td>
                      <td>Materia 6, Materia 3, Materia 2....</td>
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
                            </Dropdown.Menu>
                          </Dropdown>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>4321</td>
                      <td>FrutosRojosPersonal</td>
                      <td>Materia 10, Materia 1, Materia 2....</td>
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

export default administrarConfigProductos;
