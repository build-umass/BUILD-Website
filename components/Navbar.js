import React from "react";
import Head from "next/head";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";

export default function Index() {
    return (
        <div>
			<Head>
                <title>BUILD UMass</title>
            </Head>
            <Navbar bg="transparent" expand="lg">
                <Container>
                    <Navbar.Brand href="/index">BUILD UMass</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav custom-toggler" className="justify-content-end">
                        <Nav className="ml-auto">
                            <Nav.Link href="/index">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
							<Nav.Link href="/services">Services</Nav.Link>
							<Nav.Link href="/apply">Apply</Nav.Link>
                            <Nav.Link href="/contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
