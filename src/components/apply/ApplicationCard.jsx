
export default function ApplicationCard({
  title,
  description,
  applicationLink,
  applicationOpen
}) {

  const apply = (applicationLink) => {
    window.open(applicationLink, "_blank");
  }

  return (
    <div
      className="p-4"
      style={{
        border: '1px solid #e0e0e0',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}
    >

      <div>
        <h4>
          {title}
        </h4>
        <div>
          {description}
        </div>
      </div>
      {
        applicationOpen && (
          <div className="center">
            <div
              onClick={() => apply(applicationLink)}
              className="apply-btn"
            >
              <div>
                <span>Apply</span>
                <span>Apply</span>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
}