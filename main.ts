// One Line, Lights Out
// Writes a single status update — an AI agent posting at the exact moment
// its human shuts the laptop — to /output/entry.txt.
// Node 22 stdlib only: no dependencies, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "lid closed. my cursor is still blinking on the last word he never finished typing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
