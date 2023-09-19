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
        <div className="padding2" id="Roles">
          <Row className="margin-bottom4">
            <Col>
              <h1>Roles at BUILD</h1>
              <p>*Fall 2023 application has been closed. We appreciate everyone for applying! Please look out for us in the spring semester!</p>
            </Col>
          </Row>
          <Row className="center">
            <Col md={4}>
              <Card body>
                <Card.Title className="mb-3"><h4>Software Developer</h4></Card.Title>
                <Card.Text>
                  Works closely with a team of developers to make the product vision a reality.
                  You'll collaborate on code, review team members' work, and translate
                  client objectives into a usable product. Taking ownership of specific product
                  features, software engineers ensure smooth feature integration and deliver
                  exceptional solutions.
                </Card.Text>
                <div className="center">
                  <div
                    className="apply-btn"
                    onClick={() => {
                      window.open('https://forms.gle/WxHqBnCKyVMdTAcJ7');
                    }}
                  >
                    <div>
                      <span>Apply</span>
                      <span>Apply</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md={4} className="mt-4 mt-md-0">
              <Card body>
                <Card.Title className="mp-3"><h4>Product Manager</h4></Card.Title>
                <Card.Text>
                  Identifies client needs and larger business objectives that a product
                  or feature will fulfill, articulates what success looks like for the product,
                  and rallies a team to turn that vision into a reality by working with the
                  Project Lead to plan and introduce new features, establish timelines, and
                  manage client relations.
                  <br />
                  &nbsp;
                </Card.Text>
                <div className="center">
                  <div
                    className="apply-btn"
                    onClick={() => {
                      window.open('https://forms.gle/XicoFnRMEUkTr6CHA');
                    }}
                  >
                    <div>
                      <span>Apply</span>
                      <span>Apply</span>
                    </div>
                  </div>
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
                <h5>Teamwork</h5>
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
                <h5>Passion</h5>
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
                <h5>Growth</h5>
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
