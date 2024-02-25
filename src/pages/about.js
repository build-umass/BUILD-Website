import React from 'react';
import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import JumbotronHeader from '../components/JumbotronHeader.jsx';

const about = () => {

  const title = "Gain Real-World Experience By Helping Others";
  const subtitle = "BUILD provides a venue for students to gain academic and practical knowledge about software development, web development, and tech consulting. We are BUILDING our community through the pro-bono services we offer to nonprofits, startups, and local businesses.";

  return (
    <div>
      <div className="about-bg">
        <div className="bg-gradient-transparent">
          {/* Navbar */}
          <Navbar />
          <JumbotronHeader
            title={title}
            subtitle={subtitle}
            actions={
              <Link href="/apply">
                <Button
                  variant="light"
                  className="link-btn"
                >
                  Join Us!
                </Button>
              </Link>
            }
          />
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
                {/* before */}
                We aim to help our members develop technical and professional
                skills necessary to succeed in competitive fields. We work
                directly with companies to solve real-world problems, which
                allows students to develop critical communication skills and
                improve their problem-solving abilities. Additionally, talks and
                workshops from faculty, corporate speakers, and recruiters
                provide industry insights and opportunities to enhance technical
                skills.

                {/* after */}
                We are on a mission to leverage technology for the social good. By pairing passionate and driven UMass students with charities and non-profit organizations, we not only engineer software that does good, but foster and grow the talent of the next generation of computer scientists dedicated to leaving a positive impact on the world.
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
                {/* before */}
                We were founded on the philosophy that UMass students possess
                valuable skills that can greatly benefit the community. By
                establishing professional relationships between the community
                and students, organizations in the community will benefit from
                the latest technologies while providing students extensive
                real-world experience.

                {/* after */}
                10 years ago, a group of UMass students had an idea. They wanted to use their skills to help the community. They wanted to make a difference. They wanted to BUILD. And so, BUILD UMass was born. It started out modestly, a couple of students working out of the basement of McNamara, but it quickly grew as potential turned into reality. Today, BUILD UMass is a thriving community of students, engineers, and non-profits, all working together to make the world a better place.
              </p>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default about;