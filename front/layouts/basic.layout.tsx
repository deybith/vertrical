import { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";

export const BasicLayout = ({ children }) => {
  useEffect(() => {
    document.body.classList.add("bg-default");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.remove("bg-default");
    };
  }, []);

  return (<div className="main-content">
    <div className="header bg-gradient-info py-7 py-lg-8">
      <Container>
        <div className="header-body text-center mb-7">
          <Row className="justify-content-center">
            <Col lg="10" md="11">
              {/* Page content */}
              {children}
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  </div>)
}