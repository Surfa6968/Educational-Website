import React from 'react';
import { Container, Row, Col } from "reactstrap";
import "./hero-section.css";
// import SearchIcon from '../../assets/images/search.svg';
import heroImg from '../../assets/images/hero-img1.png';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          {/* Left side: text content */}
          <Col lg="6" md="6">
            <motion.div
              className="hero_content"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Title */}
              <motion.h1
                className="mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                University <br />
                <span className="e-purple">E‑Learning</span> Courses <br />
                For Every Semester
              </motion.h1>

              {/* Subtitle / paragraph */}
              <motion.p
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              >
                Access subject‑wise notes, past papers, and exam‑focused courses
                for your degree. Study by semester, revise faster, and stay
                ready for midterms and finals.
              </motion.p>

              {/* Search bar
              <motion.div
                className="search mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
              >
                <img src={SearchIcon} alt="search" />
                <input
                  type="text"
                  placeholder="Search university subjects or courses"
                />
              </motion.div> */}

               {/* Primary CTA buttons */}
                     <motion.div
                            className="hero_cta_buttons"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.4 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                            >
                            {/* Navigate to AuthChoice page */}
                            <Link to="/register">
                            <button className="btn-search me-3">GET STARTED</button>
                            </Link>

                            <Link to="/courses">
                            <button className="btn-secondary-hero">EXPLORE COURSES</button>
                            </Link>
                     </motion.div>
              </motion.div>
          </Col>

          {/* Right side: hero image */}
          <Col lg="6" md="6">
            <motion.img
              src={heroImg}
              alt="Online learning"
              className="w-100"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
