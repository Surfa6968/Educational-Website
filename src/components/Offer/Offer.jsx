import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./offer.css";
import offerImg from "../../assets/images/offer.png";
import { OfferSlider } from "./OfferSlider";

const Offer = () => {
  return (
    <section className="offer-section">
      <Container>
        <Row className="align-items-center">
          <Col lg="6" md="6">
            <div className="offer_img_wrapper">
              <img src={offerImg} alt="Students learning" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="offer_content">
              <h2>What we offer for university students</h2>
              <p>
                Semester‑wise e‑learning courses with subject notes, past
                papers, and exam‑focused quizzes designed for undergraduates.
                Learn in a structured way and stay ready for midterms and
                finals.
              </p>

              <div className="offer_slider_wrapper">
                <OfferSlider />
              </div>

              {/* <a href="#courses">
                <button className="btn btn-offer">
                  EXPLORE UNIVERSITY COURSES
                </button>
              </a> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Offer;
