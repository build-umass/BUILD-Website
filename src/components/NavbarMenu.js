import { useOuterClick } from '../hooks/useOuterClick';

export default function NavbarMenu({ show, pages, close }) {
  const innerRef = useOuterClick(() => !show || close());
  return (
    <>
      <div
        ref={innerRef}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          zIndex: 100,
          width: '400px',
          maxWidth: '80%',
          height: '100%',
          transform: `translateX(${show ? 0 : '100vw'})`,
          transition: 'transform 0.3s ease',
          // gradient from red to dark red
          background: 'linear-gradient(to top, #900202, #d13c06)',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '20px',
          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
        }}
      >

      </div>

      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 99,
          width: '100%',
          height: '100%',
          background: show ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
          pointerEvents: show ? 'auto' : 'none',
          transition: 'background 0.3s ease',
        }}
        onClick={close}
      ></div>
    </>
  );
}