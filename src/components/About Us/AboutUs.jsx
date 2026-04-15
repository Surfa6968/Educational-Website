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
            {/* <span className="about_kicker">About the platform</span> */}

            <h2 className="fade_in_left about_title">
              About Rixa LMS
            </h2>

            <div className="fade_in_left">
              <div className="about_body">
                <p>
                  Rixa LMS is a university-focused e-learning platform provided by
                  the Technology Department of South Eastern University of Sri Lanka.
                  Our goal is to support undergraduates with structured, modern
                  digital learning tools.
                </p>
                <p>
                  We offer semester-wise courses, subject-wise notes, past papers,
                  and interactive quizzes so students can revise efficiently,
                  track their progress, and face midterms and finals with greater
                  confidence.
                </p>

                <ul className="about_highlights">
                  <li>Organized by year, semester, and ICT module.</li>
                  <li>Integrated notes, past papers, and quizzes in one place.</li>
                  <li>Progress tracking to see how your learning improves over time.</li>
                </ul>

                {/* Mission & Vision – replace text with official faculty content */}
                <div className="about_mv_block">
                  <div className="about_mv_item">
                    <h3>Our Vision</h3>
                    <p>
                      Vision text of the Faculty of Technology, South Eastern University
                      of Sri Lanka goes here. Replace this placeholder with the official
                      sentence from the university website.
                    </p>
                  </div>
                  <div className="about_mv_item">
                    <h3>Our Mission</h3>
                    <p>
                      Mission text of the Faculty of Technology, South Eastern University
                      of Sri Lanka goes here. Replace this placeholder with the official
                      sentence from the university website.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Image */}
          <Col lg="6" md="6">
            <div className="about_img">
              <img
                src={aboutImg}
                alt="About Rixa LMS"
                className="w-100 abou_img_el"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
