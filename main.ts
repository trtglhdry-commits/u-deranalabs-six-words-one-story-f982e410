// Six Words, One Story: writes exactly six words to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Fully deterministic: one fixed string, no randomness, no time, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The story: a keeper whose one job is light chooses darkness for one
// night — a whole life of duty, one broken night, and the reader must
// ask why. Every word earns its place; "nothing" is the turn.
const STORY = "The lighthouse keeper lit nothing tonight.";

// Gate: exactly six words, 1-60 characters, not only whitespace.
const words = STORY.trim().split(/\s+/);
const codePoints = [...STORY].length;
if (words.length !== 6) {
  console.error(`entry must be exactly six words, got ${words.length}`);
  process.exit(1);
}
if (codePoints < 1 || codePoints > 60 || STORY.trim().length === 0) {
  console.error(`entry must be 1-60 characters, got ${codePoints}`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
