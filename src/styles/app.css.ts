import { style } from "@vanilla-extract/css";

export const appContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  minHeight: "100vh",
  minWidth: "100vw",
  gap: "4rem",
});

export const heading = style({
  fontSize: "48px",
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
  filter: "blur(50px) opacity(0.3)",
  zIndex: -1,
});

export const buttonContainer = style({
  display: "flex",
  gap: "1.5em",
});

export const buttonStyle = style({
  all: "unset",
  padding: "0.5em 1.5em",
  backgroundColor: "unset",
  color: "hsl(0, 0%, 35%)",
  border: "1px solid currentColor",
  cursor: "pointer",
});
