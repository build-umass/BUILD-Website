import React from 'react';
import Particles from 'react-particles-js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ApplicationCard from '../components/ApplicationCard.jsx';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import { content } from '../content/apply';
import { useBreakpoint, Breakpoint } from '../hooks/useBreakpoint';

import ParticleJSConfig from '../styles/particlejs_config.json';

export default function apply() {

  const APPLICATIONS_OPEN = false;
  const { roles, lookingFor, faqs } = content;
  const currBreakpoint = useBreakpoint();

  return (
    <div>
      <Particles params={ParticleJSConfig} canvasClassName="particlejs" />
      {/* Jumbotron */}
      <div className="bg-gradient">
        {/* Navbar */}
        <Navbar />
        <Container className="pg-jumbotron center">
          <Row className="padding1">
            <Col>
              <div>
                <Row>
                  <Col>
                    <h1 className="pg-heading center">
                      Join our amazing team!
                    </h1>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="pg-heading center">
                      BUILD is on the lookout for passionate and talented individuals who are eager to make a difference in our community. Are you interested in applying what you have been learning in class to real-world projects in a dynamic team environment? If so, consider applying!
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Body */}
      <Container className="margin5">
        <div className="padding2" id="Roles">
          <Row className="margin-bottom4">
            <Col>
              <h1>
                Roles at BUILD
              </h1>
              <p>
                The application window for spring 2024 has closed. Please check back in the fall for more opportunities to join our team.
              </p>
            </Col>
          </Row>
          <div
            style={{
              display: 'flex',
              flexDirection: currBreakpoint === Breakpoint.xs ? 'column' : 'row',
              gap: currBreakpoint === Breakpoint.xs ? '5px' : '20px',
            }}
          >
            { roles.map((role, index) => (
                <div
                  style={{
                    minHeight: APPLICATIONS_OPEN ? '250px' : '200px',
                    width: currBreakpoint === Breakpoint.xs ? '100%' : '50%',
                  }}
                  key={index}
                >
                  <ApplicationCard
                    title={role.title}
                    description={role.description}
                    applicationLink={role.applicationLink}
                    applicationOpen={APPLICATIONS_OPEN}
                  />
                </div>
            ))}
          </div>
        </div>

        <div className="margin5">

          <Row className="margin-bottom4">
            <Col>
              <h1>
                What we look for
              </h1>
            </Col>
          </Row>

          <Row
            className="center"
            style={{
              gap: '40px',
              marginTop: '50px'
            }}
          >
            { lookingFor.map((weLookFor, index) => (
                <Col md={4} key={index}>
                  <div className="center-horizontal">
                    <img
                      src={weLookFor.img}
                      className="thumbnail"
                      alt={weLookFor.title}
                    />
                    <h5>{weLookFor.title}</h5>
                    <p className="light">
                      {weLookFor.description}
                    </p>
                  </div>
                </Col>
            ))}
          </Row>
        </div>

        <div className="margin4">
          <Row className="margin-bottom4">
            <Col>
              <h1>Frequently Asked Questions</h1>
            </Col>
          </Row>
          <div className="left-margin">

            { faqs.map(({ question, answer }, index) => (
              <div key={index} className="margin-bottom4">
                <Row>
                  <Col>
                    <h6>
                      {question}
                    </h6>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>
                      {answer}
                    </p>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
