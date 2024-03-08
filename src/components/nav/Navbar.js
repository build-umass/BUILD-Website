import React from 'react';
import Container from 'react-bootstrap/Container';
import { useBreakpoint } from '../../hooks/useBreakpoint.js';

import NavbarLg from './NavbarLg.js';
import NavbarSm from './NavbarSm.js';
import { content } from '../../content/nav.js';

export default function Navbar() {

  const { smAndDown } = useBreakpoint();
  const { pages } = content;

  return (
    <div
      style={{
        position: 'absolute',
        zIndex: 100,
        width: '100%',
      }}
    >
      {smAndDown ?
        <NavbarSm pages={pages} /> :
        <Container>
          <NavbarLg pages={pages} />
        </Container>
      }
    </div>
  );
}