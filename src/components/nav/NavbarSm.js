import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import NavbarMenu from './NavbarMenu';

export default function NavbarSm({ pages }) {
	const [show, setShow] = useState(false);

	const close = () => setShow(false);
	const open = () => setShow(true)

  return (
		<>
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
					onClick={open}
					color="white"
					size="xl"
				/>
			</Navbar>

			<NavbarMenu
				show={show}
				pages={pages}
				close={close}
			/>
		</>
  );
}