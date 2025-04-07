import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import ProjectCard from '../components/ProjectCard';
import projectDatabase from '../data/projects.json';

export default function projects() {
  return (
    <div>
      {/* Jumbotron */}
      <div className="bg-gradient">
        <Container className="pg-jumbotron center">
          <Row className="padding1">
            <Col>
              <div>
                <Row>
                  <Col>
                    <h1 className="pg-heading center">
                      Take a look at our works!
                    </h1>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="pg-heading center">
                      Explore the innovative projects our student teams
                      have completed in the past three years with BUILD.
                      From cutting-edge software development to web design,
                      we have partnered with nonprofits, startups, and local businesses
                      to make a positive impact on our society.
                      Please enjoy your time here!
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Body */}
      <div className="scroll-btns">
        {
          projectDatabase.map((projectList) => (
            <Button variant="light" className="year-btn" size="lg" href={`#${projectList.year}`} key={`projectyearbutton-${projectList.year}`}>
              {projectList.year}
            </Button>
          ))
        }
      </div>
      <Container fluid="xl">
        {
          projectDatabase.map((projectList) => (
            <div id={`${projectList.year}`} className="margin3 center-column" key={`projectyear-${projectList.year}`}>
              <h2 className="year-title margin-bottom3">{projectList.year}</h2>
              <Row>
                {
                  projectList.projects.map((project) => (
                    <Col xs={12} sm={6} md={6} lg={4} key={`project-${project.title}`} className="mb-4">
                      <ProjectCard projectData={project} />
                    </Col>
                  ))
                }
              </Row>
            </div>
          ))
        }
      </Container>
    </div>
  )
}