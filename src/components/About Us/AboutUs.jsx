import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assets/images/aboutUs_img.png";

const AboutUs = () => {
  return (
    <section className="about_section" id="about">
      <Container>
        <Row className="align-items-center">
          
          {/* Left Content */}
          <Col lg="6" md="6">
            
            {/* Heading ABOVE box */}
            <h2 className="about_box fade_in_left about_title">
              About Rixa LMS
            </h2>

            {/* Paragraph Box */}
            <div className="fade_in_left">
              <div className="about_body">
                <p>
                  Rixa LMS is a university-focused e-learning platform provided by the
                  Technology Department of South Eastern University of Sri Lanka.
                  Our goal is to support undergraduates with structured, modern
                  digital learning tools.
                </p>
                <p>
                  We offer semester-wise courses, subject-wise notes, past papers,
                  and interactive quizzes so students can revise efficiently,
                  track their progress, and face midterms and finals with greater
                  confidence.
                </p>
              </div>
            </div>

          </Col>

          {/* Right Image */}
          <Col lg="6" md="6">
            <div className="about_img">
              <img
                src={aboutImg}
                alt="About Rixa LMS"
                className="w-100"
              />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
