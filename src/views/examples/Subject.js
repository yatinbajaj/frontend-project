import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
} from "reactstrap";
import { useState, useEffect, useContext } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import FetchContext from "context/FetchContext";
import { useHistory } from 'react-router-dom'

const Subject = () => {
    const initialValue = { subjectCode: "", subjectName: "", deptId: "", courseId: "" };
    const [formValues, setFormValues] = useState(initialValue)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [departments, setDepartments] = useState([]);
    const [courses, setCourses] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }
    const ctx = useContext(FetchContext);
    const authAxios = ctx.authAxios;
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(formValues))
        setIsSubmit(true)
    }

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

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues)
            authAxios.post('/admin/subject', {
                ...formValues
            })
                .then(res => {
                    if (res.status === 200 || res.status === 201) {
                        console.log(res?.data);
                        history.push('/admin/index');
                    } else if (res.status > 400) {
    
                    }
                })
                .catch((err) => console.log(err));
        }
    },[formErrors,isSubmit])

    const validate = (values) => {
        const errors = {}
        if (!values.subjectCode) {
            errors.subjectCode = "Subject code is required"
        }

        if (!values.subjectName) {
            errors.subjectName = "Subject name is required"
        }

        if (!values.deptId) {
            errors.deptId = "Department is required"
        }

        if (!values.courseId) {
            errors.courseId = "Course is required"
        }

        return errors
    }
    return (
        <>
            <Col lg="7" md="7">
                <Card className="bg-secondary shadow border-0">
                    <CardHeader className="bg-transparent pb-5 text-center">
                        <FontAwesomeIcon style={{ fontSize: "5rem", color: "#5E71E4" }} icon={faBook} className="user-icon m-auto mb-3" />
                    </CardHeader>
                    <CardBody className="px-lg-5 py-lg-5">
                        <Form role="form" onSubmit={handleSubmit}>
                            <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-email-83" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Subject code"
                                        type="text"
                                        value={formValues.subjectCode}
                                        onChange={handleChange}
                                        name="subjectCode"
                                        className="p-2"
                                    />
                                </InputGroup>
                                <small className="text-danger">{formErrors.subjectCode}</small>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-lock-circle-open" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Subject Name"
                                        type="text"
                                        value={formValues.subjectName}
                                        onChange={handleChange}
                                        name="subjectName"
                                        className="p-2"
                                    />
                                </InputGroup>
                                <small className="text-danger">{formErrors.subjectName}</small>
                            </FormGroup>

                            <FormGroup>
                                <Input type="select" name="courseId" onChange={handleChange} value={formValues.courseId}>
                                <option value="">Select Course</option>
                                {console.log(courses.length > 0)}
                                {courses.length > 0
                                    &&
                                    courses.map(course => {
                                        return (
                                            <option value={course._id} key={course._id}>{course.courseName}</option>
                                        )
                                    })
                                }
                                </Input>
                                <small className="text-danger">{formErrors.courseId}</small>
                            </FormGroup>
                            <FormGroup>
                                <Input type="select" name="deptId" onChange={handleChange} value={formValues.deptId}>
                                <option value="">Select department</option>
                                {console.log(departments.length > 0)}
                                {departments.length > 0
                                    &&
                                    departments.map(department => {
                                        return (
                                            <option value={department._id} key={department._id}>{department.deptFullName}</option>
                                        )
                                    })
                                }
                                </Input>
                                <small className="text-danger">{formErrors.deptId}</small>
                            </FormGroup>

                            <div className="text-center">
                                <Button className="my-4 w-50 mx-auto" color="primary" type="submit">
                                    Create Course
                                </Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
                <Row className="mt-3">
                    <Col xs="6">
                        <a
                            className="text-light"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                        </a>
                    </Col>
                    <Col className="text-right" xs="6">
                        <a
                            className="text-light"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                        </a>
                    </Col>
                </Row>
            </Col>
        </>
    );
};

export default Subject;
