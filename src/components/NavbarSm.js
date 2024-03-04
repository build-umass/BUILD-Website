import Navbar from 'react-bootstrap/Navbar';
// import hamburger font awesome icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function NavbarSm({ pages }) {
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
				color="white"
				size="xl"
			/>
		</Navbar>
  );
}