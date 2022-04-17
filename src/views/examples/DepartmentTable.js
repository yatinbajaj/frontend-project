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
const DepartmentTable = () => {
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Department Table</h3>
              </CardHeader>
              <Table className="align-items-center table-dark table-flush"
                responsive>
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Department Code</th>
                    <th scope="col">Department Name</th>
                    <th scope="col">Department Short Name</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="row">
                     CA101
                    </td>
                    <td>Computer Application</td>
                    <td>
                      CA
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

export default DepartmentTable