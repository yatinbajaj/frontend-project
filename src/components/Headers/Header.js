import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

const Header = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <a href="/admin/department-table">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row className="align-items-center justify-content-center">
                      <div className="col">
                        <CardTitle
                          tag="h3"
                          className="text-uppercase mb-0"
                        >
                          Departments
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                        <i class="fa-solid fa-building-user"></i>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                </a>
              </Col>
              <Col lg="6" xl="3">
                <a href="/admin/courses-table">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row className="align-items-center justify-content-center">
                      <div className="col">
                        <CardTitle
                          tag="h3"
                          className="text-uppercase mb-0"
                        >
                          Courses
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                        <i class="fa-solid fa-book-open-reader"></i>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                </a>
              </Col>
              <Col lg="6" xl="3">
                <a href="/admin/subject-table">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row className="align-items-center justify-content-center">
                      <div className="col">
                        <CardTitle
                          tag="h3"
                          className="text-uppercase mb-0"
                        >
                          Subjects
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                        <i class="fa-solid fa-book"></i>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                </a>
              </Col>
              <Col lg="6" xl="3">
                <a href="/admin/units-table">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row className="align-items-center justify-content-center">
                      <div className="col">
                        <CardTitle
                          tag="h3"
                          className="text-uppercase mb-0"
                        >
                          Units
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                </a>
              </Col>
              <Col lg="6" xl="3">
                <a href="/admin/questions-table">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row className="align-items-center justify-content-center">
                      <div className="col">
                        <CardTitle
                          tag="h3"
                          className="text-uppercase mb-0"
                        >
                          Questions
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                </a>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
