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
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import FetchContext from "context/FetchContext";
import AuthContext from "context/AuthContext";
import { publicFetch } from "util/publicFetch";

const Login = () => {
  const initialValue = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValue)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false);

  const ctx = useContext(FetchContext);
  const authAxios = ctx.authAxios;
  const authCtx = useContext(AuthContext);
  const { setAuthInfo } = authCtx;
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }



  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("hello")
    setFormErrors(validate(formValues))
    setIsSubmit(true)
  }

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues)
    }
    publicFetch.post('/login', {
      ...formValues
    })
      .then(res => {

      })
      .catch((err) => console.log(err));
  })

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if (!values.email) {
      errors.email = "Email is required"
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email"
    }

    if (!values.password) {
      errors.password = "Password is required"
    }

    return errors
  }
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5 text-center">
            <FontAwesomeIcon style={{ fontSize: "5rem", color: "#5E71E4" }} icon={faCircleUser} className="user-icon m-auto mb-3" />
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
                    placeholder="Email"
                    type="text"
                    value={formValues.email}
                    onChange={handleChange}
                    name="email"
                    className="p-2"
                  />
                </InputGroup>
                <small className="text-danger">{formErrors.email}</small>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    value={formValues.password}
                    onChange={handleChange}
                    name="password"
                    className="p-2"
                  />
                </InputGroup>
                <small className="text-danger">{formErrors.password}</small>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button className="my-4" color="primary" type="submit">
                  Sign in
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
              <small>Forgot password?</small>
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

export default Login;
