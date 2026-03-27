import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./footer.css";
import footerImg from "../../assets/images/footer_img.jpg";

const footerQuickLinks = [
  { display: "Resources", url: "#" },
  { display: "Blog", url: "#" },
  { display: "Documents", url: "#" },
];

const footerComLinks = [
  { display: "Support", url: "#" },
  { display: "Help Center", url: "#" },
];

const footerInfoLinks = [
  { display: "About Us", url: "#" },
  { display: "Partners", url: "#" },
  { display: "Contact Us", url: "#" },
];

const footerCoursesLinks = [
  { display: "Semester‑wise Courses", url: "#" },
  { display: "Past Papers & Model Exams", url: "#" },
  { display: "Topic‑wise Quizzes", url: "#" },
  { display: "Progress & Analytics", url: "#" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="6">
            <h6 className="text-white pt-4">University Learning</h6>
            <ListGroup className="link_list">
              {footerCoursesLinks.map((item, index) => (
                <ListGroupItem
                  key={index}
                  className="border-0 ps-0 link_item"
                >
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="text-white pt-4">Explore</h6>
            <ListGroup className="link_list">
              {footerQuickLinks.map((item, index) => (
                <ListGroupItem
                  key={index}
                  className="border-0 ps-0 link_item"
                >
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          <Col lg="3" md="6">
            <h6 className="text-white pt-4">Community</h6>
            <ListGroup className="link_list">
              {footerComLinks.map((item, index) => (
                <ListGroupItem
                  key={index}
                  className="border-0 ps-0 link_item"
                >
                  <a href={item.url}>{item.display}</a>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>

          {/* South Eastern University footer block */}
          <Col lg="3" md="6">
            <h6 className="text-white pt-4">South Eastern University</h6>
            <div className="text-white footer-university">
              <p className="mb-1">South Eastern University of Sri Lanka (SEUSL)</p>
              <p className="mb-1">
                University Park, Oluvil, 32360, Sri Lanka
              </p>
              <p className="mb-1">Phone: +94 67 225 5062 / 63 / 64</p>
              <a
                href="https://www.seu.ac.lk"
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                Visit SEUSL Website
              </a>
            </div>
          </Col>

          <Col lg="12">
            <div className="d-flex align-items-center justify-content-center gap-2 p-4 logo">
              <img src={footerImg} alt="Footer logo" />
            </div>

            <div className="follows">
              <p className="mb-0 d-flex align-items-center justify-content-center gap-2 text-white">
                © All rights reserved.
              </p>

              <div className="d-flex align-items-center justify-content-center gap-2 links_socials">
                <span>
                  <a href="https://www.facebook.com/SEUSL/" target="_blank" rel="noreferrer">
                    <i className="ri-facebook-fill text-white"></i>
                  </a>
                </span>
                <span>
                  <a href="https://x.com/SEUSL_Official" target="_blank" rel="noreferrer">
                    <i className="ri-twitter-fill text-white"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.instagram.com/explore/locations/1025399532/south-eastern-university-of-sri-lanka/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ri-instagram-line text-white"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="https://lk.linkedin.com/company/faculty-of-engineering-seusl"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ri-linkedin-fill text-white"></i>
                  </a>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
