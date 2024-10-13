import React from 'react';
import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import JumbotronHeader from '../components/JumbotronHeader.jsx';
import { contactFormLink } from '../content/nav.js';

export default function about() {

  const title = "Gain Real-World Experience By Helping Others";

  const subtitle = "BUILD provides a venue for students to gain academic and practical knowledge about software development, web development, and tech consulting. We are BUILDING our community through the pro-bono services we offer to nonprofits, startups, and local businesses.";

  const nilayLinkedIn = "https://www.linkedin.com/in/nilay18/";
  const mattLinkedIn = "https://www.linkedin.com/in/matthewpearce/";

  const YEARS_SINCE_BUILDS_INCEPTION = new Date().getFullYear() - 2019;

  return (
    <div>
      <div className="about-bg">
        <div className="bg-gradient-transparent">
          <JumbotronHeader
            title={title}
            subtitle={subtitle}
            actions={
              <Link href="/apply">
                <Button
                  variant="light"
                  className="link-btn"
                >
                  Join Us
                </Button>
              </Link>
            }
          />
        </div>
      </div>
      <Container>
        <div
          className="py-5"
          id="Mission"
        >
          <Row>
            <Col>
              <h1>
                Mission
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                We leverage technology for the social good. By pairing passionate and driven UMass students with charities and non-profit organizations, we not only engineer software that does good, but foster the talents of the next generation of computer scientists dedicated to making the world a better place.
              </p>
            </Col>
          </Row>
        </div>

        <div
          className="pb-5"
          id="Story"
        >
          <Row>
            <Col>
              <h1>
                Our Story
              </h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                {YEARS_SINCE_BUILDS_INCEPTION} years ago CS students <a href={nilayLinkedIn} target="_blank">Nilay Sadavarte</a> and <a href={mattLinkedIn} target="_blank">Matt Pearce</a> had an idea. They wanted to use their skills to help the community. They wanted to make a difference. They wanted to BUILD! And so, BUILD UMass was born. Since its inception, BUILD has had an impact on dozens of non-profits, charities, and student groups, while helping hundreds of students gain real-world experience in software development, product management, and consulting. We are proud of our accomplishments, but are always looking to do more. If you are an organization that could benefit from the services we provide, we would love to <a href={contactFormLink} target="_blank">hear from you</a>. If you are a student looking to gain real-world experience, we would love for you to be a part of the next chapter of our story.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}