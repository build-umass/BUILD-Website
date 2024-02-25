import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function JumbotronHeader({ title, subtitle, actions }) {
  return (
    <Container className="center">
      <Row>
        <Col>
          <Row>
            <Col>
              <h1 className="pg-heading center">
                {title}
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="pg-heading center">
                {subtitle}
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="center">
              {actions}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}