import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function Index() {
  return (
    <div>
      <Head>
        <title>BUILD UMass</title>
      </Head>
      <Navbar bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand href="/">BUILD UMass</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav custom-toggler"
            className="justify-content-end"
          >
            <Nav className="ml-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/apply">Apply</Nav.Link>
              <Nav.Link
                // Todo: Connect with Cheerio
                href="/contact"
                // href="https://forms.gle/uuA2s98v4oC4o8TU7"
                target="_blank"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
