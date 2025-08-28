import React from "react";

const TEXT = "Welcome to the stream! Enjoy your stay! ";

// Vitesse de base : 130s pour 27 caractères (voir StartingSoon)
const BASE_DURATION = 130; // secondes
const BASE_LENGTH = 27;
const duration = (TEXT.length / BASE_LENGTH) * BASE_DURATION;

const Welcome: React.FC = () => {
  return (
    <div
      style={{
        width: "100vw",
        overflow: "hidden",
        whiteSpace: "nowrap",
        padding: 0,
        margin: 0,
      }}
    >
      <div
        style={{
          display: "inline-block",
          whiteSpace: "nowrap",
          animation: `marquee ${duration}s linear infinite`,
        }}
      >
        <span
          style={{
            fontFamily: "Teletactile, sans-serif",
            fontSize: 35,
            color: "white",
            textShadow:
              "black 2px 0px 0px, black 1.75517px 0.958851px 0px, black 1.0806px 1.68294px 0px, black 0.141474px 1.99499px 0px, black -0.832294px 1.81859px 0px, black -1.60229px 1.19694px 0px, black -1.97998px 0.28224px 0px, black -1.87291px -0.701566px 0px, black -1.30729px -1.5136px 0px, black -0.421592px -1.95506px 0px, black 0.567324px -1.91785px 0px, black 1.41734px -1.41108px 0px, black 1.92034px -0.558831px 0px",
            fontWeight: "bold",
            letterSpacing: "2px",
          }}
        >
          {Array(20).fill(TEXT).join("")}
        </span>
      </div>
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Welcome;
