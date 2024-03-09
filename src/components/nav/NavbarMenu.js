import { useOuterClick } from '../../hooks/useOuterClick';
import NavbarLink from './NavbarLink';
import { useEffect, useState } from 'react';
import NavbarMenuItem from './NavbarMenuItem';

export default function NavbarMenu({ show, pages, close }) {
  const innerRef = useOuterClick(() => !show || close());
  const [rendering, setRendering] = useState(true);
  useEffect(() => setRendering(false))

  const menuStyle = {
    position: 'fixed',
    top: 0,
    right: 0,
    zIndex: 100,
    width: '400px',
    maxWidth: '80%',
    height: '100%',
    transform: `translateX(${show ? '0' : '100vw'})`,
    transition: 'transform 0.3s ease',
    background: 'linear-gradient(to top, #900202, #d13c06)',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
  };

  const circleDecorationStyle = {
    position: 'absolute',
    bottom: '-400px',
    left: '100px',
    width: 'calc(100% - 40px)',
    borderRadius: '50%',
    height: '700px',
    width: '700px',
    background: 'black',
    opacity: 0.3,
    border: '120px dashed #d13c06',
  }

  const backgroundDarkenerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 99,
    width: '100%',
    height: '100%',
    background: show ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
    pointerEvents: show ? 'auto' : 'none',
    transition: 'background 0.3s ease',
  }

  const menuTitleStyle = {
    color: 'white',
    fontSize: '30px',
    fontWeight: '700',
  }

  return rendering || (
    <>
      <div
        className="p-3"
        ref={innerRef}
        onClick={close}
        style={menuStyle}
      >

        <div style={circleDecorationStyle}></div>

        <h1 style={menuTitleStyle}>
          Browse BUILD
        </h1>

        {pages.map((page, i) => (
          <NavbarLink
            page={page}
            key={i}
            linkDisplay={<NavbarMenuItem page={page} />}
          ></NavbarLink>
        ))}

      </div>

      <div
        style={backgroundDarkenerStyle}
        onClick={close}
      ></div>
    </>
  );
}