import { style } from "@vanilla-extract/css";

export const appContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  minWidth: "100vw",
});

export const container = style({
  position: "relative",
});

export const videoStyle = style({
  display: "block",
});

export const canvasStyle = style({
  display: "block",
  position: "absolute",
  top: "0",
  filter: "blur(40px)",
  zIndex: -1,
});
