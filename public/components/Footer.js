import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "react-bootstrap/NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <div className="footer">
            <Container className="padding3">
                <Row className="center-top">
                    <Col>
                        <div>
                            <Link>
                                <p className="footer-heading">About</p>
                            </Link>
                            <Link>Mission</Link>
                            <Link>Story</Link>
                            <Link>Team</Link>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Link>
                                <p className="footer-heading">Services</p>
                            </Link>
                            <Link>Software Development</Link>
                            <Link>Web Development</Link>
                            <Link>Tech Consulting</Link>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <Link>
                                <p className="footer-heading">Get Involved</p>
                            </Link>
                            <Link>Positions</Link>
                            <Link>Contact</Link>
                        </div>
                    </Col>
					<Col>
                        <div className="center-top">
                            <Row>
                                <Col>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </Col>
                                <Col>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </Col>
                            </Row>
                        </div>
                        <div className="center">
                            <Row>
                                <Col>
                                    <p className="copyright">
                                        BUILD UMass © 2020
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
