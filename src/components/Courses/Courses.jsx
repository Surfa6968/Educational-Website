import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import "./courses.css";
import CourseCard from "./CourseCard";
import SearchIcon from '../../assets/images/search.svg';


// SEUSL-style ICT courses data
const allCourses = [
  {
    id: "ICT11012",
    code: "ICT 11012",
    title: "Programming Fundamentals (C)",
    year: 1,
    semester: 1,
    department: "ICT",
    hasNotes: true,
    hasPapers: true,
    hasQuizzes: true,
    hasProgress: true,
  },
  {
    id: "ICT11013",
    code: "ICT 11013",
    title: "Introduction to Computer Systems",
    year: 1,
    semester: 1,
    department: "ICT",
    hasNotes: true,
    hasPapers: true,
    hasQuizzes: true,
    hasProgress: false,
  },
  {
    id: "ICT11014",
    code: "ICT 11014",
    title: "Fundamentals of Information Technology",
    year: 1,
    semester: 1,
    department: "ICT",
    hasNotes: true,
    hasPapers: true,
    hasQuizzes: true,
    hasProgress: false,
  },
  {
    id: "ITM11011",
    code: "ITM 11011",
    title: "Discrete Mathematics",
    year: 1,
    semester: 1,
    department: "ICT",
    hasNotes: true,
    hasPapers: true,
    hasQuizzes: true,
    hasProgress: false,
  },

  {
    id: "ICT12023",
    code: "ICT 12023",
    title: "Object Oriented Programming (Java)",
    year: 1,
    semester: 2,
    department: "ICT",
    hasNotes: true,
    hasPapers: true,
    hasQuizzes: true,
    hasProgress: false,
  },
  {
    id: "ICT12021",
    code: "ICT 12021",
    title: "Web Design and Development",
    year: 1,
    semester: 2,
    department: "ICT",
    hasNotes: true,
    hasPapers: true,
    hasQuizzes: true,
    hasProgress: false,
  },
  {
    id: "ICT12024",
    code: "ICT 12024",
    title: "Computer Architecture",
    year: 1,
    semester: 2,
    department: "ICT",
    hasNotes: true,
    hasPapers: true,
    hasQuizzes: false,
    hasProgress: false,
  },
  {
    id: "ITM12022",
    code: "ITM 12022",
    title: "Statistics for Computing",
    year: 1,
    semester: 2,
    department: "ICT",
    hasNotes: true,
    hasPapers: true,
    hasQuizzes: false,
    hasProgress: false,
  },

  {
    id: "ITM21023",
    code: "ITM 21023",
    title: "Mathematics for Computing",
    year: 2,
    semester: 1,
    department: "ICT",
    hasNotes: true,
    hasPapers: true,
    hasQuizzes: true,
    hasProgress: true,
  },
  {
    id: "ICT21031",
    code: "ICT 21031",
    title: "Data Structures and Algorithms",
    year: 2,
    semester: 1,
    department: "ICT",
    hasNotes: true,
    hasPapers: true,
    hasQuizzes: true,
    hasProgress: true,
  },

  {
    id: "ICT22032",
    code: "ICT 22032",
    title: "Database Systems",
    year: 2,
    semester: 2,
    department: "ICT",
    hasNotes: true,
    hasPapers: true,
    hasQuizzes: true,
    hasProgress: true,
  },
  {
    id: "ICT22033",
    code: "ICT 22033",
    title: "Computer Networks",
    year: 2,
    semester: 2,
    department: "ICT",
    hasNotes: true,
    hasPapers: true,
    hasQuizzes: true,
    hasProgress: false,
  },

  {
    id: "ICT31041",
    code: "ICT 31041",
    title: "Operating Systems",
    year: 3,
    semester: 1,
    department: "ICT",
    hasNotes: true,
    hasPapers: true,
    hasQuizzes: true,
    hasProgress: true,
  },
  {
    id: "ICT31042",
    code: "ICT 31042",
    title: "Software Engineering",
    year: 3,
    semester: 1,
    department: "ICT",
    hasNotes: true,
    hasPapers: true,
    hasQuizzes: true,
    hasProgress: true,
  },

  {
    id: "ICT41051",
    code: "ICT 41051",
    title: "Information Security and Cryptography",
    year: 4,
    semester: 1,
    department: "ICT",
    hasNotes: true,
    hasPapers: true,
    hasQuizzes: true,
    hasProgress: false,
  },
  {
    id: "ICT42053",
    code: "ICT 42053",
    title: "Artificial Intelligence and Machine Learning",
    year: 4,
    semester: 2,
    department: "ICT",
    hasNotes: true,
    hasPapers: true,
    hasQuizzes: true,
    hasProgress: false,
  },
];

const Courses = () => {
  const [department, setDepartment] = useState("ICT");
  const [year, setYear] = useState("all");
  const [semester, setSemester] = useState("all");
  const [search, setSearch] = useState("");
  const [resource, setResource] = useState("all");

  const filteredCourses = allCourses.filter((course) => {
    if (department !== "all" && course.department !== department) return false;
    if (year !== "all" && course.year !== Number(year)) return false;
    if (semester !== "all" && course.semester !== Number(semester)) return false;
    if (resource === "notes" && !course.hasNotes) return false;
    if (resource === "papers" && !course.hasPapers) return false;
    if (resource === "quizzes" && !course.hasQuizzes) return false;
    if (resource === "progress" && !course.hasProgress) return false;
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      return (
        course.code.toLowerCase().includes(q) ||
        course.title.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <section
      className="courses-section-linear"
     
    >
      <Container>
        {/* HEADER */}
        <Row>
          <Col lg="12">
            <motion.div
              className="courses_header"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2>Semester-wise ICT Courses</h2>
              <p>
                Browse SEUSL ICT modules by year and semester, then open each course
                to access notes, past papers, quizzes, and your progress.
              </p>
            </motion.div>
          </Col>
        </Row>

        {/* FILTERS */}
        <div className="courses_filters">
          <div className="filter_group">
            <label>Department</label>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="ICT">ICT</option>
              <option value="all">All departments</option>
            </select>
          </div>

          <div className="filter_group">
            <label>Year</label>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="all">All</option>
              <option value="1">Year 1</option>
              <option value="2">Year 2</option>
              <option value="3">Year 3</option>
              <option value="4">Year 4</option>
            </select>
          </div>

          <div className="filter_group">
            <label>Semester</label>
            <select
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            >
              <option value="all">All</option>
              <option value="1">Semester I</option>
              <option value="2">Semester II</option>
            </select>
          </div>

          <div className="filter_group">
            <label>Resources</label>
            <select
              value={resource}
              onChange={(e) => setResource(e.target.value)}
            >
              <option value="all">All</option>
              <option value="notes">With Notes</option>
              <option value="papers">With Past Papers</option>
              <option value="quizzes">With Quizzes</option>
              <option value="progress">With Progress Tracking</option>
            </select>
          </div>

          <div className="filter_group filter_search">
            <label>Search</label>
            <div className="search_input_wrapper">
              <img src={SearchIcon} alt="Search" className="search_icon" />
              <input
                type="text"
                placeholder="Code or course name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

        </div>

        {/* COURSE GRID */}
        <Row>
          {filteredCourses.map((course) => (
            <Col lg="4" md="6" sm="12" key={course.id}>
              <CourseCard course={course} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;