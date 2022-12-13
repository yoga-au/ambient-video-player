import { style } from "@vanilla-extract/css";

const convert = "23.4375rem";

export const appContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  minHeight: "100vh",
  gap: "4.25rem",
});

export const heading = style({
  fontSize: "clamp(2rem, 0.22rem + 7.5vw, 3.5rem)",
  color: "hsla(0, 0%, 100%, 0.12)",
  letterSpacing: "-3px",
  marginTop: "4rem",
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
  color: "hsl(0, 0%, 35%)",
  border: "1px solid currentColor",
  cursor: "pointer",
});
