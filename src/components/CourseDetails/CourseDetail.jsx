import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import { motion } from "framer-motion";
import "./courseDetail.css";


// Mock course data (replace with API call later)
const getCourseById = (id) => {
  const courses = {
    // ========== YEAR 1 SEMESTER 1 ==========
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

    "ICT11013": {
      code: "ICT 11013",
      title: "Introduction to Computer Systems",
      year: 1,
      semester: 1,
      credits: 3,
      lecturer: "Dr. M. Fazil",
      description: "Fundamentals of computer organization, hardware components, operating systems, and basic system architecture.",
      objectives: [
        "Understand computer hardware architecture",
        "Learn about operating system fundamentals",
        "Explore input/output systems and peripherals",
        "Understand memory hierarchy and storage systems"
      ],
      notes: [
        { id: 1, title: "Week 1 - Computer Architecture Basics", type: "PDF", size: "2.8 MB", date: "2026-01-15" },
        { id: 2, title: "Week 2 - CPU Organization", type: "PDF", size: "3.2 MB", date: "2026-01-22" },
        { id: 3, title: "Week 3 - Memory Systems", type: "PDF", size: "2.5 MB", date: "2026-01-29" },
        { id: 4, title: "Week 4 - I/O Systems", type: "PDF", size: "2.9 MB", date: "2026-02-05" }
      ],
      papers: [
        { id: 1, title: "2025 Semester 1 Final Exam", type: "PDF", size: "1.4 MB", year: 2025 },
        { id: 2, title: "2024 Semester 1 Final Exam", type: "PDF", size: "1.1 MB", year: 2024 },
        { id: 3, title: "2023 Semester 1 Final Exam", type: "PDF", size: "1.3 MB", year: 2023 }
      ],
      quizzes: [
        { id: 1, title: "Quiz 1 - Computer Basics", questions: 10, duration: "15 min", status: "completed", score: 9 },
        { id: 2, title: "Quiz 2 - CPU & Memory", questions: 12, duration: "20 min", status: "available", score: null },
        { id: 3, title: "Quiz 3 - I/O Systems", questions: 10, duration: "15 min", status: "locked", score: null }
      ],
      progress: {
        completion: 40,
        lecturesWatched: 8,
        totalLectures: 20,
        assignmentsCompleted: 2,
        totalAssignments: 5,
        quizzesCompleted: 1,
        totalQuizzes: 3,
        averageScore: 90
      }
    },

    "ICT11014": {
      code: "ICT 11014",
      title: "Fundamentals of Information Technology",
      year: 1,
      semester: 1,
      credits: 3,
      lecturer: "Dr. N. Ahamed",
      description: "Introduction to IT concepts, computer networks, internet technologies, software applications, and digital literacy.",
      objectives: [
        "Understand basic IT concepts and terminology",
        "Learn about computer networks and internet",
        "Explore productivity software applications",
        "Develop digital literacy and security awareness"
      ],
      notes: [
        { id: 1, title: "Week 1 - IT Fundamentals", type: "PDF", size: "2.1 MB", date: "2026-01-15" },
        { id: 2, title: "Week 2 - Networks & Internet", type: "PDF", size: "3.4 MB", date: "2026-01-22" },
        { id: 3, title: "Week 3 - Software Applications", type: "PDF", size: "2.6 MB", date: "2026-01-29" },
        { id: 4, title: "Week 4 - Digital Security", type: "PDF", size: "2.8 MB", date: "2026-02-05" }
      ],
      papers: [
        { id: 1, title: "2025 Semester 1 Final Exam", type: "PDF", size: "1.0 MB", year: 2025 },
        { id: 2, title: "2024 Semester 1 Final Exam", type: "PDF", size: "950 KB", year: 2024 },
        { id: 3, title: "2025 Mid-term Exam", type: "PDF", size: "680 KB", year: 2025 }
      ],
      quizzes: [
        { id: 1, title: "Quiz 1 - IT Basics", questions: 10, duration: "15 min", status: "completed", score: 8 },
        { id: 2, title: "Quiz 2 - Networks", questions: 12, duration: "20 min", status: "available", score: null }
      ],
      progress: {
        completion: 35,
        lecturesWatched: 7,
        totalLectures: 20,
        assignmentsCompleted: 2,
        totalAssignments: 6,
        quizzesCompleted: 1,
        totalQuizzes: 2,
        averageScore: 80
      }
    },

    "ITM11011": {
      code: "ITM 11011",
      title: "Discrete Mathematics",
      year: 1,
      semester: 1,
      credits: 3,
      lecturer: "Dr. R. Jeyanthi",
      description: "Mathematical foundations for computer science including logic, sets, relations, functions, graph theory, and combinatorics.",
      objectives: [
        "Master propositional and predicate logic",
        "Understand set theory and relations",
        "Apply graph theory concepts",
        "Solve combinatorial problems"
      ],
      notes: [
        { id: 1, title: "Week 1 - Logic & Proofs", type: "PDF", size: "2.9 MB", date: "2026-01-15" },
        { id: 2, title: "Week 2 - Sets & Relations", type: "PDF", size: "3.1 MB", date: "2026-01-22" },
        { id: 3, title: "Week 3 - Functions", type: "PDF", size: "2.7 MB", date: "2026-01-29" },
        { id: 4, title: "Week 4 - Graph Theory", type: "PDF", size: "3.5 MB", date: "2026-02-05" }
      ],
      papers: [
        { id: 1, title: "2025 Semester 1 Final Exam", type: "PDF", size: "1.3 MB", year: 2025 },
        { id: 2, title: "2024 Semester 1 Final Exam", type: "PDF", size: "1.2 MB", year: 2024 },
        { id: 3, title: "2023 Semester 1 Final Exam", type: "PDF", size: "1.4 MB", year: 2023 }
      ],
      quizzes: [
        { id: 1, title: "Quiz 1 - Logic", questions: 12, duration: "20 min", status: "completed", score: 10 },
        { id: 2, title: "Quiz 2 - Set Theory", questions: 10, duration: "15 min", status: "available", score: null }
      ],
      progress: {
        completion: 50,
        lecturesWatched: 10,
        totalLectures: 20,
        assignmentsCompleted: 3,
        totalAssignments: 6,
        quizzesCompleted: 1,
        totalQuizzes: 2,
        averageScore: 83
      }
    },

    // ========== YEAR 1 SEMESTER 2 ==========
    "ICT12023": {
      code: "ICT 12023",
      title: "Object Oriented Programming (Java)",
      year: 1,
      semester: 2,
      credits: 4,
      lecturer: "Dr. S. Fathima",
      description: "Object-oriented programming concepts using Java including classes, inheritance, polymorphism, and exception handling.",
      objectives: [
        "Master OOP principles and concepts",
        "Develop Java applications using classes and objects",
        "Implement inheritance and polymorphism",
        "Handle exceptions and build robust programs"
      ],
      notes: [
        { id: 1, title: "Week 1 - Java Basics & OOP Intro", type: "PDF", size: "2.6 MB", date: "2026-05-15" },
        { id: 2, title: "Week 2 - Classes & Objects", type: "PDF", size: "3.2 MB", date: "2026-05-22" },
        { id: 3, title: "Week 3 - Inheritance", type: "PDF", size: "2.9 MB", date: "2026-05-29" },
        { id: 4, title: "Week 4 - Polymorphism", type: "PDF", size: "3.1 MB", date: "2026-06-05" },
        { id: 5, title: "Week 5 - Exception Handling", type: "PDF", size: "2.7 MB", date: "2026-06-12" }
      ],
      papers: [
        { id: 1, title: "2025 Semester 2 Final Exam", type: "PDF", size: "1.5 MB", year: 2025 },
        { id: 2, title: "2024 Semester 2 Final Exam", type: "PDF", size: "1.3 MB", year: 2024 },
        { id: 3, title: "2023 Semester 2 Final Exam", type: "PDF", size: "1.4 MB", year: 2023 }
      ],
      quizzes: [
        { id: 1, title: "Quiz 1 - Java Syntax", questions: 10, duration: "15 min", status: "completed", score: 9 },
        { id: 2, title: "Quiz 2 - OOP Concepts", questions: 12, duration: "20 min", status: "completed", score: 11 },
        { id: 3, title: "Quiz 3 - Inheritance", questions: 15, duration: "25 min", status: "available", score: null }
      ],
      progress: {
        completion: 58,
        lecturesWatched: 11,
        totalLectures: 20,
        assignmentsCompleted: 4,
        totalAssignments: 7,
        quizzesCompleted: 2,
        totalQuizzes: 3,
        averageScore: 91
      }
    },

    "ICT12021": {
      code: "ICT 12021",
      title: "Web Design and Development",
      year: 1,
      semester: 2,
      credits: 3,
      lecturer: "Mr. K. Prasanth",
      description: "Introduction to web technologies including HTML, CSS, JavaScript, responsive design, and basic web development.",
      objectives: [
        "Create structured web pages using HTML5",
        "Style websites using CSS3",
        "Add interactivity with JavaScript",
        "Build responsive web layouts"
      ],
      notes: [
        { id: 1, title: "Week 1 - HTML5 Fundamentals", type: "PDF", size: "2.3 MB", date: "2026-05-15" },
        { id: 2, title: "Week 2 - CSS3 Styling", type: "PDF", size: "3.4 MB", date: "2026-05-22" },
        { id: 3, title: "Week 3 - JavaScript Basics", type: "PDF", size: "2.8 MB", date: "2026-05-29" },
        { id: 4, title: "Week 4 - Responsive Design", type: "PDF", size: "3.1 MB", date: "2026-06-05" },
        { id: 5, title: "Week 5 - DOM Manipulation", type: "PDF", size: "2.9 MB", date: "2026-06-12" }
      ],
      papers: [
        { id: 1, title: "2025 Semester 2 Final Exam", type: "PDF", size: "1.1 MB", year: 2025 },
        { id: 2, title: "2024 Semester 2 Final Exam", type: "PDF", size: "1.0 MB", year: 2024 },
        { id: 3, title: "2025 Mid-term Exam", type: "PDF", size: "850 KB", year: 2025 }
      ],
      quizzes: [
        { id: 1, title: "Quiz 1 - HTML & CSS", questions: 15, duration: "20 min", status: "completed", score: 13 },
        { id: 2, title: "Quiz 2 - JavaScript", questions: 12, duration: "20 min", status: "available", score: null }
      ],
      progress: {
        completion: 55,
        lecturesWatched: 11,
        totalLectures: 20,
        assignmentsCompleted: 4,
        totalAssignments: 7,
        quizzesCompleted: 1,
        totalQuizzes: 2,
        averageScore: 87
      }
    },

    "ICT12024": {
      code: "ICT 12024",
      title: "Computer Architecture",
      year: 1,
      semester: 2,
      credits: 3,
      lecturer: "Dr. A. Rahman",
      description: "Detailed study of computer organization, instruction sets, pipelining, memory hierarchy, and I/O systems.",
      objectives: [
        "Understand computer organization principles",
        "Learn instruction set architecture",
        "Explore pipelining and parallelism",
        "Analyze memory hierarchy and cache systems"
      ],
      notes: [
        { id: 1, title: "Week 1 - Computer Organization", type: "PDF", size: "3.2 MB", date: "2026-05-15" },
        { id: 2, title: "Week 2 - Instruction Sets", type: "PDF", size: "2.9 MB", date: "2026-05-22" },
        { id: 3, title: "Week 3 - Pipelining", type: "PDF", size: "3.5 MB", date: "2026-05-29" },
        { id: 4, title: "Week 4 - Memory Hierarchy", type: "PDF", size: "3.1 MB", date: "2026-06-05" }
      ],
      papers: [
        { id: 1, title: "2025 Semester 2 Final Exam", type: "PDF", size: "1.4 MB", year: 2025 },
        { id: 2, title: "2024 Semester 2 Final Exam", type: "PDF", size: "1.2 MB", year: 2024 },
        { id: 3, title: "2023 Semester 2 Final Exam", type: "PDF", size: "1.3 MB", year: 2023 }
      ],
      quizzes: [],
      progress: {
        completion: 30,
        lecturesWatched: 6,
        totalLectures: 20,
        assignmentsCompleted: 2,
        totalAssignments: 6,
        quizzesCompleted: 0,
        totalQuizzes: 0,
        averageScore: 0
      }
    },

    "ITM12022": {
      code: "ITM 12022",
      title: "Statistics for Computing",
      year: 1,
      semester: 2,
      credits: 3,
      lecturer: "Dr. R. Jeyanthi",
      description: "Statistical methods for data analysis, probability theory, distributions, hypothesis testing, and regression.",
      objectives: [
        "Understand probability theory fundamentals",
        "Apply statistical distributions",
        "Perform hypothesis testing",
        "Use regression analysis techniques"
      ],
      notes: [
        { id: 1, title: "Week 1 - Probability Basics", type: "PDF", size: "2.7 MB", date: "2026-05-15" },
        { id: 2, title: "Week 2 - Distributions", type: "PDF", size: "3.0 MB", date: "2026-05-22" },
        { id: 3, title: "Week 3 - Hypothesis Testing", type: "PDF", size: "2.8 MB", date: "2026-05-29" },
        { id: 4, title: "Week 4 - Regression Analysis", type: "PDF", size: "3.2 MB", date: "2026-06-05" }
      ],
      papers: [
        { id: 1, title: "2025 Semester 2 Final Exam", type: "PDF", size: "1.3 MB", year: 2025 },
        { id: 2, title: "2024 Semester 2 Final Exam", type: "PDF", size: "1.1 MB", year: 2024 }
      ],
      quizzes: [],
      progress: {
        completion: 25,
        lecturesWatched: 5,
        totalLectures: 20,
        assignmentsCompleted: 1,
        totalAssignments: 5,
        quizzesCompleted: 0,
        totalQuizzes: 0,
        averageScore: 0
      }
    },

    // ========== YEAR 2 SEMESTER 1 ==========
    "ITM21023": {
      code: "ITM 21023",
      title: "Mathematics for Computing",
      year: 2,
      semester: 1,
      credits: 4,
      lecturer: "Dr. P. Surendran",
      description: "Advanced mathematics including linear algebra, calculus, numerical methods, and optimization for computing applications.",
      objectives: [
        "Master linear algebra concepts",
        "Apply calculus in computing contexts",
        "Implement numerical methods",
        "Solve optimization problems"
      ],
      notes: [
        { id: 1, title: "Week 1 - Linear Algebra", type: "PDF", size: "3.3 MB", date: "2026-01-15" },
        { id: 2, title: "Week 2 - Matrices & Determinants", type: "PDF", size: "2.9 MB", date: "2026-01-22" },
        { id: 3, title: "Week 3 - Calculus Fundamentals", type: "PDF", size: "3.1 MB", date: "2026-01-29" },
        { id: 4, title: "Week 4 - Numerical Methods", type: "PDF", size: "3.4 MB", date: "2026-02-05" },
        { id: 5, title: "Week 5 - Optimization", type: "PDF", size: "3.0 MB", date: "2026-02-12" }
      ],
      papers: [
        { id: 1, title: "2025 Semester 1 Final Exam", type: "PDF", size: "1.6 MB", year: 2025 },
        { id: 2, title: "2024 Semester 1 Final Exam", type: "PDF", size: "1.4 MB", year: 2024 },
        { id: 3, title: "2023 Semester 1 Final Exam", type: "PDF", size: "1.5 MB", year: 2023 }
      ],
      quizzes: [
        { id: 1, title: "Quiz 1 - Linear Algebra", questions: 12, duration: "25 min", status: "completed", score: 11 },
        { id: 2, title: "Quiz 2 - Calculus", questions: 10, duration: "20 min", status: "completed", score: 9 },
        { id: 3, title: "Quiz 3 - Optimization", questions: 15, duration: "30 min", status: "available", score: null }
      ],
      progress: {
        completion: 68,
        lecturesWatched: 13,
        totalLectures: 20,
        assignmentsCompleted: 5,
        totalAssignments: 7,
        quizzesCompleted: 2,
        totalQuizzes: 3,
        averageScore: 91
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
        { id: 3, title: "Week 3 - Stacks & Queues", type: "PDF", size: "2.9 MB", date: "2026-01-29" },
        { id: 4, title: "Week 4 - Trees", type: "PDF", size: "3.7 MB", date: "2026-02-05" },
        { id: 5, title: "Week 5 - Graph Algorithms", type: "PDF", size: "4.2 MB", date: "2026-02-12" }
      ],
      papers: [
        { id: 1, title: "2025 Semester 1 Final Exam", type: "PDF", size: "1.5 MB", year: 2025 },
        { id: 2, title: "2024 Semester 1 Final Exam", type: "PDF", size: "1.3 MB", year: 2024 },
        { id: 3, title: "2023 Semester 1 Final Exam", type: "PDF", size: "1.4 MB", year: 2023 }
      ],
      quizzes: [
        { id: 1, title: "Quiz 1 - Complexity Analysis", questions: 10, duration: "20 min", status: "completed", score: 9 },
        { id: 2, title: "Quiz 2 - Linked Lists", questions: 12, duration: "25 min", status: "completed", score: 11 },
        { id: 3, title: "Quiz 3 - Trees & Graphs", questions: 15, duration: "30 min", status: "available", score: null }
      ],
      progress: {
        completion: 72,
        lecturesWatched: 14,
        totalLectures: 20,
        assignmentsCompleted: 5,
        totalAssignments: 7,
        quizzesCompleted: 2,
        totalQuizzes: 3,
        averageScore: 91
      }
    },

    // ========== YEAR 2 SEMESTER 2 ==========
    "ICT22032": {
      code: "ICT 22032",
      title: "Database Systems",
      year: 2,
      semester: 2,
      credits: 4,
      lecturer: "Dr. M. Fazil",
      description: "Database design, SQL, normalization, transactions, relational database management systems, and NoSQL databases.",
      objectives: [
        "Design efficient database schemas",
        "Write complex SQL queries",
        "Apply normalization techniques",
        "Understand transaction management and ACID properties"
      ],
      notes: [
        { id: 1, title: "Week 1 - Database Fundamentals", type: "PDF", size: "2.8 MB", date: "2026-05-15" },
        { id: 2, title: "Week 2 - ER Modeling", type: "PDF", size: "3.5 MB", date: "2026-05-22" },
        { id: 3, title: "Week 3 - SQL Basics", type: "PDF", size: "3.1 MB", date: "2026-05-29" },
        { id: 4, title: "Week 4 - Advanced SQL", type: "PDF", size: "3.4 MB", date: "2026-06-05" },
        { id: 5, title: "Week 5 - Normalization", type: "PDF", size: "2.9 MB", date: "2026-06-12" }
      ],
      papers: [
        { id: 1, title: "2025 Semester 2 Final Exam", type: "PDF", size: "1.7 MB", year: 2025 },
        { id: 2, title: "2024 Semester 2 Final Exam", type: "PDF", size: "1.5 MB", year: 2024 },
        { id: 3, title: "2025 Mid-term Exam", type: "PDF", size: "900 KB", year: 2025 }
      ],
      quizzes: [
        { id: 1, title: "Quiz 1 - ER Diagrams", questions: 10, duration: "20 min", status: "completed", score: 9 },
        { id: 2, title: "Quiz 2 - SQL Queries", questions: 15, duration: "30 min", status: "completed", score: 14 },
        { id: 3, title: "Quiz 3 - Normalization", questions: 12, duration: "25 min", status: "available", score: null }
      ],
      progress: {
        completion: 78,
        lecturesWatched: 15,
        totalLectures: 20,
        assignmentsCompleted: 5,
        totalAssignments: 6,
        quizzesCompleted: 2,
        totalQuizzes: 3,
        averageScore: 92
      }
    },

    "ICT22033": {
      code: "ICT 22033",
      title: "Computer Networks",
      year: 2,
      semester: 2,
      credits: 3,
      lecturer: "Dr. N. Ahamed",
      description: "Network architectures, protocols, TCP/IP model, routing, switching, network security, and wireless networks.",
      objectives: [
        "Understand network layered architecture",
        "Learn TCP/IP protocol suite",
        "Configure routing and switching",
        "Implement network security measures"
      ],
      notes: [
        { id: 1, title: "Week 1 - Network Fundamentals", type: "PDF", size: "3.0 MB", date: "2026-05-15" },
        { id: 2, title: "Week 2 - TCP/IP Model", type: "PDF", size: "3.3 MB", date: "2026-05-22" },
        { id: 3, title: "Week 3 - Routing Protocols", type: "PDF", size: "3.6 MB", date: "2026-05-29" },
        { id: 4, title: "Week 4 - Network Security", type: "PDF", size: "3.2 MB", date: "2026-06-05" }
      ],
      papers: [
        { id: 1, title: "2025 Semester 2 Final Exam", type: "PDF", size: "1.4 MB", year: 2025 },
        { id: 2, title: "2024 Semester 2 Final Exam", type: "PDF", size: "1.2 MB", year: 2024 },
        { id: 3, title: "2023 Semester 2 Final Exam", type: "PDF", size: "1.3 MB", year: 2023 }
      ],
      quizzes: [
        { id: 1, title: "Quiz 1 - OSI & TCP/IP", questions: 12, duration: "20 min", status: "completed", score: 11 },
        { id: 2, title: "Quiz 2 - Routing", questions: 10, duration: "15 min", status: "available", score: null }
      ],
      progress: {
        completion: 52,
        lecturesWatched: 10,
        totalLectures: 20,
        assignmentsCompleted: 3,
        totalAssignments: 6,
        quizzesCompleted: 1,
        totalQuizzes: 2,
        averageScore: 92
      }
    },

    // ========== YEAR 3 SEMESTER 1 ==========
    "ICT31041": {
      code: "ICT 31041",
      title: "Operating Systems",
      year: 3,
      semester: 1,
      credits: 4,
      lecturer: "Dr. A. Rahman",
      description: "Operating system concepts including process management, memory management, file systems, and concurrency.",
      objectives: [
        "Understand OS architecture and design",
        "Learn process scheduling algorithms",
        "Implement memory management techniques",
        "Manage file systems and storage"
      ],
      notes: [
        { id: 1, title: "Week 1 - OS Introduction", type: "PDF", size: "3.1 MB", date: "2026-01-15" },
        { id: 2, title: "Week 2 - Process Management", type: "PDF", size: "3.8 MB", date: "2026-01-22" },
        { id: 3, title: "Week 3 - CPU Scheduling", type: "PDF", size: "3.4 MB", date: "2026-01-29" },
        { id: 4, title: "Week 4 - Memory Management", type: "PDF", size: "3.6 MB", date: "2026-02-05" },
        { id: 5, title: "Week 5 - File Systems", type: "PDF", size: "3.2 MB", date: "2026-02-12" }
      ],
      papers: [
        { id: 1, title: "2025 Semester 1 Final Exam", type: "PDF", size: "1.8 MB", year: 2025 },
        { id: 2, title: "2024 Semester 1 Final Exam", type: "PDF", size: "1.6 MB", year: 2024 },
        { id: 3, title: "2023 Semester 1 Final Exam", type: "PDF", size: "1.7 MB", year: 2023 }
      ],
      quizzes: [
        { id: 1, title: "Quiz 1 - Process Scheduling", questions: 15, duration: "25 min", status: "completed", score: 14 },
        { id: 2, title: "Quiz 2 - Memory Management", questions: 12, duration: "20 min", status: "completed", score: 11 },
        { id: 3, title: "Quiz 3 - File Systems", questions: 10, duration: "15 min", status: "available", score: null }
      ],
      progress: {
        completion: 82,
        lecturesWatched: 16,
        totalLectures: 20,
        assignmentsCompleted: 6,
        totalAssignments: 7,
        quizzesCompleted: 2,
        totalQuizzes: 3,
        averageScore: 93
      }
    },

    "ICT31042": {
      code: "ICT 31042",
      title: "Software Engineering",
      year: 3,
      semester: 1,
      credits: 4,
      lecturer: "Mr. K. Prasanth",
      description: "Software development lifecycle, requirements engineering, design patterns, testing, and project management.",
      objectives: [
        "Understand SDLC methodologies",
        "Apply design patterns effectively",
        "Implement testing strategies",
        "Manage software projects using Agile/Scrum"
      ],
      notes: [
        { id: 1, title: "Week 1 - SDLC Models", type: "PDF", size: "2.9 MB", date: "2026-01-15" },
        { id: 2, title: "Week 2 - Requirements Engineering", type: "PDF", size: "3.2 MB", date: "2026-01-22" },
        { id: 3, title: "Week 3 - Design Patterns", type: "PDF", size: "3.7 MB", date: "2026-01-29" },
        { id: 4, title: "Week 4 - Software Testing", type: "PDF", size: "3.3 MB", date: "2026-02-05" },
        { id: 5, title: "Week 5 - Agile Methodologies", type: "PDF", size: "2.8 MB", date: "2026-02-12" }
      ],
      papers: [
        { id: 1, title: "2025 Semester 1 Final Exam", type: "PDF", size: "1.5 MB", year: 2025 },
        { id: 2, title: "2024 Semester 1 Final Exam", type: "PDF", size: "1.4 MB", year: 2024 },
        { id: 3, title: "2023 Semester 1 Final Exam", type: "PDF", size: "1.6 MB", year: 2023 }
      ],
      quizzes: [
        { id: 1, title: "Quiz 1 - SDLC", questions: 10, duration: "20 min", status: "completed", score: 9 },
        { id: 2, title: "Quiz 2 - Design Patterns", questions: 12, duration: "25 min", status: "completed", score: 11 },
        { id: 3, title: "Quiz 3 - Testing", questions: 15, duration: "30 min", status: "available", score: null }
      ],
      progress: {
        completion: 87,
        lecturesWatched: 17,
        totalLectures: 20,
        assignmentsCompleted: 6,
        totalAssignments: 7,
        quizzesCompleted: 2,
        totalQuizzes: 3,
        averageScore: 91
      }
    },

    // ========== YEAR 4 SEMESTER 1 ==========
    "ICT41051": {
      code: "ICT 41051",
      title: "Information Security and Cryptography",
      year: 4,
      semester: 1,
      credits: 4,
      lecturer: "Dr. M. Fazil",
      description: "Cryptographic algorithms, network security, authentication, digital signatures, and security protocols.",
      objectives: [
        "Understand cryptographic principles",
        "Implement encryption algorithms",
        "Design secure network protocols",
        "Apply security best practices"
      ],
      notes: [
        { id: 1, title: "Week 1 - Security Fundamentals", type: "PDF", size: "3.2 MB", date: "2026-01-15" },
        { id: 2, title: "Week 2 - Symmetric Cryptography", type: "PDF", size: "3.5 MB", date: "2026-01-22" },
        { id: 3, title: "Week 3 - Asymmetric Cryptography", type: "PDF", size: "3.8 MB", date: "2026-01-29" },
        { id: 4, title: "Week 4 - Digital Signatures", type: "PDF", size: "3.1 MB", date: "2026-02-05" },
        { id: 5, title: "Week 5 - Network Security", type: "PDF", size: "3.4 MB", date: "2026-02-12" }
      ],
      papers: [
        { id: 1, title: "2025 Semester 1 Final Exam", type: "PDF", size: "1.6 MB", year: 2025 },
        { id: 2, title: "2024 Semester 1 Final Exam", type: "PDF", size: "1.4 MB", year: 2024 }
      ],
      quizzes: [
        { id: 1, title: "Quiz 1 - Encryption Basics", questions: 12, duration: "25 min", status: "completed", score: 11 },
        { id: 2, title: "Quiz 2 - Public Key Crypto", questions: 10, duration: "20 min", status: "available", score: null }
      ],
      progress: {
        completion: 56,
        lecturesWatched: 11,
        totalLectures: 20,
        assignmentsCompleted: 4,
        totalAssignments: 7,
        quizzesCompleted: 1,
        totalQuizzes: 2,
        averageScore: 92
      }
    },

    // ========== YEAR 4 SEMESTER 2 ==========
    "ICT42053": {
      code: "ICT 42053",
      title: "Artificial Intelligence and Machine Learning",
      year: 4,
      semester: 2,
      credits: 4,
      lecturer: "Dr. S. Fathima",
      description: "AI fundamentals, machine learning algorithms, neural networks, deep learning, and AI applications.",
      objectives: [
        "Understand AI and ML concepts",
        "Implement supervised and unsupervised learning",
        "Build neural network models",
        "Apply ML to real-world problems"
      ],
      notes: [
        { id: 1, title: "Week 1 - AI Introduction", type: "PDF", size: "3.4 MB", date: "2026-05-15" },
        { id: 2, title: "Week 2 - Supervised Learning", type: "PDF", size: "3.9 MB", date: "2026-05-22" },
        { id: 3, title: "Week 3 - Neural Networks", type: "PDF", size: "4.2 MB", date: "2026-05-29" },
        { id: 4, title: "Week 4 - Deep Learning", type: "PDF", size: "4.5 MB", date: "2026-06-05" },
        { id: 5, title: "Week 5 - AI Applications", type: "PDF", size: "3.8 MB", date: "2026-06-12" }
      ],
      papers: [
        { id: 1, title: "2025 Semester 2 Final Exam", type: "PDF", size: "1.9 MB", year: 2025 },
        { id: 2, title: "2024 Semester 2 Final Exam", type: "PDF", size: "1.7 MB", year: 2024 }
      ],
      quizzes: [
        { id: 1, title: "Quiz 1 - ML Basics", questions: 15, duration: "30 min", status: "completed", score: 14 },
        { id: 2, title: "Quiz 2 - Neural Networks", questions: 12, duration: "25 min", status: "available", score: null }
      ],
      progress: {
        completion: 62,
        lecturesWatched: 12,
        totalLectures: 20,
        assignmentsCompleted: 4,
        totalAssignments: 6,
        quizzesCompleted: 1,
        totalQuizzes: 2,
        averageScore: 93
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
                  <stop offset="0%" stopColor="#8a02a1" />
                  <stop offset="100%" stopColor="#a91abc" />
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
                      <span className="stat-value">{course.progress.averageScore > 0 ? `${course.progress.averageScore}%` : 'N/A'}</span>
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
              {course.quizzes.length > 0 ? (
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
              ) : (
                <div className="no-content">
                  <p>No quizzes available for this course yet.</p>
                </div>
              )}
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
                          style={{ width: `${course.progress.totalQuizzes > 0 ? (course.progress.quizzesCompleted / course.progress.totalQuizzes) * 100 : 0}%` }}
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
                        <div className="performance-value">{course.progress.averageScore > 0 ? `${course.progress.averageScore}%` : 'N/A'}</div>
                      </div>
                      <div className="performance-item">
                        <div className="performance-label">Grade Status</div>
                        <div className="performance-value grade-a">
                          {course.progress.completion >= 70 ? 'On Track' : 'Keep Going'}
                        </div>
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