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
  const [questions, setQuestions] = useState([]);
  const ctx = useContext(FetchContext);
  const authAxios = ctx.authAxios;
  const history = useHistory();

  useEffect(() => {
    authAxios.get('/question')
      .then(res => {
        if (res.status === 200 || res.status === 201) {
          setQuestions(res?.data?.questions);
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
                <h3 className="mb-0">Question Table</h3>
              </CardHeader>
              <Table className="align-items-center table-dark table-flush"
                responsive>
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">Question</th>
                    <th scope="col">Marks</th>
                    <th scope="col">Unit Id</th>
                    <th scope="col">Subject Id</th>
                  </tr>
                </thead>
                <tbody>
                  {questions.length > 0 && questions.map((question) => {
                    return (
                      <>
                        <tr>
                          <td scope='row'>{question.question}</td>
                          <td scope='row'>{question.marks}</td>
                          <td scope='row'>{question.unitId}</td>
                          <td scope='row'>{question.subjectId}</td>
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