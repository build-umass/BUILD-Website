import React, { useRef, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ProjectModal from './ProjectModal';

export default function ProjectCard({ projectData }) {
  const textRef = useRef();
  const [readMore, setReadMore] = useState(false);

  // Counting the member
  const projectLeadCount = projectData.project_lead.length !== 0 ? 1 : 0;
  const sdesCount = projectData.sdes.length;
  const productManagersCount = projectData.product_managers.length;
  const membersCount = projectLeadCount + sdesCount + productManagersCount;

  return (
    <Card className="project-card">
      <Card.Img variant="top" src={projectData.image_url.length !== 0 ? projectData.image_url : "./img/square-pattern.svg"} />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title as="h5">{projectData.title}</Card.Title>
          {/* If there's no member, consider the team empty */}
          {membersCount !== 0 && <Card.Subtitle>{membersCount} members</Card.Subtitle>}
          <Card.Text ref={textRef} className={projectData.title.length > 14 ? "three-lines" : "four-lines"}>
            <span>{projectData.description}</span>
          </Card.Text>
        </div>
        <span className="read-more" onClick={() => setReadMore(true)}>{"Read More"}</span>
      </Card.Body>
      <ProjectModal show={readMore} onHide={() => setReadMore(false)} projectData={projectData} />
    </Card>
  );
}