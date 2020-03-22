import React from "react";
import Navbar from "../components/Navbar";
import IndexJumbotron from "../components/IndexJumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "react-bootstrap/NavLink";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Index() {
    return (
        <div>
            {/* Nav + Landing Jumbotron */}
            <div className="sq-bg">
                <Navbar />
                <IndexJumbotron />
            </div>
            <div>
                <Container>
                    {/* About */}
                    <div>
                        <Row>
                            <Col>
                                <div>
                                    <Row>
                                        <Col>
                                            <h1>About Us</h1>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p>
                                                BUILD strives to make technology
                                                easy to use and convenient for
                                                those who create communities and
                                                promote public welfare.
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Link
                                                className="inline-link"
                                                href="/about"
                                            >
                                                Learn more{" "}
                                                <FontAwesomeIcon
                                                    icon={faChevronRight}
                                                />
                                            </Link>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col>
                                <img></img>
                            </Col>
                        </Row>
                    </div>
                    {/* Our Work */}
                    <div>
                        <Row>
                            <Col>
                                <div>
                                    <Row>
                                        <Col>
                                            <h1>Our Work</h1>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p>
                                                Each semester, our teams work
                                                with various organizations and
                                                build cutting-edge solutions for
                                                a vast array of problems. The
                                                projects we focus on can range
                                                from Full-Stack Web Development
                                                to Software Development.
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Link
                                                className="inline-link"
                                                href="/services"
                                            >
                                                Learn more{" "}
                                                <FontAwesomeIcon
                                                    icon={faChevronRight}
                                                />
                                            </Link>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col>
                                <img></img>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            {/* Some Fun Facts */}
            <div>
                <div></div>
                <div>
                    <Container>
                        <Row>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col>
                                <div>
                                    <Row>
                                        <Col></Col>
                                    </Row>
                                    <Row>
                                        <Col>21</Col>
                                    </Row>
                                    <Row>
                                        <Col>Students</Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Row>
                                        <Col></Col>
                                    </Row>
                                    <Row>
                                        <Col>8+</Col>
                                    </Row>
                                    <Row>
                                        <Col>Majors</Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Row>
                                        <Col></Col>
                                    </Row>
                                    <Row>
                                        <Col>3</Col>
                                    </Row>
                                    <Row>
                                        <Col>Projects</Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Row>
                                        <Col></Col>
                                    </Row>
                                    <Row>
                                        <Col>10,000+</Col>
                                    </Row>
                                    <Row>
                                        <Col>Lines of Code</Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div></div>
            </div>
            <Container>
                {/* Get Involved */}
                <div>
                    <Row>
                        <Col>
                            <h1>Get Involved</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>
                                BUILD is a fantastic way to apply your knowledge
                                gained from class to impact lives. We work in
                                small teams to build technological solutions for
                                nonprofits and local businesses. We are looking
                                forward to the growth of BUILD as more people
                                get involved. We have applications for business
                                and project developers at the beginning of each
                                semester.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link className="inline-link" href="/apply">
                                Learn more{" "}
                                <FontAwesomeIcon icon={faChevronRight} />
                            </Link>
                        </Col>
                    </Row>
                </div>
                {/* Where we go */}
                <div>
                    <Row>
                        <Col>
                            <h1>Where we go</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>
                                Our members are brilliant students and
                                professionals and often end up working for the
                                best companies in the industry.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>{/* Map over logos */}</Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}
