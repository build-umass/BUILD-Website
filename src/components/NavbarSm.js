import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import NavbarMenu from './NavbarMenu';

export default function NavbarSm({ pages }) {
	const [show, setShow] = useState(false);

	const toggleShow = () => setShow(!show);

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

			<FontAwesomeIcon
				icon={faBars}
				onClick={toggleShow}
				color="white"
				size="xl"
			/>

			<NavbarMenu
				show={show}
				pages={pages}
				toggleShow={toggleShow}
			/>
		</Navbar>
  );
}