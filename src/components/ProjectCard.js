import React, { useRef, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ProjectModal from './ProjectModal';

export default function ProjectCard({ projectData }) {
  const textRef = useRef();
  const [overflow, setOverflow] = useState(false);
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    // Show read more button when the content overflows the card
    setOverflow(textRef.current.scrollHeight > textRef.current.offsetHeight);
  }, [projectData.description]);

  return (
    <Card className="project-card">
      <Card.Img variant="top" src={projectData.image_url.length !== 0 ? projectData.image_url : "./img/square-pattern.svg"} />
      <Card.Body>
        <Card.Title as="h5">{projectData.title}</Card.Title>
        {/* If there's no tech lead, consider the team empty */}
        {projectData.tech_lead.length !== 0 &&
          <Card.Subtitle>
            {1 + projectData.sdes.length + projectData.bizdevs.length} members
          </Card.Subtitle>
        }
        <Card.Text ref={textRef}>
          <span>{projectData.description}</span>
        </Card.Text>
        <span className="read-more" onClick={() => setReadMore(true)}>{overflow && "Read More"}</span>
      </Card.Body>
      <ProjectModal show={readMore} onHide={() => setReadMore(false)} projectData={projectData} />
    </Card>
  );
}