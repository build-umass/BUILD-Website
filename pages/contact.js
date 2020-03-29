import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export default function contact() {
	return (
		<div>
			<div className="bg-gradient">
				{/* Navbar */}
				<Navbar />
			</div>
			<Container className="padding3">
				<Row>
					<Col>
						<h1>Get in touch</h1>
						<p>
							If you are a non-profit organization, a local business, or a startup
							interested in working with us, please fill out the form below and we
							will respond as soon as possible. Also, please follow us on social media
							to stay updated with our activities.
						</p>
						<Card body className="margin-bottom3">
							<Form>
								<Form.Group controlId="formName">
									<Form.Label>Name</Form.Label>
									<Form.Control type="text" placeholder="Enter your name" />
								</Form.Group>

								<Form.Group controlId="formEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control type="email" placeholder="Enter your email" />
								</Form.Group>

								<Form.Group controlId="formPhone">
									<Form.Label>Phone Number</Form.Label>
									<Form.Control
										type="number"
										placeholder="Enter your phone number"
									/>
								</Form.Group>

								<Form.Group controlId="formOrg">
									<Form.Label>Your Organization</Form.Label>
									<Form.Control
										type="text"
										placeholder="Enter the name of your organization"
									/>
								</Form.Group>

								<Form.Group controlId="formMessage">
									<Form.Label>Message</Form.Label>
									<Form.Control
										as="textarea"
										placeholder="Enter your message"
										rows="4"
									/>
								</Form.Group>

								<Button className="color" type="submit">
									Submit
								</Button>
							</Form>
						</Card>
					</Col>
					<Col sm={4}>
						<Card body className="margin-bottom3">
							<h5>For Clients</h5>
							<p>
								We usually take projects from organizations that are trying to make
								a positive impact in the community or are trying to do some kind of
								social good.
							</p>
							<p>
								The scope of the project usually is such that it would help your
								organization operate more effectively and efficiently.
							</p>
						</Card>
						<Card body>
							<h5>For Students</h5>
							<p>
								We have applications open for various positions at the start of
								every semester. You can learn more about the different roles at
								BUILD and apply for them <a href="/apply">here</a>
							</p>
							<p>
								Follow us on our social media handles to stay upto date with all our
								events and get notified when our applications go live!
							</p>
						</Card>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
}
