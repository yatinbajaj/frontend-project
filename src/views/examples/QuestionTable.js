import React from 'react'
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
import Header from 'components/Headers/Header';
const CourseTable = () => {
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Question Table</h3>
              </CardHeader>
              <Table className="align-items-center table-dark table-flush"
                responsive>
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Question</th>
                    <th scope="col">Unit Id</th>
                    <th scope="col">Marks</th>
                    <th scope="col">Subject Id</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">
                     dsjfl
                    </td>
                    <td>Python</td>
                    <td>
                      1
                    </td>
                    <td>
                      1
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default CourseTable