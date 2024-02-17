import Col from 'react-bootstrap/Col';

export default function LookForCard({
  title,
  description,
  imgSrc
}) {
  return (
    <Col md={4}>
      <div className="center-horizontal">
        <img
          src={imgSrc}
          alt={title}
          className="thumbnail"
        />
        <h5>
          {title}
        </h5>
        <p className="light">
          {description}
        </p>
      </div>
    </Col>
  );
}