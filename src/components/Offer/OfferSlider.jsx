"use client";

import { AnimatePresence, motion, usePresenceData, wrap } from "framer-motion";
import React, { forwardRef, useState } from "react";

/* ========== Icons ========== */
function StructureIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function PapersIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16l4-3 4 3 4-3 4 3V8z" />
      <path d="M14 2v6h6" />
    </svg>
  );
}

function QuizIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M9 10a3 3 0 1 1 5.2 2 2.4 2.4 0 0 0-.7 1.7v.3" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function ProgressIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="M7 14l3-3 3 4 4-8" />
    </svg>
  );
}

/* ========== Data ========== */
const offerItems = [
  {
    id: 1,
    title: "Semester‑wise course structure",
    description:
      "Follow a clear path from first year to final year with organized modules.",
    Icon: StructureIcon,
  },
  {
    id: 2,
    title: "Past papers & model exams",
    description: "Practice with real‑pattern papers and timed model exams.",
    Icon: PapersIcon,
  },
  {
    id: 3,
    title: "Topic‑wise quiz practice",
    description: "Strengthen each topic with focused quizzes and feedback.",
    Icon: QuizIcon,
  },
  {
    id: 4,
    title: "Track grades & progress",
    description: "Monitor marks, completion, and improvement every semester.",
    Icon: ProgressIcon,
  },
];

/* ========== Styles ========== */
const container = {
  display: "flex",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
};

const card = {
  width: 400,
  minHeight: 200,
  borderRadius: "16px",
  padding: "16px 18px",
  color: "#0f172a",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxShadow: "0 14px 35px rgba(15,23,42,0.18)",
};

const button = {
  width: 40,
  height: 40,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  zIndex: 1,
  outlineOffset: 2,
  color: "#0f172a",
  backgroundColor: "#e2e8f0",
};

/* ========== Slide ========== */
const Slide = forwardRef(function Slide(props, ref) {
  const { item, gradient } = props;
  const rawDirection = usePresenceData();
  const direction =
    typeof rawDirection === "number" && rawDirection !== 0 ? rawDirection : 1;

  const { title, description, Icon } = item;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction * 50 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 0.15,
          type: "spring",
          visualDuration: 0.3,
          bounce: 0.4,
        },
      }}
      exit={{ opacity: 0, x: direction * -50 }}
      style={{ ...card, backgroundImage: gradient }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "999px",
            backgroundColor: "rgba(255,255,255,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#0f172a",
          }}
        >
          <Icon />
        </div>
        <h4
          style={{
            fontSize: "0.95rem",
            margin: 0,
            fontWeight: 600,
          }}
        >
          {title}
        </h4>
      </div>
      <p
        style={{
          fontSize: 13,
          lineHeight: 1.5,
          color: "#0f172a",
          opacity: 0.9,
          margin: 0,
        }}
      >
        {description}
      </p>
    </motion.div>
  );
});

/* ========== Main slider ========== */
export function OfferSlider() {
  const ids = offerItems.map((i) => i.id);
  const [selectedItem, setSelectedItem] = useState(ids[0]);
  const [direction, setDirection] = useState(1);

  function setSlide(newDirection) {
    const currentIndex = ids.indexOf(selectedItem);
    const nextIndex = wrap(0, ids.length, currentIndex + newDirection);
    setSelectedItem(ids[nextIndex]);
    setDirection(newDirection);
  }

  const active = offerItems.find((i) => i.id === selectedItem);
  const gradient = `var(--offer-gradient-${selectedItem})`; // make sure CSS matches this name

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
      <div style={container}>
        <motion.button
          initial={false}
          animate={{ backgroundColor: "#e2e8f0" }}
          aria-label="Previous"
          style={button}
          onClick={() => setSlide(-1)}
          whileFocus={{ outline: `2px solid ${gradient}` }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </motion.button>

        <AnimatePresence custom={direction} initial={false} mode="popLayout">
          {active && <Slide key={active.id} item={active} gradient={gradient} />}
        </AnimatePresence>

        <motion.button
          initial={false}
          animate={{ backgroundColor: "#e2e8f0" }}
          aria-label="Next"
          style={button}
          onClick={() => setSlide(1)}
          whileFocus={{ outline: `2px solid ${gradient}` }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 6 6 6-6 6" />
          </svg>
        </motion.button>
      </div>
    </div>
  );
}
