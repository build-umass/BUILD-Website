import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavbarLink from './NavbarLink';

export default function NavbarLg({ pages }) {
  return (
    <Navbar
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Navbar.Brand href="/">
        BUILD UMass
      </Navbar.Brand>

      <Nav>
        {pages.map((page) => (
          <Nav.Item key={page.name}>
            <NavbarLink page={page} />
          </Nav.Item>
        ))}
      </Nav>
    </Navbar>
  );
}