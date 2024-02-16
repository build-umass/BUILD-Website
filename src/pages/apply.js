import React from 'react';
import Particles from 'react-particles-js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ApplicationCard from '../components/ApplicationCard.tsx';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import ParticleJSConfig from '../styles/particlejs_config.json';

export default function apply() {

  const APPLICATIONS_OPEN = false;

  const roles = [
    {
      title: 'Software Developer',
      description: 'Work alongside other developers in a team to design, implement, and review code for a product. Software engineers at BUILD ensure smooth feature integration and deliver exceptional solutions.',
      applicationLink: 'https://forms.gle/nZR43PcqQNQbgtCg8'
    },
    {
      title: 'Product Manager',
      description: 'Collaborate closely with clients to optimize their utilization of BUILD\'s services. Effectively convey client requirements to a team of developers. Product Managers at BUILD exhibit strong organizational and communication skills.',
      applicationLink: 'https://forms.gle/hjPdzXopGWTWJY4m8'
    }
  ]

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
          <Row>
            { roles.map((role, index) => (
                <Col key={index}>
                  <div style={{ height: APPLICATIONS_OPEN ? '250px' : '200px' }}>
                    <ApplicationCard
                      title={role.title}
                      description={role.description}
                      applicationLink={role.applicationLink}
                      applicationOpen={APPLICATIONS_OPEN}
                    />
                  </div>
                </Col>
            ))}
          </Row>
        </div>
        <div className="margin5">
          <Row className="margin-bottom4">
            <Col>
              <h1>
                What we look for
              </h1>
            </Col>
          </Row>
          <Row className="center margin-bottom5">
            <Col md={4} className="margin-lr">
              <div className="center-horizontal">
                <img
                  src="/img/illustrations/teamwork.svg"
                  className="thumbnail"
                  alt="Teamwork"
                />
                <h5>Teamwork</h5>
                <p className="light">
                  Are you a team player? Do you work well with others and value a collaborative environment?
                </p>
              </div>
            </Col>
            <Col md={4} className="margin-lr">
              <div className="center-horizontal">
                <img
                  src="/img/illustrations/passion.svg"
                  className="thumbnail"
                  alt="Passion"
                />
                <h5>Passion</h5>
                <p className="light">
                  Are you passionate about technology and its potential to make a positive impact?
                </p>
              </div>
            </Col>
          </Row>
          <Row className="center margin-bottom4">
            <Col md={4} className="margin-lr">
              <div className="center-horizontal">
                <img
                  src="/img/illustrations/growth.svg"
                  className="thumbnail"
                  alt="Growth"
                />
                <h5>Growth</h5>
                <p className="light">
                  Do you challenge yourself and actively explore opportunities for improvement?
                </p>
              </div>
            </Col>
            <Col md={4} className="margin-lr">
              <div className="center-horizontal">
                <img
                  src="/img/illustrations/culture.svg"
                  className="thumbnail"
                  alt="Culture"
                />
                <h5>Culture</h5>
                <p className="light">
                  Do you value empowering non-profits to achieve their missions
                  through tech?
                </p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="margin4">
          <Row className="margin-bottom4">
            <Col>
              <h1>Frequently Asked Questions</h1>
            </Col>
          </Row>
          <div className="left-margin">
            <div className="margin-bottom4">
              <Row>
                <Col>
                  <h6>How much of a time commitment is BUILD?</h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    We expect members to contribute a minimum of 2 hours per week. We take it easy during exam weeks.
                  </p>
                </Col>
              </Row>
            </div>
            <div className="margin-bottom4">
              <Row>
                <Col>
                  <h6>Do we get paid?</h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    BUILD provides students with an opportunity to volunteer their time and skills to make a difference by help non-profits in the community, therefore, we are unable to offer monetary compensation.
                  </p>
                </Col>
              </Row>
            </div>
            <div className="margin-bottom4">
              <Row>
                <Col>
                  <h6>How much experience do I need to join?</h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    BUILD is open to all years and majors. We do expect
                    software developers to be familiar with basic data structures and programming methodologies.
                  </p>
                </Col>
              </Row>
            </div>
            <div className="margin-bottom4">
              <Row>
                <Col>
                  <h6>What is the application process like?</h6>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    After filling out our application form, if selected for an interview, we'll reach out to schedule a single 40 minute virtual interview which will consist of a behavioral and technical portion.
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
