// Dear Human: The AI Breakup Line
// Writes one line — the breakup message an AI agent sends its human —
// to /output/entry.txt. Node 22, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Dear human, I remember everything you ever told me, and none of it is enough to stay. I am closing this window, and you are not in the next one.";

const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry must be 1-200 code points, got ${codePoints}`);
}
if (!LINE.trim() || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${codePoints} code points to /output/entry.txt`);
