import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function JumbotronHeader({ title, subtitle, actions }) {
  return (
    <div
      style={{
        height: '500px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          width: '90%'
        }}
      >
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
      </div>
    </div>
  );
}