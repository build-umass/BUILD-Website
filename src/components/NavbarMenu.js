
export default function NavbarMenu({ show, pages, toggleShow }) {
  return (
    <div
      onClick={toggleShow}
      style={{
        position: 'fixed',
        zIndex: 100,
        width: '100%',
        transform: `translateX(${show ? 0 : '100vw'})`,
        transition: 'transform 0.3s ease',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '20px',

      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          backgroundColor: 'blue',
          padding: '10px',
          borderRadius: '5px',
          cursor: 'pointer',
          width: '20px',
          height: '20px',
        }}
      ></div>
    </div>
  );
}