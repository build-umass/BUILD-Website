import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";

export default function MemberCard() {
	return (
		<div>
			<Card body className="center margin-bottom3">
				<Row className="margin-bottom3">
					<Col>
						<Image src="/img/people/blank.png" className="thumbnail2" roundedCircle />
					</Col>
				</Row>
				<Row>
					<Col>
						<h6 className="dark-text">Name</h6>
					</Col>
				</Row>
				<Row>
					<Col>
						<p className="bio">
							I have a passion for data analytics, hoping to apply my expertise to the
							field of sustainability
						</p>
					</Col>
				</Row>
			</Card>
		</div>
	);
}
