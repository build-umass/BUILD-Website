import React from 'react';
import Link from 'next/link';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

export default function Index() {

  const pages = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Projects', link: '/projects' },
    { name: 'Apply', link: '/apply' },
    { name: 'Contact', link: 'https://forms.gle/uuA2s98v4oC4o8TU7', target: '_blank' },
  ]

  return (
    <Container>
      <Navbar
        style={{
          position: 'absolute',
        }}
        bg="transparent"
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="/">
            BUILD UMass
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav custom-toggler"
            className="justify-content-end"
          >
            <Nav style={{ marginLeft: '300px' }}>
              {
                pages.map((page) => (
                  <Nav.Item
                    key={page.name}
                    href={page.link}
                  >
                    <Link
                      href={page.link}
                      target={page.target}
                    >
                      {page.name}
                    </Link>
                  </Nav.Item>
                ))
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}