import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./subscribeSuccess.css";

const SubscribeSuccess = () => {
  return (
    <section className="subscribe_success_section">
      <Container>
        <Row className="justify-content-center">
          <Col lg="6" md="8">
            <div className="subscribe_success_card">
              <span className="success_badge">Subscribed</span>

              <h2 className="success_title">You’re in! 🎓</h2>

              <p className="success_text">
                Thanks for subscribing to SEUSL ICT updates. We’ll email you
                when new semester-wise course materials, model papers, and
                quizzes are added to Rixa LMS.
              </p>

              <p className="success_text_small">
                Check your inbox (and spam folder) for a confirmation email.
              </p>

              <a href="/" className="btn btn-success-back">
                Back to home
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SubscribeSuccess;
