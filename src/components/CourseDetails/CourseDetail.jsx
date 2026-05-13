import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { motion } from "framer-motion";
import "./courseDetail.css";

// Mock course data (replace with API call later)
const getCourseById = (id) => {
  const courses = {
    "ICT11012": {
      code: "ICT 11012",
      title: "Programming Fundamentals (C)",
      year: 1,
      semester: 1,
      credits: 3,
      lecturer: "Dr. A. Rahman",
      description: "Introduction to programming using C language. Covers variables, control structures, functions, arrays, pointers, and file handling.",
      objectives: [
        "Understand fundamental programming concepts",
        "Write efficient C programs using proper syntax",
        "Implement data structures using arrays and pointers",
        "Debug and test programs effectively"
      ],
      notes: [
        { id: 1, title: "Week 1 - Introduction to C", type: "PDF", size: "2.4 MB", date: "2026-01-15" },
        { id: 2, title: "Week 2 - Variables & Data Types", type: "PDF", size: "1.8 MB", date: "2026-01-22" },
        { id: 3, title: "Week 3 - Control Structures", type: "PDF", size: "3.1 MB", date: "2026-01-29" },
        { id: 4, title: "Week 4 - Functions", type: "PDF", size: "2.7 MB", date: "2026-02-05" },
        { id: 5, title: "Week 5 - Arrays & Strings", type: "PDF", size: "3.5 MB", date: "2026-02-12" }
      ],
      papers: [
        { id: 1, title: "2025 Semester 1 Final Exam", type: "PDF", size: "1.2 MB", year: 2025 },
        { id: 2, title: "2024 Semester 1 Final Exam", type: "PDF", size: "980 KB", year: 2024 },
        { id: 3, title: "2023 Semester 1 Final Exam", type: "PDF", size: "1.1 MB", year: 2023 },
        { id: 4, title: "2025 Mid-term Exam", type: "PDF", size: "750 KB", year: 2025 }
      ],
      quizzes: [
        { id: 1, title: "Quiz 1 - Basic Syntax", questions: 10, duration: "15 min", status: "completed", score: 8 },
        { id: 2, title: "Quiz 2 - Control Flow", questions: 12, duration: "20 min", status: "completed", score: 10 },
        { id: 3, title: "Quiz 3 - Functions", questions: 15, duration: "25 min", status: "available", score: null },
        { id: 4, title: "Quiz 4 - Pointers", questions: 15, duration: "25 min", status: "locked", score: null }
      ],
      progress: {
        completion: 65,
        lecturesWatched: 13,
        totalLectures: 20,
        assignmentsCompleted: 4,
        totalAssignments: 6,
        quizzesCompleted: 2,
        totalQuizzes: 4,
        averageScore: 85
      }
    },
    "ICT21031": {
      code: "ICT 21031",
      title: "Data Structures and Algorithms",
      year: 2,
      semester: 1,
      credits: 4,
      lecturer: "Dr. S. Fathima",
      description: "Comprehensive study of data structures including arrays, linked lists, stacks, queues, trees, graphs, and algorithm analysis.",
      objectives: [
        "Understand fundamental data structures",
        "Analyze algorithm complexity using Big-O notation",
        "Implement sorting and searching algorithms",
        "Solve problems using appropriate data structures"
      ],
      notes: [
        { id: 1, title: "Week 1 - Algorithm Analysis", type: "PDF", size: "3.2 MB", date: "2026-01-15" },
        { id: 2, title: "Week 2 - Arrays & Linked Lists", type: "PDF", size: "4.1 MB", date: "2026-01-22" },
        { id: 3, title: "Week 3 - Stacks & Queues", type: "PDF", size: "2.9 MB", date: "2026-01-29" }
      ],
      papers: [
        { id: 1, title: "2025 Semester 1 Final Exam", type: "PDF", size: "1.5 MB", year: 2025 },
        { id: 2, title: "2024 Semester 1 Final Exam", type: "PDF", size: "1.3 MB", year: 2024 }
      ],
      quizzes: [
        { id: 1, title: "Quiz 1 - Complexity Analysis", questions: 10, duration: "20 min", status: "completed", score: 9 },
        { id: 2, title: "Quiz 2 - Linked Lists", questions: 12, duration: "25 min", status: "available", score: null }
      ],
      progress: {
        completion: 45,
        lecturesWatched: 9,
        totalLectures: 20,
        assignmentsCompleted: 2,
        totalAssignments: 5,
        quizzesCompleted: 1,
        totalQuizzes: 4,
        averageScore: 90
      }
    }
  };
  
  return courses[id] || null;
};

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const course = getCourseById(courseId);

  if (!course) {
    return (
      <section className="course-detail-section">
        <Container>
          <div className="course-not-found">
            <h2>Course Not Found</h2>
            <button onClick={() => navigate("/courses")} className="btn-back">
              Back to Courses
            </button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="course-detail-section">
      <Container>
        {/* BREADCRUMB & BACK BUTTON */}
        <motion.div
          className="course-breadcrumb"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button onClick={() => navigate("/courses")} className="btn-back-minimal">
            <span className="back-arrow">←</span> Back to Courses
          </button>
        </motion.div>

        {/* COURSE HEADER */}
        <motion.div
          className="course-detail-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="course-header-content">
            <div className="course-code-badge">{course.code}</div>
            <h1 className="course-detail-title">{course.title}</h1>
            <div className="course-meta-info">
              <span className="meta-item">Year {course.year}</span>
              <span className="meta-divider">•</span>
              <span className="meta-item">Semester {course.semester}</span>
              <span className="meta-divider">•</span>
              <span className="meta-item">{course.credits} Credits</span>
              <span className="meta-divider">•</span>
              <span className="meta-item">{course.lecturer}</span>
            </div>
            <p className="course-description">{course.description}</p>
          </div>

          {/* PROGRESS RING */}
          <div className="course-progress-ring">
            <svg width="140" height="140" viewBox="0 0 140 140">
              <circle
                cx="70"
                cy="70"
                r="60"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="12"
              />
              <circle
                cx="70"
                cy="70"
                r="60"
                fill="none"
                stroke="url(#progressGradient)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={`${course.progress.completion * 3.77} 377`}
                transform="rotate(-90 70 70)"
              />
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7a1cac" />
                  <stop offset="100%" stopColor="#ad49e1" />
                </linearGradient>
              </defs>
            </svg>
            <div className="progress-text">
              <span className="progress-percentage">{course.progress.completion}%</span>
              <span className="progress-label">Complete</span>
            </div>
          </div>
        </motion.div>

        {/* TABS NAVIGATION */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Nav tabs className="course-tabs">
            <NavItem>
              <NavLink
                className={activeTab === "overview" ? "active" : ""}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={activeTab === "notes" ? "active" : ""}
                onClick={() => setActiveTab("notes")}
              >
                Notes ({course.notes.length})
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={activeTab === "papers" ? "active" : ""}
                onClick={() => setActiveTab("papers")}
              >
                Past Papers ({course.papers.length})
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={activeTab === "quizzes" ? "active" : ""}
                onClick={() => setActiveTab("quizzes")}
              >
                Quizzes ({course.quizzes.length})
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={activeTab === "progress" ? "active" : ""}
                onClick={() => setActiveTab("progress")}
              >
                Progress
              </NavLink>
            </NavItem>
          </Nav>

          {/* TAB CONTENT */}
          <TabContent activeTab={activeTab} className="course-tab-content">
            {/* OVERVIEW TAB */}
            <TabPane tabId="overview">
              <Row>
                <Col lg="8">
                  <div className="content-card">
                    <h3>Course Objectives</h3>
                    <ul className="objectives-list">
                      {course.objectives.map((obj, idx) => (
                        <li key={idx}>{obj}</li>
                      ))}
                    </ul>
                  </div>
                </Col>
                <Col lg="4">
                  <div className="content-card stats-card">
                    <h4>Quick Stats</h4>
                    <div className="stat-item">
                      <span className="stat-label">Lectures</span>
                      <span className="stat-value">{course.progress.lecturesWatched}/{course.progress.totalLectures}</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Assignments</span>
                      <span className="stat-value">{course.progress.assignmentsCompleted}/{course.progress.totalAssignments}</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-label">Average Score</span>
                      <span className="stat-value">{course.progress.averageScore}%</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </TabPane>

            {/* NOTES TAB */}
            <TabPane tabId="notes">
              <div className="resources-grid">
                {course.notes.map((note) => (
                  <div key={note.id} className="resource-card">
                    <div className="resource-icon">📄</div>
                    <div className="resource-info">
                      <h4>{note.title}</h4>
                      <div className="resource-meta">
                        <span>{note.type}</span>
                        <span>•</span>
                        <span>{note.size}</span>
                        <span>•</span>
                        <span>{note.date}</span>
                      </div>
                    </div>
                    <button className="btn-download">
                      <span className="download-icon">⬇</span>
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </TabPane>

            {/* PAST PAPERS TAB */}
            <TabPane tabId="papers">
              <div className="resources-grid">
                {course.papers.map((paper) => (
                  <div key={paper.id} className="resource-card">
                    <div className="resource-icon">📋</div>
                    <div className="resource-info">
                      <h4>{paper.title}</h4>
                      <div className="resource-meta">
                        <span>{paper.type}</span>
                        <span>•</span>
                        <span>{paper.size}</span>
                        <span>•</span>
                        <span>{paper.year}</span>
                      </div>
                    </div>
                    <button className="btn-download">
                      <span className="download-icon">⬇</span>
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </TabPane>

            {/* QUIZZES TAB */}
            <TabPane tabId="quizzes">
              <div className="quizzes-grid">
                {course.quizzes.map((quiz) => (
                  <div key={quiz.id} className={`quiz-card ${quiz.status}`}>
                    <div className="quiz-header">
                      <h4>{quiz.title}</h4>
                      <span className={`quiz-status-badge ${quiz.status}`}>
                        {quiz.status === "completed" && "✓ Completed"}
                        {quiz.status === "available" && "Available"}
                        {quiz.status === "locked" && "🔒 Locked"}
                      </span>
                    </div>
                    <div className="quiz-meta">
                      <span>{quiz.questions} questions</span>
                      <span>•</span>
                      <span>{quiz.duration}</span>
                    </div>
                    {quiz.score !== null && (
                      <div className="quiz-score">
                        Score: <strong>{quiz.score}/{quiz.questions}</strong>
                      </div>
                    )}
                    <button
                      className="btn-quiz"
                      disabled={quiz.status === "locked"}
                    >
                      {quiz.status === "completed" ? "Review Quiz" : "Start Quiz"}
                      {quiz.status === "available" && <span className="play-icon"> ▶</span>}
                    </button>
                  </div>
                ))}
              </div>
            </TabPane>

            {/* PROGRESS TAB */}
            <TabPane tabId="progress">
              <Row>
                <Col lg="6">
                  <div className="content-card">
                    <h3>Learning Progress</h3>
                    <div className="progress-bar-item">
                      <div className="progress-bar-header">
                        <span>Lectures Watched</span>
                        <span>{course.progress.lecturesWatched}/{course.progress.totalLectures}</span>
                      </div>
                      <div className="progress-bar-track">
                        <div
                          className="progress-bar-fill"
                          style={{ width: `${(course.progress.lecturesWatched / course.progress.totalLectures) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div className="progress-bar-item">
                      <div className="progress-bar-header">
                        <span>Assignments Completed</span>
                        <span>{course.progress.assignmentsCompleted}/{course.progress.totalAssignments}</span>
                      </div>
                      <div className="progress-bar-track">
                        <div
                          className="progress-bar-fill"
                          style={{ width: `${(course.progress.assignmentsCompleted / course.progress.totalAssignments) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div className="progress-bar-item">
                      <div className="progress-bar-header">
                        <span>Quizzes Completed</span>
                        <span>{course.progress.quizzesCompleted}/{course.progress.totalQuizzes}</span>
                      </div>
                      <div className="progress-bar-track">
                        <div
                          className="progress-bar-fill"
                          style={{ width: `${(course.progress.quizzesCompleted / course.progress.totalQuizzes) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </Col>

                <Col lg="6">
                  <div className="content-card">
                    <h3>Performance Summary</h3>
                    <div className="performance-summary">
                      <div className="performance-item">
                        <div className="performance-label">Overall Completion</div>
                        <div className="performance-value">{course.progress.completion}%</div>
                      </div>
                      <div className="performance-item">
                        <div className="performance-label">Average Score</div>
                        <div className="performance-value">{course.progress.averageScore}%</div>
                      </div>
                      <div className="performance-item">
                        <div className="performance-label">Grade Status</div>
                        <div className="performance-value grade-a">On Track</div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </TabPane>
          </TabContent>
        </motion.div>
      </Container>
    </section>
  );
};

export default CourseDetail;