// import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function services() {
  return (
    <div>
      <div
        style={{
          paddingTop: '70px',
          paddingBottom: '70px'
        }}
        className="bg-gradient"
      >
        {/* Landing Jumbotron */}
        <Container className="center">
          <Row className="py-5 align-items-center">
            <Col sm={5}>
              <img className="illust" src="/img/hello-world.gif" alt="Hello World" />
            </Col>
            <Col className="mt-1 mt-sm-0">
              <div>
                <Row>
                  <Col>
                    <h1 className="pg-heading center">
                      Technology for Social Good
                    </h1>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="pg-heading center">
                      As a partner, BUILD UMass will collaborate with you to
                      develop technology that turns your vision into a reality.
                      Completely free of charge!
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="center">
                    <Button
                      variant="light"
                      className="link-btn"
                      onClick={() => {
                        // window.open('/contact', '_self');
                        window.open(
                          'https://forms.gle/uuA2s98v4oC4o8TU7',
                          '_blank'
                        );
                      }}
                    >
                      Get in touch!
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        {/* Services */}
        <div className="margin3">
          <Row>
            <Col>
              <h1>Services</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Our members consist of vast range of STEM and Business majors
                who each have a unique skill set. We all share one goal which is
                to make a difference in the community through technology. Our
                primary services can be divided in the following categories,
                however, are not limited to them.
              </p>
            </Col>
          </Row>
        </div>
        {/* Types */}
        <Container>
          {/* Software Development */}
          <div className="margin3" id="Software">
            <Row>
              <Col className="center-vertical">
                <div className="center">
                  <img
                    className="illust"
                    src="/img/illustrations/software-dev.svg"
                    alt="Software Dev"
                  />
                </div>
              </Col>
              <Col sm={9} className="center-vertical">
                <div>
                  <Row>
                    <Col>
                      <h2>Software Development</h2>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        Cutting edge software is often key to the success of any
                        organizations and can help optimize several tasks. Our
                        developers and consultants will study your operations
                        and find out the bottlenecks that can be resolved by
                        some sort of automation. We will then work with you to
                        create a custom-built software system that will
                        significantly improve your operations effectively and
                        efficiently
                      </p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
          {/* Web Development */}
          <div className="margin3" id="Web">
            <Row>
              <Col className="center-vertical">
                <div className="center">
                  <img className="illust" src="/img/illustrations/web-dev.svg" alt="Web Dev" />
                </div>
              </Col>
              <Col sm={9} className="center-vertical">
                <div>
                  <Row>
                    <Col>
                      <h2>Web Development</h2>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        Having an online presence is essential to today’s
                        society. At BUILD, we would love to work with you to
                        make sure your online presence is strong. We can improve
                        your existing website with a modern facelift or create a
                        new blog from scratch to help you build an online
                        community of supporters. Additionally, BUILD can improve
                        operations by implementing better internal communication
                        tools.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
          {/* Tech Consulting & Data Analytics */}
          <div className="margin3" id="Consulting">
            <Row className="center-vertical">
              <Col>
                <div className="center">
                  <img className="illust" src="/img/illustrations/data.svg" alt="Data" />
                </div>
              </Col>
              <Col sm={9}>
                <div>
                  <Row>
                    <Col>
                      <h2>Tech Consulting & Data Analytics</h2>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>
                        Consultants at BUILD are well versed with modern day
                        technologies and have a deep understanding of their
                        merits and demerits. We can assist you in choosing the
                        optimal technologies and services to ensure your
                        business runs smoothly.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
      {/* Not find anything */}
      <div className="margin4">
        <div className="top-curve" />
        <div className="bg-gradient">
          <Container className="padding3">
            <Row className="center">
              <Col sm={4}>
                <img className="illust" src="/img/illustrations/questions.svg" alt="Questions" />
              </Col>
              <Col>
                <div>
                  <Row>
                    <Col>
                      <h1 className="pg-heading center">
                        Can’t Find What You’re Looking For?
                      </h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p className="pg-heading center">
                        Get in touch with us anyway and we’ll try our best to
                        accomodate any of your requests!
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="center">
                      <Button
                        variant="light"
                        className="link-btn"
                        onClick={() => {
                          // window.open('/contact', '_self');
                          window.open(
                            'https://forms.gle/uuA2s98v4oC4o8TU7',
                            '_blank'
                          );
                        }}
                      >
                        Get in touch!
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="bottom-curve" />
      </div>
      {/* Process */}
      <Container className="margin-bottom">
        <div>
          <h2>How it works</h2>
          <p>
            We can generalize what our process is in our service in four phases-
          </p>
        </div>
        <div className="left-margin">
          <div className="margin5">
            <h3>Phase 1</h3>
            <h5 className="dark-text">Project Discussion</h5>
            <p>
              We will work with your organization to understand the project in
              great depth and scope out the minimum viable product (MVP). Once
              we agree on the MVP, the project lead will write up a statement of
              work to be shared with the nonprofit.
            </p>
          </div>
          <div className="margin5">
            <h3>Phase 2</h3>
            <h5 className="dark-text">
              Building the Minimum Viable Product (MVP)
            </h5>
            <p>
              After the statement of work passes, our developers work in teams
              and start building the minimum viable product (MVP) and share
              their progress with the clients regularly for feedback. Once, the
              MVP is ready, it is shared with the clients for a thorough
              inspection and review following which it enters user testing.
            </p>
          </div>
          <div className="margin5">
            <h3>Phase 3</h3>
            <h5 className="dark-text">User Testing</h5>
            <p>
              Once the MVP is ready, we add various analytics plugins and survey
              tools and then distribute the MVP among a wide array of audiences
              for testing. In the meanwhile, the developers continue building
              additional functionality and also resolve bugs as they arise.
            </p>
          </div>
          <div className="margin5">
            <h3>Phase 4</h3>
            <h5 className="dark-text">Product Polish & Hand-off</h5>
            <p>
              At the end of the user testing phase, the team makes their final
              tweaks and fixes any issues that may arise during user testing.
              They then hand-off the project to the clients and if needed help
              them configure it.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}