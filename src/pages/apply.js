import React from 'react';
import Particles from 'react-particles-js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ApplicationCard from '../components/apply/ApplicationCard.jsx';
import LookForCard from '../components/apply/LookForCard.jsx';

import { content } from '../content/apply';
import { useBreakpoint } from '../hooks/useBreakpoint';

import ParticleJSConfig from '../styles/particlejs_config.json';

export default function apply() {

  const APPLICATIONS_OPEN = false;
  const { roles, lookingFor, faqs } = content;
  const { xs } = useBreakpoint();
  const jumbotronHeightPx = 500;

  return (
    <div>
      <Particles
        params={ParticleJSConfig}
        style={{ position: 'absolute', maxHeight: `${jumbotronHeightPx}px` }}
      />

      {/* Jumbotron */}
      <div className="bg-gradient">
        <div className="center" style={{ height: `${jumbotronHeightPx}px` }}>
          <div
            className="center p-4"
            style={{ flexDirection: 'column', maxWidth: '800px' }}
          >
            <h1 className="pg-heading">
              Join Our Amazing Team!
            </h1>
            <p className="pg-heading">
              BUILD is on the lookout for passionate and talented individuals who are eager to make a difference in our community. Are you interested in applying what you have been learning in class to real-world projects in a dynamic team environment? If so, consider applying!
            </p>
          </div>
        </div>
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
              flexDirection: xs ? 'column' : 'row',
              gap: '20px',
            }}
          >
            {roles.map((role, index) => (
              <div
                style={{
                  minHeight: '170px',
                  width: xs ? '100%' : '50%',
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
            <Col>
              <h1>
                What We Look For
              </h1>
            </Col>
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

        <div className="my-5">
          <Row>
            <Col>
              <h1 className="mb-3">
                Frequently Asked Questions
              </h1>
            </Col>
          </Row>
          <div>
            { faqs.map(({ question, answer }) => (
              <Col
                key={question}
                className="my-2"
              >
                <Row>
                  <h6>
                    {question}
                  </h6>
                </Row>
                <Row>
                  <p style={{ maxWidth: '900px' }}>
                    {answer}
                  </p>
                </Row>
              </Col>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
