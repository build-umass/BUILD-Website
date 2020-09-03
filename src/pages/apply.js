import React from 'react';
import Particles from 'react-particles-js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import ParticleJSConfig from '../styles/particlejs_config.json';

export default function apply() {
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
                      Joining BUILD is a fantastic way to give back to the
                      community! You will get the opportunity to work in teams
                      on a wide array of problems and use concepts they learn in
                      class in real-world situations. You will also be able to
                      extend your knowledge by learning more about different
                      tools and platforms used across the industry.
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
        <div className="padding2">
          <Row className="margin-bottom4">
            <Col>
              <h1>Roles at BUILD</h1>
            </Col>
          </Row>
          <Row className="center">
            <Col sm={4}>
              <Card body className="margin-bottom3">
                <h5>Software Developer</h5>
                <p>
                  Work in small teams to build software for small organizations
                  that don’t have the resources to do so themselves. Developers
                  have a wide range of experience and interest. Get the chance
                  to learn and teach others.
                </p>
                <div className="center">
                  <Button
                    className="color"
                    onClick={() => {
                      window.open('https://forms.gle/ir9tJrAyXSbNcp9Z7');
                    }}
                  >
                    Apply
                  </Button>
                </div>
              </Card>
            </Col>
            <Col sm={4}>
              <Card body className="margin-bottom3">
                <h5>Business Developer</h5>
                <p>
                  Communicates with clients and the software team to deliver a
                  product that suits the needs of the client. Developers bring
                  in perspective of companies and clients and proactively engage
                  in project acquisitions.
                </p>
                <div className="center">
                  <Button
                    className="color"
                    onClick={() => {
                      window.open('https://forms.gle/UcSPQj4DCxCiUSY77');
                    }}
                  >
                    Apply
                  </Button>
                </div>
              </Card>
            </Col>
            {/* <Col sm={4}>
              <Card body className="margin-bottom3">
                <h5>Designers</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Porta nibh venenatis cras sed felis eget. Vivamus at augue
                  eget arcu.
                </p>
                <div className="center">
                  <Button className="color">Applications Closed</Button>
                </div>
              </Card>
            </Col> */}
          </Row>
        </div>
        <div className="margin5">
          <Row className="margin-bottom4">
            <Col>
              <h1>What we look for</h1>
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
                <h6>Teamwork</h6>
                <p className="light">
                  Do you display the ability to work well in a team?
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
                <h6>Passion</h6>
                <p className="light">
                  Do you demonstrate a genuine passion for social good?
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
                <h6>Growth</h6>
                <p className="light">
                  Do you push yourself to grow in any setting? Do you seek out
                  new ways to grow?
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
                <h6>Culture</h6>
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
                    We expect developers to put in from 2-4 hours of work a
                    week. We take it easy during exam weeks.
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
                    BUILD is a pro-bono organization and this club is dedicated
                    to community work.
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
                    BUILD is open to all years and all majors. We do expect
                    software developers to have succeeded in CS187.
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
                    We have a general google form to fill out and if you are
                    accepted for an interview we will be doing a behavioral and
                    technical interview through Zoom.
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
