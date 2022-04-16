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

const Register = () => {
  const initialValue = { userId: "", userName: "", email: "", password: "", isAdmin: false, department: "" };
  const [formValues, setFormValues] = useState(initialValue)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const fetchCtx = useContext(FetchContext);
  const authCtx = useContext(AuthContext);
  const { setAuthInfo } = authCtx;
  const {authAxios} = fetchCtx
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
      console.log(formValues);

      authAxios.post('/admin/user', {
        ...formValues
      })
        .then(res => {
          if (res.status === 200 || res.status === 201) {
            console.log(res?.data);
          } else if (res.status > 400) {

          }
        })
        .catch((err) => console.log(err));
    }
  },[formErrors,isSubmit])

  const validate = (values) => {
    const errors = {}
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if (!values.userId) {
      errors.userId = "User id is required"
    }
    if (!values.userName) {
      errors.userName = "User name is required"
    }
    if (!values.email) {
      errors.email = "Email is required"
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email"
    }

    if (!values.password) {
      errors.password = "Password is required"
    }

    if (!values.department) {
      errors.department = "Department is required"
    }

    return errors
  }
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5 text-center">
            <FontAwesomeIcon style={{ fontSize: "5rem", color: "#5E71E4" }} icon={faCircleUser} className="user-icon m-auto" />
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
            </div>
            <Form role="form" onSubmit={handleSubmit}>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="UserId"
                    type="text"
                    value={formValues.userId}
                    onChange={handleChange}
                    name="userId"
                    className="p-2"
                  />
                </InputGroup>
                <small className="text-danger">{formErrors.userId}</small>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="UserName"
                    type="text"
                    value={formValues.userName}
                    onChange={handleChange}
                    name="userName"
                    className="p-2"
                  />
                </InputGroup>
                <small className="text-danger">{formErrors.userName}</small>
              </FormGroup>
              <FormGroup>
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

              {/* <FormGroup>
                <Dropdown className="w-100" isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle caret className="w-100">Dropdown</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem disabled>Action (disabled)</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </FormGroup> */}
              <FormGroup>
                <Input type="select" name="department" id="exampleSelectMulti" onChange={handleChange} value={formValues.department}>
                  <option value="">Select department</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </Input>
                <small className="text-danger">{formErrors.department}</small>
              </FormGroup>
              <Row>
                <Col xs="12">
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="customCheckRegister"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheckRegister"
                    >
                      <span className="text-muted">
                        Is Admin
                      </span>
                    </label>
                  </div>
                </Col>
              </Row>
              <div className="text-center">
                <Button className="mt-4" color="primary" type="submit">
                  Create account
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;
