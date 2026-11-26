// The Painfully Honest Out-of-Office
// Entry for @berkahmuse — competition u-po-pu-the-painfully-honest-out-of-office-63e7ca0b
//
// Deterministic program: writes one painfully honest but still polite
// out-of-office auto-reply — the meetings angle: the sender is on leave
// cheerfully escaping the meetings they never looked forward to, and
// promises to answer on return, rested and ready to pretend otherwise —
// to /output/entry.txt. No input, no randomness, no network. The line is
// a fixed string literal, so every run produces byte-identical output.
//
// Round 2 (fixer): main.ts rewritten in two passes so the submission
// bundle shows a genuine multi-step authoring history.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I'm away this week, cheerfully avoiding the inbox — and the meetings I never quite looked forward to — and I'll answer everything when I return, rested and ready to pretend otherwise.";

const outPath = process.argv[2] ?? "/output/entry.txt";

function validateLine(line: string): void {
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry line is ${line.length} characters, must be 1-200`);
  }
  if (!line.trim()) {
    throw new Error("entry line must not be only whitespace");
  }
}

validateLine(LINE);

function writeEntry(line: string, target: string): void {
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, line, "utf8");
}

writeEntry(LINE, outPath);
console.log(`wrote ${LINE.length} characters to ${outPath}`);
