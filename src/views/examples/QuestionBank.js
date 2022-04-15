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
import { useState, useEffect,useContext } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import FetchContext from "context/FetchContext";

const QuestionBank = () => {
    const initialValue = { question: "", unitId: "", marks: "", subjectId: "" };
    const [formValues, setFormValues] = useState(initialValue)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const ctx = useContext(FetchContext);
    const authAxios = ctx.authAxios;
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(formValues))
        setIsSubmit(true)
    }

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues)
        }
        authAxios.post('/question', {
            ...formValues
          })
            .then(res => {
    
            })
            .catch((err) => console.log(err));
    })

    const validate = (values) => {
        const errors = {}
        if (!values.question) {
            errors.question = "Question is required"
        }

        if (!values.unitId) {
            errors.unitId = "Unit id is required"
        }

        if(!values.marks) {
            errors.marks = "Mark is required"
        }

        if(!values.subjectId) {
            errors.subjectId = "Subject id is required"
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
                                        placeholder="Question"
                                        type="text"
                                        value={formValues.question}
                                        onChange={handleChange}
                                        name="question"
                                        className="p-2"
                                    />
                                </InputGroup>
                                <small className="text-danger">{formErrors.question}</small>
                            </FormGroup>
                            <FormGroup>
                                <Input type="select" name="unitId" onChange={handleChange} value={formValues.unitId}>
                                    <option value="">Select Unit</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Input>
                                <small className="text-danger">{formErrors.unitId}</small>
                            </FormGroup>

                            <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>
                                            <i className="ni ni-email-83" />
                                        </InputGroupText>
                                    </InputGroupAddon>
                                    <Input
                                        placeholder="Marks"
                                        type="text"
                                        value={formValues.marks}
                                        onChange={handleChange}
                                        name="marks"
                                        className="p-2"
                                    />
                                </InputGroup>
                                <small className="text-danger">{formErrors.marks}</small>
                            </FormGroup>

                            <FormGroup>
                                <Input type="select" name="subjectId" onChange={handleChange} value={formValues.subjectId}>
                                    <option value="">Select Subject</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Input>
                                <small className="text-danger">{formErrors.subjectId}</small>
                            </FormGroup>

                            <div className="text-center">
                                <Button className="my-4 w-50 mx-auto" color="primary" type="submit">
                                    Generate Question
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

export default QuestionBank;
