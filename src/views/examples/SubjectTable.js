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
  const [subjects, setSubjects] = useState([]);
  const ctx = useContext(FetchContext);
  const authAxios = ctx.authAxios;
  const history = useHistory();
  
    
  useEffect(() => {
    authAxios.get('/admin/subject')
      .then(res => {
        if (res.status === 200 || res.status === 201) {
          console.log(res?.data);
          setSubjects(res?.data?.subjects);
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
                <h3 className="mb-0">Subject Table</h3>
              </CardHeader>
              <Table className="align-items-center table-dark table-flush"
                responsive>
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Subject Code</th>
                    <th scope="col">Subject Name</th>
                    <th scope="col">Course Id</th>
                    <th scope="col">Department Id</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                {subjects.length > 0 && subjects.map((subject) => {
                  return (
                    <>
                      <tr>
                        <td scope='row'>{subject.subjectCode}</td>
                        <td scope='row'>{subject.subjectName}</td>
                        <td scope='row'>{subject.courseId}</td>
                        <td scope='row'>{subject.deptId}</td>
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