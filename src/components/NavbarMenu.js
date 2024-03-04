import { useOuterClick } from '../hooks/useOuterClick';
import NavbarLink from './NavbarLink';

export default function NavbarMenu({ show, pages, close }) {
  const innerRef = useOuterClick(() => !show || close());
  return (
    <>
      <div
        className="p-3"
        ref={innerRef}
        onClick={close}
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
          background: 'linear-gradient(to top, #900202, #d13c06)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
        }}
      >

        <div
          style={{
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
          }}
        ></div>

        <h1
          style={{
            color: 'white',
            fontSize: '30px',
            fontWeight: '700',
          }}
        >
          Browse BUILD
        </h1>

        {pages.map((page, i) => (
          <NavbarLink
            page={page}
            key={i}
            linkDisplay={
              <div
                className='pt-2 pl-3'
                style={{
                  borderRadius: '5px',
                  height: '80px',
                  background: 'rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '14px',
                  overflow: 'hidden',
                }}
              >
                {/* <div
                  style={{
                    position: 'relative',
                    minWidth: '90px',
                    minHeight: '100%',
                  }}
                >

                  <img
                    src={page.img}
                    alt={page.name}
                    style={{
                      position: 'absolute',
                      minHeight: '100%',
                      width: '100%',
                      objectFit: 'cover',
                      filter: 'grayscale(50%)',
                      opacity: 0.4
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      background: 'red',
                      opacity: 0.3,
                    }}
                  ></div>
                </div> */}
                <div className='pt-1'>
                  <span
                    style={{
                      color: 'white',
                      fontSize: '20px',
                      fontWeight: '600',
                    }}
                  >
                    {page.longName ?? page.name}
                  </span>
                  <br />
                  <p
                    style={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '14px',
                      fontWeight: '100',
                      lineHeight: '1.4',
                    }}
                  >
                    {page.description}
                  </p>
                </div>
              </div>
            }
          ></NavbarLink>
        ))}
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