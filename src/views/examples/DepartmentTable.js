import React from 'react'
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
} from "reactstrap";
import Header from 'components/Headers/Header';
import { useState, useEffect, useContext } from "react"
import FetchContext from "context/FetchContext";
import { useHistory } from 'react-router-dom'

const DepartmentTable = () => {
  const [departments, setDepartments] = useState([]);
  const ctx = useContext(FetchContext);
  const authAxios = ctx.authAxios;
  const history = useHistory();

  useEffect(() => {
    authAxios.get('/admin/department')
        .then(res => {
            if (res.status === 200 || res.status === 201) {
                console.log(res?.data);
                setDepartments(res?.data?.departments);
            } else if (res.status > 400) {

            }
        })
        .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="d-flex align-items-center justify-content-between border-0">
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
                  {departments.length > 0 && departments.map((department) => {
                  return (
                    <>
                      <tr>
                        <td scope='row'>{department.deptCode}</td>
                        <td scope='row'>{department.deptShortName}</td>
                        <td scope='row'>{department.deptFullName}</td>
                      </tr>
                    </>
                  )
                  })}
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