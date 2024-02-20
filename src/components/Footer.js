import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Link from 'react-bootstrap/NavLink';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className="footer">
      <Container className="padding3">
        <Row className="footer-row">
          <Col md={3} sm={12} className="footer-col">
            <div>
              <Row>
                <Col>
                  <h6 className="pg-heading">BUILD UMass</h6>
                </Col>
              </Row>
              <Row className="margin-bottom2">
                <Col>
                  <p className="copyright">© 2024 BUILD UMass</p>
                </Col>
              </Row>
              <Row className="footer-col">
                <a
                  href="https://www.facebook.com/BUILD-UMass-567327120439466/"
                  target="_blank"
                  className="white-link"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} className="icon" />
                </a>
                <a
                  href="https://www.instagram.com/build.umass/"
                  target="_blank"
                  className="white-link"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} className="icon" />
                </a>
                <a
                  href="https://www.linkedin.com/company/buildumass/"
                  target="_blank"
                  className="white-link"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="icon" />
                </a>
                <a
                  href="https://github.com/build-umass"
                  target="_blank"
                  className="white-link"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} className="icon" />
                </a>
              </Row>
            </div>
          </Col>
          <Col md={3} sm={12} className="footer-col">
            <div>
              <Link href="/about">
                <p className="footer-heading">About</p>
              </Link>
              <Link href="/about#Mission">Mission</Link>
              <Link href="/about#Story">Story</Link>
            </div>
          </Col>
          <Col md={3} sm={12} className="footer-col">
            <div>
              <Link href="/services">
                <p className="footer-heading">Services</p>
              </Link>
              <Link href="/services#Software">Software Development</Link>
              <Link href="/services#Web">Web Development</Link>
              <Link href="/services#Consulting">Tech Consulting</Link>
            </div>
          </Col>
          <Col md={3} sm={12} className="footer-col">
            <div>
              <Link href="/apply">
                <p className="footer-heading">Get Involved</p>
              </Link>
              <Link href="/apply#Roles">Positions</Link>
              <Link
                // Todo: Connect with Cheerio
                // href="/contact"
                href="https://forms.gle/uuA2s98v4oC4o8TU7"
                target="_blank"
              >
                Contact
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}