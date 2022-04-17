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
                <h3 className="mb-0">Unit Table</h3>
              </CardHeader>
              <Table className="align-items-center table-dark table-flush"
                responsive>
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Unit Code</th>
                    <th scope="col">Unit Name</th>
                    <th scope="col">Subject Id</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">
                     UI101
                    </td>
                    <td>Python</td>
                    <td>
                      1
                    </td>
                    <td>
                      subject id here
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