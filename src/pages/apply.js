import React from 'react';
import Particles from 'react-particles-js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ApplicationCard from '../components/apply/ApplicationCard.jsx';
import LookForCard from '../components/apply/LookForCard.jsx';

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
      <Particles
        params={ParticleJSConfig}
        canvasClassName="particlejs"
      />
      {/* Jumbotron */}
      <div className="bg-gradient">
        {/* Navbar */}
        <Navbar />
        <Container className="pg-jumbotron center">
          <div
            className="center"
            style={{ flexDirection: 'column'}}
          >
            <h1 className="pg-heading">
              Join Our Amazing Team!
            </h1>
            <p className="pg-heading">
              BUILD is on the lookout for passionate and talented individuals who are eager to make a difference in our community. Are you interested in applying what you have been learning in class to real-world projects in a dynamic team environment? If so, consider applying!
            </p>
          </div>
        </Container>
      </div>
      {/* Body */}
      <Container className="mt-5">
        <div id="Roles">
          <Row>
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
            className="my-3"
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

        <div className="mt-5">
          <Row>
            <h1>
              What We Look For
            </h1>
          </Row>

          <Row
            className="center mt-5"
            style={{ gap: '40px' }}
          >
            { lookingFor.map((weLookFor, index) => (
              <LookForCard
                title={weLookFor.title}
                description={weLookFor.description}
                imgSrc={weLookFor.img}
                key={index}
              />
            ))}
          </Row>
        </div>

        <div className="margin4">
          <Row className="margin-bottom4">
            <Col>
              <h1>
                Frequently Asked Questions
              </h1>
            </Col>
          </Row>
          <div className="left-margin">

            { faqs.map(({ question, answer }, index) => (
              <div key={index} className="margin-bottom4">
                <Row>
                  <h6>
                    {question}
                  </h6>
                </Row>
                <Row>
                  <p>
                    {answer}
                  </p>
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
