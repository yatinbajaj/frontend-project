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
  const [courses, setCourses] = useState([]);
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
  
  useEffect(() => {
    authAxios.get('/admin/course')
      .then(res => {
        if (res.status === 200 || res.status === 201) {
          console.log(res?.data);
          setCourses(res?.data?.courses);
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
                <h3 className="mb-0">Course Table</h3>
              </CardHeader>
              <Table className="align-items-center table-dark table-flush"
                responsive>
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Course Code</th>
                    <th scope="col">Course Name</th>
                    <th scope="col">Department Id</th>
                    <th scope="col" />
                  </tr>

                </thead>
                <tbody>
                  {courses.length > 0 && courses.map((course) => {
                    return (
                      <>
                        <tr>
                          <td scope='row'>{course.courseCode}</td>
                          <td scope='row'>{course.courseName}</td>
                          <td scope='row'>{course.deptId}</td>
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