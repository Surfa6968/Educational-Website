import React, { useState } from "react";
import "./updates.css";
import { Container, Row, Col } from "reactstrap";
import updateImg from "../../assets/images/getUpdates_img.png";
import { useNavigate } from "react-router-dom";

const Updates = () => {
  const navigate = useNavigate();
  const [subscribedEmails, setSubscribedEmails] = useState([]);
  const [status, setStatus] = useState("none"); // "none" | "success" | "duplicate"

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = (formData.get("email") || "").toString().trim().toLowerCase();

    if (!email) return;

    if (subscribedEmails.includes(email)) {
      // already subscribed
      setStatus("duplicate");
    } else {
      // new subscription
      setSubscribedEmails((prev) => [...prev, email]);
      setStatus("success");
      navigate("/subscribe-success");
    }
  };

  return (
    <section className="updates_section" id="updates">
      <Container className="updates">
        <Row className="align-items-center">
          {/* Left: Text + form */}
          <Col lg="6" md="6">
            <div className="update_content">
              <div className="update_text">
                <h2 className="update_title">Get updates</h2>
                <p className="update_p">
                  Subscribe to receive semester-wise updates on new course
                  materials, uploaded model papers, topic-wise quizzes, and
                  important exam-related announcements for SEUSL students.
                </p>
              </div>

              <form className="getUpdates" onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="university-email@seu.ac.lk"
                  required
                />
                <button type="submit" className="btn btn-update">
                  Subscribe
                </button>
              </form>

              {status === "duplicate" && (
                <p className="update_error">You are already subscribed.</p>
              )}

              <p className="update_hint">
                No spam, only useful updates. You can unsubscribe at any time.
              </p>
            </div>
          </Col>

          {/* Right: Image */}
          <Col lg="6" md="6">
            <div className="update_img">
              <img src={updateImg} alt="Get updates" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Updates;
