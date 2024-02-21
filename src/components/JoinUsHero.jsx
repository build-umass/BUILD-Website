export default JoinUsHero = () => (
  <div>
    <div className="top-curve" />
    <div className="bg-gradient">
      <Container>
        <Row className="center">
          <Col sm={4}>
            <img
              className="illust"
              src="/img/illustrations/people-chatting.svg"
              alt="People chatting"
            />
          </Col>
          <Col>
            <div>
              <Row>
                <Col>
                  <h1 className="pg-heading center">
                    Interested in joining us?
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="pg-heading center">
                    We have applications for various positions that open at the
                    start of each semester. Upon completion, we will contact you
                    for an interview. If you are not sure which position is best
                    for you, apply to all positions!
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="center">
                  <Link href="/apply">
                    <Button variant="light" className="link-btn">
                      Apply!
                    </Button>
                  </Link>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="bottom-curve" />
  </div>
);