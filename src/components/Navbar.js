import React from 'react';
import Container from 'react-bootstrap/Container';
import { useBreakpoint } from '../hooks/useBreakpoint';

import NavbarLg from './NavbarLg.js';
import NavbarSm from './NavbarSm.js';

export default function Navbar() {

  const { smAndDown } = useBreakpoint();

  const pages = [
    {
      name: 'Home',
      link: '/',
      description: 'Welcome to BUILD UMass!',
      img: 'https://media.licdn.com/dms/image/C4D0BAQEOOjB5evIbRA/company-logo_200_200/0/1630469396055/buildumass_logo?e=2147483647&v=beta&t=K20v8vvdruYA2M-pM2b3zhU2Pq7LkzN5U9zzsi5RU20'
    },
    {
      name: 'About',
      longName: 'About Us',
      link: '/about',
      description: 'Learn about our mission, story, and team.',
      img: 'https://www.umass.edu/engineering/sites/g/files/ijdqth166/files/styles/text_area_full_xl/public/2022-11/hackumas_vi.png?itok=EWxe1cM0'
    },
    {
      name: 'Services',
      longName: 'Our Services',
      link: '/services',
      description: 'The services we provide to our community.',
      img: 'https://images.ctfassets.net/63bmaubptoky/8e6EHyyhZoA2rEb_gcW_Wqp1UYa-QFOfol6A_hLTDo4/d07539f9788941b43e301c741bc144ce/what-is-software-CA-Capterra-Header.png'
    },
    {
      name: 'Projects',
      longName: 'Our Projects',
      link: '/projects',
      description: 'Take a look through our past and present projects.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtWWK7BNKiq45h24nPIxZwK5U039Wj5_gPfg&usqp=CAU'
    },
    {
      name: 'Apply',
      longName: 'Join Us',
      link: '/apply',
      description: 'Join our team and help us make a difference.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe_73RFUkRV4UXQ9I4egEvSMbmbm6bgRmAJg&usqp=CAU'
    },
    {
      name: 'Contact',
      longName: 'Contact Us',
      link: 'https://forms.gle/uuA2s98v4oC4o8TU7',
      description: 'Get in touch with us.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1JivyRSsdu7VHHz_TQbE42uJI-eOSaFZ3wQ&usqp=CAU'
    },
  ]

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