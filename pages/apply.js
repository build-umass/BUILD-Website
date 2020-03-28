import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Particles from "react-particles-js";
import ParticleJSConfig from "../styles/particlejs_config.json";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "react-bootstrap/NavLink";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

export default function apply() {
	return (
		<div>
			<Particles params={ParticleJSConfig} canvasClassName="particlejs" />
			{/* Jumbotron */}
			<div className="bg-gradient">
				{/* Navbar */}
				<Navbar />
				<Container className="pg-jumbotron center">
					<Row className="padding1">
						<Col>
							<div>
								<Row>
									<Col>
										<h1 className="pg-heading center">
											Join our amazing team!
										</h1>
									</Col>
								</Row>
								<Row>
									<Col>
										<p className="pg-heading center">
											Joining BUILD is a fantastic way to give back to the
											community! You will get the opportunity to work in teams
											on a wide array of problems and use concepts they learn
											in class in real-world situations. You will also be able
											to extend your knowledge by learning more about
											different tools and platforms used across the industry.
										</p>
									</Col>
								</Row>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			{/* Body */}
			<Container className="margin5">
				<div className="padding2">
					<Row className="margin-bottom4">
						<Col>
							<h1>Roles at BUILD</h1>
						</Col>
					</Row>
					<Row className="center">
						<Col sm={4}>
							<Card body className="margin-bottom3">
								<h5>Software Developer</h5>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Porta nibh venenatis cras sed felis eget. Vivamus at augue eget
									arcu.
								</p>
								<div className="center">
									<Button className="color">Apply</Button>
								</div>
							</Card>
						</Col>
						<Col sm={4}>
							<Card body className="margin-bottom3">
								<h5>Business Developer</h5>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Porta nibh venenatis cras sed felis eget. Vivamus at augue eget
									arcu.
								</p>
								<div className="center">
									<Button className="color">Apply</Button>
								</div>
							</Card>
						</Col>
						<Col sm={4}>
							<Card body className="margin-bottom3">
								<h5>Designers</h5>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
									eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Porta nibh venenatis cras sed felis eget. Vivamus at augue eget
									arcu.
								</p>
								<div className="center">
									<Button className="color">Apply</Button>
								</div>
							</Card>
						</Col>
					</Row>
				</div>
				<div className="margin5">
					<Row className="margin-bottom4">
						<Col>
							<h1>What we look for</h1>
						</Col>
					</Row>
					<Row className="center margin-bottom5">
						<Col md={4} className="margin-lr">
							<div className="center-horizontal">
								<img src="img/illustrations/teamwork.svg" className="thumbnail" />
								<h6>Teamwork</h6>
								<p className="light">
									Do you display the ability to work well in a team?
								</p>
							</div>
						</Col>
						<Col md={4} className="margin-lr">
							<div className="center-horizontal">
								<img src="img/illustrations/passion.svg" className="thumbnail" />
								<h6>Passion</h6>
								<p className="light">
									Do you demonstrate a genuine passion for social good?
								</p>
							</div>
						</Col>
					</Row>
					<Row className="center margin-bottom4">
						<Col md={4} className="margin-lr">
							<div className="center-horizontal">
								<img src="img/illustrations/growth.svg" className="thumbnail" />
								<h6>Growth</h6>
								<p className="light">
									Do you push yourself to grow in any setting? Do you seek out new
									ways to grow?
								</p>
							</div>
						</Col>
						<Col md={4} className="margin-lr">
							<div className="center-horizontal">
								<img src="img/illustrations/culture.svg" className="thumbnail" />
								<h6>Culture</h6>
								<p className="light">
									Do you value empowering non-profits to achieve their missions
									through tech?
								</p>
							</div>
						</Col>
					</Row>
				</div>
				<div className="margin4">
					<Row className="margin-bottom4">
						<Col>
							<h1>Frequently Asked Questions</h1>
						</Col>
					</Row>
					<div className="left-margin">
						<div className="margin-bottom4">
							<Row>
								<Col>
									<h6>How many people work on a team?</h6>
								</Col>
							</Row>
							<Row>
								<Col>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Amet cursus sit amet dictum sit amet justo donec. Ut
										enim blandit volutpat maecenas volutpat. Accumsan sit amet
										nulla facilisi.
									</p>
								</Col>
							</Row>
						</div>
						<div className="margin-bottom4">
							<Row>
								<Col>
									<h6>How many people work on a team?</h6>
								</Col>
							</Row>
							<Row>
								<Col>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Amet cursus sit amet dictum sit amet justo donec. Ut
										enim blandit volutpat maecenas volutpat. Accumsan sit amet
										nulla facilisi.
									</p>
								</Col>
							</Row>
						</div>
						<div className="margin-bottom4">
							<Row>
								<Col>
									<h6>How many people work on a team?</h6>
								</Col>
							</Row>
							<Row>
								<Col>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Amet cursus sit amet dictum sit amet justo donec. Ut
										enim blandit volutpat maecenas volutpat. Accumsan sit amet
										nulla facilisi.
									</p>
								</Col>
							</Row>
						</div>
						<div className="margin-bottom4">
							<Row>
								<Col>
									<h6>How many people work on a team?</h6>
								</Col>
							</Row>
							<Row>
								<Col>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Amet cursus sit amet dictum sit amet justo donec. Ut
										enim blandit volutpat maecenas volutpat. Accumsan sit amet
										nulla facilisi.
									</p>
								</Col>
							</Row>
						</div>
						<div className="margin-bottom4">
							<Row>
								<Col>
									<h6>How many people work on a team?</h6>
								</Col>
							</Row>
							<Row>
								<Col>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Amet cursus sit amet dictum sit amet justo donec. Ut
										enim blandit volutpat maecenas volutpat. Accumsan sit amet
										nulla facilisi.
									</p>
								</Col>
							</Row>
						</div>
					</div>
				</div>
			</Container>
			<Footer />
		</div>
	);
}
