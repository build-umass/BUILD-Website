import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "react-bootstrap/NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
	return (
		<div className="footer">
			<Container className="padding3">
				<Row>
					<Col md={3} sm={12} className="footer-col">
						<div>
							<Row>
								<Col>
									<h6 className="pg-heading">BUILD UMass</h6>
								</Col>
							</Row>
							<Row className="margin-bottom2">
								<Col>
									<p className="copyright">© 2020 BUILD UMass</p>
								</Col>
							</Row>
							<Row className="footer-col">
								<a
									href="https://www.facebook.com/BUILD-UMass-567327120439466/"
									target="_blank"
								>
									<FontAwesomeIcon icon={faFacebook} className="icon" />
								</a>
								<a href="https://www.instagram.com/build.umass/" target="_blank">
									<FontAwesomeIcon icon={faInstagram} className="icon" />
								</a>
								<a
									href="https://www.linkedin.com/company/buildumass/"
									target="_blank"
								>
									<FontAwesomeIcon icon={faLinkedin} className="icon" />
								</a>
								<a href="https://github.com/build-umass" target="_blank">
									<FontAwesomeIcon icon={faGithub} className="icon" />
								</a>
							</Row>
						</div>
					</Col>
					<Col md={3} sm={12} className="footer-col">
						<div>
							<Link>
								<p className="footer-heading">About</p>
							</Link>
							<Link>Mission</Link>
							<Link>Story</Link>
							<Link>Team</Link>
						</div>
					</Col>
					<Col md={3} sm={12} className="footer-col">
						<div>
							<Link>
								<p className="footer-heading">Services</p>
							</Link>
							<Link>Software Development</Link>
							<Link>Web Development</Link>
							<Link>Tech Consulting</Link>
						</div>
					</Col>
					<Col md={3} sm={12} className="footer-col">
						<div>
							<Link>
								<p className="footer-heading">Get Involved</p>
							</Link>
							<Link>Positions</Link>
							<Link>Contact</Link>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
