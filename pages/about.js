import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

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
                                                Gain real-world experience by
                                                helping others
                                            </h1>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <p className="pg-heading center">
                                                BUILD provides a venue for
                                                students to gain academic and
                                                practical knowledge about
                                                software development, web
                                                development, and tech
                                                consulting. We are BUILDING our
                                                community through the pro-bono
                                                services we offer to nonprofits,
                                                startups, and local businesses.
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="center">
                                            <Button
                                            className="btn-light"
                                            onClick={() => {
                                                window.open(
                                                    "/services", "_self"
                                                );
                                            }}
                                            >Join Us!</Button>
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
                <div className="margin3">
                    <Row>
                        <Col>
                            <h1>Mission</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>
                                We aim to help our members develop technical and
                                professional skills necessary to succeed in
                                competitive fields. We work directly with
                                companies to solve real-world problems, which
                                allows students to develop critical
                                communication skills and improve their
                                problem-solving abilities. Additionally, talks
                                and workshops from faculty, corporate speakers,
                                and recruiters provide industry insights and
                                opportunities to enhance technical skills.
                            </p>
                        </Col>
                    </Row>
                </div>
                {/* Our Story */}
                <div className="margin3">
                    <Row>
                        <Col>
                            <h1>Our Story</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>
                                We were founded on the philosophy that UMass
                                students possess valuable skills that can
                                greatly benefit the community. By establishing
                                professional relationships between the community
                                and students, organizations in the community
                                will benefit from the latest technologies while
                                providing students extensive real-world
                                experience.
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
							<img src="/img/illustrations/people-chatting.svg" />
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
                                                We have applications for
                                                developer positions that open at
                                                the start of each semester. Upon
                                                completion, we will contact you
                                                for an interview. If you are not
                                                sure which position is best for
                                                you, apply to all positions!
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col className="center">
                                            <Button>Apply!</Button>
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
			<Container>
				<Row className="center margin3">
					<Col>
						<h1>
							Meet the team
						</h1>
					</Col>
				</Row>
				<Row>
					<Col>
						{/* Map over all members */}
					</Col>
				</Row>
			</Container>
			{/* Footer */}
			<Footer />
        </div>
    );
};

export default about;
