import React from 'react';
import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const about = () => {
  return (
    <div>
      <div className="about-bg">
        <div className="bg-gradient-transparent">
          {/* Navbar */}
          <Navbar />
          {/* Landing Jumbotron */}
          <Container className="center padding4">
            <Row className="padding1">
              <Col>
                <div>
                  <Row>
                    <Col>
                      <h1 className="pg-heading center">
                        Gain real-world experience by helping others
                      </h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p className="pg-heading center">
                        BUILD provides a venue for students to gain academic and
                        practical knowledge about software development, web
                        development, and tech consulting. We are BUILDING our
                        community through the pro-bono services we offer to
                        nonprofits, startups, and local businesses.
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="center">
                      <Link href="/apply">
                        <Button
                          variant="light"
                          className="link-btn"
                        >
                          Join Us!
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Container>
        {/* Mission */}
        <div className="margin3" id="Mission">
          <Row>
            <Col>
              <h1>Mission</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                We aim to help our members develop technical and professional
                skills necessary to succeed in competitive fields. We work
                directly with companies to solve real-world problems, which
                allows students to develop critical communication skills and
                improve their problem-solving abilities. Additionally, talks and
                workshops from faculty, corporate speakers, and recruiters
                provide industry insights and opportunities to enhance technical
                skills.
              </p>
            </Col>
          </Row>
        </div>
        {/* Our Story */}
        <div className="margin4" id="Story">
          <Row>
            <Col>
              <h1>Our Story</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                We were founded on the philosophy that UMass students possess
                valuable skills that can greatly benefit the community. By
                establishing professional relationships between the community
                and students, organizations in the community will benefit from
                the latest technologies while providing students extensive
                real-world experience.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
      {/* Interested in joining */}
      <div>
        <div className="top-curve" />
        <div className="bg-gradient">
          <Container>
            <Row className="center">
              <Col sm={4}>
                <img
                  className="illust"
                  src="/img/illustrations/people-chatting.svg"
                  alt="People chatting"
                />
              </Col>
              <Col>
                <div>
                  <Row>
                    <Col>
                      <h1 className="pg-heading center">
                        Interested in joining us?
                      </h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p className="pg-heading center">
                        We have applications for various positions that open at
                        the start of each semester. Upon completion, we will
                        contact you for an interview. If you are not sure which
                        position is best for you, apply to all positions!
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="center">
                      <Link href="/apply">
                        <Button variant="light" className="link-btn">
                          Apply!
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="bottom-curve" />
      </div>
      {/* Meet the Team */}
      <Container className="margin-bottom5">
        {/* <Row className="center margin3">
          <Col>
            <h1>Meet the team</h1>
          </Col>
        </Row>
        <Row className="center">
          <Col sm={3}>
            <MemberCard />
          </Col>
          <Col sm={3}>
            <MemberCard />
          </Col>
          <Col sm={3}>
            <MemberCard />
          </Col>
          <Col sm={3}>
            <MemberCard />
          </Col>
          <Col sm={3}>
            <MemberCard />
          </Col>
          <Col sm={3}>
            <MemberCard />
          </Col>
          <Col sm={3}>
            <MemberCard />
          </Col>
        </Row> */}
      </Container>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default about;
