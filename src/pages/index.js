import React from 'react';
import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CompanyLogos from '../components/CompanyLogos';
import { contactFormLink } from '../content/nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faUser,
  faBook,
  faLaptopCode,
  faCode,
} from '@fortawesome/free-solid-svg-icons';

// Render
export default function Index() {
  return (
    <div>
      <div className="sq-bg">
        {/* Landing Jumbotron */}
        <Container className="pg-jumbotron center">
          <Row className="padding1">
            <Col>
              <div>
                <Row>
                  <Col>
                    <h1 className="pg-heading center">
                      Building a better world with technology
                    </h1>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p className="pg-heading center">
                      We are a group of students committed to provide
                      non-profits, startups and local businesses with scalable
                      technological solutions through pro-bono consulting
                      engagements.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <Col className="center">
                    <Button
                      className="link-btn"
                      variant="light"
                      onClick={() => {
                        window.open(
                          contactFormLink,
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
      <div>
        <Container>
          {/* About */}
          <div className="margin1">
            <Row>
              <Col sm={8}>
                <div>
                  <Row>
                    <Col>
                      <h1>About Us</h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p className="desc">
                        BUILD strives to make technology easy to use and
                        convenient for those who create communities and promote
                        public welfare.
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Link href="/about">
                        <div className="inline-link">
                          Learn more <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col>
                <div className="center">
                  <img
                    className="illust mt-5 mt-sm-0 mb-0"
                    src="/img/illustrations/about.svg"
                    alt="About Illustration"
                  />
                </div>
              </Col>
            </Row>
          </div>
          {/* Our Work */}
          <div className="margin2">
            <Row>
              <Col sm={8}>
                <div>
                  <Row>
                    <Col>
                      <h1>Our Work</h1>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p className="desc">
                        Each semester, our teams work with various organizations
                        and build cutting-edge solutions for a vast array of
                        problems. The projects we focus on can range from
                        Full-Stack Web Development to Software Development.
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Link href="/services">
                        <div className="inline-link">
                          Learn more <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                      </Link>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col>
                <div className="center">
                  <img className="illust mt-5 mt-sm-0 mb-0" src="/img/illustrations/services.svg" alt="Services" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      {/* Some Fun Facts */}
      <div className="diagonal">
        <div className="diagonal-contents center">
          <Container className="padding2">
            <Row>
              <Col>
                <h1 className="stats-title">Some fun facts</h1>
              </Col>
            </Row>
            <Row className="mt-4 mt-lg-2 gap-3">
              <Col>
                <div>
                  <Row>
                    <Col>
                      <FontAwesomeIcon icon={faUser} className="stats-icon" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p className="stats-number">70+</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p className="stats-base">Students</p>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col>
                <div>
                  <Row>
                    <Col>
                      <FontAwesomeIcon icon={faBook} className="stats-icon" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p className="stats-number">6+</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p className="stats-base">Majors</p>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col>
                <div>
                  <Row>
                    <Col>
                      <FontAwesomeIcon
                        icon={faLaptopCode}
                        className="stats-icon"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p className="stats-number">30+</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p className="stats-base">Projects</p>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col>
                <div>
                  <Row>
                    <Col>
                      <FontAwesomeIcon icon={faCode} className="stats-icon" />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p className="stats-number">100,000+</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p className="stats-base">Lines of Code</p>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Container>
        {/* Get Involved */}
        <div className="margin1">
          <Row>
            <Col>
              <h1>Get Involved</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="desc">
                BUILD is a fantastic way to apply your knowledge gained from
                class to impact lives. We work in small teams to build
                technological solutions for nonprofits and local businesses. We
                are looking forward to the growth of BUILD as more people get
                involved. We have applications for business and project
                developers at the beginning of each semester.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link href="/apply">
                <div className="inline-link">
                  Learn more <FontAwesomeIcon icon={faChevronRight} />
                </div>
              </Link>
            </Col>
          </Row>
        </div>
        {/* Where we go */}
        <div className="margin2">
          <Row>
            <Col>
              <h1>Where we go</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className="desc">
                Our members are brilliant students and professionals who
                end up working for the best companies in the industry.
              </p>
            </Col>
          </Row>
          <Row className="center">
            <CompanyLogos />
          </Row>
        </div>
      </Container>
    </div>
  );
}