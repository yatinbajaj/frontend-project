import { Row, Col, Nav, NavItem, NavLink } from "reactstrap";
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <Row className="align-items-center justify-content-center">
        <Col xl="6">
          <div className="copyright text-center">
            © {new Date().getFullYear()}{" "}
            <a
              className="font-weight-bold ml-1"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              Question Paper Generator
            </a>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
