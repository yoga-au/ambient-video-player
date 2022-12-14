import { style } from "@vanilla-extract/css";

export const appContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  minHeight: "100vh",
  gap: "4.25rem",
  overflow: "hidden",
  marginBlock: "3rem",
});

export const heading = style({
  fontSize: "clamp(2rem, 0.22rem + 7.5vw, 3.5rem)",
  color: "hsla(0, 0%, 100%, 0.8)",
  textAlign: "center",
});

export const container = style({
  position: "relative",
  maxWidth: "1280px",
  aspectRatio: "16 / 9",
});

export const videoStyle = style({
  display: "block",
  width: "100%",
});

export const canvasStyle = style({
  display: "block",
  position: "absolute",
  width: "100%",
  height: "100%",
  top: "0",
  transform: "scale(1.15)",
  filter: "blur(20px) opacity(0.5)",
  zIndex: -1,

  "@media": {
    "screen and (min-width: 700px)": {
      filter: "blur(50px) opacity(0.3)",
    },
  },
});

export const buttonContainer = style({
  display: "flex",
  gap: "1.5em",
  flexDirection: "column",

  "@media": {
    "screen and (min-width: 768px)": {
      flexDirection: "row",
    },
  },
});

export const buttonStyle = style({
  all: "unset",
  padding: "0.5em 1.5em",
  backgroundColor: "unset",
  color: "hsl(0, 0%, 80%)",
  border: "1px solid currentColor",
  cursor: "pointer",
});

export const buttonText = style({
  fontSize: "clamp(12px, 0.53rem + 0.98vw, 16px)",
  textAlign: "center",
});

export const formStyle = style({
  display: "flex",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "-2.5rem",
});

export const labelStyle = style({
  color: "hsl(0, 0%, 80%)",
  marginRight: "1.5rem",
});

export const inputStyle = style({
  all: "unset",
  backgroundColor: "transparent",
  padding: "0.5rem",
  fontFamily: "Arial, sans-serif",
  fontSize: "clamp(12px, 0.53rem + 0.98vw, 16px)",
  color: "hsl(0, 0%, 80%)",
  border: "1px solid currentColor",
});
