import React from 'react';
import Container from 'react-bootstrap/Container';
import { useBreakpoint } from '../hooks/useBreakpoint';

import NavbarLg from './NavbarLg.js';
import NavbarSm from './NavbarSm.js';

export default function Navbar() {

  const { smAndDown } = useBreakpoint();

  const pages = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Services', link: '/services' },
    { name: 'Projects', link: '/projects' },
    { name: 'Apply', link: '/apply' },
    { name: 'Contact', link: 'https://forms.gle/uuA2s98v4oC4o8TU7' },
  ]

  return (
    <Container style={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          zIndex: 100,
          width: '100%',
        }}
      >
        {smAndDown ? <NavbarSm pages={pages} /> : <NavbarLg pages={pages} />}
      </div>
    </Container>
  );
}