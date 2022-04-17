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

const CourseTable = () => {
  const [units, setUnits] = useState([]);
  const ctx = useContext(FetchContext);
  const authAxios = ctx.authAxios;
  const history = useHistory();

  useEffect(() => {
    authAxios.get('/unit')
      .then(res => {
        if (res.status === 200 || res.status === 201) {
          setUnits(res?.data?.units);
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
                  
                  {units.length > 0 && units.map((unit) => {
                    return (
                      <>
                        <tr>
                          <td scope='row'>{unit.unitCode}</td>
                          <td scope='row'>{unit.unitName}</td>
                          <td scope='row'>{unit.subjectId}</td>
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

export default CourseTable