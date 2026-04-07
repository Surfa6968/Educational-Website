import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <Container>
        <Row className="align-items-stretch">
          {/* Left: Text + info */}
          <Col lg="5" md="6" className="mb-4 mb-md-0">
            <div className="contact_intro">
              <h2>Contact Us</h2>
              <p>
                Have questions about courses, exams, or resources? Send us a
                message and the ICT team or faculty office will get back to you.
              </p>

              <div className="contact_info_block">
                <h6>University Contact</h6>
                <p>South Eastern University of Sri Lanka (SEUSL)</p>
                <p>University Park, Oluvil 32360, Sri Lanka</p>
                <p>Phone: +94 67 225 5062</p>
                <p>Email: info@seu.ac.lk</p>
              </div>

              <div className="contact_info_block">
                <h6>ICT Helpdesk</h6>
                <p>Email: ict-support@seu.ac.lk</p>
                <p>Hours: Mon–Fri, 8.30 AM – 4.00 PM</p>
              </div>
            </div>
          </Col>

          {/* Right: Form */}
          <Col lg="7" md="6">
            <div className="contact_card">
              <form
                className="contact_form"
                onSubmit={(e) => {
                  e.preventDefault();
                  // handle submit here
                }}
              >
                <div className="form_row">
                  <div className="form_group">
                    <label htmlFor="name">Full name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="form_group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form_group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="e.g. Issue with ICT 21031 course page"
                    required
                  />
                </div>

                <div className="form_group">
                  <label htmlFor="type">I’m contacting about</label>
                  <select id="type">
                    <option>General enquiry</option>
                    <option>Course / module issue</option>
                    <option>Account / login problem</option>
                    <option>Feedback / suggestion</option>
                  </select>
                </div>

                <div className="form_group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-contact">
                  Send message
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;