
export default function NavbarMenuItem({ page }) {

  const itemParentStyle = {
    borderRadius: '5px',
    background: 'rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    gap: '14px',
    overflow: 'hidden',
  };

  const itemTitleStyle = {
    color: 'white',
    fontSize: '20px',
    fontWeight: '600',
  };

  const itemDescriptionStyle = {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '14px',
    fontWeight: '100',
    lineHeight: '1.4',
  };

  return (
    <div
      className='pt-2 pl-3'
      style={itemParentStyle}
    >
      <div className='pt-1'>
        <span style={itemTitleStyle}>
          {page.longName ?? page.name}
        </span>
        <p style={itemDescriptionStyle}>
          {page.description}
        </p>
      </div>
    </div>
  );
}