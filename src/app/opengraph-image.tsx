import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Dirga Halim Susilo | Data Analyst & Business Intelligence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #0d0d12 0%, #1a1a22 50%, #0d0d12 100%)",
        fontFamily: "Inter, sans-serif",
        position: "relative",
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          background: "#c53030",
        }}
      />

      {/* Left accent */}
      <div
        style={{
          position: "absolute",
          left: 80,
          top: "50%",
          transform: "translateY(-50%)",
          width: 2,
          height: 120,
          background: "rgba(197, 48, 48, 0.3)",
        }}
      />

      {/* Dot pattern bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #f0ece4 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          zIndex: 10,
        }}
      >
        {/* Label */}
        <p
          style={{
            fontSize: 20,
            color: "#c53030",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          Medan, Indonesia
        </p>

        {/* Name */}
        <h1
          style={{
            fontSize: 80,
            fontWeight: 800,
            color: "#f0ece4",
            margin: 0,
            letterSpacing: "-0.02em",
            lineHeight: 1,
          }}
        >
          Dirga Halim Susilo
        </h1>

        {/* Title */}
        <p
          style={{
            fontSize: 28,
            color: "#8c8c7e",
            margin: 0,
            fontWeight: 400,
          }}
        >
          Data Analyst & Business Intelligence
        </p>
      </div>

      {/* Stats row */}
      <div
        style={{
          display: "flex",
          gap: 60,
          marginTop: 40,
          zIndex: 10,
        }}
      >
        {[
          { value: "5+", label: "Analytics Projects" },
          { value: "3.77", label: "GPA" },
          { value: "6", label: "Certifications" },
          { value: "3", label: "Data Roles" },
        ].map((stat) => (
          <div
            key={stat.label}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span style={{ fontSize: 40, fontWeight: 800, color: "#c9a54b" }}>
              {stat.value}
            </span>
            <span
              style={{
                fontSize: 14,
                color: "rgba(140, 140, 126, 0.6)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          display: "flex",
          alignItems: "center",
          gap: 8,
          zIndex: 10,
        }}
      >
        <span style={{ fontSize: 18, fontWeight: 700, color: "#f0ece4" }}>
          DIRGA<span style={{ color: "#c53030" }}>.</span>
        </span>
        <span style={{ fontSize: 14, color: "rgba(140, 140, 126, 0.4)" }}>
          dirgahalimsusilo.site
        </span>
      </div>
    </div>,
    { ...size },
  );
}
