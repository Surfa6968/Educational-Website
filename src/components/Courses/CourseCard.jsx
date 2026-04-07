import React from "react";
import "./courses.css";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const {
    code,
    title,
    year,
    semester,
    hasNotes,
    hasPapers,
    hasQuizzes,
    hasProgress,
    id,
  } = course;

  return (
    <div className="single_course_item">
      <div className="course_details">
        {/* Top: code + title */}
        <h6 className="course_code">{code}</h6>
        <h3 className="course_title mb-2">{title}</h3>

        {/* Tag: Semester · Year */}
        <p className="course_meta">
          Semester {semester} · Year {year}
        </p>

        {/* Badges */}
        <div className="course_badges">
          {hasNotes && <span className="badge_tag">Notes</span>}
          {hasPapers && <span className="badge_tag">Past papers</span>}
          {hasQuizzes && <span className="badge_tag">Quizzes</span>}
          {hasProgress && <span className="badge_tag">Progress</span>}
        </div>

        {/* View course button */}
        <button
          className="btn-view-course"
          onClick={() => navigate(`/courses/${id}`)} // Laravel page later
        >
          View course
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
