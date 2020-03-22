import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function IndexJumbotron() {
    return (
        <Container className="pg-jumbotron center">
            <Row className="padding1">
                <Col>
                    <div>
                        <Row>
                            <Col>
                                <h1 className="pg-heading center">Building a better world with technology</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <p className="pg-heading center primary-font">
                                    We are a group of students committed to
                                    provide non-profits, startups and local
                                    businesses with scalable technological
                                    soultion through pro-bono consulting
                                    engagements.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="center">
                                <Button>Get in touch!</Button>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
